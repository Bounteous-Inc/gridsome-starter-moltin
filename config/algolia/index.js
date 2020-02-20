const { readFileSync } = require('fs');
const { join } = require('path');

function getSchema(schemaName) {
  return (readFileSync(join(__dirname, `${schemaName}.graphql`))).toString();
}

module.exports = {
  use: 'gridsome-plugin-algolia',
  options: {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_ADMIN_KEY,
    enablePartialUpdates: true,
    collections: [
      {
        indexName: 'products',
        query: getSchema('products'),
        transformer: ({ data }) => data.allMoltinProduct.edges.map(({ node }) => node),
        itemFormatter: (item) => ({
          ...item,
          objectID: item.id,
          brands: item.brands.edges.map(({ node }) => node),
          categories: item.categories.edges.map(({ node }) => node),
          collections: item.collections.edges.map(({ node }) => node),
        }),
        matchFields: [
          'slug',
          'updated_at',
          'path',
        ],
      },
    ],
  },
};
