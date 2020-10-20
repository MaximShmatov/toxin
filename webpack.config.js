'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
    colors: './desktop.blocks/page-uikit-colors/page-uikit-colors.js',
    elements: './desktop.blocks/page-uikit-elements/page-uikit-elements.js',
    forms: './desktop.blocks/page-uikit-forms/page-uikit-forms.js',
    headers: './desktop.blocks/page-uikit-headers-footers/page-uikit-headers-footers.js',
    landing: './desktop.blocks/page-landing/page-landing.js',
    search: './desktop.blocks/page-room-search/page-room-search.js',
    registration: './desktop.blocks/page-registration/page-registration.js',
    details: './desktop.blocks/page-room-details/page-room-details.js',
    sign: './desktop.blocks/page-sign-in/page-sign-in.js',
  },
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/',
  },
  externals: [
    'library/jquery.min.js',
    'library/jquery.maskedinput.js',
    'library/slider.js',
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.pug',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: 'desktop.blocks/page-uikit-colors/page-uikit-colors.pug',
      filename: 'colors.html',
      chunks: ['colors'],
    }),
    new HtmlWebpackPlugin({
      template: 'desktop.blocks/page-uikit-elements/page-uikit-elements.pug',
      filename: 'elements.html',
      chunks: ['elements'],
    }),
    new HtmlWebpackPlugin({
      template: 'desktop.blocks/page-uikit-forms/page-uikit-forms.pug',
      filename: 'forms.html',
      chunks: ['forms'],
    }),
    new HtmlWebpackPlugin({
      template: 'desktop.blocks/page-uikit-headers-footers/page-uikit-headers-footers.pug',
      filename: 'headers.html',
      chunks: ['headers'],
    }),
    new HtmlWebpackPlugin({
      template: 'desktop.blocks/page-landing/page-landing.pug',
      filename: 'landing.html',
      chunks: ['landing'],
    }),
    new HtmlWebpackPlugin({
      template: 'desktop.blocks/page-room-search/page-room-search.pug',
      filename: 'search.html',
      chunks: ['search'],
    }),
    new HtmlWebpackPlugin({
      template: 'desktop.blocks/page-registration/page-registration.pug',
      filename: 'registration.html',
      chunks: ['registration'],
    }),
    new HtmlWebpackPlugin({
      template: 'desktop.blocks/page-room-details/page-room-details.pug',
      filename: 'details.html',
      chunks: ['details'],
    }),
    new HtmlWebpackPlugin({
      template: 'desktop.blocks/page-sign-in/page-sign-in.pug',
      filename: 'sign.html',
      chunks: ['sign'],
    }),

    new CopyWebpackPlugin({
      patterns: [
        {from: 'library', to: 'library'},
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              {
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-proposal-private-methods'
                ]
              }
            ]
          }
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            }
          },
          'postcss-loader',
          'sass-loader',
        ]
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
          }
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: /(fonts|favicon)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img'
          }
        }
      },
      {
        test: /\.(ico|png|svg|xml|webmanifest)$/,
        include: /favicon/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '.'
          }
        }
      },
    ]
  },
  devServer: {
    //contentBase: path.resolve(__dirname, 'docs'),
    //publicPath: '/docs/',
    port: 9000,
    watchContentBase: true,
    progress: true,
    stats: 'errors-warnings',
    hot: true,
    historyApiFallback: true,
    overlay: true,
  }
}