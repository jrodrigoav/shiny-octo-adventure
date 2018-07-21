const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '/wwwroot');
const APP_DIR_CAC = path.resolve(__dirname, '/src/cac');
const APP_DIR_SOLICACRIO = path.resolve(__dirname, '/src/solicacrio');

module.exports = {
    entry: {
        cac: path.resolve(APP_DIR_CAC, 'main.jsx'),
        solicacrio: path.resolve(APP_DIR_SOLICACRIO, 'main.jsx')
    },
    output: {
        path: BUILD_DIR,
        filename: 'js/[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.html'],
        modules: ["src", "node_modules"]
    },
    module: {
        rules: [{
            test: /\.(js|jsx)?/,
            include: [APP_DIR_CAC, APP_DIR_SOLICACRIO],
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.html$/,
            include: APP_DIR,
            exclude: /node_modules/,
            use: [{
                loader: "html-loader",
                options: {
                    minimize: false
                }
            }]
        },
        {
            test: /\.css$/,
            include: APP_DIR,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        }
        ]
    },
    plugins: [new webpack.ProvidePlugin({
        React: 'react',
        axios: 'axios'
    }),
    new CopyWebpackPlugin([{
        from: 'src/assets',
        to: 'assets'
    }]),
    new HtmlWebPackPlugin({
        template: APP_DIR + "/index.html",
        output: DIST_DIR
    }),
    new ScriptExtPlugin({
        defaultAttribute: 'defer'
    }),
    new CleanWebpackPlugin(['wwwroot/*']),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "assets/styles/[name].[chunkhash].css"
    })
    ],
    optimization: {
        runtimeChunk: 'single',
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