const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const webpack = require('webpack')

module.exports = {
    mode: "production",
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].[hash].js",
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
            },
            {
                test: /\.(png|jpg|gif|ttf|eot|woff|woff2|svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 2000,
                            outputPath: 'assets'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new AddAssetHtmlPlugin({ 
            filepath: path.resolve(__dirname, 'dist', 'js', '*.dll.js'),
            outputPath: 'js',
            publicPath: 'js'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css',
            ignoreOrder: false,
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
    },
} 