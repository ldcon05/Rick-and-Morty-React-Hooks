const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: "production",
    entry: {
        modules: [
            "react",
            "react-dom",
            "prop-types",
            "axios"
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/[name].[hash].dll.js",
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.join(__dirname, '[name]-manifest.json')
        })
    ]
} 