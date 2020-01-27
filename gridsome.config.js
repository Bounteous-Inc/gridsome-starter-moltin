// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  configureWebpack: require('./config/webpack'),
  plugins: [
    require('./config/moltin'),
    require('./config/algolia'),
  ],
  templates: {
    MoltinBrand: '/brand/:slug',
    MoltinCategory: '/category/:slug',
    MoltinProduct: '/product/:slug',
  },
};
