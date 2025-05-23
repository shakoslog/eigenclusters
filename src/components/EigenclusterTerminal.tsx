"use client";

import React, { useState, useEffect, useRef } from 'react';
import { AnalysisChart } from './AnalysisChart';
import { ParameterConfig } from './ParameterConfig';
import { AnalysisResponse } from '../types/api';
import ReactMarkdown from 'react-markdown';
import { PresetConfig } from '@/lib/presets';
import Editor from "@monaco-editor/react";
import { saveAs } from 'file-saver';

const ASCII_LOGO = ``;

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

## Extensions

- Copy/paste the JSON output into Claude 3.7 reasoning mode to get a better understanding of the results.
- Due to rate limits we can't yet implement that here, but it is the optimal actor-critic validation method, and we used it for some of the presets.

`;

interface ParameterConfigProps {
  onSubmit: (params: AnalysisParams) => void;
  isAnalyzing: boolean;
  onStop: () => void;
  onPresetSelect: (preset: PresetConfig | null, clearResult?: boolean) => void;
  onParameterChange?: (params: AnalysisParams) => void;
  hideHeader?: boolean;
}

// Update the type definition
type ApiStatus = 'idle' | 'connecting' | 'generating' | 'validating' | 'requesting' | 'error';

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

// Add this near your other interface definitions
interface TerminalMethods {
  loadPreset: (presetName: string) => boolean;
  loadShowcaseExample: () => boolean;
}

// Update the component props
const EigenclusterTerminal: React.FC<{
  initialSharedState?: any;
  onReady?: (methods: TerminalMethods) => void;
}> = ({ initialSharedState, onReady }) => {
  console.log("EigenclusterTerminal initializing with shared state:", initialSharedState);
  const [isBooted, setIsBooted] = useState(true);
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
  const [currentModel, setCurrentModel] = useState<ModelType>('gpt4o');
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  const [isReasoning, setIsReasoning] = useState(false);
  const [promptContent, setPromptContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [snapshotJson, setSnapshotJson] = useState<string>('');
  const [showSnapshotModal, setShowSnapshotModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showTutorialHighlight, setShowTutorialHighlight] = useState(false);

  // Add a state variable to store analysis parameters
  const [analysisParams, setAnalysisParams] = useState<AnalysisParams>({
    startYear: '2000',
    endYear: '2025',
    clusterStart: 1,
    clusterEnd: 3,
    periodicity: 5,
    model: 'gpt4o' as ModelType
  });

  // Add a new state variable to track if the state is consistent/saveable
  const [isStateSaveable, setIsStateSaveable] = useState(false);

  // Add these state variables
  const [isSharing, setIsSharing] = useState(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [shareError, setShareError] = useState<string | null>(null);

  // Add a new state for validation
  const [isValidating, setIsValidating] = useState(false);

  // Add a new state for validation option
  const [shouldValidate, setShouldValidate] = useState(false);

  useEffect(() => {
    if (initialSharedState) {
      console.log("Processing initialSharedState in EigenclusterTerminal");
      
      try {
        // First, handle the analysis parameters
        if (initialSharedState.analysisParams) {
          const params = {
            startYear: parseInt(initialSharedState.analysisParams.startYear) || 2000,
            endYear: parseInt(initialSharedState.analysisParams.endYear) || 2030,
            clusterStart: parseInt(initialSharedState.analysisParams.clusterStart) || 1,
            clusterEnd: parseInt(initialSharedState.analysisParams.clusterEnd) || 3,
            periodicity: parseInt(initialSharedState.analysisParams.periodicity) || 10,
            model: initialSharedState.analysisParams.model || 'gpt4o',
            context: initialSharedState.analysisParams.context || ''
          };
          
          console.log("Setting analysis params to:", params);
          
          // Set the parameters in state
          setAnalysisParams(params);
          
          // Also dispatch an event to update the UI components
          const event = new CustomEvent('reset-parameters', { 
            detail: params
          });
          document.dispatchEvent(event);
          console.log("Dispatched reset-parameters event");
        }
        
        // Then, handle the result
        if (initialSharedState.result) {
          console.log("Setting result from shared state");
          setResult(initialSharedState.result);
          setJsonEditorContent(JSON.stringify(initialSharedState.result, null, 2));
          
          // Set the active tab to chart to show the visualization
          setActiveTab('chart');
        }
        
        // Update boot sequence and state
        setBootSequence(prev => [...prev, "Loaded shared analysis"]);
        setIsStateSaveable(true);
        
      } catch (error) {
        console.error('Error applying shared state:', error);
        setBootSequence(prev => [...prev, `ERROR: Failed to apply shared state: ${error instanceof Error ? error.message : 'Unknown error'}`]);
      }
    }
  }, [initialSharedState]); // Only run when initialSharedState changes

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
      setIsBooted(true);
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
      
      const prompt = `Analyze Eigencultures ${params.clusterStart} through ${params.clusterEnd} 
        for the period ${params.startYear}-${params.endYear}, 
        sampling every ${params.periodicity} years.
        ${params.context || ''}`;

      setBootSequence([
        "",
        " *** CURRENT PROMPT *** ",
        prompt,
        "===================",
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

      // After streaming is complete, check if we have valid JSON to validate
      if (accumulatedJson) {
        try {
          const parsedJson = JSON.parse(accumulatedJson);
          
          // If we have valid JSON with clusters and validation is enabled, send for validation
          if (parsedJson && parsedJson.clusters && shouldValidate) {
            setApiStatus('validating');
            setIsValidating(true);
            setBootSequence(prev => [...prev, 'VALIDATING HISTORICAL ACCURACY...']);
            
            // Generate chart data from the initial response
            const chartData = transformDataForChart(parsedJson);
            
            // Update the result with initial data
            setResult(prev => ({
              content: accumulatedJson,
              timeSeriesData: chartData,
              metadata: parsedJson.metadata || {},
              clusters: parsedJson.clusters || {}
            }));
            
            // Now send for validation
            try {
              // Make sure we're passing the user prompt correctly
              const userPrompt = params.context || '';
              console.log("Sending validation request with user prompt:", userPrompt);
              
              // Create a validation request
              const validationResponse = await fetch('/api/validate', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                  jsonData: parsedJson,
                  userPrompt: userPrompt, 
                  userParameters: {
                    startYear: params.startYear,
                    endYear: params.endYear,
                    clusterStart: params.clusterStart,
                    clusterEnd: params.clusterEnd,
                    periodicity: params.periodicity,
                    model: params.model
                  },
                  fullPrompt: promptContent
                }),
                signal: controller.signal
              });
              
              if (!validationResponse.ok) {
                throw new Error(`Validation failed: ${validationResponse.status}`);
              }
              
              // Handle as a stream instead of using response.json()
              const reader = validationResponse.body?.getReader();
              if (!reader) {
                throw new Error('Could not get reader from validation response');
              }
              
              let validationResult = null;
              const decoder = new TextDecoder();
              
              // Process the stream chunks
              while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                // Convert the chunk to text
                const chunk = decoder.decode(value, { stream: true });
                console.log('Validation chunk received, length:', chunk.length);
                
                // Process each line in the chunk
                const lines = chunk.split('\n').filter(line => line.trim() !== '');
                for (const line of lines) {
                  try {
                    const parsed = JSON.parse(line);
                    
                    // Handle processing status updates
                    if (parsed.status === 'processing') {
                      console.log('Validation status:', parsed.message);
                      setBootSequence(prev => [...prev, `VALIDATION: ${parsed.message}`]);
                      continue;
                    }
                    
                    // If we have validated data, store it
                    if (parsed.success && parsed.validatedData) {
                      validationResult = parsed.validatedData;
                      console.log("Received validated data:", validationResult);
                    }
                    
                    // If we have an error, log it
                    if (!parsed.success && parsed.error) {
                      console.error('Validation stream error:', parsed.error);
                      setBootSequence(prev => [...prev, `VALIDATION ERROR: ${parsed.error}`]);
                    }
                  } catch (e) {
                    console.error('Error parsing validation chunk:', e, line);
                  }
                }
              }
              
              // Process the validation result if we have one
              if (validationResult && validationResult.clusters) {
                // Update with validated data
                const validatedChartData = transformDataForChart(validationResult);
                
                setBootSequence(prev => [...prev, 'VALIDATION COMPLETE - IMPROVEMENTS APPLIED']);
                
                // Update the result with validated data
                setResult({
                  content: JSON.stringify(validationResult, null, 2),
                  timeSeriesData: validatedChartData,
                  metadata: validationResult.metadata || {},
                  clusters: validationResult.clusters || {}
                });
                
                // Update the editor content
                setJsonEditorContent(JSON.stringify(validationResult, null, 2));
              } else {
                // Validation failed but we still have the original data
                setBootSequence(prev => [...prev, 'VALIDATION INCOMPLETE - USING ORIGINAL DATA']);
              }
            } catch (validationError) {
              console.error('Validation error:', validationError);
              setBootSequence(prev => [...prev, `VALIDATION ERROR: ${validationError instanceof Error ? validationError.message : 'Unknown error'}`]);
            }
          } else {
            // If validation is disabled, just use the original data
            if (!shouldValidate) {
              setBootSequence(prev => [...prev, 'VALIDATION SKIPPED - USING ORIGINAL DATA']);
            }
            
            // Generate chart data from the response
            const chartData = transformDataForChart(parsedJson);
            
            // Update the result
            setResult({
              content: accumulatedJson,
              timeSeriesData: chartData,
              metadata: parsedJson.metadata || {},
              clusters: parsedJson.clusters || {}
            });
            
            // Update the editor content
            setJsonEditorContent(accumulatedJson);
          }
        } catch (parseError) {
          console.error('JSON parse error:', parseError);
          setBootSequence(prev => [...prev, 'ERROR: Invalid JSON response']);
        }
      }
      
      // Final cleanup
      setIsAnalyzing(false);
      setIsThinking(false);
      setIsValidating(false);
      setApiStatus('idle');
      setIsStateSaveable(true);
      
    } catch (err) {
      // Only set the analysis error for unexpected errors too
      setAnalysisError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setIsStateSaveable(false);
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

  const handlePresetSelect = (preset: PresetConfig | null, clearResult: boolean = true) => {
    // Don't allow preset changes during analysis
    if (isAnalyzing) {
      return;
    }
    
    if (preset) {
      // Set the active tab first
      setActiveTab('chart');
      
      // Update the analysis parameters to match the preset
      if (preset.parameters) {
        console.log("Setting parameters from preset:", preset.id);
        
        const presetParams = {
          startYear: preset.parameters.startYear,
          endYear: preset.parameters.endYear,
          clusterStart: preset.parameters.clusterStart,
          clusterEnd: preset.parameters.clusterEnd,
          periodicity: preset.parameters.periodicity,
          model: preset.parameters.model || 'gpt4o',
          context: preset.parameters.context || '',
          presetId: preset.id  // Include the preset ID
        };
        
        // Update the analysis parameters state
        setAnalysisParams(presetParams);
        
        // Dispatch an event to update the parameter form fields
        const event = new CustomEvent('reset-parameters', { 
          detail: presetParams
        });
        document.dispatchEvent(event);
        console.log("Dispatched reset-parameters event with preset ID:", preset.id);
      }
      
      // Process the cached result to ensure it has all required properties
      if (preset.cachedResult) {
        const processedResult = {
          ...preset.cachedResult,
          // Ensure timeSeriesData is properly extracted or processed
          timeSeriesData: preset.cachedResult.timeSeriesData || 
            (preset.cachedResult.clusters ? transformDataForChart(preset.cachedResult) : [])
        };
        
        // Set the processed result
        setResult(processedResult);
        
        // Update the JSON editor content
        setJsonEditorContent(JSON.stringify(preset.cachedResult, null, 2));
        
        console.log("Chart data loaded from preset:", processedResult.timeSeriesData);
      }
    } else if (clearResult) {
      // Only clear the cached result if explicitly requested
      setResult(null);
      setJsonEditorContent('');
    }
    
    // Update UI state
    setIsAnalyzing(false);
    setIsThinking(false);
    setIsReasoning(false);
    setApiStatus('idle');
    
    // A preset selection creates a consistent state
    setIsStateSaveable(preset !== null);
  };

  // First, let's modify the tab selection handler to force chart regeneration
  const handleTabChange = (tab: string) => {
    setActiveTab(tab as "data" | "prompt" | "about" | "chart" | "clusters");
    
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
    setActiveContext(updatedParams.context || null);
    
    // If parameters change after analysis, state is no longer consistent
    setIsStateSaveable(false);
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
          clusterStart: typeof parsed.analysisParams.clusterStart === 'string' ? 
            parseInt(parsed.analysisParams.clusterStart) : 
            parsed.analysisParams.clusterStart,
          clusterEnd: typeof parsed.analysisParams.clusterEnd === 'string' ? 
            parseInt(parsed.analysisParams.clusterEnd) : 
            parsed.analysisParams.clusterEnd,
          periodicity: parsed.analysisParams.periodicity,
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

  // Implement the share state logic
  const handleShareState = async () => {
    if (!isStateSaveable) return;
    
    setIsSharing(true);
    setShareError(null);
    setShareUrl(null); // Reset any previous share URL
    
    try {
      // Generate a simplified state object with just the essential data
      const stateToShare = {
        version: '1.0',
        timestamp: new Date().toISOString(),
        analysisParams: {
          startYear: analysisParams.startYear.toString(),
          endYear: analysisParams.endYear.toString(),
          clusterStart: analysisParams.clusterStart,
          clusterEnd: analysisParams.clusterEnd,
          periodicity: analysisParams.periodicity,
          context: analysisParams.context,
          model: analysisParams.model,
        },
        result: result
      };
      
      // Send the state to the API
      const response = await fetch('/api/share', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stateToShare),
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to share state');
      }
      
      // Set the share URL
      const fullShareUrl = `${window.location.origin}${data.shareUrl}`;
      setShareUrl(fullShareUrl);
      
      // Show the share modal (not the export modal)
      setShowSnapshotModal(true);
    } catch (error) {
      console.error('Error sharing state:', error);
      setShareError(error instanceof Error ? error.message : 'Failed to share state');
    } finally {
      setIsSharing(false);
    }
  };

  // Add this effect to check for shared state ID in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedId = urlParams.get('sharedId');
    
    if (sharedId) {
      // Clear the URL parameter without refreshing the page
      window.history.replaceState({}, document.title, window.location.pathname);
      
      // Load the shared state
      loadSharedState(sharedId);
    }
  }, []);

  // Function to load shared state from API
  const loadSharedState = async (shareId: string) => {
    try {
      setBootSequence(prev => [...prev, `Loading shared analysis (ID: ${shareId})...`]);
      
      const response = await fetch(`/api/share/${shareId}`);
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to load shared state');
      }
      
      // Apply the shared state
      const sharedState = data.state;
      
      // Set the analysis parameters
      if (sharedState.analysisParams) {
        setAnalysisParams({
          startYear: sharedState.analysisParams.startYear,
          endYear: sharedState.analysisParams.endYear,
          clusterStart: sharedState.analysisParams.clusterStart,
          clusterEnd: sharedState.analysisParams.clusterEnd,
          periodicity: sharedState.analysisParams.periodicity,
          model: sharedState.analysisParams.model || 'gpt4o',
          context: sharedState.analysisParams.context
        });
      }
      
      // Set the result
      if (sharedState.result) {
        setResult(sharedState.result);
        setJsonEditorContent(JSON.stringify(sharedState.result, null, 2));
      }
      
      // Set the active tab to chart
      setActiveTab('chart');
      
      setBootSequence(prev => [...prev, 'Shared analysis loaded successfully']);
      setIsStateSaveable(true);
      
    } catch (error) {
      console.error('Error loading shared state:', error);
      setBootSequence(prev => [...prev, `ERROR: ${error instanceof Error ? error.message : 'Failed to load shared state'}`]);
    }
  };

  // After setting analysis params in the useEffect
  console.log("Analysis params after setting:", analysisParams);

  // Add a handler function to update the state
  const handleValidateChange = (validate: boolean) => {
    console.log("Validation checkbox changed to:", validate);
    setShouldValidate(validate);
  };

  // Add this useEffect to expose methods
  useEffect(() => {
    if (onReady) {
      onReady({
        loadPreset: (presetName: string) => {
          try {
            // Import the presets dynamically
            import('@/lib/presets').then(({ getPresets }) => {
              getPresets().then(presets => {
                const preset = presets.find(p => p.name === presetName);
                if (preset) {
                  handlePresetSelect(preset, false);
                  setActiveTab('chart');
                  return true;
                } else {
                  console.error(`Preset "${presetName}" not found`);
                  return false;
                }
              });
            }).catch(err => {
              console.error("Error loading presets:", err);
              return false;
            });
            return true;
          } catch (error) {
            console.error("Error loading preset:", error);
            return false;
          }
        },
        loadShowcaseExample: () => {
          try {
            // Use Alexandria as our showcase example since it has good data
            import('@/lib/presets/alexandria').then(module => {
              const showcasePreset = module.default;
              if (showcasePreset) {
                handlePresetSelect(showcasePreset, false);
                setActiveTab('chart');
                // Option to show tutorial highlight
                // setShowTutorialHighlight(true);
                // setTimeout(() => setShowTutorialHighlight(false), 5000);
                return true;
              }
              return false;
            }).catch(err => {
              console.error("Error loading showcase example:", err);
              return false;
            });
            return true;
          } catch (error) {
            console.error("Error loading showcase example:", error);
            return false;
          }
        }
      });
    }
  }, [onReady]);

  // Add an event listener for loading presets
  useEffect(() => {
    const handleLoadPreset = (event: Event) => {
      const customEvent = event as CustomEvent;
      const presetName = customEvent.detail?.presetName;
      
      if (presetName) {
        console.log("Received load-preset event with presetName:", presetName);
        
        // Import the presets dynamically
        import('@/lib/presets').then(({ getPresets }) => {
          getPresets().then(presets => {
            const preset = presets.find(p => p.name === presetName);
            if (preset) {
              handlePresetSelect(preset, false);
              setActiveTab('chart');
            } else {
              console.error(`Preset "${presetName}" not found`);
            }
          });
        }).catch(err => {
          console.error("Error loading presets:", err);
        });
      }
    };
    
    // Add the event listener
    document.addEventListener('load-preset', handleLoadPreset);
    
    // Clean up the listener on component unmount
    return () => {
      document.removeEventListener('load-preset', handleLoadPreset);
    };
  }, []);

  return (
    <div className={`font-mono antialiased min-h-screen flex flex-col ${isBooted ? '' : 'bg-black'}`}>
      {/* Header with improved styling */}
      <header className="bg-black border-b border-white/20 p-3 flex justify-between items-center">
        <h1 className="text-xl font-medium tracking-tight">EIGENCULTURE</h1>
        {isStateSaveable && (
          <button
            onClick={handleShareState}
            className="px-4 py-1.5 text-sm border border-white/20 hover:bg-white/10 transition-colors"
          >
            SHARE
          </button>
        )}
      </header>

      {/* Main content area with SIGNIFICANTLY wider sidebar */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Force the sidebar to be much wider with !important */}
        <div className="w-full md:w-[420px] lg:w-[440px] xl:w-[460px] border-r border-white/20 bg-black/60 overflow-y-auto" style={{minWidth: '420px'}}>
          <div className="p-4">
            <h2 className="text-base font-medium mb-4 border-b border-white/20 pb-2">Analysis Configuration</h2>
            
            {/* Parameter config with more room to breathe */}
            <div className="space-y-4 pr-2">
              <ParameterConfig 
                onSubmit={handleAnalysis}
                isAnalyzing={isAnalyzing || isThinking}
                onStop={handleStop}
                onPresetSelect={handlePresetSelect}
                shouldValidate={shouldValidate}
                onValidateChange={setShouldValidate}
                onParameterChange={handleParameterChange}
                hideHeader={true}
              />
            </div>
            
            {/* Validation messages */}
            {bootSequence.length > 0 && (
              <div className="mt-4 bg-black/30 border border-white/10 rounded p-3">
                <h3 className="text-xs uppercase text-white/50 mb-1">System Messages</h3>
                <div className="max-h-32 overflow-y-auto">
                  {bootSequence.map((line, i) => (
                    <div key={i} className={`text-sm py-0.5 ${line.includes('VALIDATION') ? 'text-yellow-400' : 'text-white/70'}`}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex-1 bg-black/80 flex flex-col min-w-0">
          {/* Tabs navigation with better styling */}
          <div className="flex border-b border-white/20">
            {['chart', 'data', 'clusters', 'prompt'].map((tab) => (
              <button 
                key={tab}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab ? 'bg-white/10 border-b-2 border-white/70' : 'hover:bg-white/5'
                } ${
                  isAnalyzing && tab !== activeTab ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => handleTabChange(tab as any)}
                disabled={isAnalyzing && tab !== activeTab}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          
          {/* Tab content with improved styling */}
          <div className="flex-1 overflow-auto">
            {activeTab === 'chart' && (
              <div>
                {/* Chart visualization with better container */}
                <div className="border-b border-white/10">
                  {result?.timeSeriesData && result.timeSeriesData.length > 0 ? (
                    <div className="relative">
                      <AnalysisChart 
                        data={result.timeSeriesData}
                        onPointSelect={handleChartPointSelect}
                      />
                    </div>
                  ) : (
                    <div className="min-h-[300px] flex items-center justify-center">
                      {isAnalyzing ? (
                        <div className="text-center p-8 max-w-md">
                          <div className="inline-block animate-spin mr-2 h-6 w-6 border-2 border-white/20 border-t-white rounded-full"></div>
                          <div className="text-lg font-medium mt-3 mb-2">Analyzing cultural patterns...</div>
                          <div className="text-sm text-white/60">This may take a few minutes</div>
                        </div>
                      ) : (
                        <div className="text-center p-8 max-w-md">
                          <div className="text-lg font-medium mb-2">No visualization data available</div>
                          <div className="text-sm text-white/60">Configure parameters and run analysis</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Selected cluster details with improved styling */}
                {activeContext && (
                  <div className="bg-white/5 border-b border-white/20 p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium mb-1">
                          {activeContext.clusterName}
                        </h3>
                        <p className="text-sm text-white/70 mb-3">
                          {activeContext.year} {activeContext.percentageContribution !== undefined ? 
                            `・ ${activeContext.percentageContribution.toFixed(1)}% influence` : 
                            ''}
                        </p>
                      </div>
                      <button 
                        onClick={() => setActiveContext(null)}
                        className="text-white/50 hover:text-white text-lg"
                      >
                        ×
                      </button>
                    </div>
                    
                    <p className="text-sm leading-relaxed mb-4">{activeContext.description}</p>
                    
                    {activeContext.manifestations && activeContext.manifestations.length > 0 && (
                      <div className="bg-black/30 p-3 rounded">
                        <h4 className="text-sm font-medium mb-2">Key manifestations:</h4>
                        <ul className="list-disc pl-5 text-sm space-y-1.5 text-white/80">
                          {activeContext.manifestations.map((m, i) => (
                            <li key={i}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            
            {/* Data tab with improved styling */}
            {activeTab === 'data' && (
              <div className="p-4">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-lg font-medium">JSON Output</h2>
                  {isAnalyzing && <div className="text-sm text-green-500 flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>Streaming data...</div>}
                </div>
                <div className="border border-white/10 rounded">
                  <Editor
                    height="calc(100vh - 220px)"
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
              </div>
            )}
            
            {/* Clusters tab with improved styling */}
            {activeTab === 'clusters' && (
              <div className="p-5">
                <h2 className="text-lg font-medium mb-4">Top Cultural Eigenclusters</h2>
                <div className="space-y-1">
                  {result?.metadata?.top_20_clusters?.map((cluster: string, index: number) => {
                    const { name, trend, percentage } = formatClusterName(cluster);
                    return (
                      <div 
                        key={index}
                        className="flex gap-3 items-center p-2 hover:bg-white/5 transition-colors rounded"
                      >
                        <span className="opacity-60 w-6 text-right">{index + 1}.</span>
                        <span className="flex-1">{name}</span>
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
                          <span className="ml-2 opacity-60 text-sm">
                            ({percentage}%)
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
                {(!result?.metadata?.top_20_clusters || result.metadata.top_20_clusters.length === 0) && (
                  <div className="text-white/50 text-center p-8 border border-white/10 rounded bg-black/30">
                    No clusters available. Run an analysis to see results.
                  </div>
                )}
              </div>
            )}
            
            {/* Prompt tab with improved styling */}
            {activeTab === 'prompt' && (
              <div className="p-5">
                <h2 className="text-lg font-medium mb-4">Analysis Prompt</h2>
                <div className="prose prose-invert max-w-none bg-black/30 p-4 border border-white/10 rounded">
                  <div className="space-y-3 text-sm leading-relaxed">
                    {promptContent.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-white/80">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Error display with improved styling */}
      {error && (
        <div className="bg-red-900/20 border-t border-red-500/30 p-4 text-red-400">
          <div className="font-bold mb-1">Error</div>
          <div>{error}</div>
        </div>
      )}

      {/* Footer with improved styling */}
      <footer className="bg-black border-t border-white/20 p-3 text-center text-white/50 text-xs">
        Eigenculture • Cultural Analysis through AI
      </footer>
      
      {/* Share Modal with improved styling */}
      {showSnapshotModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-black border border-white/20 p-6 max-w-lg w-full rounded">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Share Analysis</h3>
              <button 
                onClick={() => setShowSnapshotModal(false)}
                className="text-white/50 hover:text-white"
              >
                ×
              </button>
            </div>
            
            <div>
              <div className="mb-5">
                <div className="text-sm mb-2">Copy this URL to share your analysis:</div>
                <div className="flex gap-2 mb-1">
                  <input
                    type="text"
                    value={shareUrl}
                    readOnly
                    className="flex-1 bg-white/5 border border-white/20 p-2 text-sm rounded-l"
                  />
                  <button
                    onClick={copySnapshotToClipboard}
                    className="bg-white/10 border border-white/30 px-4 hover:bg-white/20 rounded-r transition-colors"
                  >
                    Copy
                  </button>
                </div>
                {shareUrlCopied && (
                  <div className="text-green-400 text-xs mt-1">✓ Copied to clipboard!</div>
                )}
              </div>
              
              <div>
                <div className="text-sm mb-2">Or export the full analysis state:</div>
                <button
                  onClick={exportAppState}
                  className="bg-white/10 border border-white/30 px-4 py-2 hover:bg-white/20 text-sm rounded transition-colors"
                >
                  Export JSON
                </button>
              </div>
              
              {shareError && (
                <div className="mt-4 text-red-400 text-sm p-3 border border-red-500/30 bg-red-900/20 rounded">
                  {shareError}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EigenclusterTerminal;