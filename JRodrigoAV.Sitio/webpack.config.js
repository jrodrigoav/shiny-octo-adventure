"use strict";
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'wwwroot/js');
var APP_DIR_CAC = path.resolve(__dirname, 'src/cac');

var config = {
  entry:{
    cac: APP_DIR_CAC + '/main.jsx',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module:{
    loaders:[
      {
        test : /\.jsx?/,
        include : APP_DIR_CAC,
        loader : 'babel-loader'
      }
    ]
  }
};
module.exports = config;