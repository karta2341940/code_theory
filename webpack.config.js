const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js',
    },
    output: {
        filename: 'js/[name]-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 9000,
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(s?css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(html)$/,
                loader: 'html-loader',
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({}),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: true,
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name]-[hash].css'
        }),
    ],
    optimization: {
        minimize: false
    },

}