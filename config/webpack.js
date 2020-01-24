const merge = require('webpack-merge');

module.exports = function configureWebpack(config) {
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
};
