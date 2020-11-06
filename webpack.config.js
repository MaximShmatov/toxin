const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');

const htmlWebpackPlugins = glob.sync('src/pages/**/*.pug').map((item) => {
  const filename = `${item.slice(item.lastIndexOf('/') + 1, -4)}.html`;
  const template = item.slice(item.indexOf('/') +1);
  const chunks = item.slice(item.lastIndexOf('-') + 1, -4);
  return (
    new HtmlWebpackPlugin({
      template: template,
      filename: filename,
      chunks: [chunks],
      inject: 'body',
    })
  );
});

console.log(...htmlWebpackPlugins);
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
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '',
  },
  externals: [
    'vendor/jquery.min.js',
    'vendor/jquery.maskedinput.js',
    'vendor/slider.js',
  ],
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    ...htmlWebpackPlugins,
    new HtmlWebpackPlugin({
      template: 'index.pug',
      filename: 'index.html',
      chunks: ['index'],
      inject: 'body',
    }),
    // new HtmlWebpackPlugin({
    //   template: 'pages/uikit-colors/uikit-colors.pug',
    //   filename: 'uikit-colors.html',
    //   chunks: ['colors'],
    //   inject: 'body',
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'pages/uikit-elements/uikit-elements.pug',
    //   filename: 'uikit-elements.html',
    //   chunks: ['elements'],
    //   inject: 'body',
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'pages/uikit-forms/uikit-forms.pug',
    //   filename: 'uikit-forms.html',
    //   chunks: ['forms'],
    //   inject: 'body',
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'pages/uikit-headers-footers/uikit-headers-footers.pug',
    //   filename: 'uikit-headers-footers.html',
    //   chunks: ['footers'],
    //   inject: 'body',
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'pages/page-landing/page-landing.pug',
    //   filename: 'page-landing.html',
    //   chunks: ['landing'],
    //   inject: 'body',
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'pages/room-search/room-search.pug',
    //   filename: 'room-search.html',
    //   chunks: ['search'],
    //   inject: 'body',
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'pages/page-registration/page-registration.pug',
    //   filename: 'page-registration.html',
    //   chunks: ['registration'],
    //   inject: 'body',
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'pages/room-details/room-details.pug',
    //   filename: 'room-details.html',
    //   chunks: ['details'],
    //   inject: 'body',
    // }),
    // new HtmlWebpackPlugin({
    //   template: 'pages/page-sign/page-sign.pug',
    //   filename: 'page-sign.html',
    //   chunks: ['sign'],
    //   inject: 'body',
    // }),

    new CopyWebpackPlugin({
      patterns: [
        {from: 'vendor', to: 'vendor'},
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
