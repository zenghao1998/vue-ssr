const { merge } = require('webpack-merge');
const base = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = merge(base, {
    entry: {
        client: path.join(__dirname, '../src/client-entry.js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.template.html'),
            filename: 'index.ssr.html',
            minify: false,
        })
    ]
})