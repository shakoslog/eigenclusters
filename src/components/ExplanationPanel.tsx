import React, { useState, useEffect } from 'react';
import { getPresets } from '@/lib/presets';

interface ExplanationPanelProps {
  onLoadExample?: (presetId?: string) => void;
  presets?: Array<{id: string, name: string, description?: string}>;
}

const VisualizationGuide = () => {
  return (
    <div className="relative h-48 w-full bg-black overflow-hidden font-mono text-xs">
      {/* Grid background - matches the terminal style */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-8">
        {Array(96).fill(0).map((_, i) => (
          <div key={i} className="border-t border-l border-white/10" />
        ))}
      </div>
      
      {/* Y-axis labels */}
      <div className="absolute left-2 top-0 h-full flex flex-col justify-between py-2 text-white/60">
        <div>9</div>
        <div>8</div>
        <div>7</div>
        <div>6</div>
        <div>5</div>
        <div>4</div>
        <div>3</div>
        <div>2</div>
        <div>1</div>
        <div>0</div>
      </div>
      
      {/* Chart title */}
      <div className="absolute top-1 w-full text-center text-white/80">
        [Interactive Chart. Click on the lines and select a cluster to see more information]
      </div>
      
      {/* Chart lines with square markers */}
      <div className="absolute inset-0 pt-8 pb-6 px-8">
        {/* Line 1 - solid */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <polyline 
            points="0,60 50,55 100,45 150,35 200,20 250,25 300,35" 
            stroke="white" 
            strokeWidth="1.5" 
            fill="none" 
          />
          {[0, 50, 100, 150, 200, 250, 300].map((x, i) => {
            const y = [60, 55, 45, 35, 20, 25, 35][i];
            return (
              <rect key={i} x={x-3} y={y-3} width="6" height="6" fill="black" stroke="white" strokeWidth="1.5" />
            );
          })}
        </svg>
        
        {/* Line 2 - dashed */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <polyline 
            points="0,70 50,65 100,55 150,45 200,30 250,35 300,40" 
            stroke="white" 
            strokeWidth="1.5" 
            fill="none" 
            strokeDasharray="5,5"
          />
          {[0, 50, 100, 150, 200, 250, 300].map((x, i) => {
            const y = [70, 65, 55, 45, 30, 35, 40][i];
            return (
              <rect key={i} x={x-3} y={y-3} width="6" height="6" fill="black" stroke="white" strokeWidth="1.5" />
            );
          })}
        </svg>
        
        {/* Line 3 - dotted */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <polyline 
            points="0,80 50,75 100,65 150,55 200,45 250,50 300,55" 
            stroke="white" 
            strokeWidth="1.5" 
            fill="none" 
            strokeDasharray="2,2"
          />
          {[0, 50, 100, 150, 200, 250, 300].map((x, i) => {
            const y = [80, 75, 65, 55, 45, 50, 55][i];
            return (
              <rect key={i} x={x-3} y={y-3} width="6" height="6" fill="black" stroke="white" strokeWidth="1.5" />
            );
          })}
        </svg>
      </div>
      
      {/* X-axis labels for years */}
      <div className="absolute bottom-1 w-full flex justify-between px-10 text-white/60">
        <div>1000 CE</div>
        <div>1200 CE</div>
        <div>1400 CE</div>
        <div>1600 CE</div>
        <div>1800 CE</div>
        <div>2000 CE</div>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-8 w-full text-center text-white/80 flex justify-center gap-6 text-[8px]">
        <div className="flex items-center">
          <span className="inline-block w-4 h-0 border-t border-white mr-1"></span>
          <span>1_cluster_name</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-4 h-0 border-t border-white border-dashed mr-1"></span>
          <span>2_another_cluster</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-4 h-0 border-t border-white border-dotted mr-1"></span>
          <span>3_third_cluster</span>
        </div>
      </div>
      
      {/* Data point highlight - subtle */}
      <div className="absolute top-[75px] right-[85px] w-6 h-6 border border-white/60 animate-pulse"></div>
    </div>
  );
};

const ExplanationPanel: React.FC<ExplanationPanelProps> = ({ onLoadExample, presets = [] }) => {
  const [showExplanation, setShowExplanation] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [availablePresets, setAvailablePresets] = useState<Array<{id: string, name: string, description?: string}>>(presets);
  
  // Load presets on mount if none were provided
  useEffect(() => {
    if (presets.length === 0) {
      const loadPresets = async () => {
        try {
          const loadedPresets = await getPresets();
          setAvailablePresets(loadedPresets);
          console.log("Loaded presets:", loadedPresets.map(p => p.name));
        } catch (error) {
          console.error("Error loading presets:", error);
        }
      };
      
      loadPresets();
    }
  }, [presets]);
  
  // Load user preference from localStorage on mount
  useEffect(() => {
    try {
      const savedPreference = localStorage.getItem('showExplanation');
      if (savedPreference !== null) {
        setShowExplanation(savedPreference === 'true');
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);
  
  // Save preference when it changes
  useEffect(() => {
    try {
      localStorage.setItem('showExplanation', showExplanation.toString());
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [showExplanation]);

  // Function to scroll to the tool section
  const scrollToTool = () => {
    // Find the tool element
    const toolElement = document.getElementById('tool-section');
    if (toolElement) {
      toolElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if no element with that ID exists
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };
  
  // Enhanced load example function that selects a random preset
  const handleLoadExample = () => {
    if (availablePresets.length === 0) {
      console.log("Cannot load example: no presets available");
      return;
    }
    
    setIsLoading(true);
    console.log("handleLoadExample called, presets available:", availablePresets.length);
    
    // Select a random preset
    const randomIndex = Math.floor(Math.random() * availablePresets.length);
    const randomPreset = availablePresets[randomIndex];
    setSelectedPreset(randomPreset.id);
    console.log("Selected random preset:", randomPreset.name, randomPreset.id);
    
    // Dispatch a custom event that the terminal component can listen for
    const customEvent = new CustomEvent('load-preset', { 
      detail: { presetName: randomPreset.name }
    });
    document.dispatchEvent(customEvent);
    console.log("Dispatched load-preset event with:", randomPreset.name);
    
    // Show loading state briefly, then scroll to tool
    setTimeout(() => {
      setIsLoading(false);
      scrollToTool();
    }, 800);
  };

  // If explanation is hidden, show only the toggle button
  if (!showExplanation) {
    return (
      <div className="container mx-auto px-4 py-2">
        <button
          onClick={() => setShowExplanation(true)}
          className="text-sm text-white/50 hover:text-white flex items-center gap-1"
        >
          <span>↓</span> Show introduction
        </button>
      </div>
    );
  }

  return (
    <div className="border-b border-white/20 relative">
      <div className="container mx-auto px-6 md:px-12 py-10 md:py-14">
        <button
          onClick={() => setShowExplanation(false)}
          className="absolute top-5 right-6 text-white/50 hover:text-white"
          aria-label="Close explanation"
        >
          ×
        </button>
        
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-light tracking-wide">Cultural Eigenanalysis: Mapping Historical Patterns</h1>
          <p className="text-white/80 mb-8 text-lg max-w-3xl">
            Discover how cultural forces evolve and intersect through history with AI-powered pattern analysis.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-xl mb-4 text-white/90 font-medium">Methodology</h3>
              <div className="space-y-4">
                <p className="text-white/70 leading-relaxed">
                  Our approach draws from mathematical eigenvector analysis applied to cultural patterns. 
                  The AI analyzes historical data to identify clusters of related concepts, events, and developments
                  that form distinct trajectories over time.
                </p>
                <p className="text-white/70 leading-relaxed">
                  By treating cultural evolution as a complex system with multiple interacting forces,
                  we can map the relative influence of different patterns across time periods.
                </p>
              </div>
              
              <div className="mt-8">
                <button
                  onClick={() => {
                    console.log("Example button clicked");
                    handleLoadExample();
                  }}
                  disabled={isLoading || availablePresets.length === 0}
                  className={`px-6 py-3 bg-white/10 hover:bg-white/20 transition border border-white/30 text-lg tracking-wide group relative ${isLoading ? 'opacity-70' : ''}`}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading Random Example...
                    </span>
                  ) : (
                    <>
                      Explore Random Example
                      <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                    </>
                  )}
                </button>
                {!isLoading && (
                  <p className="text-white/50 text-sm mt-2">
                    Try a random historical period from our curated examples
                  </p>
                )}
                {selectedPreset && !isLoading && (
                  <div className="mt-4 py-2 px-3 bg-white/5 border border-white/10 text-white/70 text-sm rounded-sm">
                    Loaded: {availablePresets.find(p => p.id === selectedPreset)?.name || selectedPreset}
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl mb-4 text-white/90 font-medium">How to Read the Visualization</h3>
              <div className="border border-white/20 bg-black/40 rounded-sm overflow-hidden">
                <VisualizationGuide />
              </div>
              <ul className="text-sm space-y-3 text-white/70 mt-5 ml-1">
                <li className="flex items-baseline gap-2">
                  <span className="text-white/90">•</span> 
                  <span><strong className="text-white/90">Lines:</strong> Each colored line represents a cultural cluster</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-white/90">•</span> 
                  <span><strong className="text-white/90">Height:</strong> Shows relative influence at that point in time</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-white/90">•</span> 
                  <span><strong className="text-white/90">Points:</strong> Click to see manifestations in that year</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-white/90">•</span> 
                  <span><strong className="text-white/90">Legend:</strong> Identifies each cluster pattern</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Clickable scroll indicator */}
          <div 
            className="mt-12 text-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={scrollToTool}
            role="button"
            aria-label="Scroll to tool"
          >
            <p className="text-white/60 mb-3">Scroll down to explore the tool</p>
            <div className="animate-bounce inline-block">
              <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Clickable peek element */}
      <div 
        className="h-12 bg-gradient-to-b from-transparent to-white/5 relative overflow-hidden cursor-pointer"
        onClick={scrollToTool}
        role="button"
        aria-label="Scroll to tool"
      >
        <div className="absolute inset-x-0 -bottom-2 h-10 flex items-center justify-center space-x-12 text-white/40 text-xs font-mono">
          <span>CHART</span>
          <span>DATA</span>
          <span>CLUSTERS</span>
          <span>PROMPT</span>
        </div>
      </div>
      
      {/* Add global styles for the highlight effect */}
      <style jsx global>{`
        @keyframes highlight-pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        
        .highlight-pulse {
          animation: highlight-pulse 1.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ExplanationPanel; 