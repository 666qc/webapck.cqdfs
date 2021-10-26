devtool: 'source-map'
let path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require("vue-loader/lib/plugin.js");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
        new VueLoaderPlugin(),
        // new MiniCssExtractPlugin()
    ],

    //  打包css scss less 图片 等文件
    
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader','postcss-loader', 'css-loader']
            },
            {
                test: /\.less$/i,
                use: [
                  // compiles Less to CSS
                  'style-loader',
                  'css-loader',
                  'postcss-loader',
                  'less-loader',
                 
                ],
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  // 将 JS 字符串生成为 style 节点
                  'style-loader',
                  // 将 CSS 转化成 CommonJS 模块
                  'css-loader',
                  'postcss-loader',
                  // 将 Sass 编译成 CSS
                  'sass-loader',
                  
                ],
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
            { test: /\.vue$/, use: 'vue-loader' }


        ],
    },
    resolve:{
        alias:{
            'vue$': "vue/dist/vue.js",
            // @指向src目录
            '@': path.join(__dirname, 'src'),
            //配置api目录
            '@api': path.join(__dirname, 'src/api'),
            //配置util目录
            '@util': path.join(__dirname, 'src/util'),
        }
    }
}