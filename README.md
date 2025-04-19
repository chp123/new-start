# new-start

新的开始，重头来过

### 关于css

#### 1、postcss

-   学习网址：https://www.postcss.com.cn
-   简单来讲：postcss是转换css的工具，具有很多插件，比如：autoprefixer可以自动补全浏览器前缀；postcss-pxtorem自动把px转化为rem；postcss-preset-env也是处理兼容问题；
-   效果：
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

-   css预处理：加载 Sass/SCSS 文件并将他们编译为 CSS
-   sass学习网址：https://www.sass.hk
-   配置学习网址：https://webpack.docschina.org/loaders/sass-loader/
-   效果：
    配置
    .a {
    display: flex;
    flex-direction: row;
    @include a(#fff)
    }
    打包结果：
    a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;color:#fff}

#### 3、style-loader

-   把css插入到dom中
-   学习网址：https://webpack.docschina.org/loaders/style-loader/
-   效果：
    看不出来是插到哪里去了，只引了一个bundle.js文件

#### 4、mini-css-extract-plugin

-   本插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。
    仅webpack5支持
-   学习网址：https://webpack.docschina.org/plugins/mini-css-extract-plugin#root
-   效果：
    安装配置好后，打包dist文件夹有单独的main.css文件；未配置之前，只有html和bundle.js文件

### 关于ts配置

-   安装1：typescript、ts-loader、@types/react、@types/react-dom
-   特点： tsc编译不支持polyfill
-   配置参考：https://webpack.docschina.org/guides/typescript/#root
-   安装2: @babel/preset-typescript
-   特点：babel编译，不做类型检查，速度较快
-   tsconfig.json
    配置：https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

### 关于babel

-   学习网址：https://babeljs.io/docs/
    babel不做类型检查
-   babel-polyfill

### 关于polyfill

-   什么是polyfill
    抚平不同浏览器之间对js实现的差异。
    https://www.jianshu.com/p/7562b8b589f3

### 关于sourcemap

### 多页面

#### entry配置

https://webpack.docschina.org/concepts/entry-points#root

#### HtmlWebpackPlugin

-   作用：生成html文件；
-   文档：https://webpack.docschina.org/plugins/html-webpack-plugin/#root

#### webpack-dev-server

能配置端口、代理等

-   文档：https://webpack.docschina.org/configuration/dev-server/#root
-   访问提示：http://localhost:8080/webpack-dev-server
-   这个更清楚：https://www.jianshu.com/p/b164515d7502

#### 路径别名配置：

webpack.config.js需配置：
resolve: {
alias: {
'@src': path.resolve(\_\_dirname, 'src')
}
},
如用ts，tsconfig.json也需配置：
// 项目根路径
"baseUrl": "./",
// 别名映射
"paths": {
"@src/_": ["src/_"]
}

#### path包：

-   文档：https://www.nodeapp.cn/path.html#path_path_resolve_paths

#### 多页面打包重复配置简化

把webpack多入口的配置看懂，配两个看看
再用js来简化处理相同的逻辑即可

### 单页面

-   react-router和react-router-dom的区别
    react-router:实现了路由的核心功能
    react-router-dom:基于react-router，加入了在浏览器运行环境下的一些功能，例如Link组件、BrowserRouter和HashRouter组件。
-   文档(6和5的用法不太一样)： https://reactrouter.com/en/main/start/overview
    https://blog.csdn.net/samscat/article/details/124691407
-   react-router-config: 添加了 react-router-config 之后，我们就可以写我们熟悉的静态路由了。同时，利用它，可以将路由配置分散在各个组件中，最后使用renderRoutes将分散的路由片段在根组件合并，渲染即可。但是不适用于6版本的react-router-dom

### redux

-   文档：https://www.tkcnn.com/redux/advanced/UsageWithReactRouter.html
-   学习文档：https://juejin.cn/post/7239358009863897149?searchId=20240116232411637BC217A7F60FC8543C
    https://juejin.cn/post/6844903998139400200?searchId=202401160054325DED5740A89DC644265E#heading-18
-   redux 和 react-redux
    redux是一个专门用来做状态管理的js库（不是react插件）
    为了方便使用，Redux 的作者封装了一个 React 专用的库 React-Redux 这两个仓库的区别如下
    redux需要监听store变化更新视图，利用store.subscribe(() => { this.forceUpdate(); })；react-redux不需要监听；
    react-redux将组件分为UI组件、容器组件；关于redux的操作都在容器组件中，单一职责原则；并通过connect(mapStateToProps, mapDispatchToProps)()连接容器组件与UI组件；redux没有区分；
-   React 组件如何获取 redux store 中的状态
    引入 store 文件，然后直接在组件里面调用 store.getState() 方法
    引入 connect 方法，然后用 mapStateToProps 把状态映射到组件的 props 上面
-   redux 和 react-router结合

### 环境变量

了解： https://blog.csdn.net/qq_44776454/article/details/134154279
设置： cross-env NODE_ENV=dev
用：process.env.NODE_ENV

### h5

-   分辨率：

### pc

### axios

-   中文文档：http://www.axios-js.com/zh-cn/docs/index.html#请求方法的别名

### mock数据

-   mockjs 可以拦截ajax请求
    了解：https://blog.csdn.net/Mme061300/article/details/130343270

### 八股文

### 工具类

### 格式化

问题：prettier vscode的插件和npm包是什么关系？
答案：https://qa.1r1g.com/sf/ask/4334813031/
简而言之：不安装npm包，vscode的插件也可以工作；安装npm包并写配置，可以保证每个开发者的规则一致；
这个更清晰：https://juejin.cn/post/6990929456382607374

### lint

### 防抖&节流

### iconfont

### commonjs & amd

### Q&A

-   在webpack里配置new MiniCssExtractPlugin({filename: '[name].[hash:4].css'})之后，每次修改样式文件，页面样式就全丢了。
-   小红书瀑布流实现方案
-   webpack打包引入某个文件到模版文件里
-   图片加载过程的占位&懒加载



## 新篇章
做有意思的事，生活就是多体验，无限可能
### 有意思的three
文档：https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene

