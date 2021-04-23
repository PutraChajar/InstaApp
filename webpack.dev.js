const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 9002,
    contentBase: path.resolve(__dirname, 'dist'),
  },
});
