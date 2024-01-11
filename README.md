# new-start
新的开始，重头来过
### 关于css
####1、postcss
+ 学习网址：https://www.postcss.com.cn
+ 简单来讲：postcss是转换css的工具，具有很多插件，比如：autoprefixer可以自动补全浏览器前缀；postcss-pxtorem自动把px转化为rem
+ 效果：
配置
    {
        test: /\.css|scss$/,
        exclude: /(node_modules)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader','postcss-loader'],
    },
打包结果：
.a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}
对比配置：
    {
        test: /\.css|scss$/,
        exclude: /(node_modules)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    },
打包结果：
.a{display:flex;flex-direction:row}

#### 2、sass-loader
+ css预处理：加载 Sass/SCSS 文件并将他们编译为 CSS
+ sass学习网址：https://www.sass.hk
+ 配置学习网址：https://webpack.docschina.org/loaders/sass-loader/
+ 效果：
配置
.a {
  display: flex;
  flex-direction: row;
  @include a(#fff)
}
打包结果：
a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;color:#fff}

#### 3、style-loader
+ 把css插入到dom中
+ 学习网址：https://webpack.docschina.org/loaders/style-loader/
+ 效果：
看不出来是插到哪里去了，只引了一个bundle.js文件

#### 4、mini-css-extract-plugin
+ 本插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。
仅webpack5支持
+ 学习网址：https://webpack.docschina.org/plugins/mini-css-extract-plugin#root
+ 效果：
安装配置好后，打包dist文件夹有单独的main.css文件；未配置之前，只有html和bundle.js文件

### 关于ts配置
+ 安装1：typescript、ts-loader、@types/react、@types/react-dom
+ 特点： tsc编译不支持polyfill
+ 配置参考：https://webpack.docschina.org/guides/typescript/#root
+ 安装2: @babel/preset-typescript
+ 特点：babel编译，不做类型检查，速度较快


### 关于babel

### 关于polyfill
+ 什么是polyfill
抚平不同浏览器之间对js实现的差异。
https://www.jianshu.com/p/7562b8b589f3
