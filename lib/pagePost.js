'use strict'

var User = require('./module/user')

// 首页
module.exports.find = function(req, res, next) {
    res.render('index', { title: 'box' })

    // 数据库的存操作,错误有限的原则(增)
    // var user = new User({
    //     username: 'jackwang',
    //     userpwd: 'jackwang',
    //     userage: 27,
    //     logindate: new Date()
    // })

    // user.save(function(err, res) {
    //     if (err) {
    //         console.log("error:" + err)
    //     } else {
    //         console.log("res:" + res)
    //     }
    // })

    // 数据库的更新操作(改)
    // var wherestr = { 'username': 'jackwang' }
    // var updatastr = { 'username': 'jack' }

    // 三个参数，第一个是改哪个字段，第二个是改成什么,三是错误优先的回调函数
    // User.update(wherestr, updatastr, (err, res) => {
    //     if (err) {
    //         console.log("error:" + err)
    //     } else {
    //         console.log("数据库修改成功")
    //     }
    // })


    // 根据数据库的id来更新操作
    // var id = '5b02908bd542f514bc96dcdd'
    // var updatestr = { 'username': 'jackwang666' }

    // 三个参数，第一个是改数据库的id，第二个是改成什么,三是错误优先的回调函数
    // User.findByIdAndUpdate(id, updatestr, (err, res) => {
    //     if (err) {
    //         console.log("error" + err)
    //     } else {
    //         console.log("数据库修改成功")
    //     }
    // })


    // 找到一条记录并且更新

    // 通过User获取到一条记录
    // var userage = User.userage
    // var updatestr = { 'userage': 80 }

    // 三个参数，第一个是找到的新纪录，第二个是改成什么,三是错误优先的回调函数
    // User.findOneAndUpdate(userage, updatestr, (err, res) => {
    //     if (err) {
    //         console.log("err" + err)
    //     } else {
    //         console.log('修改数据库成功')
    //     }
    // })



    // 数据库的删除操作
    // 删除操作和查找操作类似,也是有三种方法
    // var wherestr = User.username

    // 删除操作是删除的整个字段,不管用什么样子的删除方式都是删除的整个字段
    // Model.findByIdAndRemove(id, [options], [callback])　　　　　　
    // Model.findOneAndRemove(conditions, [options], [callback])


    // User.remove(wherestr, (err, res) => {
    //     if (err) {
    //         console.log('err' + err)
    //     } else {
    //         console.log("当前记录删除成功")
    //     }
    // })



    // 数据库的查询操作
    // var wherestr = User.username

    // // 根据字段查询整条记录
    // User.find(wherestr, (err, res) => {
    //     if (err) {
    //         console.log('err' + err);
    //     } else {
    //         console.log("数据库查询成功" + res);
    //     }
    // })


    // 查询过滤,第二个参数是一个对象，但是除了id,对象里面的参数不能设置为0
    // var wherestr = { 'username': 'jackwang' };
    // var opt = { "username": 1, "_id": 1 }

    // User.find(wherestr, opt, (err, res) => {
    //     if (err) {
    //         console.log("err" + err)
    //     } else {
    //         console.log("数据库查询成功:" + res)
    //     }
    // })


    // 数量查询(查询这个表中的数量，有多少个对象)
    // var wherestr = {}

    // User.count(wherestr, (err, res) => {
    //     if (err) {
    //         console.log('err' + err);

    //     } else {
    //         console.log('res' + res)
    //     }
    // })


    // 根据id的数量查询
    // var id = '5b02baa850aa8609f4409937'      //User.username

    // User.findById(id, (err, res) => {
    //     if (err) {
    //         console.log('err' + err);

    //     } else {
    //         console.log('res' + res)
    //     }
    // })


    // 模糊查询,根据正则来匹配
    // var wherestr = { 'username': { $regex: /m/i } }

    // User.find(wherestr, (err, res) => {
    //     if (err) {
    //         console.log('err' + err);

    //     } else {
    //         console.log('res' + res)
    //     }
    // })
}




// 数据库的查找操作的条件
// 　　$or      或关系
// 　　$nor     或关系取反
// 　　$gt      大于
// 　　$gte     大于等于
// 　　$lt　    小于
// 　　$lte　   小于等于
// 　　$ne      不等于
// 　　$in      在多个值范围内
// 　　$nin     不在多个值范围内
// 　　$all     匹配数组中多个值
// 　　$regex　 正则，用于模糊查询
// 　　$size　  匹配数组大小
// 　　$maxDistance　　范围查询，距离（基于LBS）
// 　　$mod　　 取模运算
// 　　$near　　邻域查询，查询附近的位置（基于LBS）
// 　　$exists　字段是否存在
// 　　$elemMatch　　匹配内数组内的元素
// 　　$within　范围查询（基于LBS）
// 　　$box　　 范围查询，矩形范围（基于LBS）
// 　　$center  范围醒询，圆形范围（基于LBS）
// 　　$centerSphere　　范围查询，球形范围（基于LBS）
// 　　$slice　 查询字段集合中的元素（比如从第几个之后，第N到第M个元素）