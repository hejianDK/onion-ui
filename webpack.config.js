const webpack = require('webpack');
const path = require('path');

module.exports = {
  name: 'client',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 9999
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
    new webpack.DefinePlugin({
      'NODE_ENV': `${process.env.NODE_ENV || 'local'}`
    }),
    new webpack.optimize.CommonsChunkPlugin(
      'vendor', 'vendor.js'
    )
  ]
};

