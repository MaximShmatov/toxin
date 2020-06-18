'use strict'

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname, 'src/desktop.blocks'),
  entry: {
    index: './page-index/page-index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[hash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/desktop.blocks/page-index/page-index.pug'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/desktop.blocks/page-uikit-colors/page-uikit-colors.pug'),
      filename: 'uikit_colors.html'
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
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[name].[hash].css',
      ignoreOrder: false
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!fonts/*',
        '!img/*',
        '!fonts',
        '!img'
      ]
    })
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
        test: /\.(eot|ttf|woff|woff2|svg)$/,
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
        test: /\.(ico|png|jpg|gif|svg)$/,
        exclude: /fonts/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img'
          }
        }
      }
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