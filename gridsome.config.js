// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require('dotenv').config();
const merge = require('webpack-merge');

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@bounteous/gridsome-source-moltin',
      options: {
        clientId: process.env.MOLTIN_CLIENT_ID,
      },
    },
  ],
  configureWebpack(config) {
    return merge(
      config,
      {
        module: {
          rules: [
            {
              enforce: 'pre',
              test: /\.(js|vue)$/,
              exclude: /node_modules/,
              loader: 'eslint-loader',
              options: {
                fix: true,
              },
            },
          ],
        },
      },
    );
  },
};
