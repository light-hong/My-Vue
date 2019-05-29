const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development', //development production
    devtool: 'cheap-module-eval-source-map',
    //production模式下dectool 可以不设置，或者设置为cheap-module-source-map
    /* optomization: {
        usedExports: true
    }, */
    /* development模式下使用tree shaking（只支持ES6 Modules），还要在package.json中 加 "sideEffects": false 或者 [*.css]，让webpack打包有副作用的模块*/ 
    devServer: {
        port: 3000,
        contentBase: './dist',
        open: true,
        /* 热更新第一步，devServer配置项中设置hot:true;第二步引入webpack
           第三步new webpack.HotModuleReplacementPlugin() */
        //或者直接package.json中加脚本 
        // webpack-dev-server --open --port 3000 --contentBase src --hot
        hot: true,
        // hotOnly: true,
    },
    entry: path.resolve(__dirname, './src/index.js'),
    /* entry: {
        //多个js为打包入口
        main: path.resolve(__dirname, './src/index.js'),
        sub: path.resolve(__dirname, './src/index.js')
    }, */
    output: {
        // publicPath:'http://cdn.com.cn',    //上线把静态资源放到cdn上时
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new cleanWebpackPlugin()
    ],
    module: {
        rules: [{
                test: /\.(jpg|jpeg|png|gif|bmp)$/,
                /* use: 'url-loader?limit=102400&name=[name]_[hash:5].[ext]&outputPath=images/', */
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash:5].[ext]',
                        outputPath: 'images/',
                        limit: 10240,
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            //当less中@import另外一个less文件，导入的less文件也会被下面的loader处理
                            importLoaders: 2,
                            modules: true, //开启css的模块化打包
                        }
                    },
                    'less-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // options: {   //options对象可以抽取为.babelrc文件
                    /* presets: [
                        ['@babel/preset-env', {
                            targets: {
                                edge: "17",
                                firefox: "60",
                                chrome: "67",
                                safari: "11.1",
                            },
                            useBuiltIns: 'usage' //只转换使用到的es6语法
                        }]
                    ] */
                    //npm install --save @babel/polyfill
                    //import "@babel/polyfill";  会污染全局环境
                    //如果在presets中设置了useBuiltIns: 'usage'，可以不用引入import "@babel/polyfill"
                    /* 安装@babel/polyfill 然后在js文件中导入后就可以使用es6语法了*/

                    //transform-runtime方式
                    /* 'plugins': [
                        ['@babel/plugin-transform-runtime', {
                            'absoluteRuntime': false,
                            'corejs': 2,
                            'helpers': true,
                            'regenerator': true,
                            'useESModules': false
                        }]
                    ] */

                // }
            }
        ]
    }
}