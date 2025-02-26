import React, { useState, useEffect } from 'react';
import { presets, PresetConfig } from '@/lib/presets';
import { ModelType } from './EigenclusterTerminal';  // Import the shared type
import { NumericFormat } from 'react-number-format';

interface ParameterConfigProps {
  onSubmit: (params: AnalysisParams) => void;
  isAnalyzing: boolean;
  onStop: () => void;
  onPresetSelect: (preset: PresetConfig | null) => void;
  error?: string;
  onParameterChange?: (params: AnalysisParams) => void;
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
  { value: 'claude', label: 'Claude 3.5 Sonnet', disabled: true, disabledReason: 'Rate limited - not suitable for concurrent users' }
];

const estimateTokensPerYear = (clusters: number) => {
  // Per cluster per time period:
  const tokensPerManifestation = 100;    // Each manifestation is ~100 tokens (was 150)
  const manifestationsPerPeriod = 4;      // 4 manifestations per period
  const periodDescription = 150;          // Period description ~150 tokens (was 200)
  const periodsPerCluster = 6;            // 6 time periods (2000-2025 by 5 years)
  
  // Per cluster fixed costs:
  const clusterName = 20;                 // Cluster name ~20 tokens (was 25)
  const clusterDescription = 200;         // Cluster description ~200 tokens (was 300)
  
  // Metadata section
  const metadataPerCluster = 35;          // Each cluster in metadata list ~35 tokens (was 50)
  const metadataBase = 150;               // Base metadata text ~150 tokens (was 200)
  
  // Calculate total
  const tokensPerPeriod = (tokensPerManifestation * manifestationsPerPeriod) + periodDescription;
  const tokensPerCluster = clusterName + clusterDescription + (tokensPerPeriod * periodsPerCluster);
  
  // Total for all clusters plus metadata
  return (tokensPerCluster * clusters) + (metadataPerCluster * clusters) + metadataBase;
};

const getModelTokenLimit = (model: ModelType): number => {
  const limits: Record<ModelType, number> = {
    'claude': 8192,
    'deepseek': 4000,      // Halved from 8000 to account for CoT
    'deepseek_chat': 8192,
    'gpt4o': 16384,
    'gpt4o-mini': 16384,
    'o1-mini': 32768      // Halved from 65536 to account for CoT
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
  onParameterChange
}) => {
  const [mounted, setMounted] = useState(false);
  const [params, setParams] = useState<AnalysisParams>({
    startYear: '2000',
    endYear: '2025',
    clusterStart: 1,
    clusterEnd: 3,
    periodicity: 5,
    model: 'deepseek_chat'
  });
  const [model, setModel] = useState<ModelType>('deepseek_chat');
  const [context, setContext] = useState<string>('');
  const [selectedPreset, setSelectedPreset] = useState<string>('');
  const [tokenEstimate, setTokenEstimate] = useState<number>(0);
  const [exceedsLimit, setExceedsLimit] = useState<boolean>(false);

  // Set initial state after mount
  useEffect(() => {
    setMounted(true);
    setParams({
      startYear: '2000',
      endYear: '2025',
      clusterStart: 1,
      clusterEnd: 3,
      periodicity: 5,
      model: 'deepseek_chat'
    });
  }, []);

  // Calculate token estimate
  useEffect(() => {
    const estimate = estimateTokensPerYear(params.clusterEnd - params.clusterStart + 1);
    setTokenEstimate(estimate);
    setExceedsLimit(estimate > getModelTokenLimit(params.model));
  }, [params.clusterStart, params.clusterEnd, params.model]);

  // Add this near the top of your component function
  React.useEffect(() => {
    const handleResetParameters = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) {
        console.log("Resetting parameters to:", detail);
        setParams({
          startYear: detail.startYear,
          endYear: detail.endYear,
          clusterStart: detail.clusterStart,
          clusterEnd: detail.clusterEnd,
          periodicity: detail.periodicity,
          model: detail.model,
        });
        
        if (detail.context) {
          setContext(detail.context);
        }
      }
    };

    // Add event listener
    document.addEventListener('reset-parameters', handleResetParameters);
    
    // Clean up
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

  // Update any parameter input handler to clear preset selection
  const handleParameterChange = (
    update: Partial<AnalysisParams>,
    clearPreset: boolean = true
  ) => {
    if (clearPreset) {
      setSelectedPreset('');
      onPresetSelect(null);
    }

    // Validate year inputs
    if ('startYear' in update) {
      update.startYear = Math.max(-10000, Math.min(9999, parseInt(update.startYear) || 0)).toString();
    }
    if ('endYear' in update) {
      update.endYear = Math.max(-10000, Math.min(9999, parseInt(update.endYear) || 0)).toString();
    }

    // Validate cluster inputs
    if ('clusterStart' in update) {
      update.clusterStart = Math.max(1, Math.floor(Math.abs(update.clusterStart)));
      // Ensure clusterEnd stays greater than new clusterStart
      if (params.clusterEnd <= update.clusterStart) {
        setParams(prev => ({
          ...prev,
          clusterEnd: update.clusterStart + 1
        }));
      }
    }
    if ('clusterEnd' in update) {
      update.clusterEnd = Math.max(
        params.clusterStart + 1, 
        Math.floor(Math.abs(update.clusterEnd))
      );
    }

    // Update local state
    const newParams = { ...params, ...update };
    setParams(newParams);
    
    // Notify parent component
    if (onParameterChange) {
      onParameterChange(newParams);
    }
  };

  const handlePresetSelect = (presetId: string) => {
    setSelectedPreset(presetId);
    const preset = presets.find(p => p.id === presetId);
    if (preset) {
      // Update form state without clearing preset
      handleParameterChange({
        startYear: preset.parameters.startYear,
        endYear: preset.parameters.endYear,
        clusterStart: preset.parameters.clusterStart,
        clusterEnd: preset.parameters.clusterEnd,
        periodicity: preset.parameters.periodicity,
        model: preset.parameters.model as ModelType,
      }, false);
      setContext(preset.parameters.context || '');
      
      // Trigger the preset selection
      onPresetSelect(preset);
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
      if (params.clusterStart < 1 || params.clusterEnd < 1) {
        messages.push("Clusters must be positive numbers");
      }
      if (params.clusterEnd <= params.clusterStart) {
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
    const numValue = parseInt(value);
    if (value === '' || (numValue > 0 && !isNaN(numValue))) {
      setParams({
        ...params,
        [field]: value === '' ? '' : numValue
      });
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
    <div className="flex-1 space-y-4 border border-white/20 p-4">
      <div className="text-center mb-6 text-sm">
        === PARAMETER CONFIGURATION ===
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
            <input
              type="number"
              min="1"
              value={params.clusterStart}
              onChange={(e) => handleParameterChange({ clusterStart: parseInt(e.target.value) || 1 })}
              className={`w-full p-2 bg-white/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'
              }`}
              disabled={isAnalyzing}
              placeholder="Enter cluster start"
            />
          </div>
          <div>
            <label className="block mb-2">Cluster End</label>
            <input
              type="number"
              min={params.clusterStart + 1}
              value={params.clusterEnd}
              onChange={(e) => handleParameterChange({ clusterEnd: parseInt(e.target.value) || params.clusterStart + 1 })}
              className={`w-full p-2 bg-white/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'
              }`}
              disabled={isAnalyzing}
              placeholder="Enter cluster end"
            />
          </div>
          <div>
            <label className="block mb-2">Periodicity (years)</label>
            <input
              type="number"
              value={params.periodicity}
              onChange={(e) => handleParameterChange({ periodicity: parseInt(e.target.value) || 1 })}
              className={`w-full p-2 bg-white/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
              disabled={isAnalyzing}
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

      <div className="flex flex-col space-y-2">
        <label className="text-white/70">Presets</label>
        <select 
          className={`bg-black text-white border border-white/20 p-2 rounded ${
            isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onChange={(e) => handlePresetSelect(e.target.value)}
          value={selectedPreset}
          disabled={isAnalyzing}
        >
          <option value="">Select a preset configuration...</option>
          {presets.map(preset => (
            <option key={preset.id} value={preset.id}>
              {preset.name} - {preset.description}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export { ParameterConfig };
export type { ParameterConfigProps, AnalysisParams }; 