"use client";

import { useEffect, useState } from 'react';
import { use } from 'react';
import { useRouter } from 'next/navigation';
import EigenclusterTerminal from '@/components/EigenclusterTerminal';

export default function SharePage({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sharedState, setSharedState] = useState<any>(null);
  const router = useRouter();
  
  // Use React.use to unwrap the params promise
  const id = use(params).id;

  useEffect(() => {
    async function loadSharedState() {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/share/${id}`);
        const data = await response.json();
        
        if (!data.success) {
          throw new Error(data.error || 'Failed to load shared state');
        }
        
        console.log("Setting shared state:", data.state);
        setSharedState(data.state);
        setError(null);
      } catch (error) {
        console.error('Error loading shared state:', error);
        setError(error instanceof Error ? error.message : 'Failed to load shared state');
      } finally {
        setIsLoading(false);
      }
    }
    
    loadSharedState();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black p-8 font-mono text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Loading shared analysis...</h1>
          <div className="animate-pulse">Please wait</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black p-8 font-mono text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4 text-red-500">Error Loading Analysis</h1>
          <div className="mb-4">{error}</div>
          <a 
            href="/"
            className="px-4 py-2 border border-white/20 hover:bg-white/10 inline-block"
          >
            Go to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-8">
      <EigenclusterTerminal initialSharedState={sharedState} />
    </div>
  );
}