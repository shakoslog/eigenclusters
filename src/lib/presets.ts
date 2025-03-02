import { coldWarAnalysis, philosophyOfScienceAnalysis, empiricismRationalityAnalysis } from './mockData';
import { ModelType } from '@/components/EigenclusterTerminal';

export interface PresetConfig {
  id: string;
  name: string;
  description: string;
  parameters: {
    startYear: string;
    endYear: string;
    clusterStart: number;
    clusterEnd: number;
    periodicity: number;
    model: string;
    context?: string;
  };
  cachedResult: any;
}

export const presets: PresetConfig[] = [
  {
    id: "cold_war",
    name: "Cold War Analysis",
    description: "Cultural trends 1940-2000",
    parameters: {
      startYear: "1940",
      endYear: "2000",
      clusterStart: 1,
      clusterEnd: 5,
      periodicity: 10,
      model: "gpt4o"
    },
    cachedResult: coldWarAnalysis
  },
  {
    id: "philosophy_of_science",
    name: "Philosophy of Science",
    description: "European discovery of the philosophy of science (1000-2000)",
    parameters: {
      startYear: "1000",
      endYear: "2000",
      clusterStart: 1,
      clusterEnd: 5,
      periodicity: 100,
      model: "o1-mini",
      context: "The European discovery of the philosophy of science"
    },
    cachedResult: philosophyOfScienceAnalysis
  },
  {
    id: "empiricism_rationality",
    name: "Empiricism and Rationality",
    description: "The rise and fall of empiricism and rationality (1000-2000)",
    parameters: {
      startYear: "1000",
      endYear: "2000",
      clusterStart: 1,
      clusterEnd: 5,
      periodicity: 100,
      model: "o1-mini",
      context: "The rise and fall of empiricism and rationality within the philosophy of science"
    },
    cachedResult: empiricismRationalityAnalysis
  }
]; 