"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows, GridColumns } from '@visx/grid';
import { Brush } from '@visx/brush';
import { PatternLines } from '@visx/pattern';
import { voronoi } from '@visx/voronoi';
import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Define colors for the cluster lines
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

// This would typically come from presets in your app
const availablePresets = [
  {
    id: 'america-modern',
    name: 'America Modern (1989-2025)',
    preset: {
      id: 'america-modern',
      name: 'America Modern',
      description: 'America Library Era',
      parameters: {
        startYear: '1989',
        endYear: '2025'
      },
      cachedResult: null // This would be populated with actual data
    }
  },
  {
    id: 'american-politics',
    name: 'American Politics (1800-2025)',
    preset: {
      id: 'american-politics',
      name: 'American Politics',
      description: 'Full Analysis of America Politics',
      parameters: {
        startYear: '1800',
        endYear: '2025'
      },
      cachedResult: null // This would be populated with actual data
    }
  }
];

// Default clusters based on your provided data
const DEFAULT_CLUSTERS = [
  { id: 'postmodern-irony', name: 'Postmodern Irony' },
  { id: 'authenticity-pursuit', name: 'Authenticity Pursuit' },
  { id: 'digital-identity', name: 'Digital Identity Formation' },
  { id: 'institutional-skepticism', name: 'Institutional Skepticism' },
  { id: 'metamodernism', name: 'Metamodernism' },
  { id: 'hyperreality', name: 'Hyperreality Normalization' },
  { id: 'fragmented-attention', name: 'Fragmented Attention' },
  { id: 'networked-individualism', name: 'Networked Individualism' },
  { id: 'cultural-acceleration', name: 'Cultural Acceleration' },
  { id: 'participatory-media', name: 'Participatory Media Culture' }
];

// Sample data for demonstration
const SAMPLE_DATA = Array.from({ length: 9 }, (_, i) => {
  const year = 1985 + i * 5;
  // Generate sample data point with increasing values for the first cluster
  return {
    year,
    'authenticity-pursuit': 3.5 + (i * 0.5),
    'authenticity-pursuit_data': {
      description: `In ${year}, authenticity was a growing concern as digital media expanded.`,
      manifestations: [
        `Manifestation ${i+1}.1: Rise of personal blogs`,
        `Manifestation ${i+1}.2: Documentary-style filmmaking`,
        `Manifestation ${i+1}.3: "Real" marketing campaigns`,
        `Manifestation ${i+1}.4: Rejection of corporate aesthetics`
      ]
    }
  };
});

const AdvancedAnalysis: React.FC = () => {
  // State management
  const [selectedPreset, setSelectedPreset] = useState(availablePresets[0].preset);
  const [allClusters, setAllClusters] = useState(DEFAULT_CLUSTERS);
  const [selectedClusters, setSelectedClusters] = useState(['authenticity-pursuit']);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPoint, setSelectedPoint] = useState<any>(null);
  const [transformedData, setTransformedData] = useState(SAMPLE_DATA);
  const [brushEnabled, setBrushEnabled] = useState(false);
  const [zoomedDomain, setZoomedDomain] = useState<any>(null);
  const [yearFilter, setYearFilter] = useState('');

  // Filter clusters based on search term
  const filteredClusters = useMemo(() => {
    return allClusters.filter(cluster => 
      cluster.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  // Clear cluster selection
  const clearSelection = () => {
    setSelectedClusters([]);
  };

  // Reset zoom
  const resetZoom = () => {
    setZoomedDomain(null);
  };

  // Handle point click on chart
  const handleClick = (point: any, setPointFn: Function) => {
    setPointFn(point.data);
  };

  // Render the chart
  const renderChart = () => {
    const width = 800;
    const height = 400;
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
    let maxValue = 10; // Default max value
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
            className={`px-3 py-1 text-sm ${
              brushEnabled ? 'bg-blue-600 text-white' : 'bg-black/80 border border-white/20'
            }`}
          >
            {brushEnabled ? 'Cancel Zoom' : 'Zoom Mode'}
          </button>
          
          {zoomedDomain && (
            <button
              onClick={resetZoom}
              className="px-3 py-1 text-sm bg-red-600 text-white"
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
              className="bg-black/50 border border-white/30 p-1 text-white text-sm w-32"
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
            {selectedClusters.map((clusterId, i) => {
              const color = COLORS[i % COLORS.length];
              
              // Get all data points for this cluster
              const clusterData = filteredData
                .filter(d => d[clusterId] !== undefined)
                .map(d => ({
                  x: xScale(d.year),
                  y: yScale(d[clusterId]),
                  year: d.year,
                  value: d[clusterId]
                }));
              
              return (
                <g key={`cluster-${clusterId}`}>
                  <LinePath
                    data={clusterData}
                    x={d => d.x}
                    y={d => d.y}
                    stroke={color}
                    strokeWidth={2}
                    strokeOpacity={0.8}
                  />
                  
                  {/* Draw points */}
                  {clusterData.map((point, j) => (
                    <circle
                      key={`point-${clusterId}-${j}`}
                      cx={point.x}
                      cy={point.y}
                      r={4}
                      fill="black"
                      stroke={color}
                      strokeWidth={2}
                    />
                  ))}
                </g>
              );
            })}
            
            {/* Axis */}
            <AxisLeft 
              scale={yScale} 
              stroke="white" 
              tickStroke="white"
              tickLabelProps={() => ({
                fill: 'white',
                fontSize: 10,
                textAnchor: 'end',
                dx: -4
              })}
            />
            <AxisBottom 
              top={innerHeight} 
              scale={xScale} 
              stroke="white" 
              tickStroke="white"
              tickFormat={(value) => `${value} CE`}
              tickLabelProps={() => ({
                fill: 'white',
                fontSize: 10,
                textAnchor: 'middle',
                dy: 4
              })}
            />
            
            {/* Voronoi overlay for interaction */}
            {!brushEnabled && voronoiLayout.polygons().map((polygon, i) => {
              if (!polygon) return null;
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
    <div className="mt-8 pt-8 border-t border-white/20">
      <header className="mb-6">
        <h1 className="text-2xl font-mono">
          {selectedPreset.name} | Period: {selectedPreset.parameters.startYear}-{selectedPreset.parameters.endYear}
        </h1>
      </header>
      
      {/* Preset Selector */}
      <div className="mb-6 bg-black border border-white/20 p-4">
        <h2 className="text-lg mb-3">Select Dataset</h2>
        <div className="grid grid-cols-2 gap-3">
          {availablePresets.map(preset => (
            <button
              key={preset.id}
              className={`p-4 text-left ${
                selectedPreset.id === preset.preset.id 
                  ? 'bg-blue-900 border border-blue-500' 
                  : 'bg-black border border-white/10 hover:bg-white/5'
              }`}
              onClick={() => setSelectedPreset(preset.preset)}
            >
              <div className="font-medium">{preset.name}</div>
              <div className="text-sm text-white/70">{preset.preset.description}</div>
            </button>
          ))}
        </div>
      </div>
      
      <main className="flex flex-col gap-6">
        <div className="flex gap-4 items-start">
          {/* Cluster selector */}
          <div className="w-1/3 bg-black border border-white/20 p-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search clusters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black border border-white/20 p-2 text-white"
              />
            </div>
            
            <div className="flex gap-2 mb-4">
              <button 
                onClick={selectAllVisible}
                className="bg-blue-600 text-white px-3 py-1 text-sm"
              >
                Select All
              </button>
              <button 
                onClick={clearSelection}
                className="bg-red-600 text-white px-3 py-1 text-sm"
              >
                Clear
              </button>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {filteredClusters.map(cluster => (
                <div 
                  key={cluster.id}
                  className={`flex items-center p-2 ${
                    selectedClusters.includes(cluster.id) ? 'bg-blue-900/50' : ''
                  }`}
                  onClick={() => toggleCluster(cluster.id)}
                >
                  <input
                    type="checkbox"
                    checked={selectedClusters.includes(cluster.id)}
                    onChange={() => {}}
                    className="mr-2"
                  />
                  <span>{cluster.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Chart */}
          <div className="flex-1 bg-black border border-white/20 p-4">
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
        <div className="bg-black border border-white/20 p-4">
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
                    const color = COLORS[selectedClusters.indexOf(clusterId) % COLORS.length];
                    
                    return (
                      <div key={clusterId} className="border border-white/10 p-3">
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
                          {clusterId === 'authenticity-pursuit' 
                            ? "Marks the tendency in culture to seek and affirm a sense of realness, personal truth, and genuine experience in response to perceived artificiality or constructed experiences."
                            : "Description not available for this cluster."}
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
                  
                  {selectedPoint.manifestations?.length > 0 && (
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
                    <div key={clusterId} className="flex items-center p-2 border border-white/10">
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
    </div>
  );
};

export default AdvancedAnalysis; 