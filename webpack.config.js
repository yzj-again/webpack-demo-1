const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',//模式选择
    entry: './src/index.js',//入口
    output: {
        path: path.resolve(__dirname, 'dist'),//导出文件夹
        filename: '[name].[contenthash].js',//导出文件
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出',
            template: 'src/assets/admin.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: ["style-loader", "css-loader", 'sass-loader'],
            },
            {
                test: /\.less$/i,
                use: ["style-loader", "css-loader", 'less-loader']
            },
            {
                test: /\.styl$/,
                // 将 Stylus 文件编译为 CSS
                use: ["style-loader", "css-loader", 'stylus-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: false,
        // {
        //     directory: path.join(__dirname, 'public'),
        // },
        compress: true,
        port: 9000,
    },
};