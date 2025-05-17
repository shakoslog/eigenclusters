import { PresetConfig } from './types';
import rawData from './mini-trends.json';

const miniTrendsLegacyPreset: PresetConfig = {
  id: "mini-trends-legacy",
  name: "Mini Recent Trends (Legacy)",
  description: "A minimal dataset using legacy format (2000-2020)",
  parameters: {
    startYear: "2000",
    endYear: "2020",
    clusterStart: 1,
    clusterEnd: 2,
    periodicity: 10,
    context: "Legacy format demonstration",
    model: "claude-3-opus-20240229"
  },
  cachedResult: rawData
};

export default miniTrendsLegacyPreset;