"use strict";
const path = require('path');
const webpack = require('webpack');

let BUILD_DIR = path.resolve(__dirname, 'wwwroot/js');
let APP_DIR_CAC = path.resolve(__dirname, 'src/cac');
let APP_DIR_SOLICACRIO = path.resolve(__dirname, 'src/solicacrio');

module.exports = {
    mode:'production',
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
        rules: [{
            test: /\.jsx?/,
            include: [APP_DIR_CAC, APP_DIR_SOLICACRIO],
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [new webpack.ProvidePlugin({
        React: 'react',
        axios: 'axios'
    })],
    optimization: {
        splitChunks: {
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                enforce: true,
                chunks: 'all'
            }
        }
    }
    }
};