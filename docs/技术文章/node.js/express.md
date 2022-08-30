---
title: '用Node.js+express+Sequelizes实现服务端增删改查Api接口'
date: 2022-06-05 20:44:15
tags:
- 'express'
- 'node.js框架'
categories:
- 'node.js'
---

::: tip 
###  什么是Express   ？  
Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能
###  什么是Sequelize  ？  
点击进入:[Sequelize官网](https://demopark.github.io/sequelize-docs-Zh-CN/)
Sequelize 是一个基于 promise 的 Node.js **ORM** 工具, 目前支持 Postgres, MySQL, MariaDB, SQLite 以及 Microsoft SQL Server, Amazon Redshift 和 Snowflake’s Data
:::
```javascript
var express = require('express');
var router = express.Router();
var models = require('../models') // 引用模型
var Op =models.Sequelize.Op; // 实现模糊查询需要引入OP
// 全部数据列表的接口
router.get('/', function(req, res, next) {
   // model.Articles拿到Articles表，findAll查出所有数据
   // 'id','DESC'倒叙,  ASC正序
   models.Article.findAll({order:[['id','DESC']]}).then(data =>{
    res.json({Article:data})
  })
});
```
```javascript
// 新增接口的实现
router.post('/', function(req, res, next) {
  // model.Articles拿到Articles表，findAll查出所有数据
  // 'id','DESC'倒叙,  ASC正序
res.json({'内容': req.body})
  models.Article.create(req.body).then(data =>{
   res.json({Article:data})
 })
});
```

```javascript
// 查看接口的实现
//findByPk()方法可以查出Article表id为req.params.id的文章
router.get('/:id', async function(req, res, next) {
const article = await models.Article.findByPk(req.params.id)
res.json({Article:article})
});
```

```javascript
// 修改接口的实现
//findByPk()方法可以查出Article表id为req.params.id的文章
router.put('/:id', async function(req, res, next) {
  // 拿到表article中前端传过来的id,拿到当前文章
  const article = await models.Article.findByPk(req.params.id)
  // update()修改数据
  article.update(req.body)
  //返回被修改后的文章
  res.json({Article:article})
  });
```
```javascript
// 删除接口的实现
router.delete('/:id', async function(req, res, next) {
  // 拿到表article中前端传过来的id,拿到当前文章
  const article = await models.Article.findByPk(req.params.id)
  // destroy()删除数据
  article.destroy()
  //返回被修改后的文章
  res.json({msg:'删除成功！'})
  });
```


```javascript
// 模糊查询接口的实现
router.get('/', async function(req, res, next) {
  // 保存查询的空对象
  var where ={}
  // 模糊查询标题 接收标题
  var title =req.query.title
 // 如果传标题过来
  if(title){
   where.title = {
    // like :sql语法,%表示前后可以更其他文字
   [Op.like]:'%'+title+'%'

   }}
  var article = await models.Article.findAll({
    order:[['id','DESC']],
    where:where
  })
  res.json({Article:article})
});
```

```javascript
// 文章列表 模糊查询  分页功能接口的统一实现
router.get('/', async function(req, res, next) {
  // 当前页
  var currentPage = parseInt(req.query.currentPage) || 1
  // 每页显示多少条
  var pageSize = parseInt(req.query.pageSize) || 2
  // 保存查询的空对象
  var where ={}
  // 模糊查询标题 接收标题
  var title =req.query.title
 // 如果传标题过来
  if(title){
   where.title = {
    // like :sql语法,%表示前后可以更其他文字
   [Op.like]:'%'+title+'%'

   }}
   // findAndCountAll返回总的记录数
  var result = await models.Article.findAndCountAll({
    order:[['id','DESC']],
    where:where,
    offset:(currentPage-1)*pageSize,
    limit:pageSize
  })

  res.json({
    articles:result.rows,
    pagination:{
      currentPage:currentPage,
      pageSize:pageSize,
      total:result.count
    }
  })
})

