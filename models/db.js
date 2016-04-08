'use strict'
var mongoose = require('mongoose');
// 连接mongodb
mongoose.connect('mongodb://localhost/test');
// 实例化连接对象
var db = mongoose.connection;
db.on('error', function() {
    console.log("数据库连接失败：" + error);
});
db.once('open', function() {
    console.log("------数据库连接成功！------");
})
// 创建schema
var studentSchema = new mongoose.Schema({
    name: String,
    studentId: Number,
    time: { type: Date, default: Date.now }
});
// 创建model
const studentModel = mongoose.model('newStudent', studentSchema); // newStudent为创建或选中的集合

module.exports = studentModel;