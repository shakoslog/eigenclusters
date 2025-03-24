'use client';
import React, { useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import EigenclusterTerminal from '@/components/EigenclusterTerminal';
import ExplanationPanel from '@/components/ExplanationPanel';
import { getPresets } from '@/lib/presets';

export default function HomeContent() {
  const searchParams = useSearchParams();
  const sharedStateId = searchParams?.get('state');
  const [sharedState, setSharedState] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(!!sharedStateId);
  const terminalMethods = useRef<{ 
    loadPreset: (presetName: string) => boolean;
    loadShowcaseExample: () => boolean;
  } | null>(null);

  React.useEffect(() => {
    if (sharedStateId) {
      fetch(`/api/state?id=${sharedStateId}`)
        .then(res => res.json())
        .then(data => {
          setSharedState(data);
          setIsLoading(false);
        })
        .catch(err => {
          console.error('Error loading shared state:', err);
          setIsLoading(false);
        });
    }
  }, [sharedStateId]);

  // Function to load a random preset
  const loadExampleAnalysis = async () => {
    try {
      // Get all available presets
      const presets = await getPresets();
      
      // Select a random preset
      const randomIndex = Math.floor(Math.random() * presets.length);
      const randomPreset = presets[randomIndex];
      
      // Load the randomly selected preset
      if (terminalMethods.current?.loadPreset) {
        terminalMethods.current.loadPreset(randomPreset.name);
      } else {
        console.error("Terminal methods not available yet");
      }
    } catch (error) {
      console.error("Error loading random preset:", error);
    }
  };

  return (
    <>
      {!isLoading && (
        <ExplanationPanel onLoadExample={loadExampleAnalysis} />
      )}
      
      <div className="flex-grow">
        {isLoading ? (
          <div className="flex items-center justify-center h-full text-white font-mono">
            Loading shared analysis...
          </div>
        ) : (
          <EigenclusterTerminal 
            initialSharedState={sharedState} 
            onReady={methods => terminalMethods.current = methods}
          />
        )}
      </div>
    </>
  );
} 