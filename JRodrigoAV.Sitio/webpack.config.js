"use strict";
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'wwwroot/js');
var APP_DIR_CAC = path.resolve(__dirname, 'src/cac');
var APP_DIR_SOLICACRIO = path.resolve(__dirname, 'src/solicacrio');

module.exports = {
    entry: {
        cac: path.resolve(APP_DIR_CAC, 'main.jsx'),
        solicacrio: path.resolve(APP_DIR_SOLICACRIO, 'main.jsx')        
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
            include: [APP_DIR_CAC, APP_DIR_SOLICACRIO],
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [new webpack.ProvidePlugin({
        React: 'react',
        axios: 'axios'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors'
    })]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = 'cheap-module-source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            quiet: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new UglifyJSPlugin({
            sourceMap: true,
            parallel: true
        })
    ]);
}