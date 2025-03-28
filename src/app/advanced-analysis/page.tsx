"use client";

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { LinePath } from '@visx/shape';
import { scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows, GridColumns } from '@visx/grid';
import { localPoint } from '@visx/event';
import { useTooltip, Tooltip } from '@visx/tooltip';
import { voronoi } from '@visx/voronoi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brush } from '@visx/brush';
import { PatternLines } from '@visx/pattern';
import { scaleTime } from '@visx/scale';

// Import all presets with unique names
import americaPreset from '@/lib/presets/america_modern';
import americaPoliticsPreset from '@/lib/presets/america-politics';
import sciencePreset from '@/lib/presets/science-long'; // Import with different variable name

// Define a type for presets
import { PresetConfig } from '@/lib/presets/types';

// Colors for different series
const COLORS = [
  '#FFFFFF', // white
  '#4ECDC4', // teal
  '#FFD93D', // yellow
  '#FF6B6B', // red
  '#6C5B7B', // purple
  '#45B7D1', // blue
  '#96CEB4', // green
  '#D4A5A5', // pink
  '#9E9E9E', // gray
  '#58B19F', // sage
];

// Example of preset-specific customization
const getPresetSpecificConfig = (presetId: string) => {
  switch (presetId) {
    case 'america_politics':
      return {
        chartHeight: 600, // Taller chart for politics data
        maxClusters: 10,  // Limit to 10 clusters for readability
      };
    case 'science-long':
      return {
        chartHeight: 550,
        maxClusters: 12,
      };
    default:
      return {
        chartHeight: 500,
        maxClusters: 15,
      };
  }
};

// Define initial presets to display, featuring science-long prominently
const INITIAL_PRESETS = [
  {
    id: 'science-long',
    name: 'History of Science (1895-2024)',
    description: 'Comprehensive analysis of scientific thought evolution',
    selected: true
  },
  {
    id: 'america_modern',
    name: 'America Modern (1989-2025)',
    description: 'America Library Era',
    selected: false
  },
  {
    id: 'america-politics',
    name: 'American Politics (1800-2025)',
    description: 'Full Analysis of America Politics',
    selected: false
  }
];

export default function AdvancedAnalysisPage() {
  // State for preset selection - initialize with science preset
  const [selectedPreset, setSelectedPreset] = useState<PresetConfig>(sciencePreset);
  
  // State for selected clusters
  const [selectedClusters, setSelectedClusters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPoint, setSelectedPoint] = useState<any>(null);
  
  // Tooltip setup
  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<any>();
  
  // For the availablePresets array, use the imported presets with their unique variable names
  const availablePresets = [
    { id: 'america_modern', name: 'America Modern (1989-2025)', preset: americaPreset },
    { id: 'america_politics', name: 'American Politics (1800-2025)', preset: americaPoliticsPreset },
    { id: 'science-long', name: 'History of Science (1895-2024)', preset: sciencePreset }, // Use the renamed variable
    // Add other presets here
  ];
  
  // Reset selected clusters when preset changes
  useEffect(() => {
    setSelectedClusters([]);
    setSelectedPoint(null);
  }, [selectedPreset]);
  
  // Add this effect to hide any persistent value displays
  useEffect(() => {
    // Add a style tag to hide any persistent value displays
    const style = document.createElement('style');
    style.innerHTML = `
      [class*="value"], [id*="value"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
    
    // Clean up
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  // Move these hooks outside of renderChart to the component level
  const handleMouseOver = useCallback((point: any, showTooltip: any, margin: any) => {
    showTooltip({
      tooltipData: point.data,
      tooltipLeft: point.x + margin.left,
      tooltipTop: point.y + margin.top
    });
  }, []);

  const handleMouseOut = useCallback((hideTooltip: any) => {
    hideTooltip();
  }, []);

  const handleClick = useCallback((point: any, setSelectedPoint: any) => {
    setSelectedPoint(point.data);
    // Automatically switch to the selected point tab
    const tabTrigger = document.querySelector('[data-value="selected-point"]') as HTMLElement;
    if (tabTrigger) tabTrigger.click();
  }, []);
  
  // Transform data for the selected preset
  const { transformedData, allClusters } = useMemo(() => {
    if (!selectedPreset.cachedResult || !selectedPreset.cachedResult.clusters) {
      return { transformedData: [], allClusters: [] };
    }
    
    const clusters = selectedPreset.cachedResult.clusters;
    const clusterIds = Object.keys(clusters);
    
    // Get the year range from the preset parameters
    const startYear = parseInt(selectedPreset.parameters.startYear, 10);
    const endYear = parseInt(selectedPreset.parameters.endYear, 10);
    
    console.log("Preset year range:", startYear, "to", endYear);
    
    // Get all years from all clusters
    const allYears = new Set<string>();
    Object.values(clusters).forEach(cluster => {
      Object.keys(cluster.trajectory).forEach(year => {
        allYears.add(year);
      });
    });
    
    // Sort years chronologically
    const sortedYears = Array.from(allYears).sort((a, b) => parseInt(a) - parseInt(b));
    
    // Create data points for each year
    const data = sortedYears.map(year => {
      // Explicitly parse the year as an integer with base 10
      const yearNum = parseInt(year, 10);
      
      const yearData: any = { year: yearNum };
      
      // Add each cluster's value for this year
      Object.entries(clusters).forEach(([clusterId, clusterData]) => {
        const yearTrajectory = clusterData.trajectory[year];
        if (yearTrajectory) {
          yearData[clusterId] = yearTrajectory.variance_explained;
          // Store additional data for tooltips/exploration
          yearData[`${clusterId}_data`] = {
            description: yearTrajectory.description,
            manifestations: yearTrajectory.key_manifestations || []
          };
        }
      });
      
      return yearData;
    });
    
    return { 
      transformedData: data, 
      allClusters: clusterIds.map(id => ({
        id,
        name: clusters[id].name,
        description: clusters[id].description // Store the cluster description
      }))
    };
  }, [selectedPreset]);
  
  // Filter clusters based on search term
  const filteredClusters = useMemo(() => {
    if (!searchTerm) return allClusters;
    
    return allClusters.filter(cluster => 
      cluster.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cluster.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allClusters, searchTerm]);
  
  // Toggle cluster selection
  const toggleCluster = (clusterId: string) => {
    setSelectedClusters(prev => 
      prev.includes(clusterId)
        ? prev.filter(id => id !== clusterId)
        : [...prev, clusterId]
    );
  };
  
  // Select all visible clusters
  const selectAllVisible = () => {
    setSelectedClusters(filteredClusters.map(c => c.id));
  };
  
  // Clear selection
  const clearSelection = () => {
    setSelectedClusters([]);
  };
  
  // Then use it in your component
  const config = getPresetSpecificConfig(selectedPreset.id);
  
  // Add these state variables to your component
  const [brushEnabled, setBrushEnabled] = useState(false);
  const [zoomedDomain, setZoomedDomain] = useState<null | {x: [number, number], y: [number, number]}>(null);
  const [yearFilter, setYearFilter] = useState<string>('');
  
  // Add this function to your component
  const resetZoom = () => {
    setZoomedDomain(null);
  };
  
  // Render chart
  const renderChart = () => {
    const width = 1000;
    const height = 500;
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // Get the year range from the preset parameters
    const startYear = parseInt(selectedPreset.parameters.startYear, 10);
    const endYear = parseInt(selectedPreset.parameters.endYear, 10);
    
    // Create scales with the correct domain from preset parameters or zoomed domain
    const xScale = scaleLinear({
      domain: zoomedDomain ? zoomedDomain.x : [startYear, endYear],
      range: [0, innerWidth],
      nice: true
    });
    
    // Find max value across all selected clusters
    let maxValue = 0;
    transformedData.forEach(d => {
      selectedClusters.forEach(clusterId => {
        if (d[clusterId] !== undefined && d[clusterId] > maxValue) {
          maxValue = d[clusterId];
        }
      });
    });
    
    const yScale = scaleLinear({
      domain: zoomedDomain ? zoomedDomain.y : [0, maxValue * 1.1],
      range: [innerHeight, 0],
      nice: true
    });
    
    // Filter data by year if yearFilter is set
    const filteredData = yearFilter 
      ? transformedData.filter(d => d.year.toString().includes(yearFilter))
      : transformedData;
    
    // Create voronoi for better point interaction
    const allPoints: Array<{ x: number; y: number; data: any }> = [];
    selectedClusters.forEach(clusterId => {
      filteredData.forEach(d => {
        if (d[clusterId] !== undefined) {
          allPoints.push({
            x: xScale(d.year),
            y: yScale(d[clusterId]),
            data: {
              clusterId,
              clusterName: allClusters.find(c => c.id === clusterId)?.name || clusterId,
              year: d.year,
              value: d[clusterId],
              description: d[`${clusterId}_data`]?.description || '',
              manifestations: d[`${clusterId}_data`]?.manifestations || []
            }
          });
        }
      });
    });
    
    const voronoiLayout = voronoi({
      x: (d: any) => d.x,
      y: (d: any) => d.y,
      width: innerWidth,
      height: innerHeight
    })(allPoints);
    
    // Handle brush end
    const onBrushEnd = (domain: any) => {
      if (!domain) {
        return;
      }
      
      const { x0, x1, y0, y1 } = domain;
      setZoomedDomain({
        x: [xScale.invert(x0), xScale.invert(x1)],
        y: [yScale.invert(y1), yScale.invert(y0)]
      });
      
      setBrushEnabled(false);
    };
    
    return (
      <div style={{ position: 'relative' }}>
        <div className="mb-4 flex gap-2 items-center">
          <button
            onClick={() => setBrushEnabled(!brushEnabled)}
            className={`px-3 py-1 rounded text-sm ${
              brushEnabled ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white/80'
            }`}
          >
            {brushEnabled ? 'Cancel Zoom' : 'Zoom Mode'}
          </button>
          
          {zoomedDomain && (
            <button
              onClick={resetZoom}
              className="px-3 py-1 rounded text-sm bg-red-600 text-white"
            >
              Reset Zoom
            </button>
          )}
          
          <div className="ml-4">
            <input
              type="text"
              placeholder="Filter by year..."
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="bg-black/50 border border-white/30 rounded p-1 text-white text-sm w-32"
            />
          </div>
        </div>
        
        <svg width={width} height={height}>
          <PatternLines
            id="brush-pattern"
            height={8}
            width={8}
            stroke="#fff"
            strokeWidth={1}
            orientation={['diagonal']}
          />
          
          <Group left={margin.left} top={margin.top}>
            {/* Grid */}
            <GridRows
              scale={yScale}
              width={innerWidth}
              stroke="#333"
              strokeOpacity={0.3}
              strokeDasharray="2,2"
            />
            <GridColumns
              scale={xScale}
              height={innerHeight}
              stroke="#333"
              strokeOpacity={0.3}
              strokeDasharray="2,2"
            />
            
            {/* Draw lines for selected clusters */}
            {selectedClusters.map((clusterId, idx) => {
              const color = COLORS[idx % COLORS.length];
              const clusterData = filteredData.filter(d => d[clusterId] !== undefined);
              
              return (
                <React.Fragment key={clusterId}>
                  <LinePath
                    data={clusterData}
                    x={d => xScale(d.year)}
                    y={d => yScale(d[clusterId])}
                    stroke={color}
                    strokeWidth={2}
                    strokeOpacity={0.8}
                  />
                </React.Fragment>
              );
            })}
            
            {/* Draw points for selected clusters */}
            {selectedClusters.map((clusterId, idx) => {
              const color = COLORS[idx % COLORS.length];
              const clusterData = filteredData.filter(d => d[clusterId] !== undefined);
              
              return clusterData.map(d => (
                <circle
                  key={`point-${clusterId}-${d.year}`}
                  cx={xScale(d.year)}
                  cy={yScale(d[clusterId])}
                  r={3}
                  fill={color}
                  stroke="#000"
                  strokeWidth={1}
                />
              ));
            })}
            
            {/* X-axis */}
            <AxisBottom
              top={innerHeight}
              scale={xScale}
              stroke="#888"
              tickStroke="#888"
              numTicks={8}
              tickFormat={value => `${Math.floor(value)} CE`}
              tickLabelProps={() => ({
                fill: '#fff',
                fontSize: 12,
                textAnchor: 'middle',
              })}
            />
            
            {/* Y-axis */}
            <AxisLeft
              scale={yScale}
              stroke="#888"
              tickStroke="#888"
              tickLabelProps={() => ({
                fill: '#fff',
                fontSize: 12,
                textAnchor: 'end',
                dx: '-0.5em',
              })}
            />
            
            {/* Invisible voronoi for better point interaction - CLICK ONLY */}
            {!brushEnabled && voronoiLayout.polygons().map((polygon, i) => {
              const path = `M${polygon.map(([x, y]) => `${x},${y}`).join('L')}Z`;
              return (
                <path
                  key={`voronoi-${i}`}
                  d={path}
                  fill="transparent"
                  onClick={() => handleClick(allPoints[i], setSelectedPoint)}
                  style={{ cursor: 'pointer' }}
                />
              );
            })}
            
            {/* Highlight selected point if any */}
            {selectedPoint && (
              <g>
                <circle
                  cx={xScale(selectedPoint.year)}
                  cy={yScale(selectedPoint.value)}
                  r={6}
                  fill="white"
                  fillOpacity={0.4}
                  stroke="white"
                  strokeWidth={2}
                />
              </g>
            )}
            
            {/* Brush for zooming */}
            {brushEnabled && (
              <Brush
                xScale={xScale}
                yScale={yScale}
                width={innerWidth}
                height={innerHeight}
                handleSize={8}
                resizeTriggerAreas={['left', 'right']}
                brushDirection="horizontal"
                initialBrushPosition={{
                  start: { x: 0.25 * innerWidth, y: 0 },
                  end: { x: 0.75 * innerWidth, y: innerHeight },
                }}
                onBrushEnd={onBrushEnd}
                onChange={() => {}}
                selectedBoxStyle={{
                  fill: 'url(#brush-pattern)',
                  stroke: '#fff',
                }}
              />
            )}
          </Group>
        </svg>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-mono">{selectedPreset.name} | Period: {selectedPreset.parameters.startYear}-{selectedPreset.parameters.endYear}</h1>
      </header>
      
      {/* Preset Selector */}
      <div className="mb-6 bg-black/30 border border-white/20 rounded p-4">
        <h2 className="text-lg mb-3">Select Dataset</h2>
        <div className="grid grid-cols-2 gap-3">
          {availablePresets.map(preset => (
            <button
              key={preset.id}
              className={`p-3 rounded text-left ${
                selectedPreset.id === preset.preset.id 
                  ? 'bg-blue-900 border border-blue-500' 
                  : 'bg-black/50 border border-white/10 hover:bg-black/70'
              }`}
              onClick={() => setSelectedPreset(preset.preset)}
            >
              <div className="font-bold">{preset.name}</div>
              <div className="text-sm text-white/70">{preset.preset.description}</div>
            </button>
          ))}
        </div>
      </div>
      
      <main className="flex flex-col gap-6">
        <div className="flex gap-4 items-start">
          {/* Cluster selector */}
          <div className="w-1/3 bg-black/30 border border-white/20 rounded p-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search clusters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/50 border border-white/30 rounded p-2 text-white"
              />
            </div>
            
            <div className="flex gap-2 mb-4">
              <button 
                onClick={selectAllVisible}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
              >
                Select All
              </button>
              <button 
                onClick={clearSelection}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Clear
              </button>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {filteredClusters.map(cluster => (
                <div 
                  key={cluster.id}
                  className={`flex items-center p-2 rounded cursor-pointer ${
                    selectedClusters.includes(cluster.id) ? 'bg-blue-900/30' : ''
                  }`}
                  onClick={() => toggleCluster(cluster.id)}
                >
                  <input
                    type="checkbox"
                    checked={selectedClusters.includes(cluster.id)}
                    onChange={() => {}}
                    className="mr-2"
                  />
                  <span className="truncate">{cluster.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chart */}
          <div className="flex-1 bg-black/30 border border-white/20 rounded p-4">
            <div className="text-sm text-white/70 mb-2">
              [Interactive Chart. Click on the points to see more information]
            </div>
            {transformedData.length > 0 ? (
              renderChart()
            ) : (
              <div className="flex justify-center items-center h-96">
                <p>No data available</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Tabbed information panel */}
        <div className="bg-black/30 border border-white/20 rounded p-4">
          <Tabs defaultValue="overviews" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="overviews" className="data-[state=active]:bg-blue-900/50">
                Cluster Overviews
              </TabsTrigger>
              <TabsTrigger value="selected-point" className="data-[state=active]:bg-blue-900/50">
                Selected Point
              </TabsTrigger>
              <TabsTrigger value="legend" className="data-[state=active]:bg-blue-900/50">
                Legend
              </TabsTrigger>
            </TabsList>
            
            {/* Cluster Overviews Tab */}
            <TabsContent value="overviews" className="mt-0">
              {selectedClusters.length === 0 ? (
                <p className="text-white/70">Select clusters to view their descriptions</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedClusters.map(clusterId => {
                    const clusterInfo = allClusters.find(c => c.id === clusterId);
                    const clusterData = selectedPreset.cachedResult?.clusters[clusterId];
                    const color = COLORS[selectedClusters.indexOf(clusterId) % COLORS.length];
                    
                    return (
                      <div key={clusterId} className="border border-white/10 rounded p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: color }}
                          ></div>
                          <h4 className="font-bold">
                            {clusterInfo?.name || clusterId}
                          </h4>
                        </div>
                        <p className="text-sm text-white/80">
                          {clusterData?.description || "No description available for this cluster."}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </TabsContent>
            
            {/* Selected Point Tab */}
            <TabsContent value="selected-point" className="mt-0">
              {selectedPoint ? (
                <div className="flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold">
                      {selectedPoint.clusterName} ({selectedPoint.year})
                    </h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-white/70 mb-1">Year Overview:</h4>
                    <p className="text-sm">{selectedPoint.description}</p>
                  </div>
                  
                  {selectedPoint.manifestations.length > 0 && (
                    <div>
                      <h4 className="text-sm font-bold text-white/70 mb-1">Key Manifestations:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedPoint.manifestations.map((item: string, idx: number) => (
                          <li key={idx} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-white/70">Click on a point in the chart to see details</p>
              )}
            </TabsContent>
            
            {/* Legend Tab */}
            <TabsContent value="legend" className="mt-0">
              <div className="grid grid-cols-3 gap-4">
                {selectedClusters.map((clusterId, idx) => {
                  const cluster = allClusters.find(c => c.id === clusterId);
                  const color = COLORS[idx % COLORS.length];
                  
                  return (
                    <div key={clusterId} className="flex items-center p-2 border border-white/10 rounded">
                      <div 
                        className="w-4 h-4 mr-2 rounded-sm"
                        style={{ backgroundColor: color }}
                      ></div>
                      <span>{cluster?.name || clusterId}</span>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="mt-8">
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Main App
        </Link>
      </footer>
    </div>
  );
} 