const { override, addWebpackPlugin } = require('customize-cra');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = override(
  addWebpackPlugin(
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  )
);