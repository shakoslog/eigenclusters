import { ModelType } from '@/components/EigenclusterTerminal';
import { postwarJapanData } from './presets/postwar-japan';

// Import the preset types
import { PresetConfig } from './presets/types';

// Import individual presets directly
import alexandriaPreset from './presets/alexandria';
import glasnostPreset from './presets/glasnost';
import philoSciPreset from './presets/philo-sci';
import rationalityPreset from './presets/rationality';
import postwarJapanPreset from './presets/postwar-japan';
import tylerCowenPreset from './presets/tyler-cowen';
import literaturePreset from './presets/literature';

// Export all presets
export const presets: PresetConfig[] = [
  alexandriaPreset,
  glasnostPreset,
  philoSciPreset,
  rationalityPreset,
  postwarJapanPreset,
  tylerCowenPreset,
  literaturePreset
];

// Function to get all presets (for compatibility with the dynamic import approach)
export const getPresets = async (): Promise<PresetConfig[]> => {
  return presets;
};

export type { PresetConfig };

// Re-export everything from the presets folder
export * from './presets/index'; 