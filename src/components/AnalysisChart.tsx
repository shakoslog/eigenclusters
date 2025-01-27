import React, { useMemo, useState } from 'react';
import { LinePath } from '@visx/shape';
import { scaleLinear, scaleTime } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { timeFormat } from 'd3-time-format';
import { NumberValue } from 'd3-scale';
import { AnalysisResponse } from '../types/api';
import { TickFormatter } from '@visx/axis/lib/types';

// Line patterns for different clusters
const LINE_PATTERNS = [
  { strokeDasharray: 'none' },           // solid
  { strokeDasharray: '8,8' },            // dashed
  { strokeDasharray: '2,6' },            // dotted
  { strokeDasharray: '12,6,2,6' },       // dash-dot
];

// Colors for different clusters
const colors = [
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

interface AnalysisChartProps {
  data: {
    year: number;
    clusters: {
      clusterName: string;
      percentageContribution: number;
      description: string;
      manifestations: string[];
    }[];
  }[];
  onPointSelect: (pointData: {
    year: number;
    clusterName: string;
    description: string;
    manifestations: string[];
  }) => void;
}

// Update the tick formatter with proper typing
const tickFormatter: TickFormatter<Date | NumberValue> = (value: any): string => {
  if (value instanceof Date) {
    return timeFormat("%Y")(value);
  }
  return String(value);
};

export const AnalysisChart: React.FC<AnalysisChartProps> = ({ data, onPointSelect }) => {
  console.log('AnalysisChart received data:', data); // Debug log

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 360 });
  const [hoveredPoint, setHoveredPoint] = useState<any>(null);
  const [hoveredLine, setHoveredLine] = useState<string | null>(null);
  const [isDrawing, setIsDrawing] = useState(true);
  const [animationOffset, setAnimationOffset] = useState(0);
  const [selectedPoint, setSelectedPoint] = useState<{
    year: number;
    clusterName: string;
    description: string;
    manifestations: string[];
  } | null>(null);
  
  // Add state for showing point selector
  const [pointSelector, setPointSelector] = useState<{
    x: number;
    y: number;
    year: number;
    points: {
      clusterName: string;
      description: string;
      manifestations: string[];
      percentageContribution: number;
    }[];
  } | null>(null);

  // Add state for showing cluster description
  const [selectedCluster, setSelectedCluster] = useState<{
    name: string;
    description: string;
  } | null>(null);

  // Get cluster descriptions from first year's data
  const clusterDescriptions = useMemo(() => {
    const firstYearData = data[0];
    return firstYearData?.clusters.reduce((acc, cluster) => ({
      ...acc,
      [cluster.clusterName]: cluster.description
    }), {}) || {};
  }, [data]);

  // Safety check for data
  if (!data?.length) {
    return (
      <div className="text-white text-center p-4">
        NO DATA AVAILABLE FOR VISUALIZATION
      </div>
    );
  }

  // Responsive width handling
  React.useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: 360 // Fixed height or make this responsive too if needed
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Chart dimensions
  const margin = { top: 40, right: 40, bottom: 40, left: 60 };
  const innerWidth = dimensions.width - margin.left - margin.right;
  const innerHeight = dimensions.height - margin.top - margin.bottom;

  // Get unique clusters
  const clusterNames = useMemo(() => 
    Array.from(new Set(
      data.flatMap(d => d.clusters.map(c => c.clusterName))
    )).sort(),
    [data]
  );

  // Process data
  const allYears = data.map(d => new Date(d.year, 0));
  const allValues = data.flatMap(d => 
    d.clusters.map(c => c.percentageContribution)
  );

  // Scales
  const xScale = useMemo(
    () => scaleTime({
      domain: [
        new Date(Math.min(...allYears.map(d => d.getTime()))),
        new Date(Math.max(...allYears.map(d => d.getTime())))
      ],
      range: [0, innerWidth],
    }),
    [innerWidth, allYears]
  );

  const yScale = useMemo(
    () => scaleLinear({
      domain: [0, Math.max(...allValues) * 1.1],
      range: [innerHeight, 0],
    }),
    [innerHeight, allValues]
  );

  // Animation effect
  React.useEffect(() => {
    let animationFrame: number;
    let offset = 0;

    const animate = () => {
      offset = (offset + 1) % 20; // Adjust speed by changing increment and modulo
      setAnimationOffset(offset);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Initial drawing animation
  React.useEffect(() => {
    if (isDrawing) {
      const timer = setTimeout(() => {
        setIsDrawing(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isDrawing]);

  // Function to handle point clicks
  const handlePointClick = (event: React.MouseEvent, year: number, x: number, y: number) => {
    // Find all points for this year
    const yearData = data.find(d => d.year === year);
    if (!yearData) return;

    // If there's only one cluster, select it directly
    if (yearData.clusters.length === 1) {
      setSelectedPoint({
        year,
        ...yearData.clusters[0]
      });
      return;
    }

    // Otherwise, show the point selector with all clusters for that year
    setPointSelector({
      x,
      y,
      year,
      points: yearData.clusters
    });
  };

  return (
    <div className="space-y-4">
      <div style={{ position: 'relative' }}>
        <div ref={containerRef} className="relative font-mono bg-black p-4 border border-white w-full">
          <style>
            {`
              @keyframes matrixRain {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100%); }
              }

              @keyframes dashOffset {
                to {
                  stroke-dashoffset: -20;
                }
              }

              @keyframes gridPulse {
                0% { opacity: 0.2; }
                50% { opacity: 0.3; }
                100% { opacity: 0.2; }
              }

              .matrix-rain {
                animation: matrixRain 15s linear infinite;
              }

              .animated-dash {
                animation: dashOffset 1s linear infinite;
              }

              .grid-container {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
              }

              .grid-pulse {
                animation: gridPulse 4s ease-in-out infinite;
              }
            `}
          </style>
          
          <div className="text-white text-xs mb-2 flex justify-between items-center">
            <span className="opacity-70">[Interactive Chart. Click on the lines and select a cluster to see more information]</span>
            <span className="text-[10px]">SIGNAL ACTIVE</span>
          </div>
          
          <svg width={dimensions.width} height={dimensions.height}>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" stroke="#0f360f" strokeWidth="0.5"/>
                <circle cx="20" cy="20" r="1" fill="#0f360f" className="grid-pulse"/>
              </pattern>
            </defs>

            <rect x={0} y={0} width={dimensions.width} height={dimensions.height} fill="black" />
            <rect x={0} y={0} width={dimensions.width} height={dimensions.height} fill="url(#grid)" />
            
            {/* Matrix rain effect */}
            <Group className="grid-container">
              {Array.from({ length: 4 }, (_, rainLayer) => (
                <g 
                  key={`rain-${rainLayer}`} 
                  className="matrix-rain"
                  style={{ 
                    animationDelay: `${-rainLayer * 5}s`,
                    opacity: 0.15
                  }}
                >
                  {Array.from({ length: 40 }, (_, i) => (
                    Array.from({ length: 20 }, (_, j) => (
                      <circle
                        key={`${i}-${j}`}
                        cx={i * (dimensions.width / 40)}
                        cy={j * (dimensions.height / 20)}
                        r="1"
                        fill="white"
                      />
                    ))
                  ))}
                </g>
              ))}
            </Group>

            <Group left={margin.left} top={margin.top}>
              {/* Data lines */}
              {clusterNames.map((clusterName, idx) => {
                const lineData = data.map(d => ({
                  date: new Date(d.year, 0),
                  value: d.clusters.find(c => c.clusterName === clusterName)?.percentageContribution || 0
                }));

                const linePattern = LINE_PATTERNS[idx % LINE_PATTERNS.length];

                return (
                  <g key={clusterName}>
                    <LinePath
                      data={lineData}
                      x={d => xScale(d.date)}
                      y={d => yScale(d.value)}
                      stroke="white"
                      strokeWidth={hoveredLine === clusterName ? 3 : 2}
                      {...linePattern}
                      className={linePattern.strokeDasharray !== 'none' ? 'animated-dash' : ''}
                      style={{
                        opacity: hoveredLine === null || hoveredLine === clusterName ? 1 : 0.3,
                      }}
                    />

                    {/* Data points */}
                    {lineData.map((point, i) => {
                      const yearData = data.find(d => d.year === point.date.getFullYear());
                      const clusterData = yearData?.clusters.find(c => c.clusterName === clusterName);
                      
                      return (
                        <rect
                          key={i}
                          x={xScale(point.date) - 3}
                          y={yScale(point.value) - 3}
                          width={6}
                          height={6}
                          fill="black"
                          stroke="white"
                          style={{ cursor: 'pointer' }}
                          onClick={(e) => handlePointClick(
                            e,
                            point.date.getFullYear(),
                            xScale(point.date),
                            yScale(point.value)
                          )}
                        />
                      );
                    })}
                  </g>
                );
              })}

              {/* Axes */}
              <AxisLeft
                scale={yScale}
                stroke="white"
                tickStroke="white"
                tickLabelProps={() => ({
                  fill: 'white',
                  fontSize: 10,
                  fontFamily: 'monospace',
                  dx: '-0.5em',
                })}
              />
              <AxisBottom
                top={innerHeight}
                scale={xScale}
                stroke="white"
                tickStroke="white"
                tickFormat={tickFormatter}
                tickLabelProps={() => ({
                  fill: 'white',
                  fontSize: 10,
                  fontFamily: 'monospace',
                  dy: '0.5em',
                })}
              />
            </Group>
          </svg>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap justify-center gap-6 border-t border-white/20 pt-4">
            {clusterNames.map((name, idx) => {
              const linePattern = LINE_PATTERNS[idx % LINE_PATTERNS.length];
              return (
                <div 
                  key={name}
                  className="flex items-center gap-2 cursor-pointer"
                  style={{
                    opacity: hoveredLine === null || hoveredLine === name ? 1 : 0.3
                  }}
                  onMouseEnter={() => setHoveredLine(name)}
                  onMouseLeave={() => setHoveredLine(null)}
                >
                  <svg width="30" height="20">
                    <line
                      x1={0}
                      x2={30}
                      y1={10}
                      y2={10}
                      stroke="white"
                      strokeWidth={2}
                      {...linePattern}
                      className={linePattern.strokeDasharray !== 'none' ? 'animated-dash' : ''}
                    />
                    <rect
                      x={12}
                      y={7}
                      width={6}
                      height={6}
                      fill="black"
                      stroke="white"
                    />
                  </svg>
                  <span className="text-white text-xs">
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Status bar */}
        <div className="text-white text-xs mt-4 flex justify-between">
          <span>
            {hoveredPoint 
              ? `TRACKING: ${hoveredPoint.clusterName}`
              : 'AWAITING INPUT...'}
          </span>
          <span>
            {hoveredPoint 
              ? `COORD: ${hoveredPoint.date.getFullYear()},${hoveredPoint.value}`
              : 'SYSTEM READY'}
          </span>
        </div>

        {/* Point selector popup */}
        {pointSelector && (
          <div 
            className="absolute bg-black border border-white/50 p-2 z-10 max-w-xs"
            style={{
              left: pointSelector.x + margin.left,
              top: pointSelector.y + margin.top - 100,
            }}
          >
            <div className="text-xs mb-2">Select cluster for {pointSelector.year}:</div>
            <div className="space-y-1">
              {pointSelector.points.map((point, i) => (
                <button
                  key={i}
                  className="block w-full text-left px-2 py-1 hover:bg-white/10 text-xs"
                  onClick={() => {
                    setSelectedPoint({
                      year: pointSelector.year,
                      clusterName: point.clusterName,
                      description: point.description,
                      manifestations: point.manifestations
                    });
                    setPointSelector(null);
                  }}
                >
                  {point.clusterName} ({point.percentageContribution.toFixed(1)})
                </button>
              ))}
            </div>
            <button 
              className="absolute top-1 right-1 opacity-50 hover:opacity-100 text-xs"
              onClick={() => setPointSelector(null)}
            >
              ×
            </button>
          </div>
        )}
      </div>

      {/* Selected point metadata */}
      {selectedPoint && (
        <div className="border border-white/20 rounded p-4 mt-4 font-mono">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-bold">{selectedPoint.clusterName}</h3>
              <div className="text-sm opacity-70">Year: {selectedPoint.year}</div>
            </div>
            <button 
              onClick={() => setSelectedPoint(null)}
              className="text-sm opacity-50 hover:opacity-100"
            >
              [CLOSE]
            </button>
          </div>
          
          {/* Add general cluster description */}
          <div className="mb-4 p-3 bg-white/5 rounded">
            <div className="text-sm font-bold mb-2">CLUSTER OVERVIEW:</div>
            <div className="text-sm opacity-80">{clusterDescriptions[selectedPoint.clusterName]}</div>
          </div>

          {/* Year-specific description */}
          <div className="mb-4">
            <div className="font-bold mb-2">TEMPORAL ANALYSIS:</div>
            <div>{selectedPoint.description}</div>
          </div>

          <div>
            <div className="font-bold mb-2">KEY MANIFESTATIONS:</div>
            <ul className="list-disc pl-4 space-y-1">
              {selectedPoint.manifestations.map((m, i) => (
                <li key={i} className="text-sm">{m}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Add cluster info panel above chart */}
      {selectedCluster && (
        <div className="border border-white/20 rounded p-4 mb-4 font-mono">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold">{selectedCluster.name}</h3>
            <button 
              onClick={() => setSelectedCluster(null)}
              className="text-sm opacity-50 hover:opacity-100"
            >
              [CLOSE]
            </button>
          </div>
          <p className="mt-2 text-sm opacity-80">
            {selectedCluster.description}
          </p>
        </div>
      )}
    </div>
  );
}; 