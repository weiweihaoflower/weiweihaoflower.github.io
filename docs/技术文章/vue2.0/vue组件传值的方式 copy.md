---
title: 'nuxt.js生命周期'
date: 2020-03-01 12:44:15
tags:
- 'nuxt'
- 'nuxt.js'
categories:
- 'nuxt'
---

@[TOC](nuxt.js生命周期)
---

# 一.服务端生命周期
（一）nuxtServerInit:全局获取内容 ,服务端生命周期,和访问那个页面没关系

```javascript
 // 1.nuxtServerInit全局获取内容 ,服务端生命周期,和访问那个页面没关系
export const actions = {
    // 参数1:vuex上下文
    // 参数2:nuxt 上下文
    nuxtServerInit(store, context){
        store.commit('setToken','邓紫棋123')
     // console.log("@@",store,"nuxtServerInit",context)
     console.log("nuxtServerInit")
    }
}
export const mutations = {
    setToken(state,token){
      state.token =token
    }
}
export const state = {
    //打印token为 wei123
    token:''
} 
```
（二）middleware :可以做导航守卫

```javascript
//使用方法
//1.全局配置: nuxt.config.js 进行配置
 router:{
 middleware:"名称"
 }
// 新建 middleware目录==>文件.js

//2.局部页面配置
 export default {
   middleware: '名称' 
   }
// 文件.js
export default function ({store,route,redirect,params,query,req,res}) {
console.log("middleware",store.state.token)
let token = store.state.token
//如果token不存在定向到list页面
if(!token){
    redirect('/list')
}
}
```
（三）validate :校验路由传参参数的正确性

```javascript
validate({params,query}){
  console.log('validate')
  return true
},
```

（四）asyncData:方法会在组件(仅限于页面组件compoments文件夹里面的组件是不能用的),每次加载之前被调用（vue里面的creatd）

```javascript
asyncData({store,params}){
   console.log('asyncData')
}
```
（五）fetch({app,store,params}){}:在渲染页面前填充应用的状态树（store）数据,与axyncData方法类似，不同的是它不会设置组件的数据
```javascript
fetch({app,store,params}){
console.log('fetch')
},
```

# 二、服务端和客户端共用的生命周期

```javascript
beforeCreate(){
console.log('beforeCreate')
}
created(){
console.log('created')
}
```
# 三、客户端生命周期（vue中的生命周期）
```javascript

beforeCreate(){
console.log('beforeCreate')
},
created(){
console.log('created')
},
beforeMount(){
console.log('beforeMount')
},
mounted(){
console.log('mounted')
},
beforeUpdate(){
console.log('beforeUpdate')
},
Updated(){
console.log('Updated')
},
beforeDestroy(){
console.log('beforeDestroy')
},
destroyed(){
 console.log('destroyed') 

}
```
# 总结
控制台打印的结果:
```javascript
 nuxtServerInit
 middleware wei123
 validate
 asyncData
 fetch
 beforeCreate
 created
 beforeCreate
 created
 beforeMount
 mounted
```
