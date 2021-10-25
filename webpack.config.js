devtool: 'source-map'
let path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    // 入口entry 出口output loader mode plugin
    mode: "production", // 指定开发模式  development-开发 production-生产
    entry: "./src/main.js",
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    devServer: {
        // contentBase: path.join(__dirname, "dist"), // 托管的静态资源目录
        static: {
            directory: path.join(__dirname, "dist")
        },
        compress: true, // gzip压缩
        port: 9000, // 指定端口
        open: true, // 自动打开浏览器
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: 'src/index.html' // 以src/目录下的index.html为模板打包
        }),
        new CleanWebpackPlugin(),

    ],

    //  打包css文件
    module: {
        rules: [{
                test: /\.css$/i,
                // use: ["style-loader", "css-loader"],
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                // use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    // ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        // 文件大小小于40kb => 打包成base64格式
                        // 否则把图片打包成一个二进制文件
                        // hash就是一个唯一的字符串，类似主键
                        limit: true, // 40kb
                        name: '[name]_[hash:5].[ext]',
                        outputPath: 'img/',
                    }
                }]
            },
            {
                test: /\.(ttf|ttf2|woff|woff2|eot|svg)$/,
                use: [{
                    loader: "url-loader"
                }]
            },


        ],
    }
}