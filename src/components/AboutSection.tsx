import React from 'react';

const AboutSection = () => {
  return (
    <div className="border-b border-white/20 bg-black/30">
      <div className="container mx-auto py-10 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl mb-6 text-center">About Cultural Eigenanalysis</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-3 text-white/90">Methodology</h3>
            <p className="text-white/70">
              Our approach draws conceptually from cluster analysis applied to cultural patterns. 
              The LLM analyzes historical data to identify clusters of related concepts, events, and developments
              that form distinct trajectories over time.
            </p>
            <p className="text-white/70 mt-3">
              By treating cultural evolution as a complex system that's embedded in the [latent space of an LLM](https://shakoist.substack.com/p/does-the-textual-corpus-for-large),
              we can map the relative influence of different patterns across time periods.
              This reveals how ideas, technologies, and movements have shaped human history.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-3 text-white/90">Applications</h3>
            <p className="text-white/70">
              The eigencluster approach offers historians, researchers, and curious minds a way to:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1 mt-2">
              <li>Identify long-term historical trends that cross traditional period boundaries</li>
              <li>Compare the relative influence of different cultural forces</li>  
              <li>Discover unexpected connections between seemingly unrelated developments</li>
              <li>Generate insights about the evolution of ideas, technologies, and social movements</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl mb-4 text-white/90">Start exploring cultural patterns</h3>
          <div className="inline-flex gap-4 bg-black/40 p-3 rounded">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2">1</div>
              <div className="text-sm">Select a preset</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2">2</div>
              <div className="text-sm">Run the analysis</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2">3</div>
              <div className="text-sm">Explore the results</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 