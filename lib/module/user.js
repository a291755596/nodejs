// var mongoose = require('../connect.js')
var mongoose = require('mongoose');


// 定义存如数据库的类型
var userSchema = new mongoose.Schema({
    username: { type: String },
    userpwd: { type: String },
    userage: { type: Number },
    logindate: { type: Date }
})


// 这里面的test应该和数据库中的表名对应，会自动创建
module.exports = mongoose.model('test', userSchema)


// 数据的类型分类
// 　　String
// 　　Number
// 　　Boolean | Bool
// 　　Array
// 　　Buffer
// 　　Date
// 　　ObjectId | Oid
// 　　Mixed