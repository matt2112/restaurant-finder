var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // devtool: 'cheap-module-source-map',
    context: path.join(__dirname, 'src'),
    entry: {
        app: './js/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: /src/
            },
            {
                test: /.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        stats: 'errors-only'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            hash: true
        })
    ]
};