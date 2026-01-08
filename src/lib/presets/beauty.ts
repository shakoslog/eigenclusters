import { PresetConfig } from './types';
import beautyData from './beauty_data.json';

const beautyPreset: PresetConfig = {
  id: 'beauty_clusters_1880_2020',
  name: 'Beauty Clusters (1880-2020)',
  description: 'Two-year tracking of 30 cultural prototypes related to beauty, modernity, and institutional drift (1880-2020).',
  startYear: '1880',
  endYear: '2020',
  clusterStart: 1,
  clusterEnd: 30,
  periodicity: 2,
  context: 'Beauty / modernity / aesthetic-moral drift (primarily Western/US cultural context)',
  model: 'o1-mini',
  cachedResult: beautyData
};

export default beautyPreset;
