const path = require('path')
console.log('得到绝对地址==>', path.resolve('src'))


const glob = require('glob')
const getEntries = (globPath, pathDir) => {
    let files = glob.sync(globPath);
    console.log('files=>', files)
    let entries = {},
        entry, dirname, basename, pathname, extname;

    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        console.log('dirname=>', dirname)
        extname = path.extname(entry);
        console.log('extname=>', extname)
        basename = path.basename(entry, extname);
        console.log('basename=>', basename)
        pathname = path.join(dirname, basename);
        console.log('pathname=>', pathname);
        entries[basename] = pathname + pathDir;
    }
    console.log(entries)
    return entries;
}

getEntries(path.resolve('pages/*'), '/index.tsx')


const getHtmls = (entries) => {
    var HtmlPlugin = [];
    for (var key in entries) {
        entries[key] = htmls[key].replace('.html', '.js')
        HtmlPlugin.push(new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: `${key}.html`,
            chunks: [key]
        }))
    }
    return HtmlPlugin
}