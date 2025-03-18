import React, { useState, useEffect } from 'react';
import ParentComponent from './ParentComponent';

const TestComponent = () => {
  const [showExplanation, setShowExplanation] = useState(true);
  
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/20 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">EIGENCULTURE</h1>
          <nav className="flex gap-4">
            <a 
              href="https://github.com" 
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
      {showExplanation && (
        <div className="border-b border-white/20 relative">
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
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:w-1/3">
                <div className="bg-white/5 border border-white/10 p-4 rounded">
                  <div className="mb-3 text-center font-medium">HOW TO READ THE VISUALIZATION</div>
                  <div className="flex justify-center mb-4">
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
        </div>
      )}
      
      {/* Toggle button - always visible if explanation is hidden */}
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
      
      {/* Include the original ParentComponent */}
      <div className="container mx-auto">
        <ParentComponent />
      </div>
      
      {/* Footer */}
      <footer className="border-t border-white/20 p-4 mt-12">
        <div className="container mx-auto text-center text-white/50 text-sm">
          © 2023 Cultural Eigenanalysis Project • Built with Next.js and Language Models
        </div>
      </footer>
    </div>
  );
};

export default TestComponent; 