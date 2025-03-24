import React, { useState, useEffect } from 'react';
import { getPresets, presets as initialPresets } from '@/lib/presets/index';
import type { PresetConfig } from '@/lib/presets/types';
import { ModelType } from './EigenclusterTerminal';  // Import the shared type
import { NumericFormat } from 'react-number-format';

interface ParameterConfigProps {
  onSubmit: (params: AnalysisParams) => void;
  isAnalyzing: boolean;
  onStop: () => void;
  onPresetSelect: (preset: PresetConfig | null, clearResult?: boolean) => void;
  error?: string;
  onParameterChange?: (updatedParams: Partial<AnalysisParams>) => void;
  shouldValidate?: boolean;
  onValidateChange?: (validate: boolean) => void;
  hideHeader?: boolean;
}

interface AnalysisParams {
  startYear: string;
  endYear: string;
  clusterStart: number;
  clusterEnd: number;
  periodicity: number;
  context?: string;
  model: ModelType;
}

const modelOptions = [
  { value: 'o1-mini', label: 'o1-Mini', disabled: false },
  { value: 'gpt4o', label: 'GPT-4o', disabled: false },
  { value: 'gpt4o-mini', label: 'GPT-4o Mini', disabled: false },
  { value: 'deepseek_chat', label: 'DeepSeek Chat', disabled: false },
  { value: 'deepseek', label: 'DeepSeek Reasoner', disabled: false },
  { value: 'claude', label: 'Claude 3.5 Sonnet', disabled: true, disabledReason: 'Rate limited - not suitable for concurrent users' }
];

const estimateTokensPerYear = (clusters: number, startYear: string, endYear: string, periodicity: number) => {
  // Per cluster per time period:
  const tokensPerManifestation = 100;    // Each manifestation is ~100 tokens
  const manifestationsPerPeriod = 4;      // 4 manifestations per period
  const periodDescription = 150;          // Period description ~150 tokens
  
  // Calculate number of periods based on actual range and periodicity
  const startYearNum = parseInt(startYear);
  const endYearNum = parseInt(endYear);
  const years = Math.abs(endYearNum - startYearNum);
  const periodsPerCluster = Math.ceil(years / periodicity) + 1; // +1 to include both start and end years
  
  // Per cluster fixed costs:
  const clusterName = 20;                 // Cluster name ~20 tokens
  const clusterDescription = 200;         // Cluster description ~200 tokens
  
  // Metadata section
  const metadataPerCluster = 35;          // Each cluster in metadata list ~35 tokens
  const metadataBase = 150;               // Base metadata text ~150 tokens
  
  // Calculate total
  const tokensPerPeriod = (tokensPerManifestation * manifestationsPerPeriod) + periodDescription;
  const tokensPerCluster = clusterName + clusterDescription + (tokensPerPeriod * periodsPerCluster);
  
  // Total for all clusters plus metadata
  return (tokensPerCluster * clusters) + (metadataPerCluster * clusters) + metadataBase;
};

const getModelTokenLimit = (model: ModelType): number => {
  const limits: Record<ModelType, number> = {
    'claude': 8192,
    'deepseek': 6000,      // Halved from 8000 to account for CoT
    'deepseek_chat': 8192,
    'gpt4o': 16384,
    'gpt4o-mini': 16384,
    'o1-mini': 26000      // Halved from 65536 to account for CoT
  };
  return limits[model];
};

// Separate function for the buffered limit
const getEffectiveTokenLimit = (model: ModelType): number => {
  return Math.floor(getModelTokenLimit(model) * 0.8); // 20% safety margin
};

const ParameterConfig: React.FC<ParameterConfigProps> = ({ 
  onSubmit, 
  isAnalyzing, 
  onStop, 
  onPresetSelect,
  error,
  onParameterChange,
  shouldValidate = false,
  onValidateChange,
  hideHeader = false
}) => {
  const [mounted, setMounted] = useState(false);
  const [params, setParams] = useState<AnalysisParams>({
    startYear: '2000',
    endYear: '2025',
    clusterStart: 1,
    clusterEnd: 3,
    periodicity: 5,
    model: 'gpt4o'
  });
  const [model, setModel] = useState<ModelType>('gpt4o');
  const [context, setContext] = useState<string>('');
  const [selectedPreset, setSelectedPreset] = useState<string>('');
  const [tokenEstimate, setTokenEstimate] = useState<number>(0);
  const [exceedsLimit, setExceedsLimit] = useState<boolean>(false);
  const [presets, setPresets] = useState<PresetConfig[]>(initialPresets);

  // Set initial state after mount
  useEffect(() => {
    setMounted(true);
    setParams({
      startYear: '2000',
      endYear: '2025',
      clusterStart: 1,
      clusterEnd: 3,
      periodicity: 5,
      model: 'gpt4o'
    });
  }, []);

  // Load all presets when the component mounts
  useEffect(() => {
    const loadPresets = async () => {
      try {
        const loadedPresets = await getPresets();
        setPresets(loadedPresets);
      } catch (error) {
        console.error("Failed to load presets:", error);
        // If dynamic loading fails, we'll still have the initial presets
      }
    };
    
    loadPresets();
  }, []);

  // Calculate token estimate
  useEffect(() => {
    const estimate = estimateTokensPerYear(
      params.clusterEnd - params.clusterStart + 1,
      params.startYear,
      params.endYear,
      params.periodicity
    );
    setTokenEstimate(estimate);
    setExceedsLimit(estimate > getModelTokenLimit(params.model));
  }, [params.clusterStart, params.clusterEnd, params.startYear, params.endYear, params.periodicity, params.model]);

  // Update the reset-parameters event handler
  React.useEffect(() => {
    const handleResetParameters = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) {
        console.log("Reset parameters event received:", detail);
        
        // Update parameters directly without using handleParameterChange
        setParams(prev => ({
          ...prev,
          startYear: detail.startYear || prev.startYear,
          endYear: detail.endYear || prev.endYear,
          clusterStart: detail.clusterStart || prev.clusterStart,
          clusterEnd: detail.clusterEnd || prev.clusterEnd,
          periodicity: detail.periodicity || prev.periodicity,
          model: detail.model || prev.model,
        }));
        
        if (detail.context !== undefined) {
          setContext(detail.context);
        }
        
        // Only update the preset if explicitly provided
        if (detail.presetId) {
          console.log("Setting preset from event:", detail.presetId);
          setSelectedPreset(detail.presetId);
        }
      }
    };

    document.addEventListener('reset-parameters', handleResetParameters);
    return () => {
      document.removeEventListener('reset-parameters', handleResetParameters);
    };
  }, []);

  // Don't render until mounted
  if (!mounted) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear selected preset when submitting custom analysis
    setSelectedPreset('');
    console.log('Submitting with model:', params.model);
    onSubmit({
      ...params,
      context: context || undefined
    });
  };

  // Modify handleParameterChange to be more careful about clearing presets
  const handleParameterChange = (
    update: Partial<AnalysisParams>,
    clearPreset: boolean = false
  ) => {
    // Only clear the preset if explicitly requested
    if (clearPreset) {
      console.log("Clearing preset selection");
      setSelectedPreset('');
      onPresetSelect(null, false);
    }

    // Validate year inputs
    if ('startYear' in update && update.startYear !== undefined) {
      update.startYear = Math.max(-10000, Math.min(9999, parseInt(update.startYear.toString()) || 0)).toString();
    }
    if ('endYear' in update && update.endYear !== undefined) {
      update.endYear = Math.max(-10000, Math.min(9999, parseInt(update.endYear.toString()) || 0)).toString();
    }

    // Don't restrict cluster inputs now - let validation handle this
    // Just update the local state
    const newParams = { ...params, ...update };
    setParams(newParams);
    
    // Notify parent component
    if (onParameterChange) {
      onParameterChange(newParams);
    }
  };

  const handlePresetSelect = (presetId: string) => {
    console.log("Preset selected:", presetId);
    
    // Set the selected preset in state
    setSelectedPreset(presetId);
    
    // Find the preset by ID
    const preset = presets.find(p => p.id === presetId);
    console.log("Found preset:", preset);
    
    // Call the parent component's onPresetSelect function
    if (preset) {
      onPresetSelect(preset);
    } else if (presetId === '') {
      // Handle the case when the user selects the default option
      onPresetSelect(null);
    }
  };

  const handleModelChange = (newModel: ModelType) => {
    console.log('Model changed to:', newModel);
    setModel(newModel);
    handleParameterChange({ model: newModel });
  };

  const formatYear = (year: number) => {
    return `${Math.abs(year)}${year < 0 ? ' BCE' : ' CE'}`;
  };

  // Update validation messages function
  const getValidationMessages = (): string[] => {
    const messages: string[] = [];

    // Token limit check
    if (tokenEstimate > getModelTokenLimit(params.model) * 2) {
      messages.push("Estimated tokens exceed model capacity by too much. Try reducing clusters or time range.");
    }

    // Year validation
    if (!params.startYear || !params.endYear) {
      messages.push("Start and end years must be specified");
    } else {
      const start = parseInt(params.startYear);
      const end = parseInt(params.endYear);
      if (!isNaN(start) && !isNaN(end) && end <= start) {
        messages.push("End year must be greater than start year");
      }
    }

    // Cluster validation
    if (!params.clusterStart || !params.clusterEnd) {
      messages.push("Cluster start and end must be specified");
    } else {
      const start = parseInt(String(params.clusterStart));
      const end = parseInt(String(params.clusterEnd));
      if (start < 1 || end < 1) {
        messages.push("Clusters must be positive numbers");
      }
      if (!isNaN(start) && !isNaN(end) && end <= start) {
        messages.push("Cluster end must be greater than cluster start");
      }
    }

    return messages;
  };

  // Update isValidRange to check for empty fields
  const isValidRange = () => {
    if (!params.startYear || !params.endYear) return false;
    const start = parseInt(params.startYear);
    const end = parseInt(params.endYear);
    if (isNaN(start) || isNaN(end) || end <= start) return false;
    
    // ... rest of validation ...
    return getValidationMessages().length === 0;
  };

  // Update cluster input handler
  const handleClusterChange = (field: 'clusterStart' | 'clusterEnd', value: string) => {
    // Allow empty string or positive integers
    if (value === '' || /^\d*$/.test(value)) {
      setParams(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  // Update year input handler
  const handleYearChange = (field: 'startYear' | 'endYear', value: string) => {
    // Allow empty string or any integer (including negative)
    if (value === '' || /^-?\d*$/.test(value)) {
      setParams(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  return (
    <div className="parameter-config">
      {!hideHeader && (
        <div className="text-center mb-4">
          === PARAMETER CONFIGURATION ===
        </div>
      )}

      <div className="flex-1 space-y-4 border border-white/20 p-4">
        <div className="mb-4">
          <label className="block mb-2 text-white/70">Presets</label>
          <select 
            value={selectedPreset}
            onChange={(e) => {
              const newValue = e.target.value;
              console.log("Direct select change:", newValue);
              
              // Set state immediately
              setSelectedPreset(newValue);
              
              // Find and pass the preset
              if (newValue) {
                const preset = presets.find(p => p.id === newValue);
                if (preset) {
                  console.log("Found preset, calling onPresetSelect");
                  onPresetSelect(preset, true);
                }
              } else {
                console.log("Empty selection, calling onPresetSelect(null)");
                onPresetSelect(null, true);
              }
            }}
            className={`w-full bg-black text-white border border-white/20 p-2 rounded ${
              isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isAnalyzing}
          >
            <option value="">Select a preset configuration...</option>
            {presets.map(preset => (
              <option key={preset.id} value={preset.id}>
                {preset.name} - {preset.description}
              </option>
            ))}
          </select>
          <div className="text-xs text-white/50 mt-1">
            Current selection: {selectedPreset || 'none'}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Start Year</label>
              <NumericFormat 
                value={params.startYear}
                onValueChange={(values) => {
                  const newValue = values.value;
                  handleParameterChange({ startYear: newValue });
                }}
                className={`w-full p-2 bg-white/10 ${
                  isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'
                }`}
                disabled={isAnalyzing}
                placeholder="Enter start year"
              />
            </div>
            <div>
              <label className="block mb-2">End Year</label>
              <NumericFormat 
                value={params.endYear}
                onValueChange={(values) => {
                  const newValue = values.value;
                  handleParameterChange({ endYear: newValue });
                }}
                className={`w-full p-2 bg-white/10 ${
                  isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'
                }`}
                disabled={isAnalyzing}
                placeholder="Enter end year"
              />
            </div>
            <div>
              <label className="block mb-2">Cluster Start</label>
              <NumericFormat 
                value={params.clusterStart}
                onValueChange={(values) => {
                  const newValue = values.value;
                  handleParameterChange({ 
                    clusterStart: newValue === '' ? '' : Number(newValue)
                  });
                }}
                className={`w-full p-2 bg-white/10 ${
                  isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'
                }`}
                disabled={isAnalyzing}
                placeholder="Enter cluster start"
              />
            </div>
            <div>
              <label className="block mb-2">Cluster End</label>
              <NumericFormat 
                value={params.clusterEnd}
                onValueChange={(values) => {
                  const newValue = values.value;
                  handleParameterChange({ 
                    clusterEnd: newValue === '' ? '' : Number(newValue) 
                  });
                }}
                className={`w-full p-2 bg-white/10 ${
                  isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'
                }`}
                disabled={isAnalyzing}
                placeholder="Enter cluster end"
              />
            </div>
            <div>
              <label className="block mb-2">Year Interval</label>
              <NumericFormat 
                value={params.periodicity}
                onValueChange={(values) => {
                  const newValue = values.value;
                  handleParameterChange({ 
                    periodicity: newValue === '' ? '' : Number(newValue)
                  });
                }}
                className={`w-full p-2 bg-white/10 ${
                  isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'
                }`}
                disabled={isAnalyzing}
                placeholder="Enter year interval"
              />
            </div>
            <div>
              <label className="block mb-2">Model</label>
              <select
                value={params.model}
                onChange={(e) => handleParameterChange({ model: e.target.value as ModelType })}
                className={`w-full p-2 bg-white/10 ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
                disabled={isAnalyzing}
              >
                {modelOptions.map((option) => (
                  <option 
                    key={option.value} 
                    value={option.value}
                    disabled={option.disabled}
                    className={option.disabled ? 'text-gray-500 bg-gray-800' : ''}
                    title={option.disabledReason}
                  >
                    {option.label} {option.disabled ? '(Rate Limited)' : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="validate-checkbox"
              checked={shouldValidate}
              onChange={(e) => {
                console.log("Checkbox clicked, new value:", e.target.checked);
                if (onValidateChange) {
                  onValidateChange(e.target.checked);
                }
              }}
              className="mr-2 h-4 w-4"
              disabled={isAnalyzing}
            />
            <label htmlFor="validate-checkbox" className="text-sm text-gray-300">
              Enable actor-critic validation (slower but more accurate)
            </label>
          </div>

          <div className="mt-4">
            <label className="block mb-2">Context (optional)</label>
            <textarea
              value={context}
              onChange={(e) => {
                setContext(e.target.value);
                handleParameterChange({ context: e.target.value });
              }}
              className={`w-full p-2 bg-white/10 h-24 ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
              placeholder="Add additional context to condition the analysis..."
              disabled={isAnalyzing}
            />
          </div>

          <div className="space-y-2">
            {/* Token estimate and warning */}
            <div className="text-sm font-mono border border-white/20 p-2 bg-black/20">
              <div className="grid grid-cols-2 gap-x-4 mb-1">
                <span className="text-white">Estimated tokens:</span>
                <span className={tokenEstimate > getModelTokenLimit(params.model) * 2 ? 'text-red-400' : 'text-white'}>
                  {tokenEstimate.toLocaleString()}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-4">
                <span className="text-white">Model capacity:</span>
                <span className="text-white">
                  {getModelTokenLimit(params.model).toLocaleString()}
                </span>
              </div>
              
              {tokenEstimate > getModelTokenLimit(params.model) * 2 && (
                <div className="mt-2 p-2 border border-red-500/20 bg-red-500/10 text-red-500">
                  ⚠️ Error: Token estimate too high for model capacity. Try:
                  <ul className="list-disc ml-4 mt-1 text-xs">
                    <li>Reducing the time range</li>
                    <li>Increasing the periodicity</li>
                    <li>Reducing the number of clusters</li>
                    <li>Using a model with higher capacity</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Show all validation messages */}
            {getValidationMessages().length > 0 && (
              <div className="mt-2 text-red-500 text-sm bg-red-500/10 border border-red-500/20 p-2 rounded space-y-1">
                {getValidationMessages().map((message, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-2">⚠️</span>
                    <span>{message}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Analyze button */}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!isValidRange() || isAnalyzing}
              className={`w-full mt-4 p-2 ${
                !isValidRange() || isAnalyzing
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
              title={getValidationMessages().join('\n') || "Start analysis"}
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze'}
            </button>

            {isAnalyzing && (
              <button
                onClick={onStop}
                className="w-full p-2 bg-white/10 hover:bg-white/20 border border-white/20"
              >
                STOP ANALYSIS
              </button>
            )}

            {error && error.includes('Token limit reached') && !isAnalyzing && (
              <div className="text-red-500 text-sm mt-2 p-2 border border-red-500/20 bg-red-500/10">
                ⚠️ Analysis failed: The response was incomplete. Try:
                <ul className="list-disc ml-4 mt-1 text-xs">
                  <li>Reducing the number of clusters</li>
                  <li>Using a model with higher capacity</li>
                </ul>
              </div>
            )}
          </div>
        </form>

        {isAnalyzing && (
          <div className="text-center text-white/50 animate-pulse">
            Analyzing cultural eigenclusters... this may take a few minutes
          </div>
        )}

        <div className="mt-4 text-xs opacity-50">
          SYSTEM STATUS: {isAnalyzing ? 'ANALYZING' : 'READY FOR INPUT'}
        </div>
      </div>
    </div>
  );
};

export { ParameterConfig };
export type { ParameterConfigProps, AnalysisParams }; 