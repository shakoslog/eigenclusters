import { PresetConfig } from './types';
import rawData from './test-trends.json';

const testTrendsPreset: PresetConfig = {
  id: "test-trends",
  name: "Test Cultural Trends",
  description: "A test dataset showing major cultural trends from 1950-2020",
  startYear: "1950",
  endYear: "2020",
  clusterStart: 1,
  clusterEnd: 3,
  periodicity: 10,
  context: "None",
  model: "claude-3-opus-20240229",
  cachedResult: rawData
};

export default testTrendsPreset;
