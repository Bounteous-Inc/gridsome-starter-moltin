// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const moltin = require('./config/moltin');
const algolia = require('./config/algolia');
const configureWebpack = require('./config/webpack');

const plugins = [moltin];

// Only load the Algolia plugin:
if (
  // 1. during production builds;
  process.env.NODE_ENV === 'production'
  // 2. if credentials are in the environment.
  && ['ALGOLIA_APP_ID', 'ALGOLIA_ADMIN_KEY']
    .every((key) => typeof process.env[key] === 'string' && process.env[key].length >= 10)
) {
  plugins.push(algolia);
}

module.exports = {
  siteName: 'Bright',
  configureWebpack,
  plugins,
  templates: {
    MoltinBrand: '/brand/:slug',
    MoltinCategory: '/category/:slug',
    MoltinCollection: '/collection/:slug',
    MoltinProduct: '/product/:slug',
  },
};
