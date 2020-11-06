const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
    colors: './pages/uikit-colors/uikit-colors.js',
    elements: './pages/uikit-elements/uikit-elements.js',
    forms: './pages/uikit-forms/uikit-forms.js',
    headers: './pages/uikit-headers-footers/uikit-headers-footers.js',
    landing: './pages/landing/landing.js',
    search: './pages/room-search/room-search.js',
    registration: './pages/registration/registration.js',
    details: './pages/room-details/room-details.js',
    sign: './pages/sign-in/sign-in.js',
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
  // devtool: 'inline-source-map',
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
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/uikit-colors/uikit-colors.pug',
      filename: 'colors.html',
      chunks: ['colors'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/uikit-elements/uikit-elements.pug',
      filename: 'elements.html',
      chunks: ['elements'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/uikit-forms/uikit-forms.pug',
      filename: 'forms.html',
      chunks: ['forms'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/uikit-headers-footers/uikit-headers-footers.pug',
      filename: 'headers.html',
      chunks: ['headers'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/landing/landing.pug',
      filename: 'landing.html',
      chunks: ['landing'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/room-search/room-search.pug',
      filename: 'room-search.html',
      chunks: ['search'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/registration/registration.pug',
      filename: 'registration.html',
      chunks: ['registration'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/room-details/room-details.pug',
      filename: 'details.html',
      chunks: ['details'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/sign-in/sign-in.pug',
      filename: 'sign.html',
      chunks: ['sign'],
      inject: 'body',
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'vendor', to: 'vendor' },
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
    // contentBase: path.resolve(__dirname, 'docs'),
    // publicPath: '/docs/',
    port: 9000,
    watchContentBase: true,
    progress: true,
    stats: 'errors-warnings',
    hot: true,
    historyApiFallback: true,
    overlay: true,
  },
};
