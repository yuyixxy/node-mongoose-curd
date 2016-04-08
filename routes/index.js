'use strict'

var studentModel = require('../models/db');

var router = function(app) {
    // 首页
    app.get('/', function(req, res, next) {
        // res.render('index', {title: 'mongoose curd'});
        studentModel.find({}, function(error, results) {
            // console.log(results);
            if (error) {
                return console.log(error);
            } else {
                // console.log(results);
                res.render('index', { results });
            }
        })
    });
    
    // 添加学生信息
    app.get('/create', function(req, res, next) {
        res.render('create', {});
    });
    app.post('/create', function(req, res, next) {
        var newStudent = [{
            name: req.body.name,
            studentId: req.body.student_id
        }]
        studentModel.create(newStudent, function(error) {
            if (error) {
                return console.log(error);
            } else {
                res.send("<a href='/'>添加成功，点击返回首页</a>");
            }
        })
    })
};

module.exports = router