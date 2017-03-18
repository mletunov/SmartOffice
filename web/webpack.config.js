var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ApiResolver = require("./api.resolver");
var packageJson = require("./package.json");

module.exports = {
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    module: {
        loaders: [
              {
                  loaders: ['babel-loader'],
                  include: [
                      path.resolve(__dirname, "src"),
                  ],
                  test: /\.js$/,
              },
              {
                test: /\.css$/,
                loader: "style-loader!css-loader"
              },
              {
                 test: /\.scss$/,
                 loader: "style-loader!css-loader!sass-loader"
              },
              {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
              },
              {
                 test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                 loader: 'url-loader?limit=10000&mimetype=application/font-woff'
              },
              {
                 test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                 loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
              },
              {
                 test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                 loader: 'file-loader'
              },
              {
                 test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                 loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new webpack.DefinePlugin({
            __API__: JSON.stringify(ApiResolver.resolveUrl(process.env.NODE_ENV)),
            __VERSION__: JSON.stringify(packageJson.version)
        })
    ]
}
