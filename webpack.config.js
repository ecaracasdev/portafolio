const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        open:true
    },
    module: {
        rules: [
            { test: /\.handlebars$/, 
                use: [
                    {loader: "handlebars-loader"} 
                ]
            },
            {
                test: /\.(scss|css)/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/',
                            useRelativePath: true,
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                          mozjpeg: {
                            progressive: true,
                            quality: 65
                          },
                          optipng: {
                            enabled: true,
                          },
                          pngquant: {
                            quality: '65-90',
                            speed: 4
                          },
                          gifsicle: {
                            interlaced: false,
                          },
                          webp: {
                            quality: 75
                          }
                        }
                    }
                ]
            }
        ] 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.handlebars'
        })
    ]
}