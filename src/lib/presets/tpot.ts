import { PresetConfig } from './types';
import tpotData from './tpot_data.json';

const tpotPreset: PresetConfig = {
  id: 'tpot_2019_2025',
  name: 'TPOT / Postrat Twitter (2019-2025)',
  description: 'Monthly tracking of relative cultural salience share within TPOT ("This Part of Twitter").',
  startYear: '2019-01',
  endYear: '2025-12',
  clusterStart: 1,
  clusterEnd: 20,
  periodicity: 1,
  context: 'TPOT ("This Part of Twitter") / Postrat Twitter community',
  model: 'o1-mini',
  cachedResult: tpotData
};

export default tpotPreset;
