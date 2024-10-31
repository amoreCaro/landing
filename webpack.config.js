const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = (env) => {
    return {
        mode: process.env.MODE || 'production',
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js',
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
            }),
            new DefinePlugin({
                'process.env.PORT': JSON.stringify(process.env.PORT),
                'process.env.MODE': JSON.stringify(process.env.MODE),
            }),
        ],
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]', // зберегти структуру папок
                            outputPath: 'images/', // куди зберігати зображення
                        },
                    }, ],
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        devServer: {
            port: process.env.PORT || 8080,
            open: true,
        },
    };
};