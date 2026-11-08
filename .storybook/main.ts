import type { StorybookConfig } from '@storybook/react-vite';

// The workbench and the visual test fixtures of the library: the visual impact workflow
// (.github/workflows/visual-impact.yml) builds it at the base and the head of a pull request and compares the stories
// a change touches, in every brand and theme.
const config: StorybookConfig = {
  stories: ['../packages/react/src/**/*.stories.@(ts|tsx)'],
  addons: [],
  framework: { name: '@storybook/react-vite', options: {} },
  core: { disableTelemetry: true },
  // Use the automatic JSX runtime so components do not need to import React.
  // Resolve workspace packages to their TypeScript sources (`source` export condition), not their built files.
  viteFinal: async (cfg) => {
    const { defaultClientConditions } = await import('vite');
    return {
      ...cfg,
      esbuild: { ...(cfg.esbuild || {}), jsx: 'automatic' },
      resolve: { ...cfg.resolve, conditions: ['source', ...(cfg.resolve?.conditions ?? defaultClientConditions)] },
    };
  },
};

export default config;
