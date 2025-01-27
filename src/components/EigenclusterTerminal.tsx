"use client";

import React, { useState, useEffect } from 'react';
import { AnalysisChart } from './AnalysisChart';
import { ParameterConfig } from './ParameterConfig';
import { AnalysisResponse } from '../types/api';
import ReactMarkdown from 'react-markdown';

const ASCII_LOGO = `


[ CULTURAL EIGENCLUSTERS ]`;

interface AnalysisParams {
  startYear: number;
  endYear: number;
  clusterStart: number;
  clusterEnd: number;
  periodicity: number;
  context?: string;
  model: 'deepseek' | 'deepseek_chat' | 'gpt4-mini';
}

interface TimeSeriesData {
  year: number;
  clusters: {
    clusterName: string;
    percentageContribution: number;
    description: string;
    manifestations: string[];
  }[];
}

interface ChatContext {
  year: number;
  clusterName: string;
  description: string;
  manifestations: string[];
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  context?: ChatContext | null;
}

// Add a type for different sections of output
type OutputSection = {
  type: 'reasoning' | 'content';
  text: string;
  timestamp: number;
};

interface TopCluster {
  rank: number;
  name: string;
  description: string;
  total_variance_explained: number;
}

interface Metadata {
  period: string;
  interval: string;
  cluster_range: string;
  measurement: string;
  top_20_clusters: string[];
}

interface ClusterData {
  name: string;
  description: string;
  trajectory: Record<string, {
    variance_explained: number;
    description: string;
    key_manifestations: string[];
  }>;
}

interface TimeSeriesDataPoint {
  year: number;
  clusters: {
    clusterName: string;
    percentageContribution: number;
    description: string;
    manifestations: string[];
  }[];
}

interface AnalysisResult {
  content: string;
  timeSeriesData: TimeSeriesDataPoint[];
  metadata: {
    period: string;
    interval: string;
    cluster_range: string;
    measurement: string;
    top_50_clusters: string[];
  };
  clusters: Record<string, ClusterData>;
}

// Add the about content as a constant
const ABOUT_CONTENT = `
# Cultural Eigenclusters Analysis Tool

This tool analyzes cultural patterns across historical periods using eigendecomposition techniques. 
It identifies dominant cultural "eigenclusters" - recurring patterns and themes that explain the 
most variance in cultural expressions across time.

## How it Works

1. Select a time period and number of clusters to analyze
2. Add a context prompt to conditiom the analysis on additional information. The unconditional response is poorly defined.
3. The system will identify key cultural patterns and their relative importance
4. View results as interactive charts or detailed JSON data
5. Avoid too many clusters, or too many periods, as the model may run out of tokens in its output.

## Interpretation

- Each eigencluster represents a distinct cultural pattern or theme
- The percentage shows how much of the cultural variance that cluster explains
- Trends (↗↘→) indicate if the pattern is growing, declining, or stable
- Click on chart points to explore specific time periods in detail

`;

const EigenclusterTerminal: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [streamingOutput, setStreamingOutput] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState<'idle' | 'connecting' | 'generating' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState<'chart' | 'json' | 'clusters' | 'about' | 'prompt'>('chart');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [activeContext, setActiveContext] = useState<ChatContext | null>(null);
  const [jsonEditorContent, setJsonEditorContent] = useState<string>('');
  const [editorError, setEditorError] = useState<string | null>(null);
  const [rawOutput, setRawOutput] = useState<string>('');
  const [outputSections, setOutputSections] = useState<OutputSection[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [streamingClusters, setStreamingClusters] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentModel, setCurrentModel] = useState<'deepseek' | 'deepseek_chat' | 'gpt4-mini'>('deepseek');
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  const [isReasoning, setIsReasoning] = useState(false);
  const [promptContent, setPromptContent] = useState<string>('');

  useEffect(() => {
    if (!isBooted) {
      const bootMessages = [
        "EIGENCLUSTER BIOS -- V42.42",
        "CULTURAL ANALYSIS SYSTEM READY"
      ];

      let index = 0;
      const interval = setInterval(() => {
        if (index < bootMessages.length) {
          setBootSequence(prev => [...prev, bootMessages[index]]);
          index++;
        } else {
          setIsBooted(true);
          clearInterval(interval);
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isBooted]);

  useEffect(() => {
    const savedState = localStorage.getItem('analysisState');
    if (savedState) {
      try {
        const { streamingOutput, result } = JSON.parse(savedState);
        setStreamingOutput(streamingOutput);
        setResult(result);
      } catch (e) {
        console.warn('Failed to load saved state:', e);
        localStorage.removeItem('analysisState');
      }
    }
  }, []); 

  useEffect(() => {
    if (streamingOutput || result) {
      localStorage.setItem('analysisState', JSON.stringify({
        streamingOutput,
        result
      }));
    }
  }, [streamingOutput, result]);

  useEffect(() => {
    if (result) {
      setJsonEditorContent(JSON.stringify(result, null, 2));
    }
  }, [result]);

  const formatClusterName = (cluster: string): { name: string; trend: string; percentage?: string } => {
    const trendMatch = cluster.match(/\[([\u2191\u2192\u2193])\]/);
    const percentageMatch = cluster.match(/\(([\d.]+)%\)/);
    
    const trend = trendMatch ? trendMatch[1] : '';
    const percentage = percentageMatch ? percentageMatch[1] : undefined;
    
    const nameOnly = cluster
      .replace(/\s*\[([\u2191\u2192\u2193])\]/, '')
      .replace(/\s*\([\d.]+%\)/, '');
    const withoutNumber = nameOnly.replace(/^\d+_/, '');
    const formatted = withoutNumber
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return { name: formatted, trend, percentage };
  };

  const transformDataForChart = (data: any): TimeSeriesDataPoint[] => {
    if (!data?.clusters) {
      console.log('No clusters data found');
      return [];
    }

    try {
      const years = new Set<number>();
      Object.values(data.clusters).forEach((cluster: unknown) => {
        const typedCluster = cluster as ClusterData;
        Object.keys(typedCluster.trajectory).forEach(year => {
          years.add(parseInt(year));
        });
      });

      const sortedYears = Array.from(years).sort((a, b) => a - b);

      const transformedData = sortedYears.map(year => ({
        year,
        clusters: Object.entries(data.clusters)
          .map(([key, cluster]: [string, unknown]) => {
            const typedCluster = cluster as ClusterData;
            const yearStr = year.toString();
            const variance = typedCluster.trajectory[yearStr]?.variance_explained;
            
            if (typeof variance !== 'number' || isNaN(variance)) {
              console.warn(`Invalid variance value for ${typedCluster.name} in year ${year}:`, variance);
              return null;
            }

            return {
              clusterName: key,
              percentageContribution: variance,
              description: typedCluster.trajectory[yearStr].description,
              manifestations: typedCluster.trajectory[yearStr].key_manifestations
            };
          })
          .filter((item): item is NonNullable<typeof item> => item !== null)
      }));

      console.log('Transformed chart data:', transformedData);
      return transformedData;

    } catch (error) {
      console.error('Error transforming data:', error);
      return [];
    }
  };

  const handleStop = () => {
    if (abortController) {
      abortController.abort();
      setIsAnalyzing(false);
      setIsThinking(false);
      setApiStatus('idle');
      setBootSequence(prev => [...prev, "ANALYSIS STOPPED BY USER"]);
    }
  };

  const handleAnalysis = async (params: AnalysisParams) => {
    const controller = new AbortController();
    setAbortController(controller);
    setIsAnalyzing(true);
    setCurrentModel(params.model);

    if (params.model === 'deepseek' || params.model === 'deepseek_chat') {
      setIsThinking(true);
      setIsReasoning(true);
    }

    try {
      setResult(null);
      setStreamingOutput('');
      setJsonEditorContent('');
      setApiStatus('connecting');
      setIsThinking(false);
      setBootSequence([]);
      setStreamingClusters([]); 
      
      const prompt = `Analyze cultural eigenclusters ${params.clusterStart} through ${params.clusterEnd} 
        for the period ${params.startYear}-${params.endYear}, 
        sampling every ${params.periodicity} years.
        ${params.context || ''}`;

      setBootSequence([
        "",
        " *** CURRENT PROMPT *** ",
        prompt,
        "===================",
        "This is an experimental tool. Bugs are expected.",
        "If you request too much, it will run out of tokens and crash, so don't do that",
        "",
        `[${new Date().toISOString()}] Initializing ${params.model.toUpperCase()} analysis...`,
      ]);
      
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          model: params.model
        }),
        signal: controller.signal
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      setApiStatus('generating');
      setBootSequence(prev => [...prev, 'CONNECTION ESTABLISHED']);
      setIsThinking(true);

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      let accumulatedJson = '';
      let foundMetadata = false;
      let isInJsonBlock = false;

      const parseDeepSeekContent = (content: string) => {
        const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch) {
          return jsonMatch[1].trim();
        }
        return content;
      };

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        console.log('Received chunk:', chunk);
        
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(5).trim();
          if (data === '[DONE]') continue;
          
          try {
            const parsed = JSON.parse(data);
            
            if (parsed.content && isReasoning) {
              setIsReasoning(false);
            }

            if (parsed.content) {
              if ((params.model === 'deepseek' || params.model === 'deepseek_chat') && 
                  parsed.content.includes('```json')) {
                setIsThinking(false);
              }

              console.log('Parsed content:', parsed.content);
              
              let processedContent = parsed.content;
              if (params.model === 'deepseek' || params.model === 'deepseek_chat') {
                if (processedContent.includes('```json')) {
                  isInJsonBlock = true;
                }
                if (processedContent.includes('```') && isInJsonBlock) {
                  isInJsonBlock = false;
                  processedContent = parseDeepSeekContent(accumulatedJson + processedContent);
                  accumulatedJson = processedContent;
                } else {
                  processedContent = parseDeepSeekContent(processedContent);
                }
              }
              
              setStreamingOutput(prev => prev + parsed.content);
              setJsonEditorContent(prev => prev + parsed.content);
              
              if (!isInJsonBlock) {
                accumulatedJson += processedContent;
              }

              if (!foundMetadata) {
                try {
                  const cleanedJson = parseDeepSeekContent(accumulatedJson);
                  const metadataMatch = cleanedJson.match(/"metadata":\s*({[^}]*})/);
                  if (metadataMatch) {
                    const metadataJson = JSON.parse(`{"metadata":${metadataMatch[1]}}`);
                    if (metadataJson.metadata?.top_20_clusters) {
                      console.log('Found clusters in metadata:', metadataJson.metadata.top_20_clusters);
                      setStreamingClusters(metadataJson.metadata.top_20_clusters);
                      foundMetadata = true;
                    }
                  }
                } catch (e) {
                  console.debug('Incomplete metadata JSON, continuing...');
                }
              }
              
              try {
                const contentJson = JSON.parse(parseDeepSeekContent(accumulatedJson));
                if (contentJson.clusters) {
                  const chartData = transformDataForChart(contentJson);
                  if (chartData.length > 0) {
                    setResult(prev => ({
                      content: contentJson.content,
                      timeSeriesData: contentJson.timeSeriesData,
                      metadata: contentJson.metadata,
                      clusters: contentJson.clusters || {}
                    }));
                  }
                }
              } catch (e) {
                // Ignore JSON parsing errors for partial content
              }
            }
          } catch (e) {
            console.error('Error processing chunk:', e);
          }
        }
      }

      setApiStatus('idle');
      setIsThinking(false);
      setBootSequence(prev => [...prev, "ANALYSIS COMPLETE"]);

    } catch (error) {
      handleError(error);
    } finally {
      setIsReasoning(false);
      setIsAnalyzing(false);
      setAbortController(null);
    }
  };

  const handleChartPointSelect = (pointData: {
    year: number;
    clusterName: string;
    description: string;
    manifestations: string[];
  }) => {
    setActiveContext(pointData);
    setChatMessages([{
      role: 'assistant',
      content: `Now discussing ${pointData.clusterName} in ${pointData.year}. What would you like to know about this cultural eigencluster?`,
      context: pointData
    }]);
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const newMessage: ChatMessage = {
      role: 'user',
      content: currentInput,
      context: activeContext || undefined
    };

    setChatMessages(prev => [...prev, newMessage]);
    setCurrentInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...chatMessages, newMessage],
          context: activeContext
        })
      });

      const data = await response.json();
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response,
        context: activeContext
      }]);
    } catch (error) {
      console.error('Chat error:', error);
    }
  };

  const handleEditorChange = (value: string) => {
    setJsonEditorContent(value);
    try {
      const parsedJson = JSON.parse(value);
      const newChartData = transformDataForChart(parsedJson);
      
      setResult(prev => ({
        ...prev,
        content: value,
        timeSeriesData: newChartData,
        metadata: parsedJson.metadata
      }));
      
      setEditorError(null);
    } catch (e) {
      setEditorError((e as Error).message);
    }
  };

  useEffect(() => {
    fetch('/api/analyze/prompt.txt')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load prompt.txt: ${response.status} ${response.statusText}`);
        }
        return response.text();
      })
      .then(content => {
        setPromptContent(content);
      })
      .catch(error => {
        console.error('Error loading prompt:', error);
        setPromptContent('Error loading prompt content. Please check that the file exists in public/api/analyze/prompt.txt');
      });
  }, []);

  const handleError = (err: unknown) => {
    const error = err as Error;
    if (error.name === 'AbortError') {
      setStreamingOutput(prev => `${prev}\n\nOperation cancelled.`);
      return;
    }
    console.error('Analysis error:', error);
    setStreamingOutput(prev => 
      `${prev}\n\nDIAGNOSTIC: ${error.message}`
    );
  };

  return (
    <div className="min-h-screen bg-black p-8 font-mono text-white">
      <pre className="mb-8">{ASCII_LOGO}</pre>
      
      <div className="mb-8">
        {bootSequence.map((message, i) => (
          <div key={i} className="mb-1">{message}</div>
        ))}
      </div>

      {isBooted && (
        <div className="space-y-8">
          <ParameterConfig 
            onSubmit={handleAnalysis}
            isAnalyzing={isAnalyzing}
            onStop={handleStop}
          />
          
          {isReasoning && currentModel === 'deepseek' && (
            <div className="text-green-500 animate-pulse">
              Chain of Thought Reasoning... please wait
            </div>
          )}
          
          {(apiStatus !== 'idle' || result || streamingOutput) && (
            <div className="border border-white">
              <div className="flex border-b border-white/20">
                <button 
                  className={`px-4 py-2 ${activeTab === 'chart' ? 'bg-white/10' : ''}`}
                  onClick={() => setActiveTab('chart')}
                >
                  CHART
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === 'json' ? 'bg-white/10' : ''}`}
                  onClick={() => setActiveTab('json')}
                >
                  JSON
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === 'clusters' ? 'bg-white/10' : ''}`}
                  onClick={() => setActiveTab('clusters')}
                >
                  CLUSTERS
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === 'about' ? 'bg-white/10' : ''}`}
                  onClick={() => setActiveTab('about')}
                >
                  HOW TO USE
                </button>
                <button 
                  className={`px-4 py-2 ${activeTab === 'prompt' ? 'bg-white/10' : ''}`}
                  onClick={() => setActiveTab('prompt')}
                >
                  PROMPT
                </button>
              </div>

              {activeTab === 'chart' && result?.timeSeriesData && (
                <div className="p-4">
                  <AnalysisChart 
                    data={result.timeSeriesData}
                    onPointSelect={handleChartPointSelect}
                  />
                </div>
              )}

              {activeTab === 'json' && (
                <div className="relative">
                  {isThinking && currentModel === 'deepseek' && (
                    <div className="absolute top-0 left-0 right-0 bg-green-900/80 text-white p-2 font-mono text-sm animate-pulse">
                      Chain of Thought thinking...
                    </div>
                  )}
                  <textarea
                    value={jsonEditorContent}
                    onChange={(e) => handleEditorChange(e.target.value)}
                    className={`w-full h-[600px] bg-black text-white font-mono p-4 border-0 focus:outline-none resize-none ${
                      isThinking && currentModel === 'deepseek' ? 'mt-10' : ''
                    }`}
                    spellCheck={false}
                  />
                  {editorError && (
                    <div className="absolute bottom-0 left-0 right-0 bg-red-900/80 text-white p-2 font-mono text-sm">
                      {editorError}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'clusters' && (
                <div className="p-4">
                  <h2 className="text-xl mb-4">Top 20 Cultural Eigenclusters</h2>
                  <div className="space-y-2">
                    {(streamingClusters.length > 0 ? streamingClusters : result?.metadata?.top_20_clusters || [])
                      .map((cluster: string, index: number) => {
                        const { name, trend, percentage } = formatClusterName(cluster);
                        return (
                          <div 
                            key={index}
                            className="flex gap-2 items-center"
                          >
                            <span className="opacity-50 w-8">{index + 1}.</span>
                            <span>{name}</span>
                            {trend && (
                              <span className={`ml-2 ${
                                trend === '↗' ? 'text-green-500' :
                                trend === '↘' ? 'text-red-500' :
                                'text-blue-500'
                              }`}>
                                {trend}
                              </span>
                            )}
                            {percentage && (
                              <span className="ml-2 opacity-50">
                                ({percentage}%)
                              </span>
                            )}
                          </div>
                        );
                      })}
                  </div>
                  {streamingClusters.length === 0 && !result?.metadata?.top_20_clusters && (
                    <div className="text-white/50 animate-pulse">
                      Waiting for clusters...
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'about' && (
                <div className="p-4">
                  <div className="prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown>{ABOUT_CONTENT}</ReactMarkdown>
                  </div>
                </div>
              )}

              {activeTab === 'prompt' && (
                <div className="p-4">
                  <div className="prose prose-invert max-w-none">
                    <div className="space-y-2 text-sm leading-relaxed">
                      {promptContent.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-gray-300 font-light">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeContext && (
            <div className="border border-white p-4">
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2">
                  {activeContext.clusterName} - {activeContext.year}
                </h3>
                <p className="mb-2">{activeContext.description}</p>
                <ul className="list-disc list-inside">
                  {activeContext.manifestations.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4 mb-4">
                {chatMessages.map((message, i) => (
                  <div 
                    key={i}
                    className={`p-2 ${
                      message.role === 'assistant' ? 'bg-white/10' : ''
                    }`}
                  >
                    <strong>{message.role === 'assistant' ? 'AI: ' : 'You: '}</strong>
                    {message.content}
                  </div>
                ))}
              </div>

              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  className="flex-1 bg-white/10 p-2 border border-white/20"
                  placeholder="Ask about this cluster..."
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20"
                >
                  Send
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EigenclusterTerminal;