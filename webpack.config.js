const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "./index.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "/src"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true,
        stats: 'errors-only',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.pug',
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    context: 'project'
                }
            }
        ]
    }
};