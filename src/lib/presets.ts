import { ModelType } from '@/components/EigenclusterTerminal';
import { postwarJapanData } from './presets/postwar-japan';

// Import the preset types
import { PresetConfig } from './presets/types';

// Import the getPresets function from the presets folder
import { getPresets as getPresetsFromIndex } from './presets/index';

// For backwards compatibility - use the new approach
export const getPresets = async (): Promise<PresetConfig[]> => {
  return await getPresetsFromIndex();
};

// Export the PresetConfig type
export type { PresetConfig };

// Re-export everything from the presets folder
export * from './presets/index';