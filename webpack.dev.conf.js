const path = require('path')
const merge = require("webpack-merge")
const baseWebpackConfig = require(path.resolve(__dirname, "webpack.base.conf"))
const webpack = require("webpack")


module.exports = merge(
    baseWebpackConfig,
    {
        mode: "development",
        devtool: "cheap-module-eval-source-map",
        plugins: [
            new webpack.SourceMapDevToolPlugin({
                filename: "[file].map"
            })
        ],
        devServer: {
            contentBase: path.resolve(__dirname, "dist"),
            //compress: true,
            host: "0.0.0.0",
            port: 9000,
            //watchContentBase: true,
            //progress: true,
            //stats: "errors-only",
            //hot: true,
            //historyApiFallback: true,
            overlay: {
                warnings: true,
                errors: true
            }
        }
    }
)