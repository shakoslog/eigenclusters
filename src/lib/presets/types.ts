import { ModelType } from '@/components/EigenclusterTerminal';

// Legacy format parameters
export interface PresetParameters {
  startYear: string;
  endYear: string;
  clusterStart: number;
  clusterEnd: number;
  periodicity: number;
  context: string;
  model: ModelType;
}

// Updated interface to support both old and new formats
export interface PresetConfig {
  id: string;
  name: string;
  description: string;

  // New format - direct properties
  startYear?: string;
  endYear?: string;
  clusterStart?: number;
  clusterEnd?: number;
  periodicity?: number;
  context?: string;
  model?: ModelType;

  // Legacy format - nested parameters
  parameters?: PresetParameters;

  // Data
  cachedResult?: any;
}