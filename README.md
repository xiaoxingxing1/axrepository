# 项目模版
###### 学习记录之

### 创建.bowerrc文件
vi .bowerrc
```
{
  "directory": "bower_components"
}
```

### 安装yarn
- brew install yarn

### 初始化新项目
- yarn init
- bower init

### 添加依赖包
##### yarn
- yarn add browser-sync (浏览器实时响应文件更改并自动刷新页面)
- yarn add browser-sync-spa (更好的支持单页应用浏览器同步)
- yarn add chalk (处理命令行打印着色) 
- yarn add del (Delete files and folders using globs)
- yarn add eslint (javascript代码检测工具)
- yarn add eslint-plugin-angular (为angular项目进行javascript代码检测)
- yarn add estraverse (遍历并更新AST) ?
- yarn add gulp (自动化构建工具)
- yarn add gulp-angular-filesort (根据模块定义和使用，自动对AngularJS应用程序文件进行排序)
- yarn add gulp-angular-templatecache (直接将指定的HTML模板文件以JS字符串的形式注册在$tempalteCache服务中，这样所有的模板就会随JS文件直接一次性下载下来)
- yarn add gulp-autoprefixer (自动添加各种浏览器前缀) 
- yarn add gulp-cssnano (Minify CSS with cssnano)
- yarn add gulp-eslint (A gulp plugin for ESLint)
- yarn add gulp-filter (过滤文件)
- yarn add gulp-flatten (删除或替换文件的相对路径)
- yarn add gulp-htmlmin (html压缩)
- yarn add gulp-inject (将需要引入的css、js自动注入index.html)
- yarn add gulp-load-plugins (从包依赖项加载gulp插件，并将它们附加到您选择的对象上，自动require你在package.json中声明的依赖)
- yarn add gulp-ng-annotate (处理angularjs依赖注入)
- yarn add gulp-protractor (Angular的e2e测试工具protractor的配套插件)
- yarn add gulp-rename (重命名文件)
- yarn add gulp-replace (字符串替换)
- yarn add gulp-rev (把静态文件名改成hash的形式)
- yarn add gulp-rev-replace (配合 gulp-rev 使用，拿到生成的 manifest.json 后替换对应的文件名称)
- yarn add gulp-sass (编译sass)
- yarn add gulp-size (显示项目的大小)
- yarn add gulp-sourcemaps (处理JavaScript时生成SourceMap)
- yarn add gulp-uglify (压缩Javascript)
- yarn add gulp-useref (对html页面中的js，css引用进行合并)
- yarn add gulp-util (有很多方便的函数，其中最常用的应该就是log了)
- yarn add http-proxy-middleware (中间件解决跨域问题)
- yarn add jQuery.print (打印页面特定部分)
- yarn add karma (JavaScript测试执行过程管理工具。该工具可用于测试所有主流Web浏览器，也可集成到 CI 工具，也可和其他代码编辑器一起使用)
- yarn add karma-angular-filesort (整理AngularJS文件以避免[$injector:nomod]错误)
- yarn add karma-coverage (测试代码覆盖率)
- yarn add karma-jasmine (使用Jasmine测试框架测试)
- yarn add karma-ng-html2js-preprocessor (把本地文件中的模板转换成可在测试中使用的ng模块)
- yarn add karma-phantomjs-launcher (使用PhantomJS无界面浏览器的测试框架测试)
- yarn add karma-phantomjs-shim (当在PhantomJS中运行测试时提供shims)
- yarn add lodash (一个一致性、模块化、高性能的 JavaScript 实用工具库)
- yarn add main-bower-files (通过读取并分析bower.json文件里override属性里main路径下定义的插件及相关依赖，返回一个文件数组)
- yarn add uglify-save-license (用gulp-uglify压缩javascript后保留注释信息)
- yarn add wiredep (将所需库的js、css文件直接引入到html文件中)
##### bower
- bower install bootstrap-sass --save (集成好的一个bootstrap的sass文件)
- bower install angular --save (安装angular)
- bower install angular-animate --save (为angular提供动画机制)
- bower install angular-bootstrap --save (用angular写的bootstrap插件)
- bower install angular-local-storage --save (一个可以访问浏览器本地存储的angular模块)
- bower install angular-messages --save (提示消息组件)
- bower install angular-smart-table --save (smart-table组件)
- bower install angular-toastr --save (消息提醒组件)
- bower install angular-ui-router --save (路由组件)
- bower install animate.css --save (动画css)
- bower install font-awesome --save (图标字体库和css框架)
- bower install moment --save (一个JavaScript日期处理类库)
- bower install angular-loading-bar --save (AngularJS的自动加载条)
- bower install sass-flex-mixin --save (解决flexbox版本兼容)

### 安装依赖包
- yarn 
- bower install

### 各种配置
#### 1. editorconfig配置
vi .editorconfig
```
# http://editorconfig.org
root = true  //表示是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件

[*]
indent_style = space  //设置缩进风格(tab是硬缩进，space为软缩进)
indent_size = 2  //用一个整数定义的列数来设置缩进的宽度，如果indent_style为tab，则此属性默认为tab_width
end_of_line = lf  //设置换行符，值为lf、cr和crlf
charset = utf-8  //设置编码，值为latin1、utf-8、utf-8-bom、utf-16be和utf-16le，不建议使用utf-8-bom
trim_trailing_whitespace = true  //设为true表示会去除换行行首的任意空白字符
insert_final_newline = true  //设为true表示使文件以一个空白行结尾

[*.md]
trim_trailing_whitespace = false
```
#### 2. eslintrc配置
vi .eslintrc
```
{
  //启用推荐的规则
  "extends": "eslint:recommended",
  //一个环境定义了一组预定义的全局变量
  "env": {
    "browser": true,
    "jasmine": true
  },
  //配置全局变量，将变量设置为 true 将允许变量被重写，或 false 将不允许被重写
  "globals": {
    "angular": true,
    "module": true,
    "inject": true,
    "$": true,
    "moment": true
  }
}
```
#### 3. gitignore配置
vi .gitignore
```
node_modules/
bower_components/
.tmp/
dist/
dist.zip
proxy.json
.vscode
db.js
db.json
```

