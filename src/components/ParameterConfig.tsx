import React, { useState, useEffect } from 'react';

interface ParameterConfigProps {
  onSubmit: (params: {
    startYear: number;
    endYear: number;
    clusterStart: number;
    clusterEnd: number;
    periodicity: number;
    context?: string;
    model: 'deepseek' | 'deepseek_chat' | 'gpt4o-mini';
  }) => void;
  isAnalyzing?: boolean;
  onStop?: () => void;
}

interface AnalysisParams {
  startYear: number;
  endYear: number;
  clusterStart: number;
  clusterEnd: number;
  periodicity: number;
  context?: string;
  model: 'deepseek' | 'deepseek_chat' | 'gpt4o-mini';
}

const modelOptions = [
  { value: 'claude', label: 'CLAUDE' },
  { value: 'gpt4', label: 'GPT-4' },
  { value: 'deepseek', label: 'DEEPSEEK' },
  { value: 'gpt4o-mini', label: 'GPT-4o Mini (128k context)' },
  { value: 'deepseek_chat', label: 'DEEPSEEK CHAT' }
];

export const ParameterConfig: React.FC<{ 
  onSubmit: (params: AnalysisParams) => void,
  isAnalyzing?: boolean,
  onStop?: () => void
}> = ({ onSubmit, isAnalyzing, onStop }) => {
  // Start with null initial state
  const [mounted, setMounted] = useState(false);
  const [params, setParams] = useState<AnalysisParams>({
    startYear: 2000,  // Default to a negative year to show it's supported
    endYear: 2025,
    clusterStart: 1,
    clusterEnd: 3,
    periodicity: 5,
    model: 'gpt4o-mini'
  });
  const [model, setModel] = useState<'deepseek' | 'deepseek_chat' | 'gpt4o-mini'>('gpt4o-mini');

  // Set initial state after mount
  useEffect(() => {
    setMounted(true);
    setParams({
      startYear: 2000,
      endYear: 2025,
      clusterStart: 1,
      clusterEnd: 3,
      periodicity: 5,
      model: 'gpt4o-mini'
    });
  }, []);

  // Don't render until mounted
  if (!mounted) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(params);
  };

  // Update model selection handler to also update params
  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newModel = e.target.value as 'deepseek' | 'deepseek_chat' | 'gpt4o-mini';
    setModel(newModel);
    setParams(prev => ({
      ...prev,
      model: newModel
    }));
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
              value={params.startYear}
              onChange={e => setParams(prev => ({ ...prev, startYear: parseInt(e.target.value) || 0 }))}
              className="w-full bg-white/10 p-2 border border-white/20"
              step="1"  // Allow any integer
            />
          </div>
          <div>
            <label className="block mb-1">End Year</label>
            <input
              type="number"
              value={params.endYear}
              onChange={e => setParams(prev => ({ ...prev, endYear: parseInt(e.target.value) || 0 }))}
              className="w-full bg-white/10 p-2 border border-white/20"
              step="1"  // Allow any integer
            />
          </div>
          <div>
            <label className="block mb-2">Cluster Start</label>
            <input
              type="number"
              value={params.clusterStart}
              min={1}
              onChange={(e) => setParams({
                ...params,
                clusterStart: parseInt(e.target.value)
              })}
              className="w-full bg-white/10 p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Cluster End</label>
            <div className="relative">
              <input
                type="number"
                value={params.clusterEnd}
                min={params.clusterStart}
                onChange={(e) => setParams({
                  ...params,
                  clusterEnd: parseInt(e.target.value)
                })}
                className="w-full bg-white/10 p-2"
              />
              {params.clusterEnd > 50 && (
                <div className="absolute top-2 right-2 text-xs text-yellow-500">
                  warning: &gt;50 is unstable
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="block mb-2">Periodicity (years)</label>
            <input
              type="number"
              value={params.periodicity}
              min={1}
              onChange={(e) => setParams({
                ...params,
                periodicity: parseInt(e.target.value)
              })}
              className="w-full bg-white/10 p-2"
            />
          </div>
          <div>
            <label className="block mb-2">Model</label>
            <select
              value={model}
              onChange={handleModelChange}
              className="w-full bg-white/10 p-2"
            >
              <option value="deepseek">DeepSeek</option>
              <option value="deepseek_chat">DeepSeek Chat</option>
              <option value="gpt4o-mini">GPT-4o Mini</option>
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
            <input
              type="text"
              value={params.context}
              onChange={(e) => setParams({
                ...params,
                context: e.target.value
              })}
              placeholder="e.g., North India, Western Europe..."
              className="bg-black border border-white px-2 py-1 w-full focus:outline-none focus:border-white text-white"
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
    </div>
  );
}; 