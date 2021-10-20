const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],// 自动补全后缀
        alias: {
            '@': path.resolve(__dirname, '../src'),// 路径别名
        }
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                modules: false, // 不转换成 commonjs 模块
                                useBuiltIns: 'usage', // 按需 polyfill
                                corejs: 3,
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
};