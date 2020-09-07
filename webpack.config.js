
const HtmlWebpackPluguin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/three.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    devServer: {
        port: 8081
    },
    module: {
        rules: [
            {   
                test: /\.scss$/,
                use: [ 
                    { loader : MiniCssExtractPlugin.loader}, 
                    { loader : 'css-loader'}, 
                    { loader : 'sass-loader'} 
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }

        ]
    },


    plugins: [
        new HtmlWebpackPluguin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({

            filename: 'bundle.css',
        }

        ),
    ]
}