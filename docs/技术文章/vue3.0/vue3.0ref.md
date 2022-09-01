---
title: 'vue3中的ref，isRef，shallowRef，triggerRef，customRefs作用分别是什么?'
date: 2022-09-01 23:31:15
tags:
- 'vue3.0'
- 'vue3.0.js'
categories:
- 'vue3.0'
---


## ref:定义响应式数据
```html
<template>
<div>
 <button @click="change">点击</button>
 <div>{{messname}}</div>
</div>
</template>
```
```typescript
<script setup lang="ts">
import {ref,Ref,isRef,shallowRef,triggerRef,customRef} from 'vue'
let messname = ref<string | number>("我是周杰伦")
const change =() =>{
messname.value = '我是邓紫棋'
console.log(messname) // 我是邓紫棋
}
</script>
```
# isRef:判断是不是一个ref对象
```html
<template>
<div>
 <button @click="change">点击</button>
 <div>{{messname}}</div>
</div>
</template>
```
```typescript
<script setup lang="ts">
import {ref,Ref,isRef,shallowRef,triggerRef,customRef} from 'vue'
let messname = ref<string | number>("我是周杰伦")
let age:number =18
const change =() =>{
console.log(isRef(messname)) // true
console.log(isRef(age)) // false
}
</script>
```
# shallowRef：创建一个跟踪自身 .value 变化的 ref，控制台输出变了，但是视图页面没变不是响应式
```html
<template>
<div>
 <button @click="change">点击</button>
 <div>{{messname}}</div>
</div>
</template>
```
```typescript
<script setup lang="ts">
import {ref,Ref,isRef,shallowRef,triggerRef,customRef} from 'vue'
type Obj = {
  name: string
}
let messname: Ref<Obj> = shallowRef({
  name: "周杰伦"
})
const change =() =>{
messname.value.name ="邓紫棋"
console.log(messname.value.name) //邓紫棋 （但是视图页面还是周杰伦）
}
//这样写就可以监听到修改的messname了
// const change =() =>{
// messname.value={name:"邓紫棋"}
// }
</script>
```
# triggerRef:强制更新页面DOM
```html
<template>
<div>
 <button @click="change">点击</button>
 <div>{{messname}}</div>
</div>
</template>
```
```typescript
<script setup lang="ts">
import {ref,Ref,isRef,shallowRef,triggerRef,customRef} from 'vue'
type Obj = {
  name: string
}
let messname: Ref<Obj> = shallowRef({
  name: "周杰伦"
})
const change =() =>{
 messname.value.name ="邓紫棋"
 triggerRef(messname) 
}
</script>
```
## customRef: 是个工厂函数要求我们返回一个对象 并且实现 get 和 set
```html
<template>
<div>
 <button @click="change">点击</button>
 <div>{{messname}}</div>
</div>
</template>
```
```typescript
<script setup lang="ts">
import {ref,Ref,isRef,shallowRef,triggerRef,customRef} from 'vue'
 function myref<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal: T) {
        console.log('set');
        value = newVal
        trigger()
      }
    }
  })
}
let messname = myref('周杰伦')
const change = () => {
  messname.value = '邓紫棋'
  // triggerRef(messname)
}pt>
```