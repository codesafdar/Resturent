const path = require('path');

module.exports = {
  // ...other configurations...
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};
