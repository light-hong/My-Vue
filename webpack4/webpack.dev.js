const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const devConfig = {
    mode: 'development', 
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 3000,
        contentBase: './dist',
        open: true,
        hot: true,
        // hotOnly: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    /* optomization: {
        usedExports: true
    } */
}

module.exports = merge(commonConfig,devConfig)