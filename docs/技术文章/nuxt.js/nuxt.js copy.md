---
title: 'nuxt.js路由，路由传参，及改造vue项目中的路由'
date: 2020-03-01 12:44:15
tags:
- 'nuxt'
- 'nuxt.js'
categories:
- 'nuxt'
---

Nuxt.js 依据 pages 目录结构自动生成 vue-router 模块的路由配置，要在页面之间使用路由，我们建议使用<nuxt-link> 标签

```javascript
<template>
  <nuxt-link to="/">首页</nuxt-link>
</template>
```
# 一、基础路由
```javascript
//假设 pages 的目录结构如下：
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```

```javascript
// 那么，Nuxt.js 自动生成的路由配置如下
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/one',
      component: 'pages/user/one.vue'
    }
  ]
}
```
# 二、动态路由

```javascript
// 在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的以下划线作为前缀的 Vue 文件 或 目录
// 以下目录结构
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue
```
Nuxt.js 生成对应的路由配置表为：

```javascript
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}

```
# 三,嵌套路由

```javascript
// 假设文件结构如:
pages/
--| users/
-----| _id.vue
-----| index.vue
--| users.vue
```

```javascript
// Nuxt.js 自动生成的路由配置如下：
router: {
  routes: [
    {
      path: '/users',
      component: 'pages/users.vue',
      children: [
        {
          path: '',
          component: 'pages/users/index.vue',
          name: 'users'
        },
        {
          path: ':id',
          component: 'pages/users/_id.vue',
          name: 'users-id'
        }
      ]
    }
  ]
}
```
# 四.路由传参
```html
<template>
<div>
 <News/>
  <!--给组件list传参-->
  <nuxt-link to="/list" :to ="{name:'list',query:{id:111},params:{id:2}}">路由跳转</nuxt-link>
  <button @click="btn">编程式路由跳转</button>
    <button @click="btn2">编程式</button>
</div>  
</template>
```

```html
<!--list接收参数-->
<template>
 <div>
 {{$route.query.id}}
  {{$route.params.id}}
 </div>
</template>
```
```javascript
  methods:{
    btn(){
    alert("121")
      this.$router.push({
        path:'/list',
        query:{a:1}
      });

      //  this.$router.push({
      //   push:'/list',
      //   params:{a:147}
      // });
    },
     btn2(){
    alert("121")
      this.$router.push({
        path:'/search/list',
        query:{a:1}
      });
  
    }
  },
```
# 五.vue项目中的路由在nuxt.js直接引用
用nuxt.js重构vue项目,可以使用vue之前写的路由，下载一个插件
具体配置看这个视频:[vue项目中的路由在nuxt.js直接引用](https://www.bilibili.com/video/BV1Q44y1N7Gz?p=7&vd_source=e598a8a77d7df8e2041a6c381dec06d1)
```javascript
// 下载:@nuxtjs/router
// npm i @nuxtjs/router -S
// 下载完成后在nuxt.config.js的modules模块进行配置
 modules: [
    '@nuxtjs/router',
  ],
 //  把vue中router.js路由文件放入nuxt项目根目录,  文件名必须是router.js
```
