// 连接数据库，基本配置
var mongoose = require('mongoose')


module.exports = () => {
    var url = 'mongodb://127.0.0.1:27017/user'
    mongoose.connect(url) //连接mongodb数据库

    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose connection disconnected');
    });
}