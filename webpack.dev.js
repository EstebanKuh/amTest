const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',

    output: {
        publicPath: "http://localhost:3000/",
    },

    devtool: process.env.ENV === 'PROD' ? 'none' : 'eval-source-map',

    devServer: {
        port: 3000,
        historyApiFallback: true,
    }
});