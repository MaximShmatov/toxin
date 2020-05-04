const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'none',
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].[hash].js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: 'inline-source-map',
    plugins: [
        new ManifestPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.pug'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[name].[hash].css',
            ignoreOrder: false,
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                '!fonts/*',
                '!img/*',
                '!fonts',
                '!img'
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {

                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            //hmr: process.env.NODE_ENV === "development",
                            //reloadAll: true,
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: path.resolve(__dirname, 'postcss.config.js'),
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
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
                            '@babel/env'
                        ]
                    }
                }
            },
            {
                test: /\.(ttf|woff|svg)$/,
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
            },
        ]
    },
    devServer: {
        //contentBase: path.resolve(__dirname, 'dist'),
        //compress: true,
        //host: '0.0.0.0',
        port: 9000,
        watchContentBase: true,
        progress: true,
        //stats: 'errors-only',
        hot: true,
        //hotOnly: true,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        }
    },
}