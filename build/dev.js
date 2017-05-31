var { resolve } = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./base');

var developmentConfig = Object.assign({}, config);

developmentConfig.context = resolve(__dirname, '../demo'),

developmentConfig.entry["react-ui"] = [
    'react-hot-loader/patch',

    'webpack-dev-server/client?http://localhost:8080',

    'webpack/hot/only-dev-server',

    './index.js'
];

developmentConfig.module.rules.push(
            {
                test: /\patterns.js$/,
                exclude: /(node_modules)/,
                use: ['transform-loader?brfs']
            });
developmentConfig.plugins = developmentConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template: resolve(__dirname, '../demo/template/index.html'),
        title: 'ChangeCoder',
        filename: 'index.html',
        favicon: resolve(__dirname, '../src/images/favicon.ico')
    })
]);

developmentConfig.devServer = { hot: true };

module.exports = developmentConfig;