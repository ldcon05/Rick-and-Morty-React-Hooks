const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        home: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        compress: true,
	    host: "0.0.0.0"
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
                test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg)$/i,
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
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ],
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
} 
