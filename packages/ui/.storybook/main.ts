import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-docs',
    '@storybook/addon-styling-webpack',
    '@storybook/addon-webpack5-compiler-swc',
  ],
  webpackFinal: (config) => {
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "react-dom",
      "next/router": "next-router-mock",
    }

    return config;
  },
  "framework": {
    "name": '@storybook/nextjs',
    "options": {}
  }
};
export default config;