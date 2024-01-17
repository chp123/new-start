const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const glob = require('glob')
const getEntries = (globPath, pathDir) => {
    let files = glob.sync(globPath);
    let entries = {},
        entry, dirname, basename, pathname, extname;
    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        pathname = path.join(dirname, basename);
        entries[basename] = pathname + pathDir;
    }
    return entries;
}

const getHtmls = (entries) => {
    var HtmlPlugin = [];
    for (var key in entries) {
        HtmlPlugin.push(new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: `${key}.html`,
            chunks: [key]
        }))
    }
    return HtmlPlugin
}
const entries = getEntries(path.resolve('pages/*'), '/index.tsx');
module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[hash:4].js',
        clean: true,
    },
    // devtool: 'source-map',
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
            '@src': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash:4].css'
        }),
        ...getHtmls(entries)
    ],
    devServer: {
        port: 9000
    }
}

