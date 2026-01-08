import { PresetConfig } from './types';
import culturalClusters1930_1990 from './cultural_clusters_1930_1990.json';

const culturalClusters1930_1990Preset: PresetConfig = {
  id: 'cultural_clusters_1930_1990',
  name: 'Cultural Clusters (1930-1990)',
  description: 'Five-year tracking of relative cultural salience share across 10 dominant cultural prototypes from 1930 to 1990.',
  startYear: '1930',
  endYear: '1990',
  clusterStart: 1,
  clusterEnd: 10,
  periodicity: 5,
  context: 'Global cultural history (1930-1990)',
  model: 'o1-mini',
  cachedResult: culturalClusters1930_1990,
};

export default culturalClusters1930_1990Preset;



