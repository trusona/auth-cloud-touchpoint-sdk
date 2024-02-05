module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-actions'],
  framework: '@storybook/web-components-vite',
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config, {
    configType
  }) {
    // customize the Vite config here
    config.optimizeDeps.include = [...(config.optimizeDeps?.include ?? []), '@storybook/web-components-vite'];
    config.optimizeDeps.exclude = [...(config.optimizeDeps?.exclude ?? []), 'lit', 'lit-html']; // return the customized config

    return config;
  },
  docs: {
    autodocs: true
  }
};
