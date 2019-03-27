const HtmlWebPackPlugin = require("html-webpack-plugin");
const HtmlWebPackRootPlugin = require("html-webpack-root-plugin");

module.exports = {
    module: {
        rules: [
            { test: /\.scss/,
                use: [
                    { loader: 'isomorphic-style-loader' },
                    {
                      loader: 'css-loader',
                      options: {
                        camelCase: true,
                        modules: true
                      }
                    },
                    { loader: 'sass-loader',
                      options: {
                        sourceMap: true,
                        outputStyle: 'expanded'
                      }
                    },
                  ]
                  },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({title: 'news paper'}),
        new HtmlWebPackRootPlugin({}),
    ]
};