"use client";

import React, { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
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
import americaModernPreset from '@/lib/presets/america_modern';
import americaPoliticsPreset from '@/lib/presets/america-politics';
import scienceLongPreset from '@/lib/presets/science-long';
import britishMonarchyPreset from '@/lib/presets/british_monarchy';
import dwNominatePreset from '@/lib/presets/dw-nominate';
import evolutionOfSciencePreset from '@/lib/presets/evolution_of_science';
import coldWarPreset from '@/lib/presets/cold-war';
import glasnostPreset from '@/lib/presets/glasnost';
import renaissancePreset from '@/lib/presets/renaissance';
import alexandriaPreset from '@/lib/presets/alexandria';
import literaturePreset from '@/lib/presets/literature';
import philoSciPreset from '@/lib/presets/philo-sci';
import postwarJapanPreset from '@/lib/presets/postwar-japan';
import rationalityPreset from '@/lib/presets/rationality';
import tylerCowenPreset from '@/lib/presets/tyler-cowen';
import scienceV2Preset from '@/lib/presets/science_v2';
import americanCultureV2Preset from '@/lib/presets/american_culture_v2';
import americanCultureV3Preset from '@/lib/presets/american_culture_v3';
import democracyPreset from '@/lib/presets/democracy';
import humePreset from '@/lib/presets/hume';
import filmPreset from '@/lib/presets/film';
import internetPreset from '@/lib/presets/internet';
import militaryPreset from '@/lib/presets/military';
import rationalismPreset from '@/lib/presets/rationalism';

// Define a type for presets
import { PresetConfig } from '@/lib/presets/types';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

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
    case 'america_modern':
    case 'america-politics':
      return {
        chartHeight: 650, // Taller chart for American data
        maxClusters: 12,  // More clusters for complex political data
      };
    case 'science-long':
    case 'evolution-of-science':
      return {
        chartHeight: 600,
        maxClusters: 15, // Many clusters for science history
      };
    case 'dw-nominate':
      return {
        chartHeight: 600,
        maxClusters: 8, // Focused on political dimensions
      };
    case 'cold-war':
      return {
        chartHeight: 600, // Taller chart for cold war data
        maxClusters: 10,  // Limit to 10 clusters for readability
      };
    case 'glasnost':
      return {
        chartHeight: 550,
        maxClusters: 12,
      };
    case 'alexandria':
    case 'literature':
    case 'philo-sci':
    case 'postwar-japan':
    case 'rationality':
    case 'science_v2':
    case 'american_culture_v3':
    case 'democracy':
    case 'hume_enlightenment':
    case 'film_history':
    case 'internet_history':
    case 'military_history':
    case 'rationalism_v1':
      return {
        chartHeight: 600,
        maxClusters: 10,
      };
    default:
      return {
        chartHeight: 500,
        maxClusters: 15,
      };
  }
};


function EigenClustersApp() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // State for preset selection - initialize with Postmodern America
  const [selectedPreset, setSelectedPreset] = useState<PresetConfig>({
    ...americanCultureV3Preset,
    name: 'Postmodern America (1990-2025)',
    description: 'Tracking the acceleration of irony, mediated identity, and the collapse of institutional trust.'
  });
  // State for pre-frontier toggle
  const [showPreFrontier, setShowPreFrontier] = useState(false);
  
  // State for selected clusters
  const [selectedClusters, setSelectedClusters] = useState<string[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<any>(null);
  
  // Tooltip setup
  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<any>();

  // Helper to update clusters state and URL
  const updateClusters = (newClusters: string[]) => {
    setSelectedClusters(newClusters);
    const params = new URLSearchParams(searchParams.toString());
    if (newClusters.length > 0) {
      params.set('clusters', newClusters.join(','));
    } else {
      params.delete('clusters');
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  
  // For the availablePresets array, use the imported presets with their unique variable names
  const availablePresets = [
    // Frontier/Modern Presets (Visible by default)
    { id: 'american_culture_v3', name: 'Postmodern America (1990-2025)', preset: { ...americanCultureV3Preset, name: 'Postmodern America (1990-2025)', description: 'Tracking the acceleration of irony, mediated identity, and the collapse of institutional trust.' }, isPreFrontier: false },
    { id: 'science_v2', name: 'Latent Clusters of Social Science Paradigms (1900-2025)', preset: { ...scienceV2Preset, name: 'Latent Clusters of Social Science Paradigms (1900-2025)', description: 'The evolution of social scientific thought, institutional trust, and the sociology of knowledge.' }, isPreFrontier: false },
    { id: 'democracy', name: 'Evolution of Democratic Thought (1890-2025)', preset: { ...democracyPreset, name: 'Evolution of Democratic Thought (1890-2025)', description: 'Tracing the history of democratic epistemologies, from technocratic progressivism to populist reaction.' }, isPreFrontier: false },
    { id: 'rationalism_v1', name: 'The Rationalist Sphere (2005-2025)', preset: { ...rationalismPreset, name: 'The Rationalist Sphere (2005-2025)', description: "A genealogy of the Rationalist, Effective Altruist, and 'Tech Right' intellectual subcultures." }, isPreFrontier: false },
    { id: 'film_history', name: 'Cinema & Social Change (1960-2024)', preset: { ...filmPreset, name: 'Cinema & Social Change (1960-2024)', description: 'How film reflected and shaped the cultural revolutions of the late 20th century.' }, isPreFrontier: false },
    { id: 'internet_history', name: 'The Digital Revolution (1989-2025)', preset: { ...internetPreset, name: 'The Digital Revolution (1989-2025)', description: "From the World Wide Web to AI: the trajectory of the internet's impact on human cognition." }, isPreFrontier: false },
    { id: 'military_history', name: 'Latent Clusters of Military Strategy (1890-1950)', preset: { ...militaryPreset, name: 'Latent Clusters of Military Strategy (1890-1950)', description: 'Tracking the evolution of warfare, logistics, and state capacity from the late 19th century to the Cold War.' }, isPreFrontier: false },
    { id: 'hume_enlightenment', name: 'Hume / Enlightenment Analysis (1700-1800)', preset: { ...humePreset, name: 'Hume / Enlightenment Analysis (1700-1800)', description: 'Cultural variance analysis of the Enlightenment era (1700-1800)' }, isPreFrontier: false },
    
    // Pre-Frontier/Historical/Niche Presets (Hidden by default)
    { id: 'america_modern', name: 'American Cultural Cycles (1989-2025)', preset: { ...americaModernPreset, name: 'American Cultural Cycles (1989-2025)', description: 'Tracking the shift from print to digital epistemology and the fragmentation of consensus.' }, isPreFrontier: true },
    { id: 'science-long', name: 'Evolution of Scientific Truth (1895-2024)', preset: { ...scienceLongPreset, name: 'Evolution of Scientific Truth (1895-2024)', description: 'Epistemic shifts in scientific inquiry, from the quantum revolution to the replication crisis.' }, isPreFrontier: true },
    { id: 'america-politics', name: 'US Political Polarization (1800-2025)', preset: { ...americaPoliticsPreset, name: 'US Political Polarization (1800-2025)', description: 'A deep history of American political division, from the early republic to modern culture wars.' }, isPreFrontier: true },
    { id: 'dw-nominate', name: 'DW-NOMINATE Political Analysis', preset: dwNominatePreset, isPreFrontier: true },
    { id: 'evolution-of-science', name: 'Evolution of Science', preset: { ...evolutionOfSciencePreset, description: 'Evolution of Scientific Thought' }, isPreFrontier: true },
    { id: 'cold-war', name: 'Cold War Analysis (1945-1991)', preset: coldWarPreset, isPreFrontier: true },
    { id: 'glasnost', name: 'Glasnost Analysis (1983-1991)', preset: glasnostPreset, isPreFrontier: true },
    { id: 'alexandria', name: 'Alexandria Analysis (-300 to -30)', preset: alexandriaPreset, isPreFrontier: true },
    { id: 'literature', name: 'Literature Analysis (1780-1900)', preset: literaturePreset, isPreFrontier: true },
    { id: 'philo-sci', name: 'Philosophy of Science (1000-2000)', preset: philoSciPreset, isPreFrontier: true },
    { id: 'postwar-japan', name: 'Post-War Japan (1945-1964)', preset: postwarJapanPreset, isPreFrontier: true },
    { id: 'rationality', name: 'Rationality & Empiricism (1000-2000)', preset: rationalityPreset, isPreFrontier: true },
  ];

  const displayedPresets = availablePresets.filter(p => showPreFrontier || !p.isPreFrontier);
  
  // Sync from URL on mount and param change
  useEffect(() => {
    const datasetId = searchParams.get('dataset');
    const clustersParam = searchParams.get('clusters');
    const urlClusterIds = clustersParam ? clustersParam.split(',') : [];

    if (datasetId) {
      const found = availablePresets.find(p => p.id === datasetId);
      if (found) {
        if (found.preset.id !== selectedPreset.id) {
          // Dataset changed, update everything
          setSelectedPreset(found.preset);
          if (found.isPreFrontier) setShowPreFrontier(true);
          setSelectedClusters(urlClusterIds);
        } else {
          // Same dataset, check if clusters need sync (e.g. back button)
          const isSame = urlClusterIds.length === selectedClusters.length && 
                         urlClusterIds.every(id => selectedClusters.includes(id));
          if (!isSame) {
            setSelectedClusters(urlClusterIds);
          }
        }
      }
    } else if (selectedClusters.length > 0 && !clustersParam) {
      // No dataset param (home), clear clusters if URL cleared them
      setSelectedClusters([]);
    }
  }, [searchParams, selectedPreset.id, selectedClusters]);

  // Handler for preset selection that updates URL
  const handlePresetSelect = (presetOption: typeof availablePresets[0]) => {
    setSelectedPreset(presetOption.preset);
    setSelectedClusters([]);
    setSelectedPoint(null);
    
    // Update URL without full reload
    const params = new URLSearchParams(searchParams.toString());
    params.set('dataset', presetOption.id);
    params.delete('clusters');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  
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
    // Sort keys to ensure consistent ordering for index-based URL mapping
    const clusterIds = Object.keys(clusters).sort((a, b) => {
      // Try to extract numbers for natural sort (e.g. 2 before 10)
      const numA = parseInt(a.split('_')[0]);
      const numB = parseInt(b.split('_')[0]);
      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }
      return a.localeCompare(b);
    });
    
    // Get the year range from the preset parameters
    const startYear = parseInt(selectedPreset.startYear, 10);
    const endYear = parseInt(selectedPreset.endYear, 10);
    
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
        name: clusters[id].name || id,
        description: clusters[id].description // Store the cluster description
      }))
    };
  }, [selectedPreset]);
  
  // Filter clusters based on search term (removed, but keeping filteredClusters variable for compatibility)
  const filteredClusters = useMemo(() => {
    return allClusters;
  }, [allClusters]);
  
  // Toggle cluster selection
  const toggleCluster = (clusterId: string) => {
    const newClusters = selectedClusters.includes(clusterId)
      ? selectedClusters.filter(id => id !== clusterId)
      : [...selectedClusters, clusterId];
    updateClusters(newClusters);
  };
  
  // Select all visible clusters
  const selectAllVisible = () => {
    updateClusters(filteredClusters.map(c => c.id));
  };
  
  // Clear selection
  const clearSelection = () => {
    updateClusters([]);
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
    const startYear = parseInt(selectedPreset.startYear, 10);
    const endYear = parseInt(selectedPreset.endYear, 10);
    
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
              clusterDescription: allClusters.find(c => c.id === clusterId)?.description || '',
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
              tickFormat={value => `${Math.floor(value as number)} CE`}
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
              label="relative influence"
              labelProps={{
                fill: '#fff',
                opacity: 0.5,
                fontSize: 12,
                textAnchor: 'middle',
              }}
              labelOffset={36}
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
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{selectedPreset.name}</h1>
        <div className="text-sm text-white/60 max-w-3xl leading-relaxed">
          <span className="text-blue-400 font-medium mr-1">How to read:</span>
          Each colored line tracks the <strong>"cultural dominance"</strong> of a specific theme over time. 
          A higher value means that theme was more influential in the cultural landscape. 
          <span className="text-white/50 text-xs ml-1">(Note: Cultural dominance is a relative metric with no intrinsic unit).</span>
          <span className="text-white/80 ml-1">Click on any dot to reveal the specific historical events and works that drove that trend.</span>
          <Link href="/api/analyze/prompt.txt" target="_blank" className="ml-3 text-white/40 hover:text-blue-400 text-xs border-b border-white/20 hover:border-blue-400 transition-colors pb-0.5">
            View System Prompt
          </Link>
        </div>
      </header>
      
      {/* Preset Selector */}
      <div className="mb-6 bg-black/30 border border-white/20 rounded p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg">Select Dataset</h2>
          <label className="flex items-center gap-2 cursor-pointer text-sm text-white/70 hover:text-white">
            <input
              type="checkbox"
              checked={showPreFrontier}
              onChange={(e) => setShowPreFrontier(e.target.checked)}
              className="accent-blue-600"
            />
            Show Pre-Frontier Models
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {displayedPresets.map(preset => (
            <button
              key={preset.id}
              className={`p-3 rounded text-left ${
                selectedPreset.id === preset.preset.id 
                  ? 'bg-blue-900 border border-blue-500' 
                  : 'bg-black/50 border border-white/10 hover:bg-black/70'
              }`}
              onClick={() => handlePresetSelect(preset)}
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
              {filteredClusters.map((cluster, index) => (
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
                  <span className="text-xs text-white/50 w-6 text-right mr-2 flex-shrink-0">{index + 1}.</span>
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

                  {selectedPoint.clusterDescription && (
                    <div className="mb-4 p-3 bg-white/5 rounded border border-white/10">
                      <h4 className="text-sm font-bold text-blue-400 mb-1">Cluster Overview:</h4>
                      <p className="text-sm italic text-white/80">{selectedPoint.clusterDescription}</p>
                    </div>
                  )}
                  
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
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-6">Loading...</div>}>
      <EigenClustersApp />
    </Suspense>
  );
}