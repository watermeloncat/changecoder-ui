var { resolve } = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: resolve(__dirname, '../demo'),
    entry: {
        'react-ui': './index'
    },
    output: {
        path: resolve(__dirname, './build'),
        filename: '[name].js',
        publicPath: '/',
        sourceMapFilename: '[name].map'
    },
    resolve: {
        extensions: [' ', '.js'],
        modules: [resolve(__dirname, '/src'), 'node_modules']
    },
    externals: {
        "moment": "moment",
        "react-dom": "ReactDOM",
        "react": "React",
        "prop-types": "PropTypes" 
    },
    node: { fs: 'empty' },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        },
                        'less-loader',
                        'postcss-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new ExtractTextPlugin('react-ui.css')
    ]
}

