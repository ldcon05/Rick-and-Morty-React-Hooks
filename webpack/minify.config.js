const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        app: path.resolve(__dirname, 'src', 'js', 'app.js'),
        contacts: path.resolve(__dirname, 'src', 'js', 'contacts.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    devServer: {
        hot: true,
        clientLogLevel: 'silent'

    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ],
            }
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
    ]
} 