const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const SERVER_PORT = require('./const.json').SERVER_PORT;
const DEV_SERVER_PORT = require('./const.json').DEV_SERVER_PORT;

module.exports = {
  name: 'client',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: {
      colors: true
    },
    contentBase: './app',
    port: DEV_SERVER_PORT,
    proxy: {
      '/api*': {
        target: `http://localhost:${SERVER_PORT}`,
        secure: false
      }
    }
  },
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'redux-logger', 'redux-thunk',
      'react-router', 'isomorphic-fetch', 'es6-promise', 'lodash', 'bootstrap-loader', 'jquery']
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader'
      },
      {
        test: /\.js[x]?$/,
        include: [
          path.resolve(__dirname, 'app'),
          path.resolve(__dirname, 'server')
        ],
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader' },
      { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'commons.js',
      minChunks: Infinity
    }),
    new OpenBrowserPlugin({ url: `http://localhost:${DEV_SERVER_PORT}` }),
    new webpack.optimize.DedupePlugin()
  ]
};

