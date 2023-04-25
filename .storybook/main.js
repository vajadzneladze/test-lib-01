const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
  core: {
    builder: 'webpack5',
  },
  // Add the following lines to configure Storybook to build to the correct directory
  outputDir: path.join(__dirname, './storybook-static'),
  // Set the base URL for your Storybook
  // Replace <repository-name> with the name of your GitHub repository
  // If your repository is a user or organization page, replace <username>.github.io with the appropriate URL
  // If you're using a custom domain, replace <username>.github.io/<repository-name> with your custom domain
  baseUrl: '/https://github.com/vajadzneladze/test-lib-01/',
};