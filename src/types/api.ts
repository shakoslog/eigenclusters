export interface AnalysisRequest {
    startYear: number;
    endYear: number;
    clusterStart: number;
    clusterEnd: number;
    analysisType: 'snapshot' | 'timeSeries';
    counterfactual?: string;
  }
  
  export interface ClusterExample {
    title: string;
    creator: string;
    year: number;
    type: string;
  }
  
  export interface Cluster {
    clusterName: string;
    percentageContribution: number;
  }
  
  export interface TimeSeriesDataPoint {
    year: number;
    clusters: Cluster[];
  }
  
  export interface AnalysisResponse {
    timeSeriesData: TimeSeriesDataPoint[];
    metadata: {
      startYear: number;
      endYear: number;
      clusterStart: number;
      clusterEnd: number;
      periodicity: number;
      context?: string;
    };
  }