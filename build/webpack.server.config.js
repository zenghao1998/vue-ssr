const { merge } = require('webpack-merge');
const base = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const VueServerServerPlugin = require('vue-server-renderer/server-plugin')
const path = require('path');
module.exports = merge(base, {
    target: 'node', // 指定是node环境
    entry: {
        server: path.join(__dirname, '../src/server-entry.js')
    },
    output: {
        libraryTarget: 'commonjs2' // 必须按照 commonjs规范打包才能被服务器调用。
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, '../src/index.template.html'),
        //     filename: 'index.ssr.html',
        //     minify: false,
        //     excludeChunks: ['server'],
        // }),
        // new VueServerServerPlugin(),//打包的时候不会打包server.js 会生成vue-ssr-server-bundle.json
    ]
})