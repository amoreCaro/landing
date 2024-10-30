const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
    return {
        mode: env.mode || 'development', // Задати 'development' за замовчуванням
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin(path.resolve(__dirname, 'public', 'index.html ')),
            new webpack.ProgressPlugin()
        ],
        module: {
            rules: [{
                test: /\.tsx? $/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }, ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    }
};