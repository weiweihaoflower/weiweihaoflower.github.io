---
title: 'node.js express基础总结'
date: 2022-05-01 21:25:40
tags:
- 'express'
- 'node.js'
categories:
- 'node.js'
---

::: tip 
###  什么是Express   ？  
Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能
:::



```javascript
// 创建一个Express server
//1.引入express
const express = require('express')
//2.创建应用对象
const app = express()
//导出路由模块
const router = require('./3.router')
//注册路由 app.use()函数注册全局中间件
app.use(router)
// 使用app.use()注册路由模块，并添加统一的访问前缀 /api
// app.use('api',router)
//3.监听端口启动服务
app.listen(8090, () => {
    console.log("服务已经111启动，8090端口监听中...")
})
```
###  定义中间件
```javascript
// 中间件
//1.引入express
const express = require('express')
//2.创建应用对象
const app = express()
// 定义一个最简单的中间件函数
// 中间件的作用:多个中间件之间，共享同一份req和res 基于这样的特性
// 我们可以在上游的中间件中同一为req或者res对象添加自定义的属性或者方法，供下游的中间件 或路由进行使用
const mw = function(req, res, next) {
console.log("这个最简单的一个中间件函数")
const time = Date.now()
// 为req对象挂载自定义的属性，从而把时间共享给后面的所有路由
req.stateTime = time
// 把流转关系。转交给下一个中间件或者路由
next() 
}
// 讲mw注册为全局生效的中间件
app.use(mw)
app.get('/wei',(req,res) => {

    // 使用中间件中定义的时间
   res.send('中间件执行完在执行我'+ req.stateTime )
 })
```
### 定义多个中间件
```javascript
// 中间件
//1.引入express
const express = require('express')
//2.创建应用对象
const app = express()
// 定义第一个全局中间件
app.use((req,res,next)=>{
    console.log("调用了第一分隔全局中间件")
    next()
})
// 定义第二个全局中间件
app.use((req,res,next)=>{
    console.log("调用了第二分隔全局中间")
    next()
})
// 路由
app.get('/wei',(req,res) => {
    // 使用中间件中定义的时间
   res.send('中间件执行完在执行我' )
 })
//3.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经111启动，8000端口监听中...")

})
```
### 使用Express编写接口

```javascript
//1.引入express
const express = require('express')
//2.创建应用对象
const router = express.Router()
// get请求接口
router.get('/get',(req, res) => {
    // 通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    // 调用 res.send()方法，向客户端响应处理的结果
    res.send({
     status: 0, // 0表示处理成功, 1表示处理失败
     msg:'get请求成功',
     data:query //需要响应给客户端的的数据
    })
})
// 定义post接口
router.post('/post',(req, res) => {   

    // 通过req.body获取请求体中包含的url-encoded格式的数据
    const body = req.body
    // 调用 res.send()方法，向客户端响应处理的结果
    res.send({
     status: 0, // 0表示处理成功, 1表示处理失败
     msg:'get请求成功',
     data:body //需要响应给客户端的的数据
    })
})
 
module.exports =router

```
### 使用Express解决跨域问题
```javascript
//1.引入express
const express = require('express')
//2.创建应用对象
const app = express()
// 配置解析表单数据的中间件 (用于req.body获取请求体中包含的url-encoded格式的数据)
app.use(express.urlencoded({extended: false}))
//1.安装cors npm i cors
// 一定要在路由之前，配置cors这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())
// 导入路由模块
const router = require('./11.apirouter')
// 把路由模块，注册到app上
app.use('/api',router)
//3.监听端口启动服务
app.listen(9000, () => {
    console.log("服务已经111启动，9000端口监听中...")

})

```
