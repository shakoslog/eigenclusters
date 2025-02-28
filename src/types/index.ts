export interface AnalysisParams {
  startYear: string;         // Changed from number to string
  endYear: string;           // Changed from number to string
  clusterStart: string | number; // Allow both
  clusterEnd: string | number;   // Allow both
  periodicity: number;
  model: string;
  context?: string;          // Make context a string (not ChatContext)
}

// Add this if needed
export type ModelType = 'claude' | 'gpt4o' | 'gpt4o-mini' | 'deepseek' | 'deepseek_chat' | 'o1-mini';

// Add this if you need it
export interface AnalysisResult {
  timeSeriesData: {
    year: number;
    clusters: {
      clusterName: string;
      percentageContribution: any;
      description: any;
      manifestations: any;
    }[];
  }[];
  metadata: any;
  clusters: any;
  content: string;  // Not undefined
} 