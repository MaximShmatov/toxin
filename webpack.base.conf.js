const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")

const PATHS = {
    src: path.resolve(__dirname, "src"),
    dist: path.resolve(__dirname, "dist"),
}

module.exports = {
    entry: PATHS.src,
    output: {
        filename: "index.js",
        path: PATHS.dist
    },
    module: {
        rules: [
            {
                test: /\.(ttf|woff|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "fonts"
                }
            },
            {
                test: /\.(ico|png|jpg|gif|svg)$/,
                exclude: /fonts/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "img"
                }
            },
            {
                test: /\.pug$/,
                use: "pug-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/env"
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: {
                                path: path.resolve(PATHS.src, "postcss.config.js"),
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            //{ from: path.resolve(PATHS.src, "fonts"), to: "fonts"}
        ]),
        new HtmlWebpackPlugin({
            template: path.resolve(PATHS.src, "index.pug"),
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "index.css"
        }),
    ]
}