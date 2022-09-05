---
title: 'vue组件传值的几种方式'
date: 2020-03-01 12:44:15
tags:
- 'vue'
- 'vue.js'
categories:
- 'vue'
---

<body>
    <div id="root">
        <h1>helLO{{message}} </h1>
    </div>
</body>
```
```javascript

 /*
                        Vue是个构造函数，创建vue 必须使用new ，
                        root容器里的代码依然符合html规范，只不过写入了一些特殊的vue语法
                        root容器的代码被称为Vue模板
                        Vue实例和容器是一一对应的
                        {{}}叫做插值语法，插入值得意思
                            
                        */
    const vm = new Vue({
        el: '#root', //el用于指定当前vue实例为那个容器服务，值通常为css选择器字符串，和获取dom基本一个意思
        data: { //data中用于储存数据，数据供el所指定的容器去使用
            message: "邓紫棋 "
        }
    });
```