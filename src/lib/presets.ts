import { coldWarAnalysis } from './mockData';

export interface PresetConfig {
  id: string;
  name: string;
  description: string;
  parameters: {
    startYear: number;
    endYear: number;
    clusterStart: number;
    clusterEnd: number;
    periodicity: number;
    model: string;
    context?: string;
  };
  cachedResult: {
    content: string;
    timeSeriesData: any[];
    metadata: {
      period: string;
      interval: string;
      cluster_range: string;
      measurement: string;
      top_20_clusters: string[];
    };
    clusters: Record<string, any>;
  };
  jsonContent: string;  // The pre-populated JSON content
}

export const presets: PresetConfig[] = [
  {
    id: 'cold_war',
    name: 'Cold War Analysis',
    description: 'Cultural analysis of Cold War period (1940-2000)',
    parameters: {
      startYear: 1940,
      endYear: 2000,
      clusterStart: 1,
      clusterEnd: 5,
      periodicity: 10,
      model: 'gpt4o-mini',
      context: 'Focus on ideological, technological, and social movements during the Cold War era.'
    },
    cachedResult: coldWarAnalysis,
    jsonContent: `{
      "clusters": [
        {
          "name": "Blitzkrieg Tactics",
          "weight": 0.8,
          "description": "..."
        },
        // ... more pre-populated clusters
      ]
    }`
  },
  {
    id: 'tech_trends',
    name: 'Technology Trends',
    description: 'Analyze emerging technology trends from 2019-2023',
    parameters: {
      startYear: 2019,
      endYear: 2023,
      clusterStart: 1,
      clusterEnd: 20,
      periodicity: 'yearly',
      model: 'gpt4',
      context: 'Focus on technology trends, particularly in AI, blockchain, and cloud computing.'
    },
    cachedResult: {
      // Add your cached JSON result here
    },
    jsonContent: `{
      "clusters": [
        {
          "name": "Perspective Techniques",
          "weight": 0.9,
          "description": "..."
        },
        // ... more pre-populated clusters
      ]
    }`
  },
  {
    id: 'social_movements',
    name: 'Social Movements',
    description: 'Track major social movements and cultural shifts 2020-2023',
    parameters: {
      startYear: 2020,
      endYear: 2023,
      clusterStart: 1,
      clusterEnd: 20,
      periodicity: 'yearly',
      model: 'gpt4',
      context: 'Focus on social movements, activism, and cultural shifts.'
    },
    cachedResult: {
      // Add your cached JSON result here
    },
    jsonContent: `{
      "clusters": [
        {
          "name": "Perspective Techniques",
          "weight": 0.9,
          "description": "..."
        },
        // ... more pre-populated clusters
      ]
    }`
  },
  {
    id: 'ww2',
    name: 'WW2 Military Evolution',
    parameters: {
      startYear: 1939,
      endYear: 1945,
      clusterStart: 1,
      clusterEnd: 5,
      periodicity: 1,
      model: 'claude3.5',
      context: 'Focus on European and Pacific theaters'
    },
    jsonContent: `{
      "clusters": [
        {
          "name": "Blitzkrieg Tactics",
          "weight": 0.8,
          "description": "..."
        },
        // ... more pre-populated clusters
      ]
    }`
  },
  {
    id: 'renaissance',
    name: 'Italian Renaissance Art',
    parameters: {
      startYear: 1400,
      endYear: 1600,
      clusterStart: 1,
      clusterEnd: 4,
      periodicity: 25,
      model: 'claude3.5',
      context: 'Focus on Florence and Venice'
    },
    jsonContent: `{
      "clusters": [
        {
          "name": "Perspective Techniques",
          "weight": 0.9,
          "description": "..."
        },
        // ... more pre-populated clusters
      ]
    }`
  }
]; 