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

### 确定文件结构
```
├── .tmp                                 
├── dist                                 
└── gulp                                 
  ├── build.js                                
  ├── conf.js
  ├── e2e-tests.js                                 
  ├── inject.js                                 
  ├── scripts.js                                 
  ├── server.js                                 
  ├── styles.js                                 
  ├── unit-tests.js                                 
  └── watch.js 
└── e2e  
  ├── main.po.js                                 
  └── main.spec.js 
├── bower_components 
├── node_modules 
└── src  
  ├── app                                 
  └── assets 
    ├── images                                 
    └── styles                               
  ├── favicon.ico                                 
  └── index.html
├── .bowerrc
├── .editorconfig
├── .eslintrc  
├── .gitignore  
├── bower.json  
├── gulpfile.js  
└── package.json 
```

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
#### 4. gulp配置
- 新建gulpfile.js文件
> 一个公用的gulpfile.js，用Node.js内置的文件系统模块fs读取文件，动态require进去，读取各个子项目配置或gulp task，然后根据自己的需求去执行任务
- 创建gulp配置文件夹
- gulp执行任务顺序
```
├── clean                                 // 执行之前先清空之前打包后的文件
└── build                                 // 打包任务
  ├── html                                // html打包
  │   ├── inject
  │   │   ├── scripts
  │   │   ├── styles
  │   │   ├── injectAuth
  │   │   │   └── stylesAuth
  │   │   └── copyVendorImages
  │   └── partials
  ├── fonts                              // 字体打包    
  └── other                              // 其他文件打包，如图片
      └── copyVendorImages
```
- 新建conf.js文件
>  建立路径文件用来存放路径，之后用到只需要写路径对应的变量即可
- 新建build.js文件
> 先引入需要的东西，使用gulp-load-plugins只要将需要的功能方法引进来就可以调用它
```
var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});
```
> 分任务解析如下
##### clean任务
> 使用del方法清空该路径下的文件或文件夹
```
gulp.task('clean', function () {
  return $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
});
```
##### build任务
> 完成html、字体和其他的打包

> partials任务(作用：将所有Angular的template合并起来，最后通过angular的templateCache服务将原本的html载入，优点是减少请求数，在app不大的时候能显著的提高加载速度)
```
gulp.task('partials', function () {
  return gulp.src([
    path.join(conf.paths.src, '/app/**/*.html'),
    path.join(conf.paths.tmp, '/serve/app/**/*.html')
  ])
    .pipe($.htmlmin({
      removeEmptyAttributes: true,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'axrepository',
      root: 'app'
    }))
    .pipe(gulp.dest(conf.paths.tmp + '/partials/'));
});
```
- html打包
```
gulp.task('html', ['inject', 'partials'], function () {
  var partialsInjectFile = gulp.src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'), { read: false });
  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: path.join(conf.paths.tmp, '/partials'),
    addRootSlash: false
  };

  var htmlFilter = $.filter('*.html', { restore: true });
  var jsFilter = $.filter('**/*.js', { restore: true });
  var cssFilter = $.filter('**/*.css', { restore: true });

  return gulp.src(path.join(conf.paths.tmp, '/serve/*.html'))
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe($.useref())  //将多个文件拼接成单一文件，并输出到相应目录

    .pipe(jsFilter)   
    .pipe($.sourcemaps.init())
    .pipe($.ngAnnotate())
    .pipe($.rev())
    .pipe($.sourcemaps.write('maps'))
    .pipe(jsFilter.restore)

    //压缩css
    .pipe(cssFilter)
    .pipe($.replace('../bower_components/font-awesome/fonts', '../fonts'))
    .pipe($.cssnano())
    .pipe($.rev())
    .pipe(cssFilter.restore)
    
    .pipe($.revReplace())

    .pipe(htmlFilter)
    .pipe($.htmlmin({
      removeEmptyAttributes: true,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true
    }))
    .pipe(htmlFilter.restore)

    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }));
  });
```
- 字体打包
> 遍历文件夹找到字体文件，进行压缩打包后，放入指定文件夹内
```
gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,otf,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
});
```
- 其他打包
```
gulp.task('other', function () {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join('!' + conf.paths.src, '/**/*.{html,css,js,scss}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});
```
> 最后build
```
gulp.task('build', ['html', 'fonts', 'other']);
```
- 新建watch.js文件
> 实时监控代码的更新变化，有变化则自动刷新页面 
- 新建inject.js文件
```
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var browserSync = require('browser-sync');

gulp.task('inject-reload', ['inject'], function() {
  browserSync.reload();
});

gulp.task('inject', ['scripts', 'styles'], function () {
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/**/*.css'),
    path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
  ], { read: false });

  var injectScripts = gulp.src([
    path.join(conf.paths.src, '/app/**/*.module.js'),
    path.join(conf.paths.src, '/app/**/*.js'),
    path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
    path.join('!' + conf.paths.src, '/app/**/*.mock.js'),
  ])
  .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});
```
- 新建scripts.js文件
```
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();


gulp.task('scripts-reload', function() {
  return buildScripts()
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return buildScripts();
});

function buildScripts() {
  return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size())
}
```
- 新建server.js文件
> serve是启动项目所用，当执行gulp serve时，会执行watch任务后打开对应路径下的静态页面
```
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

var proxyMiddleware = require('http-proxy-middleware');

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  // 设置代理
  var fs = require('fs');
  var path = require('path');
  var proxy_file = path.join(__dirname, '..', 'proxy.json');
  var exist = fs.statSync(proxy_file);
  if (exist) {
    var proxy_conf = require(proxy_file);
    server.middleware = Object.keys(proxy_conf).map(function(key) {
      return proxyMiddleware(key, proxy_conf[key]);
    });
  }

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
   */

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
  browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(conf.paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});
```
- 新建styles.js文件
```
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles-reload', ['styles'], function() {
  return buildStyles()
    .pipe(browserSync.stream());
});

gulp.task('styles', function() {
  return buildStyles();
});

var buildStyles = function() {
  var sassOptions = {
    outputStyle: 'expanded',
    precision: 10
  };

  var injectFiles = gulp.src([
    path.join(conf.paths.src, '/app/**/*.scss'),
    path.join('!' + conf.paths.src, '/app/index.scss')
  ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace(conf.paths.src + '/app/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };


  return gulp.src([
    path.join(conf.paths.src, '/app/index.scss')
  ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
};
```
### 写一个简单页面

### 启动
- yarn start

### 打包
- yarn build

### 部署前准备
1. 服务器端(linux)安装rsync
`yum -y install rsync`
2. package.json中配置
`"deploy": "rsync -azP --delete-after dist/* root@47.98.53.220:/home/www/htdocs/axrepository"`

### 部署
- yarn deploy

### 自动生成项目框架
> 用Yeoman可以自动生成项目框架，不用走上面那么多步骤，可以在它生成的基础上修改
#### 安装yo
- npm install -g yo

#### 安装生成器
1. 安装依赖的gulp和bower
- npm install -g yo gulp bower
2. 安装生成器
- npm install -g generator-gulp-angular

#### 运行生成器
1. 创建项目目录，并进入目录
- mkdir new-project && cd $_
2. 运行生成器
- yo gulp-angular



