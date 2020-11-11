const path = require('path');

module.exports = {
  ...require('./webpack.config'),
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: false,
}