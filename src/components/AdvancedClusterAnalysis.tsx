import React, { useMemo, useState } from 'react';
import MultiSeriesTimeChart from './MultiSeriesTimeChart';

interface AdvancedClusterAnalysisProps {
  data: {
    metadata: {
      period: string;
      interval: string;
      cluster_range: string;
      measurement: string;
      top_20_clusters: string[];
    };
    clusters: Record<string, {
      name: string;
      description: string;
      trajectory: Record<string, {
        variance_explained: number;
        description: string;
        key_manifestations: string[];
      }>;
    }>;
  };
  onPointSelect?: (data: {
    year: number;
    clusterName: string;
    description: string;
    manifestations: string[];
  }) => void;
}

const AdvancedClusterAnalysis: React.FC<AdvancedClusterAnalysisProps> = ({ 
  data,
  onPointSelect
}) => {
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  
  // Transform the data into the format expected by MultiSeriesTimeChart
  const transformedData = useMemo(() => {
    if (!data || !data.clusters) return [];
    
    // Get all years from all clusters
    const allYears = new Set<string>();
    Object.values(data.clusters).forEach(cluster => {
      Object.keys(cluster.trajectory).forEach(year => {
        allYears.add(year);
      });
    });
    
    // Sort years chronologically
    const sortedYears = Array.from(allYears).sort((a, b) => parseInt(a) - parseInt(b));
    
    // Create data points for each year
    return sortedYears.map(year => {
      const yearData: any = { year: parseInt(year) };
      
      // Add each cluster's value for this year
      Object.entries(data.clusters).forEach(([clusterId, clusterData]) => {
        const yearTrajectory = clusterData.trajectory[year];
        if (yearTrajectory) {
          yearData[clusterId] = yearTrajectory.variance_explained;
        }
      });
      
      return yearData;
    });
  }, [data]);
  
  // Handle series selection
  const handleSeriesSelect = (seriesId: string, pointData: any) => {
    const year = pointData.year;
    const clusterData = data.clusters[seriesId];
    
    if (clusterData && clusterData.trajectory[year]) {
      const yearData = clusterData.trajectory[year];
      
      setSelectedCluster(seriesId);
      setSelectedYear(year);
      
      if (onPointSelect) {
        onPointSelect({
          year,
          clusterName: clusterData.name,
          description: yearData.description,
          manifestations: yearData.key_manifestations
        });
      }
    }
  };
  
  // Extract period information
  const periodInfo = useMemo(() => {
    if (!data || !data.metadata) return { start: 0, end: 0 };
    
    const periodMatch = data.metadata.period.match(/(\d+)-(\d+)/);
    if (periodMatch) {
      return {
        start: parseInt(periodMatch[1]),
        end: parseInt(periodMatch[2])
      };
    }
    return { start: 0, end: 0 };
  }, [data]);
  
  return (
    <div className="space-y-6">
      <div className="bg-black/30 border border-white/20 rounded p-4">
        <h2 className="text-xl font-bold mb-4 text-white">Advanced Cluster Analysis</h2>
        
        {data?.metadata && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-black/50 p-3 rounded border border-white/10">
              <h3 className="text-sm font-bold mb-2 text-white">Analysis Parameters</h3>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
                <div>Period:</div>
                <div className="font-mono">{data.metadata.period}</div>
                <div>Interval:</div>
                <div className="font-mono">{data.metadata.interval}</div>
                <div>Cluster Range:</div>
                <div className="font-mono">{data.metadata.cluster_range}</div>
                <div>Measurement:</div>
                <div className="font-mono">{data.metadata.measurement}</div>
              </div>
            </div>
            
            <div className="bg-black/50 p-3 rounded border border-white/10">
              <h3 className="text-sm font-bold mb-2 text-white">Top Clusters</h3>
              <div className="text-xs text-white/80 max-h-32 overflow-y-auto">
                {data.metadata.top_20_clusters.slice(0, 5).map((cluster, idx) => (
                  <div key={idx} className="mb-1">{cluster}</div>
                ))}
                {data.metadata.top_20_clusters.length > 5 && (
                  <div className="text-white/50 text-right">
                    +{data.metadata.top_20_clusters.length - 5} more
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="h-[600px]">
          {transformedData.length > 0 ? (
            <MultiSeriesTimeChart 
              data={transformedData}
              onSeriesSelect={handleSeriesSelect}
              displayClusters={8}
              height={600}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-white/50">
              No data available for visualization
            </div>
          )}
        </div>
      </div>
      
      {/* Selected point details */}
      {selectedCluster && selectedYear && data.clusters[selectedCluster]?.trajectory[selectedYear] && (
        <div className="bg-black/30 border border-white/20 rounded p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                {data.clusters[selectedCluster].name}
              </h3>
              <div className="text-sm text-white/70">Year: {selectedYear}</div>
            </div>
            <button 
              onClick={() => {
                setSelectedCluster(null);
                setSelectedYear(null);
              }}
              className="text-sm text-white/50 hover:text-white/100"
            >
              [CLOSE]
            </button>
          </div>
          
          {/* Cluster overview */}
          <div className="mb-4 p-3 bg-white/5 rounded">
            <div className="text-sm font-bold mb-2 text-white">CLUSTER OVERVIEW:</div>
            <div className="text-sm text-white/80">{data.clusters[selectedCluster].description}</div>
          </div>
          
          {/* Year-specific description */}
          <div className="mb-4">
            <div className="font-bold mb-2 text-white">TEMPORAL ANALYSIS:</div>
            <div className="text-white/90">
              {data.clusters[selectedCluster].trajectory[selectedYear].description}
            </div>
          </div>
          
          {/* Key manifestations */}
          <div>
            <div className="font-bold mb-2 text-white">KEY MANIFESTATIONS:</div>
            <ul className="list-disc pl-4 space-y-1">
              {data.clusters[selectedCluster].trajectory[selectedYear].key_manifestations.map((m, i) => (
                <li key={i} className="text-sm text-white/90">{m}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {/* Cluster statistics */}
      <div className="bg-black/30 border border-white/20 rounded p-4">
        <h3 className="text-lg font-bold mb-4 text-white">Cluster Statistics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(data.clusters).slice(0, 9).map(([clusterId, clusterData]) => {
            // Calculate average, min, max, and trend
            const trajectoryValues = Object.values(clusterData.trajectory).map(t => t.variance_explained);
            const avg = trajectoryValues.reduce((sum, val) => sum + val, 0) / trajectoryValues.length;
            const min = Math.min(...trajectoryValues);
            const max = Math.max(...trajectoryValues);
            
            // Calculate simple trend (last value - first value)
            const years = Object.keys(clusterData.trajectory).sort((a, b) => parseInt(a) - parseInt(b));
            const firstYear = years[0];
            const lastYear = years[years.length - 1];
            const trend = clusterData.trajectory[lastYear].variance_explained - 
                          clusterData.trajectory[firstYear].variance_explained;
            
            return (
              <div key={clusterId} className="bg-black/50 p-3 rounded border border-white/10">
                <h4 className="text-sm font-bold mb-2 text-white truncate" title={clusterData.name}>
                  {clusterData.name}
                </h4>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="text-white/70">Average:</div>
                  <div className="text-white font-mono">{avg.toFixed(2)}</div>
                  <div className="text-white/70">Range:</div>
                  <div className="text-white font-mono">{min.toFixed(2)} - {max.toFixed(2)}</div>
                  <div className="text-white/70">Trend:</div>
                  <div className={`text-white font-mono ${trend > 0 ? 'text-green-400' : trend < 0 ? 'text-red-400' : ''}`}>
                    {trend > 0 ? '+' : ''}{trend.toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
          
          {Object.keys(data.clusters).length > 9 && (
            <div className="bg-black/50 p-3 rounded border border-white/10 flex items-center justify-center">
              <span className="text-white/50">
                +{Object.keys(data.clusters).length - 9} more clusters
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedClusterAnalysis; 