"use strict";
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'wwwroot/js');
var APP_DIR_CAC = path.resolve(__dirname, 'src/cac');

var config = {
  entry: {
    cac: APP_DIR_CAC + '/main.jsx',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  resolve: {
    modules: ["src", "node_modules"]
 },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: APP_DIR_CAC,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      axios: 'axios'
    }),
    new UglifyJSPlugin({
      parallel: true      
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  //devtool: 'cheap-module-source-map'
};
module.exports = config;