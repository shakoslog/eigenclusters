"use client";

import React, { useState, useEffect, useMemo, useCallback, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { LinePath } from '@visx/shape';
import { scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows, GridColumns } from '@visx/grid';
import { localPoint } from '@visx/event';
import { useTooltip, Tooltip } from '@visx/tooltip';
import { voronoi } from '@visx/voronoi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PatternLines } from '@visx/pattern';
import { scaleTime } from '@visx/scale';

import { PresetConfig } from '@/lib/presets/types';
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
import rightWingCulturePreset from '@/lib/presets/rightw_culture';
import foundationAIPreset from '@/lib/presets/foundation_ai';

// Define a type for presets
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const ModelSpecification = dynamic(() => import('@/components/ModelSpecification'), { ssr: false });
const SystemPromptModal = dynamic(() => import('@/components/SystemPromptModal'), { ssr: false });
const WhatIsThisModal = dynamic(() => import('@/components/WhatIsThisModal'), { ssr: false });

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
  const searchParamsString = searchParams.toString();

  // State for preset selection - initialize with Postmodern America
  const [selectedPreset, setSelectedPreset] = useState<PresetConfig>({
    ...americanCultureV3Preset,
    name: 'Postmodern America (1990-2025)',
    description: 'Tracking the acceleration of irony, mediated identity, and the collapse of institutional trust.'
  });
  // State for pre-frontier toggle
  const [showModelSpec, setShowModelSpec] = useState(false);
  const [showSystemPrompt, setShowSystemPrompt] = useState(false);
  const [systemPromptText, setSystemPromptText] = useState('');
  const [systemPromptLoading, setSystemPromptLoading] = useState(false);
  const [systemPromptError, setSystemPromptError] = useState<string | null>(null);
  const [showWhatIsThis, setShowWhatIsThis] = useState(false);
  
  // State for selected clusters
  const [selectedClusters, setSelectedClusters] = useState<string[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<any>(null);
  const [selectedPointPanel, setSelectedPointPanel] = useState<{
    x: number;
    y: number;
    isDragging: boolean;
    offsetX: number;
    offsetY: number;
  }>({
    x: 16,
    y: 16,
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
  });
  const [infoTab, setInfoTab] = useState<'overviews' | 'selected-point'>('overviews');
  
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
    const params = new URLSearchParams(searchParamsString);
    if (newClusters.length > 0) {
      params.set('clusters', newClusters.join(','));
    } else {
      params.delete('clusters');
    }
    const next = params.toString();
    router.push(next ? `${pathname}?${next}` : pathname, { scroll: false });
  };

  const updateUrlParams = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParamsString);
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === '') {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });
      const next = params.toString();
      router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
    },
    [pathname, router, searchParamsString]
  );

  const fetchSystemPrompt = useCallback(async () => {
    try {
      setSystemPromptLoading(true);
      setSystemPromptError(null);
      const response = await fetch('/api/analyze/prompt.txt', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Failed to load system prompt');
      }
      const text = await response.text();
      setSystemPromptText(text);
    } catch (error) {
      console.error('Failed to load system prompt', error);
      setSystemPromptError('Unable to load the system prompt. Please try again.');
    } finally {
      setSystemPromptLoading(false);
    }
  }, []);

  const handleOpenSystemPrompt = () => {
    setShowSystemPrompt(true);
    if (!systemPromptText) {
      fetchSystemPrompt();
    }
  };
  
  // For the availablePresets array, use the imported presets with their unique variable names
  const availablePresets = [
    { id: 'american_culture_v3', name: 'Postmodern America (1990-2025)', preset: { ...americanCultureV3Preset, name: 'Postmodern America (1990-2025)', description: 'Tracking the acceleration of irony, mediated identity, and the collapse of institutional trust.' } },
    { id: 'science_v2', name: 'Latent Clusters of Social Science Paradigms (1900-2025)', preset: { ...scienceV2Preset, name: 'Latent Clusters of Social Science Paradigms (1900-2025)', description: 'The evolution of social scientific thought, institutional trust, and the sociology of knowledge.' } },
    { id: 'democracy', name: 'Evolution of Democratic Thought (1890-2025)', preset: { ...democracyPreset, name: 'Evolution of Democratic Thought (1890-2025)', description: 'Tracing the history of democratic epistemologies, from technocratic progressivism to populist reaction.' } },
    { id: 'rationalism_v1', name: 'The Rationalist Sphere (2005-2025)', preset: { ...rationalismPreset, name: 'The Rationalist Sphere (2005-2025)', description: "A genealogy of the Rationalist, Effective Altruist, and 'Tech Right' intellectual subcultures." } },
    { id: 'dissident_right_culture', name: 'Dissident-Right Cultural Manifold (1995-2025)', preset: { ...rightWingCulturePreset, name: 'Dissident-Right Cultural Manifold (1995-2025)', description: 'Mapping the major dissident-right ideological eigenclusters from Buchanan to the AI-accelerants.' } },
    { id: 'foundation_ai', name: 'Foundation-Model Trajectories (1990-2025)', preset: { ...foundationAIPreset, name: 'Foundation-Model Trajectories (1990-2025)', description: 'How AI research paradigms shifted from symbolic logic and kernel methods to transformer-era foundation models.' } },
    { id: 'film_history', name: 'Cinema & Social Change (1960-2024)', preset: { ...filmPreset, name: 'Cinema & Social Change (1960-2024)', description: 'How film reflected and shaped the cultural revolutions of the late 20th century.' } },
    { id: 'internet_history', name: 'The Digital Revolution (1989-2025)', preset: { ...internetPreset, name: 'The Digital Revolution (1989-2025)', description: "From the World Wide Web to AI: the trajectory of the internet's impact on human cognition." } },
    { id: 'military_history', name: 'Latent Clusters of Military Strategy (1890-1950)', preset: { ...militaryPreset, name: 'Latent Clusters of Military Strategy (1890-1950)', description: 'Tracking the evolution of warfare, logistics, and state capacity from the late 19th century to the Cold War.' } },
    { id: 'cold-war', name: 'Cold War Analysis (1945-1991)', preset: coldWarPreset },
    { id: 'glasnost', name: 'Glasnost Analysis (1983-1991)', preset: glasnostPreset },
  ];

  const displayedPresets = availablePresets;

  useEffect(() => {
    const params = new URLSearchParams(searchParamsString);
    const tabParam = params.get('info_tab');
    if (tabParam === 'selected-point') {
      setInfoTab('selected-point');
    } else {
      setInfoTab('overviews');
    }
  }, [searchParamsString]);

  useEffect(() => {
    const params = new URLSearchParams(searchParamsString);
    const clusterIdParam = params.get('point_cluster');
    const yearParam = params.get('point_year');
    const clustersData = selectedPreset.cachedResult?.clusters;

    if (!clusterIdParam || !yearParam || !clustersData) {
      setSelectedPoint(null);
      return;
    }

    const clusterData = clustersData[clusterIdParam];
    const trajectory = clusterData?.trajectory?.[yearParam];

    if (!clusterData || !trajectory) {
      setSelectedPoint(null);
      return;
    }

    setSelectedPoint({
      clusterId: clusterIdParam,
      clusterName: clusterData.name || clusterIdParam,
      clusterDescription: clusterData.description || '',
      year: parseInt(yearParam, 10),
      value: trajectory.variance_explained,
      description: trajectory.description,
      manifestations: trajectory.key_manifestations || [],
    });
    setSelectedPointPanel(prev => ({
      ...prev,
      x: prev.x ?? 16,
      y: prev.y ?? 16,
    }));
  }, [searchParamsString, selectedPreset]);
  
  // Sync from URL on mount and param change
  useEffect(() => {
    const params = new URLSearchParams(searchParamsString);
    const datasetId = params.get('dataset');
    const clustersParam = params.get('clusters');
    const urlClusterIds = clustersParam ? clustersParam.split(',') : [];

    if (datasetId) {
      const found = availablePresets.find(p => p.id === datasetId);
      if (found) {
        if (found.preset.id !== selectedPreset.id) {
          // Dataset changed, update everything
          setSelectedPreset(found.preset);
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
  }, [searchParamsString, selectedPreset.id]);

  // Handler for preset selection that updates URL
  const handlePresetSelect = (presetOption: typeof availablePresets[0]) => {
    setSelectedPreset(presetOption.preset);
    setSelectedClusters([]);
    setSelectedPoint(null);
    
    // Update URL without full reload
    const params = new URLSearchParams(searchParamsString);
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

  const clearSelectedPoint = useCallback(() => {
    setSelectedPoint(null);
    setInfoTab('overviews');
    updateUrlParams({ point_cluster: null, point_year: null, info_tab: null });
  }, [updateUrlParams]);

  const handleClick = useCallback(
    (point: any, setSelectedPoint: any) => {
      setSelectedPoint(point.data);
      setInfoTab('selected-point');
      setSelectedPointPanel(prev => ({
        ...prev,
        x: prev.x || 0,
        y: prev.y || 0,
      }));
      updateUrlParams({
        point_cluster: point.data.clusterId,
        point_year: String(point.data.year),
        info_tab: 'selected-point',
      });
    },
    [setInfoTab, updateUrlParams]
  );
  
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
  const [yearFilter, setYearFilter] = useState<string>('');
  
  // Add this function to your component
  const resetZoom = () => {
    // setZoomedDomain(null); // No longer needed
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
      domain: [startYear, endYear],
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
      domain: [0, maxValue * 1.1],
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
    
    // Handle brush end (removed)
    
    return (
      <div>
        <div className="mb-4 flex gap-2 items-center">
          <input
            type="text"
            placeholder="Filter by year..."
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="bg-black/40 border border-white/30 rounded px-2 py-1 text-white text-sm w-36 placeholder:text-white/40"
          />
          <button
            onClick={() => setYearFilter('')}
            className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white"
          >
            Clear
          </button>
        </div>
        
        <div className="relative">
          {selectedPoint && (
            <div
              className="absolute z-10 w-72 rounded-lg border border-white/20 bg-black/85 text-xs text-white shadow-lg backdrop-blur"
              style={{
                left: selectedPointPanel.x,
                top: selectedPointPanel.y,
              }}
            >
              <div
                className="flex cursor-move items-center justify-between gap-2 rounded-t-lg border-b border-white/10 bg-white/5 px-4 py-2"
              onMouseDown={e => {
                e.stopPropagation();
                setSelectedPointPanel(prev => ({
                  ...prev,
                  isDragging: true,
                  offsetX: e.clientX - selectedPointPanel.x,
                  offsetY: e.clientY - selectedPointPanel.y,
                }));
              }}
              >
                <div>
                  <p className="text-sm font-semibold text-white">
                    {selectedPoint.clusterName}
                  </p>
                  <p className="text-white/60">
                    {selectedPoint.year} ·{' '}
                    {typeof selectedPoint.value === 'number'
                      ? selectedPoint.value.toFixed(2)
                      : selectedPoint.value}
                    % variance
                  </p>
                </div>
                <button
                  onClick={clearSelectedPoint}
                  className="text-white/60 hover:text-white"
                  aria-label="Clear selected point"
                >
                  ✕
                </button>
              </div>
              <div
                className="cursor-default px-4 pb-4"
                onMouseDown={e => e.stopPropagation()}
              >
                {selectedPoint.description && (
                  <p className="mt-2 text-white/80">
                    {selectedPoint.description}
                  </p>
                )}
                {selectedPoint.manifestations?.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-white/70">
                    {selectedPoint.manifestations.slice(0, 3).map((item: string, idx: number) => (
                      <li key={`${item}-${idx}`}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
          {selectedPointPanel.isDragging && (
            <div
              className="fixed inset-0 z-10"
              onMouseMove={e => {
                setSelectedPointPanel(prev => ({
                  ...prev,
                  x: e.clientX - prev.offsetX,
                  y: e.clientY - prev.offsetY,
                }));
              }}
              onMouseUp={() =>
                setSelectedPointPanel(prev => ({
                  ...prev,
                  isDragging: false,
                }))
              }
            />
          )}
        
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
            {voronoiLayout.polygons().map((polygon, i) => {
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
            
            {/* Brush for zooming (removed) */}
          </Group>
        </svg>
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="mb-8">
        <div className="text-xl font-mono text-white/40 mb-4">CULTURAL EIGENCLUSTERS</div>
        
        <div className="space-y-4 mb-6">
          <p className="text-sm text-white/70 max-w-4xl leading-relaxed">
            Each colored line tracks the "cultural dominance" of a specific theme over time. A higher value means that theme was more influential in the cultural landscape.
            Cultural dominance is a relative metric with no intrinsic unit. Click on any point in a series to see the historical catalysts that drove that movement.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleOpenSystemPrompt}
              className="inline-flex items-center px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-black bg-white border border-gray-500 shadow-[2px_2px_0_rgba(0,0,0,0.45)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_rgba(0,0,0,0.45)]"
            >
              View System Prompt
            </button>
            <button 
              onClick={() => setShowModelSpec(true)}
              className="inline-flex items-center px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-purple-100 border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 transition-colors rounded"
            >
              Model Specification
            </button>
            <button
              onClick={() => setShowWhatIsThis(true)}
              className="inline-flex items-center px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-emerald-100 border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors rounded"
            >
              What is this?
            </button>
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white">{selectedPreset.name}</h1>
      </header>
      
      <ModelSpecification isOpen={showModelSpec} onClose={() => setShowModelSpec(false)} />
      <SystemPromptModal
        isOpen={showSystemPrompt}
        onClose={() => setShowSystemPrompt(false)}
        content={systemPromptText}
        isLoading={systemPromptLoading}
        error={systemPromptError}
        onRetry={fetchSystemPrompt}
      />
      <WhatIsThisModal isOpen={showWhatIsThis} onClose={() => setShowWhatIsThis(false)} />
      
      {/* Preset Selector */}
      <div className="mb-6 bg-black/30 border border-white/20 rounded p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg">Select Dataset</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 text-[0.92rem]">
          {displayedPresets.map(preset => (
            <button
              key={preset.id}
              className={`p-4 rounded text-left border transition ${
                selectedPreset.id === preset.preset.id 
                  ? 'bg-blue-900 border-blue-500 shadow-[3px_3px_0_rgba(0,0,0,0.35)]' 
                  : 'bg-black/50 border-white/10 hover:bg-black/70'
              }`}
              onClick={() => handlePresetSelect(preset)}
            >
              <div className="font-semibold text-[1rem] leading-snug text-white break-words">
                {preset.name}
              </div>
              <div className="text-sm text-white/70 leading-snug break-words">
                {preset.preset.description}
              </div>
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
                  <span className="flex-1 text-[0.85rem] text-white/80 leading-snug break-words">
                    {cluster.name}
                  </span>
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
          <Tabs
            value={infoTab}
            onValueChange={(value) => {
              const nextValue =
                (value as 'overviews' | 'selected-point') ?? 'overviews';
              setInfoTab(nextValue);
              updateUrlParams({
                info_tab: nextValue === 'overviews' ? null : nextValue,
              });
            }}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="overviews" className="data-[state=active]:bg-blue-900/50">
                Cluster Overviews
              </TabsTrigger>
              <TabsTrigger value="selected-point" className="data-[state=active]:bg-blue-900/50 relative">
                Selected Point
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
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