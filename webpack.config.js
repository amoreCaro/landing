const path = require("path");
const fs = require("fs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map((item) => {
        const parts = item.split(".");
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: false,
        });
    });
}

const htmlPlugins = generateHtmlPlugins("./src/html/views");

const config = {
    entry: ["./src/js/index.js", "./src/css/index.css"],
    output: {
        filename: "./js/bundle.js",
        path: path.resolve(__dirname, 'dist'), // Ensure you have a defined output path
    },
    devtool: "source-map",
    mode: "production",
    optimization: {
        minimizer: [
            new TerserPlugin({
                sourceMap: true,
                extractComments: true,
            }),
        ],
    },
    module: {
        rules: [{
                test: /\.svg$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]', // Keep original file name
                        outputPath: 'img/', // Output directory for images
                    },
                }],
            },
            {
                test: /\.css$/, // Add this rule for .css files
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: true, // Allow URLs in CSS (for @import and background images)
                        },
                    },
                ],
            },
            {
                test: /\.(sass|scss)$/, // Include SASS/SCSS loader for .sass and .scss files
                include: path.resolve(__dirname, "src/css"),
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            sourceMap: true,
                            plugins: () => [
                                require("cssnano")({
                                    preset: [
                                        "default",
                                        {
                                            discardComments: {
                                                removeAll: true,
                                            },
                                        },
                                    ],
                                }),
                            ],
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, "src/html/includes"),
                use: ["raw-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/style.bundle.css",
        }),
        new CopyPlugin({
            patterns: [{
                from: "./src/img",
                to: "./img",
            }],
        }),
    ].concat(htmlPlugins),
    stats: {
        children: true, // Enable child stats for detailed errors
    },
};

module.exports = (env, argv) => {
    if (argv.mode === "production") {
        config.plugins.push(new CleanWebpackPlugin());
    }
    return config;
};