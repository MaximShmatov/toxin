const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const htmlWebpackPlugins = glob.sync('src/pages/**/*.pug')
  .map((item) => new HtmlWebpackPlugin({
    template: item.slice(item.indexOf('/') + 1),
    filename: `${item.slice(item.lastIndexOf('-') + 1, -4)}.html`,
    chunks: ['index'],
    inject: 'body',
  }));

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    ...htmlWebpackPlugins,
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.$': 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.(woff2|woff|ttf|svg)$/,
        include: /fonts/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts',
            esModule: false,
          },
        },
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: /(fonts|favicon)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img',
            esModule: false,
          },
        },
      },
      {
        test: /\.(ico|png|svg|xml|webmanifest)$/,
        include: /favicon/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '.',
            esModule: false,
          },
        },
      },
    ],
  },
  devServer: {
    port: 9000,
    watchContentBase: true,
    progress: true,
    stats: 'errors-warnings',
    hot: true,
    historyApiFallback: true,
    overlay: true,
  },
};
