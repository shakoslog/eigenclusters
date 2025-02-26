"use client";

import React, { useState, useEffect, useRef } from 'react';
import { AnalysisChart } from './AnalysisChart';
import { ParameterConfig } from './ParameterConfig';
import { AnalysisResponse } from '../types/api';
import ReactMarkdown from 'react-markdown';
import { PresetConfig } from '@/lib/presets';
import Editor from "@monaco-editor/react";
import { saveAs } from 'file-saver';

const ASCII_LOGO = `


[ CULTURAL EIGENCLUSTERS ]`;

// Update the ModelType to include all supported models
export type ModelType = 'claude' | 'deepseek' | 'deepseek_chat' | 'gpt4o' | 'gpt4o-mini' | 'o1-mini';

interface AnalysisParams {
  startYear: number;
  endYear: number;
  clusterStart: number;
  clusterEnd: number;
  periodicity: number;
  context?: string;
  model: ModelType;  // Use the shared ModelType
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
    top_20_clusters: string[];
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

interface ParameterConfigProps {
  onSubmit: (params: AnalysisParams) => void;
  isAnalyzing: boolean;
  onStop: () => void;
  onPresetSelect: (preset: PresetConfig | null) => void;  // Update to allow null
  onParameterChange?: (params: AnalysisParams) => void;
}

// Update the type definition
type ApiStatus = 'idle' | 'connecting' | 'generating' | 'requesting' | 'error';

// Add type definition for saved state
interface SavedState {
  version: string;
  timestamp: string;
  analysisParams: {
    startYear: string;
    endYear: string;
    clusterStart: number;
    clusterEnd: number;
    periodicity: number;
    context?: string;
    model: ModelType;
  };
  result: AnalysisResult | null;
  activeTab: string;
  selectedPoint: {
    year: number;
    clusterName: string;
    description: string;
    manifestations: string[];
  } | null;
  chatMessages: ChatMessage[];
}

const EigenclusterTerminal: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [streamingOutput, setStreamingOutput] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState<ApiStatus>('idle');
  const [activeTab, setActiveTab] = useState<'chart' | 'data' | 'clusters' | 'about' | 'prompt'>('chart');
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
  const [currentModel, setCurrentModel] = useState<ModelType>('deepseek');
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  const [isReasoning, setIsReasoning] = useState(false);
  const [promptContent, setPromptContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [snapshotJson, setSnapshotJson] = useState<string>('');
  const [showSnapshotModal, setShowSnapshotModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Add a state variable to store analysis parameters
  const [analysisParams, setAnalysisParams] = useState<AnalysisParams>({
    startYear: '2000',
    endYear: '2025',
    clusterStart: 1,
    clusterEnd: 3,
    periodicity: 5,
    model: 'deepseek_chat' as ModelType
  });

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
    if (streamingOutput || result) {
      localStorage.setItem('analysisState', JSON.stringify({
        streamingOutput,
        result
      }));
    }
  }, [streamingOutput, result]);

  useEffect(() => {
    if (result) {
      console.log('Raw result:', result);
      
      const parsedContent = typeof result.content === 'string' 
        ? JSON.parse(result.content)
        : result;

      console.log('Parsed content:', parsedContent);
      
      const transformedData = {
        timeSeriesData: [],
        clusters: {},
      };

      console.log('Transformed data:', transformedData);
      
      setJsonEditorContent(JSON.stringify(parsedContent, null, 2));
    }
  }, [result]);

  useEffect(() => {
    if (streamingOutput) {
      try {
        const cleanedJson = streamingOutput.replace(/```json\s*([\s\S]*?)\s*```/g, '$1').trim();
        const parsedJson = JSON.parse(cleanedJson);
        
        // Keep the previous result if the new one doesn't have all data
        setResult(prev => {
          const newResult = {
            content: cleanedJson,
            timeSeriesData: parsedJson.clusters ? transformDataForChart(parsedJson) : prev?.timeSeriesData || [],
            metadata: {
              ...parsedJson.metadata,
              top_20_clusters: parsedJson.clusters1_50?.slice(0, 20).map((c: any) => 
                `${c.rank}_${c.description.toLowerCase().replace(/\s+/g, '_')}`
              ) || prev?.metadata?.top_20_clusters || []
            },
            clusters: parsedJson.clusters || prev?.clusters || {}
          };

          // Only update if we have valid data
          return parsedJson.clusters ? newResult : prev;
        });

      } catch (e) {
        // Continue accumulating data without clearing previous result
      }
    }
  }, [streamingOutput]);

  const formatClusterName = (cluster: string): { name: string; trend: string; percentage?: string } => {
    const trendMatch = cluster.match(/\[([\u2191\u2192\u2193])\]/);
    const percentageMatch = cluster.match(/\(([\d.]+)%\)/);
    
    const trend = trendMatch ? trendMatch[1] : '';
    const percentage = percentageMatch ? percentageMatch[1] : undefined;
    
    let nameOnly = cluster
      .replace(/\s*\[([\u2191\u2192\u2193])\]/, '')
      .replace(/\s*\([\d.]+%\)/, '');
      
    // Handle numeric prefix if present
    nameOnly = nameOnly.replace(/^\d+_/, '');
    
    const formatted = nameOnly
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return { name: formatted, trend, percentage };
  };

  const transformDataForChart = (data: any) => {
    if (!data?.clusters) {
      setAnalysisError("Received JSON is missing 'clusters' data structure");
      return [];
    }

    try {
      // Get the first cluster to determine years
      const firstCluster = Object.values(data.clusters)[0] as any;
      if (!firstCluster?.trajectory) {
        setAnalysisError("Clusters found but missing trajectory data");
        return [];
      }

      const years = Object.keys(firstCluster.trajectory);
      if (years.length === 0) {
        setAnalysisError("No time periods found in trajectory data");
        return [];
      }

      return years.map(year => {
        const yearClusters = Object.entries(data.clusters).map(([clusterName, clusterData]: [string, any]) => {
          const yearData = clusterData.trajectory[year];
          if (!yearData || !yearData.variance_explained) {
            throw new Error(`Missing required data for cluster "${clusterName}" in year ${year}`);
          }
          
          return {
            clusterName,
            percentageContribution: yearData.variance_explained,
            description: yearData.description,
            manifestations: yearData.key_manifestations
          };
        });

        return {
          year: parseInt(year),
          clusters: yearClusters
        };
      });
    } catch (error) {
      setAnalysisError(`Chart data structure error: ${error instanceof Error ? error.message : 'Unknown error'}`);
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

  const handleAnalysis = async (params: AnalysisParams, loadPreset?: string) => {
    setAnalysisError(null);
    const controller = new AbortController();
    setAbortController(controller);
    setIsAnalyzing(true);
    setCurrentModel(params.model);
    setActiveTab('data');
    
    // Store the parameters in state
    setAnalysisParams(params);

    // Set isReasoning for both deepseek and o1-mini
    if (params.model === 'deepseek' || params.model === 'o1-mini') {
      setIsThinking(true);
      setIsReasoning(true);
    }

    try {
      setStreamingOutput('');
      setJsonEditorContent('');
      setApiStatus('requesting');
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          model: params.model,
        }),
        signal: controller.signal
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(errorData.details || `API Error: ${response.status}`);
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
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(5).trim();
          if (data === '[DONE]') continue;
          
          try {
            const parsed = JSON.parse(data);
            
            if (parsed.error) {
              // Only set the analysis error, don't add to boot sequence
              setAnalysisError(parsed.error);
              setIsAnalyzing(false);
              setIsThinking(false);
              return;
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
      // Only set the analysis error for unexpected errors too
      setAnalysisError(error instanceof Error ? error.message : 'An unexpected error occurred');
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
      ...(activeContext && { context: activeContext })
    };

    setChatMessages(prev => [...prev, newMessage]);
    setCurrentInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...chatMessages, newMessage],
          context: activeContext || undefined
        })
      });

      const data = await response.json();
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response,
        ...(activeContext && { context: activeContext })
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
        content: parsedJson.content,
        timeSeriesData: parsedJson.timeSeriesData,
        metadata: parsedJson.metadata,
        clusters: parsedJson.clusters || {} as Record<string, ClusterData>
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

  const handlePresetSelect = (preset: PresetConfig | null) => {
    // Don't allow preset changes during analysis
    if (isAnalyzing) {
      return;
    }
    
    if (preset) {
      // Set the cached result
      setResult(preset.cachedResult);
      setJsonEditorContent(JSON.stringify(preset.cachedResult, null, 2));
    } else {
      // Clear the cached result when no preset is selected
      setResult(null);
      setJsonEditorContent('');
    }
    
    // Update UI state
    setIsAnalyzing(false);
    setIsThinking(false);
    setIsReasoning(false);
    setApiStatus('idle');
  };

  // First, let's modify the tab selection handler to force chart regeneration
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // When switching to chart tab, explicitly regenerate chart data from current editor content
    if (tab === 'chart' && jsonEditorContent) {
      try {
        console.log('Tab changed to chart - forcing chart data regeneration');
        const parsedJson = JSON.parse(jsonEditorContent);
        
        if (parsedJson && parsedJson.clusters) {
          const chartData = transformDataForChart(parsedJson);
          
          console.log('New chart data generated:', chartData.length > 0 ? chartData.length + ' periods' : 'empty data');
          
          if (chartData && chartData.length > 0) {
            setResult(prev => ({
              ...prev,
              timeSeriesData: chartData,
              metadata: parsedJson.metadata || {},
              clusters: parsedJson.clusters || {}
            }));
          }
        } else {
          console.warn('Cannot generate chart: JSON missing clusters data');
        }
      } catch (e) {
        console.error('Error regenerating chart data:', e);
      }
    }
  };

  // Add this handler:
  const handleParameterChange = (updatedParams: AnalysisParams) => {
    setAnalysisParams(updatedParams);
    if (updatedParams.context !== undefined) {
      setActiveContext(updatedParams.context);
    }
  };

  // First, let's update the generateStateJson function to get values from the UI:
  const generateStateJson = () => {
    // Capture current state
    const stateToSave: SavedState = {
      version: '1.0',
      timestamp: new Date().toISOString(),
      analysisParams: {
        startYear: analysisParams.startYear.toString(),
        endYear: analysisParams.endYear.toString(),
        clusterStart: analysisParams.clusterStart,
        clusterEnd: analysisParams.clusterEnd,
        periodicity: analysisParams.periodicity,
        context: activeContext || undefined,
        model: analysisParams.model,
      },
      result,
      activeTab,
      selectedPoint: activeContext,
      chatMessages,
    };
    
    // Return pretty JSON
    return JSON.stringify(stateToSave, null, 2);
  };
  
  // Update show modal function to generate JSON first
  const handleShowExportModal = () => {
    const jsonString = generateStateJson();
    setSnapshotJson(jsonString);
    setShowSnapshotModal(true);
  };
  
  // Update export function to use the same JSON generator
  const exportAppState = () => {
    const jsonString = generateStateJson();
    
    // Create a Blob and download it
    const blob = new Blob([jsonString], { type: 'application/json' });
    saveAs(blob, `eigenclusters-snapshot-${new Date().toISOString().slice(0,19).replace(/:/g,'-')}.json`);
    
    // Also set in state for copying
    setSnapshotJson(jsonString);
  };
  
  // Update the import function
  const importAppState = (jsonString: string) => {
    try {
      // Step 1: Parse the JSON
      const parsed = JSON.parse(jsonString) as SavedState;
      console.log("Parsed state from JSON:", parsed);
      
      if (!parsed.version) {
        throw new Error('Invalid snapshot format: missing version');
      }
      
      // Step 2: Update all state in one go
      
      // Parameters
      if (parsed.analysisParams) {
        setAnalysisParams({
          startYear: parsed.analysisParams.startYear,
          endYear: parsed.analysisParams.endYear,
          clusterStart: Number(parsed.analysisParams.clusterStart),
          clusterEnd: Number(parsed.analysisParams.clusterEnd),
          periodicity: Number(parsed.analysisParams.periodicity),
          model: parsed.analysisParams.model,
          context: parsed.analysisParams.context
        });
        
        setCurrentModel(parsed.analysisParams.model);
      }
      
      // Result - this is the most important part for rendering
      if (parsed.result) {
        // Set result state directly 
        setResult(parsed.result);
        
        // Set editor content
        if (typeof parsed.result.content === 'string') {
          setJsonEditorContent(parsed.result.content);
        } else {
          setJsonEditorContent(JSON.stringify(parsed.result, null, 2));
        }
      }
      
      // Set active tab
      if (parsed.activeTab) {
        // Normalize tab name
        let tabName = parsed.activeTab === 'json' ? 'data' : parsed.activeTab;
        setActiveTab(tabName as any);
      }
      
      // Step 3: Update UI state
      setIsAnalyzing(false);
      setIsThinking(false);
      setIsReasoning(false);
      setApiStatus('idle');
      
      // Update parameter component via event
      const event = new CustomEvent('reset-parameters', { 
        detail: parsed.analysisParams
      });
      document.dispatchEvent(event);
      
    } catch (err) {
      console.error('Failed to import snapshot:', err);
      setError(`Failed to import snapshot: ${err instanceof Error ? err.message : 'Invalid format'}`);
    }
  };
  
  // This is the handler for file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      if (content) {
        importAppState(content);
      }
    };
    reader.readAsText(file);
    
    // Reset the input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Add copy to clipboard function
  const copySnapshotToClipboard = () => {
    navigator.clipboard.writeText(snapshotJson)
      .then(() => {
        // Show success message
        setBootSequence(prev => [...prev, "STATE COPIED TO CLIPBOARD"]);
        setTimeout(() => setShowSnapshotModal(false), 1000);
      })
      .catch(err => {
        console.error('Failed to copy:', err);
        setError('Failed to copy to clipboard');
      });
  };

  return (
    <div className="min-h-screen bg-black p-8 font-mono text-white">
      <pre className="mb-8">{ASCII_LOGO}</pre>
      
      <div className="mb-8">
        {/* Add state management buttons at the top level */}
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={handleShowExportModal}
            className="px-4 py-2 text-xs border border-white/20 hover:bg-white/10"
            title="Save current analysis state"
          >
            SAVE STATE
          </button>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 text-xs border border-white/20 hover:bg-white/10"
            title="Load saved analysis state from a file"
          >
            LOAD STATE
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".json"
            className="hidden"
          />
        </div>
        
        {bootSequence.map((message, i) => (
          <div key={i} className={`mb-1 ${
            message?.startsWith?.('ERROR:') 
              ? 'text-red-500 font-bold' 
              : ''
          }`}>
            {message}
          </div>
        ))}
      </div>

      {isBooted && (
        <div className="space-y-8">
          <ParameterConfig 
            onSubmit={handleAnalysis}
            onPresetSelect={handlePresetSelect}
            isAnalyzing={isAnalyzing}
            onStop={handleStop}
            error={analysisError}
            onParameterChange={handleParameterChange}
          />
          
          {isReasoning && (currentModel === 'deepseek' || currentModel === 'o1-mini') && (
            <div className="text-green-500 animate-pulse">
              Chain of Thought Reasoning... please wait
            </div>
          )}
          
          <div className="border border-white">
            <div className="flex border-b border-white/20">
              {['chart', 'data', 'clusters', 'about', 'prompt'].map((tab) => (
                <button 
                  key={tab}
                  className={`px-4 py-2 ${
                    activeTab === tab ? 'bg-white/10' : ''
                  } ${
                    isAnalyzing && tab !== activeTab ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={() => handleTabChange(tab)}
                  disabled={isAnalyzing && tab !== activeTab}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            {activeTab === 'chart' && result?.timeSeriesData && (
              <div className="p-4">
                <AnalysisChart 
                  data={result.timeSeriesData}
                  onPointSelect={handleChartPointSelect}
                />
              </div>
            )}

            {activeTab === 'data' && (
              <div className="p-4">
                <div className="mb-4">
                  <h2 className="text-xl">JSON Output</h2>
                  {isAnalyzing && <div className="text-sm text-green-500">Streaming data...</div>}
                </div>
                <Editor
                  height="600px"
                  defaultLanguage="json"
                  value={jsonEditorContent}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: 'on',
                    readOnly: true,
                    domReadOnly: true,
                    cursorStyle: 'line'
                  }}
                />
              </div>
            )}

            {activeTab === 'clusters' && (
              <div className="p-4">
                <h2 className="text-xl mb-4">Top 20 Cultural Eigenclusters</h2>
                <div className="space-y-2">
                  {result?.metadata?.top_20_clusters?.map((cluster: string, index: number) => {
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
                {(!result?.metadata?.top_20_clusters || result.metadata.top_20_clusters.length === 0) && (
                  <div className="text-white/50">
                    No clusters available
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
        </div>
      )}

      {/* Modal for copying JSON */}
      {showSnapshotModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black border border-white/20 p-6 max-w-2xl w-full max-h-[80vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg">Export State</h3>
              <button 
                onClick={() => setShowSnapshotModal(false)}
                className="opacity-50 hover:opacity-100"
              >
                ×
              </button>
            </div>
            
            <p className="mb-4 text-sm opacity-70">
              This JSON represents the current analysis state. You can save it and load it later to restore the exact same analysis view.
            </p>
            
            <div className="flex gap-2 mb-4">
              <button
                onClick={copySnapshotToClipboard}
                className="px-4 py-2 text-xs border border-white/20 hover:bg-white/10"
              >
                COPY TO CLIPBOARD
              </button>
              
              <button
                onClick={exportAppState}
                className="px-4 py-2 text-xs border border-white/20 hover:bg-white/10"
              >
                DOWNLOAD JSON
              </button>
            </div>
            
            <div className="border border-white/10 bg-black/30 p-2 rounded h-64 overflow-auto text-xs">
              <pre>{snapshotJson}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EigenclusterTerminal;