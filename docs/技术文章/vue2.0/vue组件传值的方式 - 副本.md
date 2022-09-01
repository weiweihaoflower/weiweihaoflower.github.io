---
title: 'js宏任务和微任务简单理解'
date: 2021-03-01 12:44:15
tags:
- 'JavaScript'
- 'JavaScript'
categories:
- 'JavaScript'
---

# 一.背景
>js 是一种单线程语言，只有一条通道，那么在任务多的情况下，就会出现堵塞，这种情况下就产生了 多线程，那么就产生了同步任务和异步任务。

---
# 二.宏任务和微任务
微任务和宏任务都是异步任务，它们都属于一个队列
>宏任务：script、setTimeout、setInterval、postMessage、MessageChannel、及Node.js 环境中的setImmediate.

>微任务：Promise.then、Object.observe、MutationObserver、及Node.js 环境中的process.nextTick.

执行顺序
>先执行同步再执行异步，异步遇到微任务，先执行微任务，直到所有的微任务执行完,在执行宏任务.
```javascript
<script>
    setTimeout(function(){
        console.log("邓紫棋");
    });
    new Promise(function(resolve){		    
        console.log('周杰伦');
        resolve();
    }).then(function(){		    
        console.log("林俊杰");
    }).then(function(){
        console.log("张无忌")
    }); 		
    console.log("赵四");
     // 执行结果:周杰伦 赵四 林俊杰 张无忌 邓紫棋
</script>
```
>总结：setTimeout为异步宏任务，先放入宏任务队列中，new Promise在实例化时为同步任务所以先输出'周杰伦'，Promise.then为异步微任务所以先放入微任务队列中，console.log("赵四")为同步任务，所以输出"赵四"，然后依次执行Promise.then微任务输出"林俊杰"，"张无忌"，最后执行异步宏任务setTimeout输出"邓紫棋"。所以执行结果为:周杰伦 赵四 林俊杰 张无忌 邓紫棋

