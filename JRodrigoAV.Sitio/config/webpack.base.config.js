const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '../wwwroot');
const APP_DIR_CAC = path.resolve(__dirname, '../src/cac');
const APP_DIR_SOLICACRIO = path.resolve(__dirname, '../src/solicacrio');

module.exports = {
    entry: {
        cac: path.resolve(APP_DIR_CAC, 'main.jsx'),
        solicacrio: path.resolve(APP_DIR_SOLICACRIO, 'main.jsx')
    },
    output: {
        path: BUILD_DIR + '/js',
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
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader!sass-loader",
                })
            }
        ]
    },
    plugins: [new webpack.ProvidePlugin({
            React: 'react',
            axios: 'axios'
        }),
        new ExtractTextPlugin('../css/layout.css')
    ],
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
}