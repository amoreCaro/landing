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
                            name: '[name].[ext]', // зберегти назву та розширення
                            outputPath: '/build/img', // куди зберігати зображення
                            publicPath: '/src/img', // публічний шлях для доступу до зображень
                        },
                    }],
                }

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