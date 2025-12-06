import { PresetConfig } from './types';

// Dynamic import for all preset files
// This approach will automatically import any file in this directory that's not index.ts or types.ts
const importPresets = () => {
  const presets: PresetConfig[] = [];
  
  // In a typical browser environment, we can't dynamically read the file system
  // So we need to manually list out possible imports, but in a way that makes adding new ones easy
  const presetModules = {
    'cold-war': () => import('./cold-war').then(module => module.default),
    'alexandria': () => import('./alexandria').then(module => module.default),
    'glasnost': () => import('./glasnost').then(module => module.default),
    'philo-sci': () => import('./philo-sci').then(module => module.default),
    'rationality': () => import('./rationality').then(module => module.default),
    'postwar-japan': () => import('./postwar-japan').then(module => module.default),
    'tyler-cowen': () => import('./tyler-cowen').then(module => module.default),
    'literature': () => import('./literature').then(module => module.default),
    'renaissance': () => import('./renaissance').then(module => module.default),
    'science_v2': () => import('./science_v2').then(module => module.default),
    'american_culture_v2': () => import('./american_culture_v2').then(module => module.default),
    'american_culture_v3': () => import('./american_culture_v3').then(module => module.default),
    'democracy': () => import('./democracy').then(module => module.default),
    'hume': () => import('./hume').then(module => module.default),
    'film_history': () => import('./film').then(module => module.default),
    'internet_history': () => import('./internet').then(module => module.default),
    'military_history': () => import('./military').then(module => module.default),
    'rationalism_v1': () => import('./rationalism').then(module => module.default),
    'dissident_right_culture': () => import('./rightw_culture').then(module => module.default),
    'foundation_ai': () => import('./foundation_ai').then(module => module.default),

    // When you add a new preset file, add a new line here:
    // 'my-new-preset': () => import('./my-new-preset').then(module => module.default),
  };
  
  // Return a promise that resolves to the array of all presets
  return Promise.all(
    Object.values(presetModules).map(importFn => importFn())
  ).then(loadedPresets => loadedPresets);
};

// Export a function to get all presets
export const getPresets = async (): Promise<PresetConfig[]> => {
  return await importPresets();
};

// For backwards compatibility, also export the cold-war preset directly
import coldWarPreset from './cold-war';
export const presets = [coldWarPreset];

export type { PresetConfig } from './types'; 