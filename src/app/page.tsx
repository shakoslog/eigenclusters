"use client";

import React, { useState, useEffect, useMemo, useCallback, Suspense, useRef } from 'react';
import dynamic from 'next/dynamic';
import { LinePath } from '@visx/shape';
import { scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { GridRows, GridColumns } from '@visx/grid';
import { localPoint } from '@visx/event';
import { useTooltip, Tooltip } from '@visx/tooltip';
import { voronoi } from '@visx/voronoi';
import { PatternLines } from '@visx/pattern';
import { scaleTime } from '@visx/scale';

import { PresetConfig } from '@/lib/presets/types';
import americaModernPreset from '@/lib/presets/america_modern';
import americaPoliticsPreset from '@/lib/presets/america-politics';
import scienceLongPreset from '@/lib/presets/science-long';
import britishMonarchyPreset from '@/lib/presets/british_monarchy';
import dwNominatePreset from '@/lib/presets/dw-nominate';
import evolutionOfSciencePreset from '@/lib/presets/evolution_of_science';
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
import adolescencePreset from '@/lib/presets/adolescence';
import lanaDelReyPreset from '@/lib/presets/lana_del_rey';
import biologyPreset from '@/lib/presets/biology';
import godPreset from '@/lib/presets/god';
import americanCulturalEvolutionPreset from '@/lib/presets/american_cultural_evolution_2019_2023';

// Define a type for presets
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const PromptSpecModal = dynamic(() => import('@/components/PromptSpecModal'), { ssr: false });

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


// Helper to parse year or week-based dates into numbers for scales
const parseDateToNumber = (dateStr: string): number => {
  if (!dateStr) return 0;
  if (typeof dateStr !== 'string') return dateStr;
  if (dateStr.includes('-W')) {
    const [y, w] = dateStr.split('-W').map(s => parseInt(s, 10));
    return y + (w / 52.14);
  }
  return parseInt(dateStr, 10);
};


function EigenClustersApp() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname() ?? '/';
  const searchParamsString = searchParams?.toString() ?? '';

  // State for preset selection - initialize with Postmodern America
  const [selectedPreset, setSelectedPreset] = useState<PresetConfig>({
    ...americanCultureV3Preset,
    name: 'Postmodern America (1990-2025)',
    description: 'Tracking the acceleration of irony, mediated identity, and the collapse of institutional trust.'
  });
  // System prompt modal state
  const [showPromptSpecModal, setShowPromptSpecModal] = useState(false);
  const [promptSpecTab, setPromptSpecTab] = useState<'system' | 'model'>('system');
  const [systemPromptText, setSystemPromptText] = useState('');
  const [systemPromptLoading, setSystemPromptLoading] = useState(false);
  const [systemPromptError, setSystemPromptError] = useState<string | null>(null);
  const [mobileNoticeDismissed, setMobileNoticeDismissed] = useState(false);
  
  // State for selected clusters
  const [selectedClusters, setSelectedClusters] = useState<string[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<any>(null);
  const popupScrollRef = useRef<HTMLDivElement>(null);
  const [selectedPointPanel, setSelectedPointPanel] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
    isDragging: boolean;
    isResizing: boolean;
    offsetX: number;
    offsetY: number;
  }>(() => {
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('selectedPointPanelSize');
      if (saved) {
        const { width, height } = JSON.parse(saved);
        return {
          x: 16,
          y: 16,
          width: width || 320,
          height: height || 288,
          isDragging: false,
          isResizing: false,
          offsetX: 0,
          offsetY: 0,
        };
      }
    }
    return {
      x: 16,
      y: 16,
      width: 320,
      height: 288,
      isDragging: false,
      isResizing: false,
      offsetX: 0,
      offsetY: 0,
    };
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
      const response = await fetch('/api/analyze/prompt_cluster.txt', { cache: 'no-store' });
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

  const handlePromptSpecTabChange = useCallback(
    (nextTab: 'system' | 'model') => {
      setPromptSpecTab(nextTab);
      updateUrlParams({ prompt_tab: nextTab });
    },
    [updateUrlParams]
  );

  const closePromptSpecModal = useCallback(() => {
    setShowPromptSpecModal(false);
    updateUrlParams({ prompt_tab: null });
  }, [updateUrlParams]);

  const openSystemPrompt = () => {
    setPromptSpecTab('system');
    setShowPromptSpecModal(true);
    updateUrlParams({ prompt_tab: 'system' });
    if (!systemPromptText) {
      fetchSystemPrompt();
    }
  };

  // Deep link: open prompt modal via URL param, e.g. ?prompt_tab=system
  useEffect(() => {
    const params = new URLSearchParams(searchParamsString);
    const promptTabParam = params.get('prompt_tab');
    if (promptTabParam === 'system' || promptTabParam === 'model') {
      setPromptSpecTab(promptTabParam);
      setShowPromptSpecModal(true);
      if (!systemPromptText) {
        fetchSystemPrompt();
      }
    } else {
      setShowPromptSpecModal(false);
    }
  }, [fetchSystemPrompt, searchParamsString, systemPromptText]);
  
  // For the availablePresets array, use the imported presets with their unique variable names
  const availablePresets = [
    { id: 'american_culture_v3', name: 'Postmodern America (1990-2025)', preset: { ...americanCultureV3Preset, name: 'Postmodern America (1990-2025)', description: 'Tracking the acceleration of irony, mediated identity, and the collapse of institutional trust.' } },
    { id: 'science_v2', name: 'Latent Clusters of Social Science Paradigms (1900-2025)', preset: { ...scienceV2Preset, name: 'Latent Clusters of Social Science Paradigms (1900-2025)', description: 'The evolution of social scientific thought, institutional trust, and the sociology of knowledge.' } },
    { id: 'democracy', name: 'Evolution of Democratic Thought (1890-2025)', preset: { ...democracyPreset, name: 'Evolution of Democratic Thought (1890-2025)', description: 'Tracing the history of democratic epistemologies, from technocratic progressivism to populist reaction.' } },
    { id: 'rationalism_v1', name: 'The Rationalist Sphere (2005-2025)', preset: { ...rationalismPreset, name: 'The Rationalist Sphere (2005-2025)', description: "A genealogy of the Rationalist, Effective Altruist, and 'Tech Right' intellectual subcultures." } },
    { id: 'dissident_right_culture', name: 'Dissident-Right Cultural Manifold (1995-2025)', preset: { ...rightWingCulturePreset, name: 'Dissident-Right Cultural Manifold (1995-2025)', description: 'Mapping the major dissident-right ideological eigenclusters from Buchanan to the AI-accelerants.' } },
    { id: 'foundation_ai', name: 'Foundation-Model Trajectories (1990-2025)', preset: { ...foundationAIPreset, name: 'Foundation-Model Trajectories (1990-2025)', description: 'How AI research paradigms shifted from symbolic logic and kernel methods to transformer-era foundation models.' } },
    { id: 'biology_history', name: 'History of Biology (1800-2000)', preset: biologyPreset },
    { id: 'millennial_adolescence', name: 'Millennial Adolescence (1999-2016)', preset: { ...adolescencePreset, name: 'Millennial Adolescence (1999-2016)', description: 'Tracking the mediated existentialism and cultural currents that defined late-millennial adolescence.' } },
    { id: 'lana_del_rey', name: 'Lana Del Rey Artistic Manifold (2005-2025)', preset: { ...lanaDelReyPreset, name: 'Lana Del Rey Artistic Manifold (2005-2025)', description: 'Tracking the evolution of mythic americana, submission dynamics, and confessional realism in her artistic identity.' } },
    { id: 'american_cultural_evolution_2019_2023', name: 'Covid Era Clusters', preset: americanCulturalEvolutionPreset },
    { id: 'film_history', name: 'Cinema & Social Change (1960-2024)', preset: { ...filmPreset, name: 'Cinema & Social Change (1960-2024)', description: 'How film reflected and shaped the cultural revolutions of the late 20th century.' } },
    { id: 'internet_history', name: 'The Digital Revolution (1989-2025)', preset: { ...internetPreset, name: 'The Digital Revolution (1989-2025)', description: "From the World Wide Web to AI: the trajectory of the internet's impact on human cognition." } },
    { id: 'military_history', name: 'Latent Clusters of Military Strategy (1890-1950)', preset: { ...militaryPreset, name: 'Latent Clusters of Military Strategy (1890-1950)', description: 'Tracking the evolution of warfare, logistics, and state capacity from the late 19th century to the Cold War.' } },
    { id: 'glasnost', name: 'Glasnost Analysis (1983-1991)', preset: glasnostPreset },
    { id: 'god', name: 'God (1800-2000)', preset: { ...godPreset, name: 'God (1800-2000)', description: 'The evolution of the Western God concept from ontological sovereign to contested signifier.' } },
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
      year: parseDateToNumber(yearParam),
      rawYear: yearParam,
      value: trajectory.salience_share,
      description: trajectory.description,
      manifestations: trajectory.key_manifestations || [],
    });
    setSelectedPointPanel(prev => ({
      ...prev,
      x: prev.x ?? 16,
      y: prev.y ?? 16,
    }));
  }, [searchParamsString, selectedPreset]);
  
  // Helper to get first 3 cluster IDs from a preset
  const getDefaultClusters = useCallback((preset: PresetConfig) => {
    const clusters = preset.cachedResult?.clusters;
    if (!clusters) return [];
    return Object.keys(clusters).sort((a, b) => {
      const numA = parseInt(a.split('_')[0]);
      const numB = parseInt(b.split('_')[0]);
      if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
      return a.localeCompare(b);
    }).slice(0, 3);
  }, []);

  // Set default clusters on initial mount only
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (initialized) return;
    setInitialized(true);
    
    const params = new URLSearchParams(searchParamsString);
    const clustersParam = params.get('clusters');
    
    // Only set defaults if no clusters in URL
    if (!clustersParam) {
      const defaults = getDefaultClusters(selectedPreset);
      setSelectedClusters(defaults);
    }
  }, [initialized, searchParamsString, selectedPreset, getDefaultClusters]);

  // Sync from URL changes (back/forward navigation only)
  useEffect(() => {
    if (!initialized) return;
    
    const params = new URLSearchParams(searchParamsString);
    const datasetId = params.get('dataset');
    const clustersParam = params.get('clusters');
    const urlClusterIds = clustersParam ? clustersParam.split(',') : [];

    if (datasetId) {
      const found = availablePresets.find(p => p.id === datasetId);
      if (found && found.preset.id !== selectedPreset.id) {
        // Dataset changed via URL (back button), sync everything
        setSelectedPreset(found.preset);
        setSelectedClusters(urlClusterIds);
      }
    }
  }, [searchParamsString, initialized]);

  // Handler for preset selection that updates URL
  const handlePresetSelect = (presetOption: typeof availablePresets[0]) => {
    setSelectedPreset(presetOption.preset);
    setSelectedPoint(null);
    
    // Default to first 3 clusters
    const clusterIds = getDefaultClusters(presetOption.preset);
    setSelectedClusters(clusterIds);
    
    // Update URL without full reload - clear any selected point from previous dataset
    const params = new URLSearchParams(searchParamsString);
    params.set('dataset', presetOption.id);
    params.delete('point_cluster');
    params.delete('point_year');
    if (clusterIds.length > 0) {
      params.set('clusters', clusterIds.join(','));
    } else {
      params.delete('clusters');
    }
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
    updateUrlParams({ point_cluster: null, point_year: null });
  }, [updateUrlParams]);

  // Scroll popup to top when a new point is selected
  useEffect(() => {
    if (selectedPoint && popupScrollRef.current) {
      popupScrollRef.current.scrollTop = 0;
    }
  }, [selectedPoint]);

  const handleClick = useCallback(
    (point: any, setSelectedPoint: any) => {
      setSelectedPoint(point.data);
      setSelectedPointPanel(prev => ({
        ...prev,
        x: prev.x || 0,
        y: prev.y || 0,
      }));
      updateUrlParams({
        point_cluster: point.data.clusterId,
        point_year: point.data.rawYear || String(point.data.year),
      });
    },
    [updateUrlParams]
  );
  
  // Transform data for the selected preset
  const { transformedData, allClusters } = useMemo(() => {
    if (!selectedPreset.cachedResult || !selectedPreset.cachedResult.clusters) {
      return { transformedData: [], allClusters: [] };
    }
    
    type ClusterTrajectoryPoint = {
      salience_share: number;
      description: string;
      key_manifestations?: string[];
    };

    type ClusterDatum = {
      name?: string;
      description?: string;
      trajectory: Record<string, ClusterTrajectoryPoint>;
    };

    const clusters = selectedPreset.cachedResult.clusters as Record<string, ClusterDatum>;
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
    const startYear = parseDateToNumber(selectedPreset.startYear);
    const endYear = parseDateToNumber(selectedPreset.endYear);
    
    console.log("Preset year range:", startYear, "to", endYear);
    
    // Get all years from all clusters
    const allYears = new Set<string>();
    Object.values(clusters).forEach(cluster => {
      Object.keys(cluster.trajectory).forEach(year => {
        allYears.add(year);
      });
    });
    
    // Sort years chronologically
    const sortedYears = Array.from(allYears).sort((a, b) => {
      if (a.includes('-W') && b.includes('-W')) {
        const [yA, wA] = a.split('-W').map(s => parseInt(s, 10));
        const [yB, wB] = b.split('-W').map(s => parseInt(s, 10));
        if (yA !== yB) return yA - yB;
        return wA - wB;
      }
      return parseInt(a, 10) - parseInt(b, 10);
    });
    
    // Create data points for each year
    const data = sortedYears.map(year => {
      // Parse year/week as a numerical value for the x-axis
      let yearNum: number;
      if (year.includes('-W')) {
        const [y, w] = year.split('-W').map(s => parseInt(s, 10));
        yearNum = y + (w / 52.14); // Using 52.14 weeks per year for better accuracy
      } else {
        yearNum = parseInt(year, 10);
      }
      
      const yearData: any = { year: yearNum, rawYear: year };
      
      // Add each cluster's value for this year
      Object.entries(clusters).forEach(([clusterId, clusterData]) => {
        const yearTrajectory = clusterData.trajectory[year];
        if (yearTrajectory) {
          yearData[clusterId] = yearTrajectory.salience_share;
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
    const startYear = parseDateToNumber(selectedPreset.startYear);
    const endYear = parseDateToNumber(selectedPreset.endYear);
    
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
    
    const filteredData = transformedData;
    
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
              rawYear: d.rawYear,
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
        <div className="relative">
          {selectedPoint && (
            <div
              className="absolute z-10 rounded-lg border border-white/20 bg-black/95 text-xs text-white shadow-xl backdrop-blur flex flex-col"
              style={{
                left: selectedPointPanel.x,
                top: selectedPointPanel.y,
                width: selectedPointPanel.width,
                height: selectedPointPanel.height,
                minWidth: 200,
                minHeight: 150,
              }}
            >
              <div
                className="flex cursor-move items-center justify-between gap-2 border-b border-white/10 bg-white/5 px-3 py-2 rounded-t-lg flex-shrink-0"
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
                  <p className="text-white/50 text-[0.7rem]">
                    {selectedPoint.rawYear || selectedPoint.year} · {typeof selectedPoint.value === 'number'
                      ? selectedPoint.value.toFixed(1)
                      : selectedPoint.value}%
                  </p>
                </div>
                <button
                  onMouseDown={e => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    clearSelectedPoint();
                  }}
                  className="text-white/40 hover:text-white text-lg leading-none p-1"
                  aria-label="Clear selected point"
                >
                  ×
                </button>
              </div>
              <div
                ref={popupScrollRef}
                className="flex-1 overflow-y-auto px-3 py-2 space-y-2"
                onMouseDown={e => e.stopPropagation()}
              >
                {selectedPoint.description && (
                  <div>
                    <p className="text-white/90 leading-relaxed">{selectedPoint.description}</p>
                  </div>
                )}
                {selectedPoint.manifestations?.length > 0 && (
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-wider text-white/50 mb-1 mt-1">Key Manifestations</p>
                    <ul className="list-disc pl-4 space-y-1 text-white/80">
                      {selectedPoint.manifestations.map((item: string, idx: number) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedPoint.clusterDescription && (
                  <div className="p-2 bg-white/5 rounded border border-white/10 mt-2">
                    <p className="text-[0.65rem] uppercase tracking-wider text-white/40 mb-1">About this cluster</p>
                    <p className="text-white/60 italic leading-relaxed text-[0.7rem]">{selectedPoint.clusterDescription}</p>
                  </div>
                )}
              </div>
              {/* Resize handle */}
              <div
                className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
                onMouseDown={e => {
                  e.stopPropagation();
                  setSelectedPointPanel(prev => ({
                    ...prev,
                    isResizing: true,
                    offsetX: e.clientX,
                    offsetY: e.clientY,
                  }));
                }}
              >
                <svg className="w-4 h-4 text-white/30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 22H20V20H22V22ZM22 18H20V16H22V18ZM18 22H16V20H18V22ZM22 14H20V12H22V14ZM18 18H16V16H18V18ZM14 22H12V20H14V22Z" />
                </svg>
              </div>
            </div>
          )}
          {selectedPointPanel.isDragging && (
            <div
              className="fixed inset-0 z-20"
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
          {selectedPointPanel.isResizing && (
            <div
              className="fixed inset-0 z-20 cursor-se-resize"
              onMouseMove={e => {
                setSelectedPointPanel(prev => {
                  const deltaX = e.clientX - prev.offsetX;
                  const deltaY = e.clientY - prev.offsetY;
                  const newWidth = Math.max(200, prev.width + deltaX);
                  const newHeight = Math.max(150, prev.height + deltaY);
                  return {
                    ...prev,
                    width: newWidth,
                    height: newHeight,
                    offsetX: e.clientX,
                    offsetY: e.clientY,
                  };
                });
              }}
              onMouseUp={() => {
                setSelectedPointPanel(prev => {
                  // Save to localStorage
                  if (typeof window !== 'undefined') {
                    localStorage.setItem('selectedPointPanelSize', JSON.stringify({
                      width: prev.width,
                      height: prev.height,
                    }));
                  }
                  return {
                    ...prev,
                    isResizing: false,
                  };
                });
              }}
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
    <div className="min-h-screen bg-black text-white p-3 sm:p-6">
      {/* Mobile notice - only shown on small screens */}
      {!mobileNoticeDismissed && (
        <div className="lg:hidden mb-4 p-4 bg-amber-900/30 border border-amber-500/40 rounded-lg">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <p className="text-amber-200 text-sm font-medium mb-1">Best on Desktop</p>
              <p className="text-amber-200/70 text-xs leading-relaxed">
                This interactive visualization works best on a desktop or tablet. You can still explore below, but some features may be limited on mobile.
              </p>
            </div>
            <button
              onClick={() => setMobileNoticeDismissed(true)}
              className="text-amber-200/60 hover:text-amber-200 text-lg leading-none p-1 flex-shrink-0"
              aria-label="Dismiss notice"
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      <header className="mb-8">
        <div className="text-base sm:text-xl font-mono text-white/40 mb-3 sm:mb-4">CULTURAL EIGENCLUSTERS</div>
        
        <div className="space-y-4 mb-6">
          <p className="text-xs sm:text-sm text-white/70 max-w-4xl leading-relaxed">
            Each colored line tracks the "cultural dominance" of a specific theme over time. A higher value means that theme was more influential in the cultural landscape.
            Cultural dominance is a relative metric with no intrinsic unit. Click on any point in a series to see the historical catalysts that drove that movement.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            <button
              onClick={openSystemPrompt}
              className="inline-flex items-center px-2 sm:px-3 py-1 text-[0.65rem] sm:text-[0.75rem] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-black bg-white border border-gray-500 shadow-[2px_2px_0_rgba(0,0,0,0.45)] transition hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_rgba(0,0,0,0.45)]"
            >
              System Prompt
            </button>
          </div>
        </div>

        <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-white">{selectedPreset.name}</h1>
      </header>
      
      <PromptSpecModal
        isOpen={showPromptSpecModal}
        onClose={closePromptSpecModal}
        tab={promptSpecTab}
        onTabChange={handlePromptSpecTabChange}
        promptText={systemPromptText}
        isLoading={systemPromptLoading}
        error={systemPromptError}
        onRetry={fetchSystemPrompt}
      />
      
      <main className="flex flex-col gap-6">
        {/* Dataset Selector - at the top */}
        <div className="bg-black/30 border border-white/20 rounded p-3 sm:p-4">
          <div className="flex justify-between items-center mb-2 sm:mb-3">
            <h2 className="text-base sm:text-lg">Select Dataset</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 text-[0.85rem] sm:text-[0.92rem]">
            {displayedPresets.map(preset => (
              <button
                key={preset.id}
                className={`p-2.5 sm:p-4 rounded text-left border transition ${
                  selectedPreset.id === preset.preset.id 
                    ? 'bg-blue-900 border-blue-500 shadow-[3px_3px_0_rgba(0,0,0,0.35)]' 
                    : 'bg-black/50 border-white/10 hover:bg-black/70'
                }`}
                onClick={() => handlePresetSelect(preset)}
              >
                <div className="font-semibold text-[0.85rem] sm:text-[1rem] leading-snug text-white break-words">
                  {preset.name}
                </div>
                <div className="text-xs sm:text-sm text-white/70 leading-snug break-words hidden sm:block">
                  {preset.preset.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chart and Cluster Selector Row */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Cluster selector - fixed height to match chart */}
          <div className="w-full lg:w-1/4 bg-black/30 border border-white/20 rounded p-3 sm:p-4 flex flex-col" style={{ maxHeight: '580px' }}>
            <div className="flex gap-2 mb-3 flex-shrink-0">
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
            
            <div className="flex-1 overflow-y-auto min-h-0">
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
          <div className="w-full lg:flex-1 bg-black/30 border border-white/20 rounded p-3 sm:p-4 overflow-x-auto">
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