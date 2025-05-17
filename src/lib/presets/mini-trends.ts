import { PresetConfig } from './types';
import rawData from './mini-trends.json';

const miniTrendsPreset: PresetConfig = {
  id: "mini-trends",
  name: "Mini Recent Trends",
  description: "A minimal dataset of recent trends (2000-2020)",
  startYear: "2000",
  endYear: "2020",
  clusterStart: 1,
  clusterEnd: 2,
  periodicity: 10,
  context: "None",
  model: "claude-3-opus-20240229",
  cachedResult: rawData
};

export default miniTrendsPreset;
