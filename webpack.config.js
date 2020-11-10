const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const htmlWebpackPlugins = glob.sync('src/pages/**/*.pug')
  .map((item) => new HtmlWebpackPlugin({
    template: item.slice(item.indexOf('/') + 1),
    filename: `${item.slice(item.lastIndexOf('/') + 1, -4)}.html`,
    chunks: [item.slice(item.lastIndexOf('-') + 1, -4)],
    inject: 'body',
  }));

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
    colors: './pages/uikit-colors/uikit-colors.js',
    elements: './pages/uikit-elements/uikit-elements.js',
    forms: './pages/uikit-forms/uikit-forms.js',
    footers: './pages/uikit-headers-footers/uikit-headers-footers.js',
    landing: './pages/page-landing/page-landing.js',
    search: './pages/room-search/room-search.js',
    registration: './pages/page-registration/page-registration.js',
    details: './pages/room-details/room-details.js',
    sign: './pages/page-sign/page-sign.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    ...htmlWebpackPlugins,
    new HtmlWebpackPlugin({
      template: 'index.pug',
      filename: 'index.html',
      chunks: ['index'],
      inject: 'body',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'vendor/slider.js',
          to: 'vendor',
        },
        {
          from: '../node_modules/jquery/dist/jquery.min.js',
          to: 'vendor',
        },
        {
          from: '../node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
          to: 'vendor',
        },
      ],
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
