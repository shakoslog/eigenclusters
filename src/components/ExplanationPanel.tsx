import React, { useState, useEffect } from 'react';
import { getPresets } from '@/lib/presets';
import Link from 'next/link';

interface ExplanationPanelProps {
  onLoadExample?: (presetId?: string) => void;
  presets?: Array<{id: string, name: string, description?: string}>;
}

const VisualizationGuide = () => {
  const [showExample, setShowExample] = useState(false);
  
  return (
    <div className="relative h-48 w-full bg-black overflow-hidden font-mono text-xs">
      {/* SVG container with all chart elements */}
      <svg className="w-full h-full" preserveAspectRatio="none">
        {/* Grid pattern background */}
        <defs>
          <pattern id="guide-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" stroke="rgba(15, 54, 15, 0.7)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        
        {/* Background */}
        <rect x="0" y="0" width="100%" height="100%" fill="rgb(0, 0, 0)" />
        <rect x="0" y="0" width="100%" height="100%" fill="url(#guide-grid)" className="grid-pulse" />
        
        {/* Chart content area - widened to fill more horizontal space */}
        <g transform="translate(35, 10)">
          {/* Chart title - adjusted for wider chart */}
          <text 
            x="240" 
            y="-2" 
            fill="rgba(255, 255, 255, 0.8)" 
            fontSize="8"
            textAnchor="middle"
          >
            [Interactive Chart. Click on the lines and select a cluster to see more information]
          </text>
          
          {/* Y-axis with 12 points - extended width */}
          <g className="y-axis">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse().map((tick, i) => (
              <g key={`y-tick-${tick}`}>
                <line 
                  x1="-5" 
                  y1={i * 11} 
                  x2="480" 
                  y2={i * 11} 
                  stroke="rgba(255, 255, 255, 0.1)" 
                  strokeWidth="0.5"
                />
                <text 
                  x="-10" 
                  y={i * 11 + 3} 
                  fill="rgba(255, 255, 255, 0.6)" 
                  fontSize="8"
                  textAnchor="end"
                >
                  {tick}
                </text>
              </g>
            ))}
          </g>
          
          {/* X-axis with CE dates - widened to fill more space */}
          <g className="x-axis" transform="translate(0, 125)">
            {['2000 CE', '2004 CE', '2008 CE', '2012 CE', '2016 CE', '2020 CE'].map((year, i) => (
              <g key={`x-tick-${year}`} transform={`translate(${i * 80}, 0)`}>
                <line 
                  x1="0" 
                  y1="0" 
                  x2="0" 
                  y2="-125" 
                  stroke="rgba(255, 255, 255, 0.1)" 
                  strokeWidth="0.5"
                />
                <text 
                  x="0" 
                  y="15" 
                  fill="rgba(255, 255, 255, 0.6)" 
                  fontSize="8"
                  textAnchor="middle"
                >
                  {year}
                </text>
              </g>
            ))}
          </g>
          
          {/* Post-Modernism line and points - widened to fill more space */}
          <polyline
            points="0,23 80,37 160,51 240,65 320,79 400,93"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
          
          {[0, 80, 160, 240, 320, 400].map((x, i) => {
            const y = [23, 37, 51, 65, 79, 93][i]; // adjusted for expanded height
            return (
              <rect 
                key={`pm-point-${i}`}
                x={x - 3} 
                y={y - 3} 
                width="6" 
                height="6" 
                fill="black" 
                stroke="white" 
                strokeWidth="1"
              />
            );
          })}
          
          {/* Authenticity line and points (dashed) - widened to fill more space */}
          <polyline
            points="0,93 80,79 160,65 240,51 320,37 400,23"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="5,5"
          />
          
          {[0, 80, 160, 240, 320, 400].map((x, i) => {
            const y = [93, 79, 65, 51, 37, 23][i]; // adjusted for expanded height
            return (
              <rect 
                key={`auth-point-${i}`}
                x={x - 3} 
                y={y - 3} 
                width="6" 
                height="6" 
                fill="black" 
                stroke="white" 
                strokeWidth="1"
                className={i === 1 ? "cursor-pointer hover:stroke-2" : ""}
                onClick={() => i === 1 && setShowExample(!showExample)}
              />
            );
          })}
          
          {/* Click here indicator - moved to 2004 point */}
          {!showExample && (
            <g transform="translate(80, 69)">
              <text 
                x="0" 
                y="0" 
                fill="white" 
                fontSize="8"
                textAnchor="middle"
                opacity="0.7"
              >
                Click here
              </text>
              <line 
                x1="0" 
                y1="4" 
                x2="0" 
                y2="7" 
                stroke="white" 
                strokeWidth="0.5" 
                className="animate-pulse"
              />
            </g>
          )}
          
          {/* Example popup - adjusted position and simplified content */}
          {showExample && (
            <g transform="translate(130, 65)" className="fade-in">
              <rect 
                x="-110" 
                y="-60" 
                width="220" 
                height="70" 
                fill="black" 
                stroke="white" 
                strokeWidth="0.5"
                rx="1"
                ry="1"
              />
              
              <text 
                x="-100" 
                y="-45" 
                fill="white" 
                fontSize="9"
                fontWeight="bold"
              >
                Authenticity
              </text>
              <text 
                x="100" 
                y="-45" 
                fill="white" 
                fontSize="8"
                textAnchor="end"
                className="cursor-pointer hover:text-opacity-70"
                onClick={() => setShowExample(false)}
              >
                [CLOSE]
              </text>
              <text 
                x="-100" 
                y="-33" 
                fill="white" 
                fontSize="7.5"
              >
                Year: 2004 CE
              </text>
              
              <text 
                x="-100" 
                y="-15" 
                fill="white" 
                fontSize="8"
                fontWeight="bold"
              >
                KEY MANIFESTATIONS:
              </text>
              <text 
                x="-100" 
                y="0" 
                fill="rgba(255, 255, 255, 0.8)" 
                fontSize="7.5"
              >
                • The Office (post-ironic documentary style)
              </text>
            </g>
          )}
          
          {/* Legend moved to center of wider chart */}
          <g transform="translate(200, 165)">
            <g transform="translate(-110, 0)">
              <line x1="0" y1="0" x2="15" y2="0" stroke="white" strokeWidth="1.5" />
              <text x="20" y="3" fill="white" fontSize="8">Post-Modernism</text>
            </g>
            
            <g transform="translate(80, 0)">
              <line x1="0" y1="0" x2="15" y2="0" stroke="white" strokeWidth="1.5" strokeDasharray="5,5" />
              <text x="20" y="3" fill="white" fontSize="8">Authenticity</text>
            </g>
          </g>
        </g>
      </svg>
      
      {/* Add animations */}
      <style jsx>{`
        @keyframes gridPulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.15; }
          100% { opacity: 0.1; }
        }
        
        .grid-pulse {
          animation: gridPulse 4s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        .hover\\:stroke-2:hover {
          stroke-width: 2;
        }
        
        .hover\\:text-opacity-70:hover {
          opacity: 0.7;
        }
        
        .fade-in {
          animation: fadeIn 0.3s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
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
      {/* Close button */}
      <button
        onClick={() => setShowExplanation(false)}
        className="absolute top-5 right-6 text-white/50 hover:text-white z-10"
        aria-label="Close explanation"
      >
        ×
      </button>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-purple-900/20 to-black border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 py-8 md:py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 font-light tracking-wide">
              Eigencultures: Mapping Historical Patterns
            </h1>
            <p className="text-white/80 mb-6 text-lg max-w-3xl">
              Discover how cultural forces evolve and intersect through history.
            </p>
            
            {/* Button container with both buttons side by side */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Updated random example button to call handleLoadExample */}
              <button
                onClick={handleLoadExample}
                className="px-6 py-3 border border-white/30 bg-black/40 hover:bg-black/60 transition-colors flex items-center justify-center gap-2"
              >
                Explore interactive example →
              </button>
              
              {/* Updated detailed research button text */}
              <Link 
                href="/advanced-analysis"
                className="px-6 py-3 border border-white/30 bg-black/40 hover:bg-black/60 transition-colors flex items-center justify-center gap-2"
              >
                Explore in-depth mappings →
              </Link>
            </div>
            
            {!isLoading && (
              <p className="text-white/50 text-sm mt-2 max-w-md">
                Try a random historical period from our curated examples
              </p>
            )}
            
            {selectedPreset && !isLoading && (
              <div className="mt-4 py-2 px-3 inline-block bg-white/5 border border-white/10 text-white/70 text-sm rounded-sm">
                Loaded: {availablePresets.find(p => p.id === selectedPreset)?.name || selectedPreset}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Main content in 2-column layout */}
      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left column */}
          <div>
            <h3 className="text-xl mb-4 text-white/90 font-medium">Methodology</h3>
            <div className="space-y-4">
              <p className="text-white/70 leading-relaxed">
                Our approach draws conceptually from cluster analysis applied to cultural patterns. 
                The LLM analyzes historical data to identify clusters of related concepts, events, and developments
                that form distinct trajectories over time.
              </p>
              <p className="text-white/70 leading-relaxed">
                By treating cultural evolution as a complex system embedded within the 
                <a 
                  href="https://shakoist.substack.com/p/does-the-textual-corpus-for-large" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ml-1 text-blue-300 hover:text-blue-200 underline underline-offset-2 transition-colors"
                >
                  latent space of an LLM
                </a>,
                we can map the relative influence of different patterns across time periods.
              </p>
            </div>
          </div>
          
          {/* Right column */}
          <div>
            <h3 className="text-xl mb-4 text-white/90 font-medium">How to Read the Visualization</h3>
            <div className="border border-white/20 bg-black/40 rounded-sm overflow-hidden mb-4">
              <VisualizationGuide />
            </div>
            <ul className="text-sm space-y-2 text-white/70 ml-1 grid grid-cols-2 gap-x-4 gap-y-2">
              <li className="flex items-baseline gap-2">
                <span className="text-white/90">•</span> 
                <span><strong className="text-white/90">Lines:</strong> Cultural clusters</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-white/90">•</span> 
                <span><strong className="text-white/90">Height:</strong> Relative influence</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-white/90">•</span> 
                <span><strong className="text-white/90">Points:</strong> Click for examples</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-white/90">•</span> 
                <span><strong className="text-white/90">Legend:</strong> Cluster identifiers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* About section */}
      <div className="border-t border-white/20 bg-black/60">
        <div className="container mx-auto px-6 md:px-12 py-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl mb-6 font-light tracking-wide">About Eigencultures Analysis</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl mb-3 text-white/90 font-medium">How it Works</h3>
                <ol className="list-decimal pl-5 space-y-1.5 text-white/70 text-sm">
                  <li>Select a time period and number of clusters to analyze</li>
                  <li>Add context to condition the analysis</li>
                  <li>The system identifies key cultural patterns</li>
                  <li>View results as charts or detailed data</li>
                  <li>Avoid too many clusters to preserve token space</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl mb-3 text-white/90 font-medium">Interpretation</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-white/70 text-sm">
                  <li>Each eigencluster represents a distinct cultural pattern</li>
                  <li>Percentages show variance each cluster explains</li>
                  <li>Trends (↗↘→) show if patterns are growing or declining</li>
                  <li>Click chart points to explore specific details</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl mb-3 text-white/90 font-medium">Extensions</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  Copy the JSON output into Claude 3.7 reasoning mode for deeper insights. This actor-critic validation method was used for our presets but isn't available in the live tool due to rate limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - more compact */}
      <div className="text-center py-4 cursor-pointer hover:opacity-80 transition-opacity"
           onClick={scrollToTool}
           role="button"
           aria-label="Scroll to tool">
        <p className="text-white/60 text-sm mb-1">Scroll to explore the tool</p>
        <div className="animate-bounce inline-block">
          <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
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