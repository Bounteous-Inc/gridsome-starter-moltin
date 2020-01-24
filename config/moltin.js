const { join } = require('path');

module.exports = {
  use: '@bounteous/gridsome-source-moltin',
  options: {
    clientId: process.env.MOLTIN_CLIENT_ID,
    downloadPath: join(__dirname, '../content/moltin/files'),
  },
};
