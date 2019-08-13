const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        home: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    devServer: {
        hot: true
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /node_modules/, 
                use: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 32000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            template: path.resolve(__dirname, 'index.html'),
        })
    ]
} 