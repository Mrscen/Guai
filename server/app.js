//导入用户服务器模块
const express = require('express')   //const 是常量，

//导入cors 中间件
const cors = require('cors')

// 创建 express 的服务器实例
const app = express()

//导入表单数据验证模块
const Joi = require('joi')

// 解析前端传的数据
app.use(express.json())

//配置中间件
app.use(cors())

//配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }))

//自定义中间件，优化res,send() 代码
app.use(function (req, res, next) {
    res.cc = function (err, status = 1) {
        if (err) {
            return res.send({ status, message: err instanceof Error ? err.message : err, }) //判断错误是对象err还是字符串的
        }
    }
    next()

})

const userRouterxg = require('./routerxg/GuaiGuai')
//挂载小乖操作路由
app.use('/xg', userRouterxg)

//定义全局错误中间件，如果表单数据错误，不满足规则，则进行报错
app.use(function (err, req, res, next) {
    //验证错误导致地错误
    if (err instanceof Joi.ValidationError) {
        return res.cc(err.message)
    }
    // 捕获身份认证失败的错误,UnauthorizedError:未认证授权
    if (err.name === 'UnauthorizedError') {
        return res.cc('身份认证失败！')
    }
    res.cc(err.message)
})

//导入fs模块
const fs = require("fs")
//导入path模块
const path = require("path")

//静态资源托管 最终要访问http://localhost:5000/upload/XXXXXXXXXXXXXX.webp（jpg）
app.use( express.static('../GuaiGuai/public')) //设置静态文件目录

//1.引入multer中间件
const multer = require("multer")

//2.实例化multer(这个实例内部已经进行过封装)
//同时创建文件夹upload,需要上传的图片放到upload文件夹里
let objMulter = multer({ dest: '../GuaiGuai/public/upload' }); //dest: 指定 保存位置（存到服务器)

//3.安装中间件
app.use(objMulter.any())  //运行上传什么类型的文件  any就代表任意类型

app.post("/reg",(req,res)=>{
    //  console.log(req);

    //4.需要进行文件名更改
    let oldFile = req.files[0].path;
    let newFile = req.files[0].path + path.parse(req.files[0].originalname).ext
    fs.renameSync(oldFile , newFile)

    //将地址返回给客户端
    res.send({
        err:0,
        url:"http://47.113.145.33:3000/upload/"+req.files[0].filename+path.parse(req.files[0].originalname).ext
    })
    
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3000, function () {
    console.log('api server running at http://127.0.0.1:3000')
})