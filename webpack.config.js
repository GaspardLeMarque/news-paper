const HtmlWebPackPlugin = require("html-webpack-plugin");
const HtmlWebPackRootPlugin = require("html-webpack-root-plugin");

module.exports = {
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({title: 'news paper'}),
        new HtmlWebPackRootPlugin({}),
    ]
};