import { PresetConfig } from './types';
import coldWarPreset from './cold-war';

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
    'america_modern': () => import('./america_modern').then(module => module.default),
    'america-politics': () => import('./america-politics').then(module => module.default),
    'science-long': () => import('./science-long').then(module => module.default),
    'california-politics': () => import('./california-politics').then(module => module.default),
    'dw-nominate': () => import('./dw-nominate').then(module => module.default),
    'evolution-of-science': () => import('./evolution_of_science').then(module => module.default),
    'british-monarchy': () => import('./british_monarchy').then(module => module.default),
    // When you add a new preset file, add a new line here:
    // 'my-new-preset': () => import('./my-new-preset').then(module => module.default),
    'test-trends': () => import('./test-trends').then(module => module.default),
    'mini-trends': () => import('./mini-trends').then(module => module.default),
    'mini-trends-legacy': () => import('./mini-trends-legacy').then(module => module.default),
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
export const presets = [coldWarPreset];

export type { PresetConfig } from './types';