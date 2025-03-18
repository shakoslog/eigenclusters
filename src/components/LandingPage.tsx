import React, { useState, useEffect } from 'react';
import { ParameterConfig } from './ParameterConfig';
import { AnalysisChart } from './AnalysisChart';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import type { PresetConfig } from '@/lib/presets/types';
import type { AnalysisParams } from './ParameterConfig';

interface LandingPageProps {
  onAnalysisSubmit: (params: AnalysisParams) => void;
  isAnalyzing: boolean;
  onStop: () => void;
  analysisData: any | null;
  error: string | null;
  presets: PresetConfig[];
}

const LandingPage: React.FC<LandingPageProps> = ({
  onAnalysisSubmit,
  isAnalyzing,
  onStop,
  analysisData,
  error,
  presets,
}) => {
  // State for explanation panel visibility
  const [showExplanation, setShowExplanation] = useState(true);
  const [shouldValidate, setShouldValidate] = useState(true);
  
  // Load user preference from localStorage on mount
  useEffect(() => {
    const savedPreference = localStorage.getItem('showExplanation');
    if (savedPreference !== null) {
      setShowExplanation(savedPreference === 'true');
    }
  }, []);
  
  // Save preference when it changes
  useEffect(() => {
    localStorage.setItem('showExplanation', showExplanation.toString());
  }, [showExplanation]);

  // Load example analysis
  const loadExampleAnalysis = () => {
    // Find the first preset or a specific one you want to use as an example
    const examplePreset = presets.find(p => p.id === 'tech_evolution') || presets[0];
    if (examplePreset) {
      // Dispatch custom event to update parameters based on preset
      const event = new CustomEvent('reset-parameters', {
        detail: {
          ...examplePreset.parameters,
          presetId: examplePreset.id
        }
      });
      document.dispatchEvent(event);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b border-white/20 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">EIGENCULTURE</h1>
          <nav className="flex gap-4">
            <a 
              href="https://github.com/yourusername/eigenculture" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white"
            >
              GitHub
            </a>
            <a 
              href="#about" 
              className="text-white/70 hover:text-white"
            >
              About
            </a>
          </nav>
        </div>
      </header>
      
      {/* Explanation Panel */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-white/20 relative overflow-hidden"
          >
            <div className="container mx-auto p-4 md:p-6">
              <div className="md:flex gap-8 items-start">
                <div className="md:w-2/3">
                  <h2 className="text-xl md:text-2xl mb-2">Cultural Eigenanalysis: Mapping Historical Patterns</h2>
                  <p className="text-white/80 mb-4">
                    Discover how cultural forces evolve and intersect through history with AI-powered pattern analysis.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg mb-1">What are eigenclusters?</h3>
                      <p className="text-white/70 text-sm">
                        Cultural eigenclusters are recurring patterns that represent influential forces shaping history. 
                        Like gravitational fields, these clusters pull events and developments into their orbit,
                        creating traceable trajectories across time.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">How does it work?</h3>
                      <p className="text-white/70 text-sm">
                        This tool uses advanced language models to identify and track cultural patterns across your selected time period.
                        Set your parameters, run the analysis, and explore how different cultural forces have waxed and waned over time.
                      </p>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={loadExampleAnalysis}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 transition border border-white/30"
                      >
                        Load Example Analysis
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:w-1/3">
                  <div className="bg-white/5 border border-white/10 p-4 rounded">
                    <div className="mb-3 text-center font-medium">HOW TO READ THE VISUALIZATION</div>
                    <div className="flex justify-center mb-4">
                      {/* Replace with your actual diagram */}
                      <div className="h-40 w-full bg-black/50 border border-white/30 flex items-center justify-center">
                        <div className="text-sm opacity-70">
                          [Visualization Diagram]
                        </div>
                      </div>
                    </div>
                    <ul className="text-xs space-y-2 text-white/70">
                      <li>• <strong>Lines:</strong> Each colored line represents a cultural cluster</li>
                      <li>• <strong>Height:</strong> Shows relative influence at that point in time</li>
                      <li>• <strong>Points:</strong> Click to see manifestations in that year</li>
                      <li>• <strong>Legend:</strong> Identifies each cluster pattern</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowExplanation(false)}
              className="absolute top-4 right-4 opacity-50 hover:opacity-100 transition"
              aria-label="Close explanation"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Toggle button - always visible */}
      {!showExplanation && (
        <div className="container mx-auto px-4 py-2">
          <button
            onClick={() => setShowExplanation(true)}
            className="text-sm text-white/50 hover:text-white flex items-center gap-1"
          >
            <span>↓</span> Show explanation
          </button>
        </div>
      )}
      
      {/* Main Content */}
      <main className="container mx-auto p-4">
        <div className="md:flex gap-6">
          {/* Parameter Configuration */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <ParameterConfig
              onSubmit={onAnalysisSubmit}
              isAnalyzing={isAnalyzing}
              onStop={onStop}
              onPresetSelect={(preset, clearResult) => {
                // Pass the preset directly to parent component
                // The parent component's handlePresetSelect will handle it
                preset && console.log('Selected preset in LandingPage:', preset.id);
              }}
              error={error || undefined}
              shouldValidate={shouldValidate}
              onValidateChange={setShouldValidate}
            />
          </div>
          
          {/* Analysis Results */}
          <div className="md:w-2/3">
            {isAnalyzing ? (
              <div className="border border-white/20 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-xl">ANALYZING CULTURAL PATTERNS</div>
                  <div className="text-white/50 text-sm animate-pulse">
                    This may take a few minutes depending on your parameters...
                  </div>
                </div>
              </div>
            ) : analysisData ? (
              <div className="border border-white/20">
                <AnalysisChart
                  data={analysisData.items?.map((item: any) => ({
                    year: item.year,
                    clusters: item.clusters.map((cluster: any) => ({
                      clusterName: cluster.name,
                      percentageContribution: cluster.score,
                      description: cluster.description,
                      manifestations: cluster.manifestations
                    }))
                  }))}
                  onPointSelect={() => {}} // Handle point selection
                />
              </div>
            ) : (
              <div className="border border-white/20 p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-xl">AWAITING PARAMETERS</div>
                  <div className="text-white/50 text-sm">
                    Configure your analysis parameters and click "Analyze" to begin
                  </div>
                </div>
              </div>
            )}
            
            {error && !isAnalyzing && (
              <div className="mt-4 border border-red-500/20 bg-red-500/10 p-4">
                <div className="text-red-400 font-medium mb-2">ANALYSIS ERROR</div>
                <div className="text-white/70 text-sm">{error}</div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-white/20 p-4 mt-12">
        <div className="container mx-auto text-center text-white/50 text-sm">
          © 2023 Cultural Eigenanalysis Project • Built with Next.js and Language Models
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 