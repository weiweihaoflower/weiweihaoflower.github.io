---
title: '浅谈javascript中的深拷贝和浅拷贝'
date: 2021-08-01 22:44:15
tags:
- 'JavaScript'
- 'JavaScript'
categories:
- 'JavaScript'
---


 >   浅拷贝：拷贝基本数据类型时，不受任何影响，当拷贝引用类型时，源对象也会被修改。
 
 >    深拷贝：深拷贝就是完完全全拷贝一份新的对象，它会在内存的堆区域重新开辟空间，修改拷贝对象就不会影响到源对象

```javascript
     // 基本类型
     let a = 10;
     let b = a
     b =100
     console.log("a=",a) // a=10
     console.log('b=',b) // b =100
     // a是原始值，原始值是不能修改的，只能另外开辟内存地址来存储存的数据
```
```javascript
    // 引用类型对象(这里是实现了浅拷贝)
    let c = {name:"邓紫棋"}
    let d = c
    d.name="周杰伦"
    console.log("c.name=",c.name) //  c.name= 周杰伦
    console.log('d.name=',d.name) //  d.name= 周杰伦
```
```javascript
  //数组
  //1.concat()(这里实现了深拷贝)
   const n =['你好','周杰伦']
  //  concat方法创建并返回一个新的数组，新数组包含调用concat方法放入数组的元素
   const j = [].concat(n) 
   j.push('你好','邓紫棋')
   console.log('n=',n) // n= (2) ["你好", "周杰伦"]
   console.log('j=',j) //j= (4) ["你好", "周杰伦", "你好", "邓紫棋"]
   
  //2.slice() 方法(这里实现了深拷贝)
    const k =['你好','周杰伦']
    const i = k.slice() 
    k.push('你好','邓紫棋')
    console.log('k=',k) //k= Array(4)[0: "你好" 1: "周杰伦" 2: "你好" 3: "邓紫棋"]
    console.log('i=',i)//i= Array(2)[0: "你好" 1: "周杰伦"]
    
 //3. Array.from() 方法(这里实现了深拷贝)
    const n =['你好','周杰伦']
    const j = Array.from(n)  
    j.push('你好','邓紫棋')
    console.log('n=',n) // n= Array(2)[0: "你好" 1: "周杰伦"]
    console.log('j=',j) // j= Array(4)[0: "你好" 1: "周杰伦" 2: "你好" 3: "邓紫棋"]
  
//4. 展开运算符
   const p = [{name:'周杰伦'}]
   const o = [...p]
   o[0].name = '邓紫棋' 
   console.log('p=',p) // 邓紫棋
   console.log('o=',o) // 邓紫棋  
   // 这块要实现深拷贝可以使用JSON.stringify()和JSON.parse()方法
      const p = [{name:'周杰伦'}]
      const o = JSON.parse(JSON.stringify(p))
      o[0].name = '邓紫棋' 
      console.log('p=',p) // 周杰伦
      console.log('o=',o) // 邓紫棋  
 // map().filter(),redue()这些都可以造成浅拷贝的，不过可以用JSON来解决
```
