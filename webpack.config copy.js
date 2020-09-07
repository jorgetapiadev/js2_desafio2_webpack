
const HtmlWebpackPluguin = require('html-webpack-plugin');


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
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },


    plugins: [
        new HtmlWebpackPluguin({
            template: './src/index.html'
        })
    ]
}