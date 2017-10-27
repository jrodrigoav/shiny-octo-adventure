"use strict";
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'wwwroot/js');
var APP_DIR_CAC = path.resolve(__dirname, 'src/cac');
var APP_DIR_HIPSTER = path.resolve(__dirname, 'src/hipster');

var config = {
  entry: {
    cac: path.resolve(APP_DIR_CAC, 'main.jsx'),
    hipster: path.resolve(APP_DIR_HIPSTER, 'main.jsx')
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
      include: [APP_DIR_CAC, APP_DIR_HIPSTER],
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      axios: 'axios'
    }),
    /*new UglifyJSPlugin({
      parallel: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })*/
  ],
  //devtool: 'cheap-module-source-map'
};
module.exports = config;