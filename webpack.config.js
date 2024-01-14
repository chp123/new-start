const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: {
            import: './pages/app/index.tsx',
            filename: '[name].js' //这里的文件名输出优先级高于下面的output
        },
        index: {
            import: './pages/index/index.tsx',
            filename: '[name].js'
        },
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     exclude: /node_modules/,
            //     use: 'ts-loader',
            // },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css|scss$/,
                exclude: /(node_modules)/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@src': path.resolve('src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'app.html',
            chunks: ['app']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        port: 9000
    }
}