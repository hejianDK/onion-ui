const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  name: 'client',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8080,
    proxy: {
      '/api*': {
        target: 'http://localhost:8081',
        secure: false
      }
    }
  },
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'redux-logger', 'redux-thunk',
      'react-router', 'isomorphic-fetch', 'es6-promise', 'lodash']
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
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { 
        test: /\.(png|jpg|gif)$/, 
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin(
      'vendor', 'vendor.js'
    ),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};

