'use strict'

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
    colors: './desktop.blocks/page-uikit-colors/page-uikit-colors.js',

    elements: './desktop.blocks/page-uikit-elements/page-uikit-elements.js',
    forms: './desktop.blocks/page-uikit-forms/page-uikit-forms.js',
    headers: './desktop.blocks/page-uikit-headers-footers/page-uikit-headers-footers.js',
    landing: './desktop.blocks/page-landing/page-landing.js',
    template: './desktop.blocks/page-room-search/page-room-search.js',
    reservation: './desktop.blocks/page-registration/page-registration.js',
    details: './desktop.blocks/page-room-details/page-room-details.js',
    sign: './desktop.blocks/page-sign-in/page-sign-in.js',

  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.pug'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/desktop.blocks/page-uikit-colors/page-uikit-colors.pug'),
      filename: 'uikit_colors.html'
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/desktop.blocks/page-uikit-elements/page-uikit-elements.pug'),
      filename: 'uikit_elements.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/desktop.blocks/page-uikit-forms/page-uikit-forms.pug'),
      filename: 'uikit_cards.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/desktop.blocks/page-uikit-headers-footers/page-uikit-headers-footers.pug'),
      filename: 'uikit_headers_footers.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/desktop.blocks/page-landing/page-landing.pug'),
      filename: 'landing.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/desktop.blocks/page-room-search/page-room-search.pug'),
      filename: 'room_search.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/desktop.blocks/page-registration/page-registration.pug'),
      filename: 'registration.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/desktop.blocks/page-room-details/page-room-details.pug'),
      filename: 'room_details.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/desktop.blocks/page-sign-in/page-sign-in.pug'),
      filename: 'sign_in.html'
    }),


    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[name].[hash].css',
      ignoreOrder: false
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {

            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: path.resolve(__dirname, 'postcss.config.js')
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
        test: /\.(woff2|woff|ttf|svg)$/,
        include: /fonts/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts'
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
    //contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    watchContentBase: true,
    progress: true,
    stats: 'errors-only',
    hot: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}