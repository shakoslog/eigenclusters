import { ModelType } from '@/components/EigenclusterTerminal';

export interface PresetConfig {
  id: string;
  name: string;
  description: string;
  startYear: string;
  endYear: string;
  clusterStart: number;
  clusterEnd: number;
  periodicity: number;
  context: string;
  model: ModelType;
  cachedResult?: any;
} 