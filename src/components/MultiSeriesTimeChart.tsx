import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { LinePath } from '@visx/shape';
import { scaleLinear, scaleTime } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { timeFormat } from 'd3-time-format';
import { extent, max } from 'd3-array';

// Constants for styling and interaction
const LINE_PATTERNS = [
  { strokeDasharray: 'none' },           // solid
  { strokeDasharray: '8,8' },            // dashed
  { strokeDasharray: '2,6' },            // dotted
  { strokeDasharray: '12,6,2,6' },       // dash-dot
];

// Colors for different series
const COLORS = [
  '#FF6B6B', // red
  '#4ECDC4', // teal
  '#45B7D1', // blue
  '#96CEB4', // green
  '#FFEEAD', // yellow
  '#D4A5A5', // pink
  '#9E9E9E', // gray
  '#58B19F', // sage
  '#FFD93D', // gold
  '#6C5B7B'  // purple
];

/**
 * MultiSeriesTimeChart Component - Displays multiple time series with interactive selector
 * 
 * This component is compatible with @visx libraries and handles visualization of many time series
 * by providing clustering, filtering and selection capabilities.
 */
const MultiSeriesTimeChart = ({ 
  data,                 // Array of time series data
  onSeriesSelect,       // Callback when a series is selected
  displayClusters = 5,  // Default number of clusters to create
  width = 800,          // Default chart width
  height = 400          // Default chart height
}) => {
  // Container ref to measure actual dimensions
  const containerRef = React.useRef(null);
  
  // State for dimensions, interactions and filtering
  const [dimensions, setDimensions] = useState({ width, height });
  const [hoveredSeries, setHoveredSeries] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayMode, setDisplayMode] = useState('selected');
  const [clusters, setClusters] = useState([]);
  const [clusterCount, setClusterCount] = useState(displayClusters);
  const [seriesStats, setSeriesStats] = useState({});
  
  // Chart margins
  const margin = { top: 40, right: 100, bottom: 40, left: 60 };
  const innerWidth = dimensions.width - margin.left - margin.right;
  const innerHeight = dimensions.height - margin.top - margin.bottom;
  
  // Effect for responsive sizing
  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        const containerWidth = containerRef.current.offsetWidth;
        setDimensions({
          width: Math.max(700, containerWidth),
          height
        });
      };
      
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }
  }, [height]);

  // Extract all series names from data
  const allSeriesNames = useMemo(() => {
    const names = new Set();
    data.forEach(point => {
      Object.keys(point).forEach(key => {
        // Skip the x-axis field
        if (key !== 'date' && key !== 'year' && key !== 'time' && key !== 'x') {
          names.add(key);
        }
      });
    });
    return Array.from(names);
  }, [data]);
  
  // Extract time domain from data
  const timeExtent = useMemo(() => {
    const xField = 'date' in data[0] ? 'date' : 'year' in data[0] ? 'year' : 'time' in data[0] ? 'time' : 'x';
    return extent(data, d => d[xField]);
  }, [data]);
  
  // Extract value domain from data
  const valueExtent = useMemo(() => {
    let maxValue = 0;
    data.forEach(point => {
      allSeriesNames.forEach(series => {
        if (point[series] !== undefined && point[series] > maxValue) {
          maxValue = point[series];
        }
      });
    });
    return [0, maxValue * 1.1]; // Add 10% padding
  }, [data, allSeriesNames]);
  
  // Create scales for x and y axes
  const xScale = useMemo(() => {
    const xField = 'date' in data[0] ? 'date' : 'year' in data[0] ? 'year' : 'time' in data[0] ? 'time' : 'x';
    return scaleLinear({
      domain: timeExtent,
      range: [0, innerWidth],
      clamp: true
    });
  }, [timeExtent, innerWidth]);
  
  const yScale = useMemo(() => {
    return scaleLinear({
      domain: valueExtent,
      range: [innerHeight, 0],
      clamp: true
    });
  }, [valueExtent, innerHeight]);
  
  // Calculate statistics for all series when data changes
  useEffect(() => {
    const stats = {};
    allSeriesNames.forEach(series => {
      const values = data.map(d => d[series]).filter(v => v !== undefined);
      
      // Skip if no valid values
      if (values.length === 0) return;
      
      // Calculate basic statistics
      const min = Math.min(...values);
      const max = Math.max(...values);
      const sum = values.reduce((acc, val) => acc + val, 0);
      const mean = sum / values.length;
      
      // Calculate trend (simple linear regression)
      let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
      values.forEach((y, x) => {
        sumX += x;
        sumY += y;
        sumXY += x * y;
        sumX2 += x * x;
      });
      const n = values.length;
      const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
      
      // Calculate volatility (standard deviation)
      const variance = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / values.length;
      const stdDev = Math.sqrt(variance);
      
      stats[series] = {
        min: parseFloat(min.toFixed(2)),
        max: parseFloat(max.toFixed(2)),
        mean: parseFloat(mean.toFixed(2)),
        trend: parseFloat(slope.toFixed(4)),
        volatility: parseFloat(stdDev.toFixed(2)),
        range: parseFloat((max - min).toFixed(2))
      };
    });
    
    setSeriesStats(stats);
    
    // Run clustering algorithm on the statistics
    if (Object.keys(stats).length > 0) {
      createClusters(stats, allSeriesNames, clusterCount);
    }
    
    // Select top 5 series by default if none selected
    if (selectedSeries.length === 0) {
      // Sort series by various criteria and pick top 5
      const sortedSeries = Object.entries(stats)
        .sort((a, b) => b[1].range - a[1].range) // Sort by range (most varied first)
        .slice(0, 5)
        .map(([name]) => name);
        
      setSelectedSeries(sortedSeries);
    }
  }, [data, allSeriesNames, clusterCount]);
  
  // Create clusters based on series statistics
  const createClusters = useCallback((stats, seriesNames, count) => {
    // Normalize values for clustering to prevent one dimension from dominating
    const normalized = {};
    seriesNames.forEach(series => {
      const s = stats[series];
      if (!s) return; // Skip if stats not available
      
      normalized[series] = {
        mean: (s.mean - valueExtent[0]) / (valueExtent[1] - valueExtent[0]),
        trend: s.trend / 2, // Normalize slope
        volatility: s.volatility / (valueExtent[1] - valueExtent[0])
      };
    });
    
    // Initialize random centroids for k-means
    let centroids = Array.from({ length: count }, () => ({
      mean: Math.random(),
      trend: Math.random() * 2 - 1,
      volatility: Math.random()
    }));
    
    // Run k-means for fixed iterations
    const iterations = 5;
    let assignments = {};
    
    for (let iter = 0; iter < iterations; iter++) {
      // Assign series to nearest centroid
      assignments = {};
      
      seriesNames.forEach(series => {
        if (!normalized[series]) return; // Skip if normalized values not available
        
        const point = normalized[series];
        let minDist = Infinity;
        let assignedCluster = 0;
        
        centroids.forEach((centroid, i) => {
          const dist = Math.sqrt(
            Math.pow(point.mean - centroid.mean, 2) +
            Math.pow(point.trend - centroid.trend, 2) +
            Math.pow(point.volatility - centroid.volatility, 2)
          );
          
          if (dist < minDist) {
            minDist = dist;
            assignedCluster = i;
          }
        });
        
        assignments[series] = assignedCluster;
      });
      
      // Update centroids
      const newCentroids = Array(count).fill().map(() => ({ 
        mean: 0, 
        trend: 0, 
        volatility: 0 
      }));
      const counts = Array(count).fill(0);
      
      seriesNames.forEach(series => {
        if (!normalized[series]) return;
        
        const cluster = assignments[series];
        const point = normalized[series];
        
        newCentroids[cluster].mean += point.mean;
        newCentroids[cluster].trend += point.trend;
        newCentroids[cluster].volatility += point.volatility;
        counts[cluster]++;
      });
      
      // Calculate average for each centroid
      newCentroids.forEach((centroid, i) => {
        if (counts[i] > 0) {
          centroid.mean /= counts[i];
          centroid.trend /= counts[i];
          centroid.volatility /= counts[i];
        }
      });
      
      centroids = newCentroids;
    }
    
    // Create final clusters with descriptive names
    const finalClusters = Array(count).fill().map(() => []);
    
    seriesNames.forEach(series => {
      if (!assignments[series] && assignments[series] !== 0) return;
      finalClusters[assignments[series]].push(series);
    });
    
    // Create descriptive names for each cluster
    const namedClusters = finalClusters.map((cluster, i) => {
      if (cluster.length === 0) return { name: `Empty Cluster ${i+1}`, series: [] };
      
      // Calculate average stats for the cluster
      const avgStats = {
        mean: 0,
        trend: 0,
        volatility: 0
      };
      
      cluster.forEach(series => {
        avgStats.mean += stats[series].mean;
        avgStats.trend += stats[series].trend;
        avgStats.volatility += stats[series].volatility;
      });
      
      avgStats.mean /= cluster.length;
      avgStats.trend /= cluster.length;
      avgStats.volatility /= cluster.length;
      
      // Create a descriptive name
      let trendDesc = Math.abs(avgStats.trend) < 0.1 ? "Stable" : 
                     avgStats.trend > 0 ? "Rising" : "Falling";
      let volatilityDesc = avgStats.volatility < 10 ? "Smooth" : 
                          avgStats.volatility > 30 ? "Volatile" : "Moderate";
      let valueDesc = avgStats.mean < valueExtent[1] * 0.3 ? "Low" : 
                     avgStats.mean > valueExtent[1] * 0.7 ? "High" : "Mid";
      
      return {
        name: `${valueDesc}-${trendDesc}-${volatilityDesc} (${cluster.length})`,
        series: cluster,
        stats: avgStats
      };
    });
    
    setClusters(namedClusters);
  }, [valueExtent]);
  
  // Filter series based on search term
  const filteredSeries = useMemo(() => {
    if (!searchTerm) return allSeriesNames;
    return allSeriesNames.filter(name => 
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allSeriesNames, searchTerm]);
  
  // Toggle selection of a series
  const toggleSeries = useCallback((series) => {
    setSelectedSeries(prev => 
      prev.includes(series)
        ? prev.filter(s => s !== series)
        : [...prev, series]
    );
  }, []);
  
  // Select all visible (filtered) series
  const selectAllVisible = useCallback(() => {
    setSelectedSeries(prev => {
      const newSelected = new Set([...prev]);
      filteredSeries.forEach(series => newSelected.add(series));
      return Array.from(newSelected);
    });
  }, [filteredSeries]);
  
  // Clear all selections
  const clearSelection = useCallback(() => {
    setSelectedSeries([]);
  }, []);
  
  // Select a cluster
  const selectCluster = useCallback((clusterIndex) => {
    const clusterSeries = clusters[clusterIndex]?.series || [];
    setSelectedSeries(prev => {
      const newSelected = new Set([...prev]);
      clusterSeries.forEach(series => newSelected.add(series));
      return Array.from(newSelected);
    });
  }, [clusters]);
  
  // Select one representative from each cluster
  const selectClusterRepresentatives = useCallback(() => {
    const representatives = clusters
      .map(cluster => {
        if (cluster.series.length === 0) return null;
        
        // Find the most representative series (closest to cluster center)
        let bestRepSeries = cluster.series[0];
        let minDistance = Infinity;
        
        cluster.series.forEach(series => {
          const stats = seriesStats[series];
          if (!stats) return;
          
          const distance = Math.sqrt(
            Math.pow(stats.mean - cluster.stats.mean, 2) +
            Math.pow(stats.trend - cluster.stats.trend, 2) +
            Math.pow(stats.volatility - cluster.stats.volatility, 2)
          );
          
          if (distance < minDistance) {
            minDistance = distance;
            bestRepSeries = series;
          }
        });
        
        return bestRepSeries;
      })
      .filter(Boolean);
      
    setSelectedSeries(representatives);
  }, [clusters, seriesStats]);
  
  // Handle display mode change
  const handleDisplayModeChange = useCallback((e) => {
    const mode = e.target.value;
    setDisplayMode(mode);
    
    if (mode === 'cluster-representatives') {
      selectClusterRepresentatives();
    } else if (mode === 'all') {
      // If switching to all mode, keep current selection
    }
  }, [selectClusterRepresentatives]);
  
  // Determine which series to display based on display mode
  const displayedSeries = useMemo(() => {
    if (displayMode === 'all') return allSeriesNames;
    return selectedSeries;
  }, [displayMode, selectedSeries, allSeriesNames]);
  
  // Get X value accessor based on data structure
  const getX = useCallback((d) => {
    const xField = 'date' in d ? 'date' : 'year' in d ? 'year' : 'time' in d ? 'time' : 'x';
    return xScale(d[xField]);
  }, [xScale]);
  
  // Get Y value accessor for a specific series
  const getY = useCallback((d, series) => {
    return yScale(d[series] !== undefined ? d[series] : 0);
  }, [yScale]);
  
  // Format tick values for X axis
  const formatXTick = useCallback((value) => {
    // Detect if the value is a date
    if (value instanceof Date) {
      return timeFormat('%Y')(value);
    }
    // If year is BCE/CE
    if (typeof value === 'number') {
      return value <= 0 ? `${Math.abs(value)} BCE` : `${value} CE`;
    }
    return value;
  }, []);
  
  return (
    <div className="flex flex-col w-full h-full" ref={containerRef}>
      {/* Controls Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 border border-white/20 bg-black/30 rounded">
          <h3 className="font-bold mb-2 text-white">Display Settings</h3>
          <div className="flex items-center mb-2">
            <label className="mr-2 text-white">Display Mode:</label>
            <select 
              value={displayMode} 
              onChange={handleDisplayModeChange}
              className="bg-black border border-white/30 text-white p-1 rounded"
            >
              <option value="selected">Selected Series Only</option>
              <option value="all">All Series</option>
              <option value="cluster-representatives">Cluster Representatives</option>
            </select>
          </div>
          <div className="text-sm text-white/80">
            <p><strong>Series Selected:</strong> {selectedSeries.length} of {allSeriesNames.length}</p>
          </div>
        </div>
        
        <div className="p-4 border border-white/20 bg-black/30 rounded">
          <h3 className="font-bold mb-2 text-white">Clustering Options</h3>
          <div className="flex items-center mb-2">
            <label className="mr-2 text-white">Number of Clusters:</label>
            <select 
              value={clusterCount} 
              onChange={(e) => setClusterCount(Number(e.target.value))}
              className="bg-black border border-white/30 text-white p-1 rounded"
            >
              {[3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Chart and Controls Layout */}
      <div className="grid grid-cols-4 gap-4">
        {/* Chart Area */}
        <div className="col-span-3 relative border border-white/20 bg-black/30 rounded p-4">
          <svg width={dimensions.width} height={dimensions.height}>
            <rect width={dimensions.width} height={dimensions.height} fill="black" fillOpacity={0.3} />
            <Group left={margin.left} top={margin.top}>
              {/* Draw visible series */}
              {displayedSeries.map((series, idx) => {
                const seriesData = data.filter(d => d[series] !== undefined);
                const patternIndex = allSeriesNames.indexOf(series) % LINE_PATTERNS.length;
                const colorIndex = allSeriesNames.indexOf(series) % COLORS.length;
                const linePattern = LINE_PATTERNS[patternIndex];
                
                return (
                  <Group key={series}>
                    <LinePath
                      data={seriesData}
                      x={getX}
                      y={(d) => getY(d, series)}
                      stroke={COLORS[colorIndex]}
                      strokeWidth={hoveredSeries === series ? 3 : 2}
                      {...linePattern}
                      strokeOpacity={hoveredSeries === null || hoveredSeries === series ? 1 : 0.3}
                    />
                    
                    {/* Data points */}
                    {seriesData.map((d, i) => {
                      const xField = 'date' in d ? 'date' : 'year' in d ? 'year' : 'time' in d ? 'time' : 'x';
                      return (
                        <circle
                          key={`${series}-${i}`}
                          cx={xScale(d[xField])}
                          cy={getY(d, series)}
                          r={3}
                          fill="black"
                          stroke={COLORS[colorIndex]}
                          onClick={() => onSeriesSelect && onSeriesSelect(series, d)}
                          style={{ cursor: 'pointer' }}
                        />
                      );
                    })}
                  </Group>
                );
              })}
            
              {/* Axes */}
              <AxisLeft
                scale={yScale}
                stroke="#ccc"
                tickStroke="#ccc"
                tickLabelProps={() => ({
                  fill: '#ccc',
                  fontSize: 10,
                  textAnchor: 'end',
                  dx: '-0.5em',
                })}
              />
              <AxisBottom
                top={innerHeight}
                scale={xScale}
                stroke="#ccc"
                tickStroke="#ccc"
                tickFormat={formatXTick}
                numTicks={6}
                tickLabelProps={() => ({
                  fill: '#ccc',
                  fontSize: 10,
                  textAnchor: 'middle',
                  dy: '0.5em',
                })}
              />
            </Group>
          </svg>
          
          {/* Legend */}
          <div className="absolute top-2 right-2 bg-black/80 p-2 rounded text-xs border border-white/20">
            {displayedSeries.map((series, idx) => {
              const colorIndex = allSeriesNames.indexOf(series) % COLORS.length;
              return (
                <div 
                  key={series}
                  className="flex items-center gap-1 mt-1 cursor-pointer"
                  onMouseEnter={() => setHoveredSeries(series)}
                  onMouseLeave={() => setHoveredSeries(null)}
                >
                  <div 
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: COLORS[colorIndex] }}
                  ></div>
                  <span className="text-white">{series}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Series Selector Panel */}
        <div className="col-span-1 flex flex-col">
          {/* Search and Buttons */}
          <div className="mb-4 p-4 border border-white/20 bg-black/30 rounded">
            <div className="flex mb-2">
              <input
                type="text"
                placeholder="Search series..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-black border border-white/30 text-white p-1 rounded flex-grow mr-2"
              />
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={selectAllVisible}
                className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
              >
                Select All
              </button>
              <button 
                onClick={clearSelection}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm"
              >
                Clear
              </button>
            </div>
          </div>
          
          {/* Series List */}
          <div className="overflow-y-auto flex-grow border border-white/20 bg-black/30 rounded p-2 mb-4">
            <h3 className="font-bold mb-2 text-white">Series</h3>
            <div className="space-y-1 max-h-60 overflow-y-auto">
              {filteredSeries.map((series) => {
                const colorIndex = allSeriesNames.indexOf(series) % COLORS.length;
                return (
                  <div 
                    key={series}
                    className={`flex items-center p-1 rounded cursor-pointer ${
                      selectedSeries.includes(series) ? 'bg-blue-900/50' : ''
                    }`}
                    onClick={() => toggleSeries(series)}
                  >
                    <div 
                      className="w-3 h-3 rounded-sm mr-2"
                      style={{ backgroundColor: COLORS[colorIndex] }}
                    ></div>
                    <span className="text-sm truncate text-white">{series}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Clusters */}
          <div className="border border-white/20 bg-black/30 rounded p-2">
            <h3 className="font-bold mb-2 text-white">Clusters</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {clusters.map((cluster, i) => (
                <div key={i} className="border border-white/20 bg-black/50 rounded p-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-white">{cluster.name}</span>
                    <button
                      onClick={() => selectCluster(i)}
                      className="bg-blue-500 text-white px-2 py-0.5 rounded text-xs"
                    >
                      Select
                    </button>
                  </div>
                  <div className="text-xs text-white/60">
                    {cluster.series.length > 0 
                      ? `${cluster.series.slice(0, 2).join(', ')}${cluster.series.length > 2 ? '...' : ''}`
                      : 'No series'
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSeriesTimeChart; 