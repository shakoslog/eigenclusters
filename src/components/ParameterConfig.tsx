import React, { useState, useEffect } from 'react';
import { presets, PresetConfig } from '@/lib/presets';
import { ModelType } from './EigenclusterTerminal';  // Import the shared type

interface ParameterConfigProps {
  onSubmit: (params: AnalysisParams) => void;
  isAnalyzing: boolean;
  onStop: () => void;
  onPresetSelect: (preset: PresetConfig | null) => void;
}

interface AnalysisParams {
  startYear: number;
  endYear: number;
  clusterStart: number;
  clusterEnd: number;
  periodicity: number;
  context?: string;
  model: ModelType;
}

const modelOptions: { value: ModelType; label: string }[] = [
  { value: 'claude', label: 'Claude 3.5 Sonnet' },
  { value: 'deepseek', label: 'DeepSeek Reasoner' },
  { value: 'deepseek_chat', label: 'DeepSeek Chat' },
  { value: 'gpt4o', label: 'GPT-4 Turbo (Aug 2024)' },
  { value: 'gpt4o-mini', label: 'GPT-4 Turbo Mini (Jul 2024)' },
  { value: 'o1-mini', label: 'O1-Mini (65k context)' }
];

const ParameterConfig: React.FC<ParameterConfigProps> = ({ onSubmit, isAnalyzing, onStop, onPresetSelect }) => {
  const [mounted, setMounted] = useState(false);
  const [params, setParams] = useState<AnalysisParams>({
    startYear: 2000,
    endYear: 2025,
    clusterStart: 1,
    clusterEnd: 3,
    periodicity: 5,
    model: 'deepseek_chat'
  });
  const [model, setModel] = useState<ModelType>('deepseek_chat');
  const [context, setContext] = useState<string>('');
  const [selectedPreset, setSelectedPreset] = useState<string>('');

  // Set initial state after mount
  useEffect(() => {
    setMounted(true);
    setParams({
      startYear: 2000,
      endYear: 2025,
      clusterStart: 1,
      clusterEnd: 3,
      periodicity: 5,
      model: 'deepseek_chat'
    });
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
      // Call onPresetSelect with null to clear preset data
      onPresetSelect(null);
    }
    setParams(prev => ({
      ...prev,
      ...update
    }));
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

  return (
    <div className="flex-1 space-y-4 border border-white/20 p-4">
      <div className="text-center mb-6 text-sm">
        === PARAMETER CONFIGURATION ===
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Start Year (negative for BCE)</label>
            <input
              type="number"
              value={params.startYear.toString()}
              onChange={e => handleParameterChange({ startYear: parseInt(e.target.value) || 0 })}
              className="w-full bg-white/10 p-2 border border-white/20"
              step="1"
            />
          </div>
          <div>
            <label className="block mb-1">End Year</label>
            <input
              type="number"
              value={params.endYear.toString()}
              onChange={e => handleParameterChange({ endYear: parseInt(e.target.value) || 0 })}
              className="w-full bg-white/10 p-2 border border-white/20"
              step="1"
            />
          </div>
          <div>
            <label className="block mb-2">Cluster Start</label>
            <input
              type="number"
              value={params.clusterStart.toString()}
              min={1}
              onChange={e => handleParameterChange({ clusterStart: parseInt(e.target.value) || 1 })}
              className="w-full bg-white/10 p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Cluster End</label>
            <input
              type="number"
              value={params.clusterEnd.toString()}
              min={params.clusterStart}
              onChange={e => handleParameterChange({ clusterEnd: parseInt(e.target.value) || params.clusterStart })}
              className="w-full bg-white/10 p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Periodicity (years)</label>
            <input
              type="number"
              value={params.periodicity.toString()}
              min={1}
              onChange={e => handleParameterChange({ periodicity: parseInt(e.target.value) || 1 })}
              className="w-full bg-white/10 p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Model</label>
            <select
              className="bg-black text-white border border-white/20 p-2 rounded"
              value={model}
              onChange={(e) => handleModelChange(e.target.value as ModelType)}
            >
              {modelOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-sm flex justify-between">
            <span>[CONTEXT]</span>
            <span className="opacity-50 text-xs">Optional geographic/cultural context</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">&gt;</span>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              className="w-full h-32 bg-black text-white border border-white/20 p-2"
              placeholder="Optional: Add context to condition the analysis..."
            />
          </div>
        </div>

        <div className="space-y-2">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isAnalyzing}
            className={`w-full p-2 ${
              isAnalyzing 
                ? 'bg-white/5 cursor-not-allowed' 
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            {isAnalyzing ? 'ANALYZING...' : 'ANALYZE'}
          </button>

          {isAnalyzing && (
            <button
              onClick={onStop}
              className="w-full p-2 bg-white/10 hover:bg-white/20 border border-white/20"
            >
              STOP ANALYSIS
            </button>
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
          className="bg-black text-white border border-white/20 p-2 rounded"
          onChange={(e) => handlePresetSelect(e.target.value)}
          value={selectedPreset}
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