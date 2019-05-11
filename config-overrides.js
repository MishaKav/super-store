/* config-overrides.js */

const webpack = require("webpack");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));

  return config;
};
