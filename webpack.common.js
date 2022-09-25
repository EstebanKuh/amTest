const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const deps = require("./package.json").dependencies;
const dotenv = require('dotenv').config({ path: './.env' });

module.exports = {
    entry: {
        app: './src/index.tsx',
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    module: {
        rules: [
            {
                test: /\.(css|s[ac]ss)$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader", "css-loader", "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                outputStyle: "compressed"
                            },
                        },
                    }
                ],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            }
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "amTest",
            remotes: {
            },
            exposes: {},
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },
            },
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        }),
        new HtmlWebPackPlugin({
            template: "./public/index.html"
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'public', 'favicon.ico') }
            ],
        }),
    ],
};
