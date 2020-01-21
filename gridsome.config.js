// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const merge = require('webpack-merge');

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
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
