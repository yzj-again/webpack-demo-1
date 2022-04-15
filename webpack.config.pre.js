const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',//入口
    output: {
        path: path.resolve(__dirname, 'dist'),//导出文件夹
        filename: '[name].[contenthash].js',//导出文件
        clean: true,
    },
    mode: 'production',//模式选择
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出',
            template: 'src/assets/admin.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 将 JS 字符串生成为 style 节点
                    // 'style-loader',
                    //不要同时使用 style-loader 与 mini-css-extract-plugin
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                    //将less编译成less
                    // 'less-loader',
                ],
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
            ]
            },
            {
                test: /\.styl$/,
                // 将 Stylus 文件编译为 CSS
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
            ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

};