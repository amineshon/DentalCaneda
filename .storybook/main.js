const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias['@/components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['@/data'] = path.resolve(__dirname, '../src/data');
    config.resolve.alias['@/webConfig'] = path.resolve(__dirname, '../src/webConfig');
    config.resolve.alias['@/redux'] = path.resolve(__dirname, '../src/redux');
    return config;
  },
};
