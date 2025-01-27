import React, { useState } from 'react';
import { ParameterConfig } from './ParameterConfig';
import { AnalysisChart } from './AnalysisChart';
import { AnalysisResponse } from '../types/api';

const ParentComponent = () => {
  const [analysisData, setAnalysisData] = useState<AnalysisResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleParameterSubmit = async (params: {
    startYear: number;
    endYear: number;
    clusterStart: number;
    clusterEnd: number;
    periodicity: number;
  }) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...params,
          analysisType: 'TIME_SERIES'
        }),
      });

      if (!response.ok) {
        throw new Error('Analysis request failed');
      }

      const data = await response.json();
      setAnalysisData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleClusterClick = (clusterData: any) => {
    // Handle cluster click events
    console.log('Cluster clicked:', clusterData);
  };

  const transformedData = analysisData?.map(item => ({
    year: item.year,
    clusters: item.clusters.map(cluster => ({
      clusterName: cluster.name,
      percentageContribution: cluster.score,
      description: cluster.description,
      manifestations: cluster.manifestations
    }))
  })) || [];

  return (
    <div className="space-y-8 p-4 bg-black min-h-screen">
      <ParameterConfig 
        onSubmit={handleParameterSubmit} 
        isAnalyzing={false}
        onStop={() => {}}
      />
      
      {loading && (
        <div className="text-white font-mono text-center p-4 border border-white">
          PROCESSING REQUEST...
          <div className="text-xs mt-2 opacity-50">
            ANALYZING DATA PATTERNS
          </div>
        </div>
      )}

      {error && (
        <div className="text-white font-mono text-center p-4 border border-red-500">
          ERROR: {error}
          <div className="text-xs mt-2 opacity-50">
            SYSTEM MALFUNCTION
          </div>
        </div>
      )}

      {transformedData && !loading && !error && (
        <AnalysisChart 
          data={transformedData}
          onPointSelect={handleClusterClick}
        />
      )}
    </div>
  );
};

export default ParentComponent; 