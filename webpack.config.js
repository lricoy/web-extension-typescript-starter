const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: {
        content_script: path.join(__dirname, 'src/content_script.ts'),
        background: path.join(__dirname, 'src/background.ts')
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
};
