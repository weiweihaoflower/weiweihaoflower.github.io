---
title: 'vue3.0组件传值的方式'
date: 2022-05-01 12:44:15
tags:
- 'vue3.0'
- 'vue3.0.js'
categories:
- 'vue3.0'
---

::: tip 

(一)父组件给子组件传值
:::

1.父组件给子组件传值，子组件通过defineProps接收数据

```javascript
// App.vue
<template>
 <div>
  <HelloWorld :data="data" name="我是邓紫棋"></HelloWorld>
 </div>
</template>
<script setup lang='ts'>
import { ref,reactive} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
// vue3父组件给子组件传值
// 父组件通过v-bind绑定一个数据，然后子组件通过defineProps接受传过来的值
const data = reactive<number[]>([1,2,3])
</script>
```

```javascript
// HelloWorld.vue
<template>
  <div>{{name}}</div>
  <div>{{data}}</div>
</template>
<script setup lang="ts">
import { ref ,onMounted} from 'vue'
 // 子组件接受值:通过defineProps 来接受 defineProps是无须引入的直接使用即可
 // 如果我们使用的TypeScript
 // 可以使用传递字面量类型的纯类型语法做为参数
 // 如 这是TS特有的
defineProps<{
   name:string,
   data:number[]
 }>()
// 如果不使用ts
// defineProps({
//     name:{
//         default:"",
//         type:string
//     },
//     data:Array
// })
</script>
```

2.Provide / Inject(依赖注入)
通常，当我们需要从父组件向子组件传递数据时，我们使用 props。想象一下这样的结构：有一些深度嵌套的组件，
而深层的子组件只需要父组件的部分内容。在这种情况下，如果仍然将 prop 沿着组件链逐级传递下去，可能会很麻烦。
provide 可以在祖先组件中指定我们想要提供给后代组件的数据或方法，而在任何后代组件中，我们都可以使用 inject 来接收 provide 提供的数据或方法

```javascript
// App.vue
<template>
 <div>
  <HelloWorld/>
 </div>
</template>
<script setup lang='ts'>
import {ref,provide} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
let falg =ref<number>(3)
provide('falg',falg) //注入
</script>
```

```javascript
//HelloWorld.vue
<template>
<div>
      <div>{{data}}</div>
  </div>
</template>
<script setup lang="ts">
import { ref,inject} from "vue";
// 子组件注入父组件传的值
const data = inject('falg')
</script>
<style scoped>
</style>
```

::: tip 

(二)子组件给父组件传值
:::

1.通过ref形式子组件给父组件传值,主要用defineExpose在子组件中把数据暴露

```javascript
// HelloWorld.vue(子组件)
<template>

</template>
<script setup lang="ts">
import { ref,reactive} from 'vue'
const data = reactive<number[]>([4, 5, 6])
defineExpose({
    data
})
</script>
```
```javascript
// App.vue(父组件)
<template>
 <div>
  <HelloWorld ref ='menus'></HelloWorld>
 </div>
</template>
<script setup lang='ts'>
import { ref,reactive,onMounted} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const menus = ref(null)

onMounted(()=>{
  console.log('我是子组件通过ref方式传过来的值',menus) 
})

</script>
<style scoped lang='scss'>
</style>
```



