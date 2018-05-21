var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// 导入数据库，并连接数据库
var mongoose = require('./lib/connect');
var db = mongoose();


// 引入整体理由
var router = require('./lib/router');


// 生成一个express实例 app,以下所有实力都是基于这一行申明
var app = express();

// 设置 views 文件夹为存放视图文件的目录, 即存放模板文件的地方,
// __dirname 为全局变量(详见nodejs文档),存储当前正在执行的脚本所在的目录
app.set('views', path.join(__dirname, 'views'));


// 设置视图模板引擎为 ejs,除了ejs模板还有jade模板
app.set('view engine', 'ejs');

// 设置/public/favicon.ico为favicon图标
// app.use(favicon(__dirname + '/public/favicon.ico’))


// 加载日志中间件(一脸蒙蔽.jpg)
app.use(logger('dev'));

// 加载解析json的中间件(同样是一脸懵逼)
app.use(express.json());

// 加载解析urlencoded请求体的中间件(继续一脸懵逼)
app.use(express.urlencoded({ extended: false }));

// 加载解析cookie的中间件(干脆一脸懵逼到底)
app.use(cookieParser());

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));



// app.use('/', routes);和app.use('/users', users)：路由控制器。
app.use('/', router);

// 截取404的内容
app.use(function(req, res, next) {
    next(createError(404));
});

// 错误处理
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;