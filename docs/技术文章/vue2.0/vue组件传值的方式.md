---
title: 'vue组件传值的几种方式'
date: 2020-03-01 12:44:15
tags:
- 'vue'
- 'vue.js'
categories:
- 'vue'
---

## 1.父组件给子组件传值
>    父组件传进来的值 ， 子组件声明接收用 **props:['name','age']**, 	接收的同时可以对数据进行类型限制，比如
>    	props:{
>    		name:String,
>    		age:Number
>    	}
```javascript
// App.vue
<template>
	<div>
		<!--父组件给子组件传值-->
		<!--数值类型需要绑定: :age 字符串转成计算表达式-->
		<dan name="邓紫棋" :age="18"></dan>
		<dan name="周杰伦" :age="12"></dan>
	</div>
</template>

<script>
	//引入组件
	import dan from './components/dan'
	export default {
		name:'App',
		data(){
			return{
			}
		},
		//注册子组件
		components:{
			dan
		}
	}
</script>
```

```javascript
// dan.vue
<template>
	<div>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生年龄：{{age}}</h2>
	</div>
</template>

<script>
	 export default {
		data(){
			console.log(this)
			return {
					
			}
		},
props:{
	name:{
	  type:String, //name的类型是字符串
	  required:true, //名字必须的传

	},
	age:{
		 type:Number, 
		 default:100 //不传时，默认值为100
	}

}
	}
</script>

```
## 2.子组件给父组件传值
>方法一	：子组件传递给父组件,先定义一个回调函数，子组件的数据以回调函数参数的形式传给父组件

```javascript
// App.vue
<template>
  <div class="app">
    <i class="demo" v-for="item in person" :key="item.id">{{item.name}}{{item.age}}--</i>

    <!--方法一:通过父组件给子组件传递函数类型的props函数实现:子给父传递数据-->
    <dan :jieShuDan="jieShuDan"></dan>

    <!--方法二:通过父组件给子组件绑定一个自定义事件实现：子给父传递数据，这个自定义事件是绑定在了组件dan1的实例vc身上-->
    <!--jieShuDan1函数是自定义事件的回调在用-->
     <dan1 v-on:wangyihuan="jieShuDan1"></dan1> 

    <!--方法三 :通过ref给组件打标识符来实现子给父传值 -->
    <dan2 ref="wei"></dan2>

  </div>
</template>
<script>
//引入组件
import dan from "./components/dan";
import dan1 from "./components/dan1";
import dan2 from "./components/dan2";
export default {
  name: "App",
  data() {
    return {
      person: [
        {
          name: "周杰伦",
          age: "18",
          id: "001"
        }
      ]
    };
  },
  //注册子组件
  components: {
    dan,
    dan1,
    dan2
  },

  methods: {
    //方法一：子组件dan传递给父组件app数据,先定义一个回调函数，dan组件的数据以参数的形式传给app组件
    jieShuDan(n) {
      console.log(n);
      this.person.push(n);
    },

    //方法二:自定义事件来子给父传值
    jieShuDan1(a) {
      console.log(a);
      this.person.push(a);
    }
  },

  //生命周期mounted（页面挂载成功之后执行（将内存中的虚拟DOM转为真实DOM插入页面）
  mounted() {
     //方法三
    //过2秒把数据传过去
    setTimeout(() => {
      //ref应用在组件标签上获取的是组件实例对象（vc）,拿到了组件dan2的vc
      this.person.push(this.$refs.wei.dan2shuju);
    },2000);


    
  }
};
</script>
<style lang="less">
.app {
  background-color: #c0c0c0;
  padding: 15px;
}
</style>

```
```javascript
// dan.vue
<template>
	<div class="dan_wei">
		<p>{{dan.name}}{{dan.age}}</p>
		<button @click="sendDan">子组件数据传递给父组件（父组件先给子组件一个函数来实现）</button>		
	</div>
</template>

<script>
	 export default {
		data(){
			return {
				dan:{name:"dan", age:"18"}
			}
		},
		props:["jieShuDan"],

		methods: {
			sendDan(){
				this.jieShuDan(this.dan)
				this.dan={}
			}
		}
	}
</script>
<style scoped lang="less">
    .dan_wei {
		 background-color: #408080;
		 margin: 15px;
		  padding:15px
	 }
</style>

```
>方法二: 通过父组件给子组件绑定一个自定义事件实现：子组件通过$emit触发这个自定义事件来传递子组件的数据
```javascript
// dan1.vue
<template>
	<div class="dan_wang">
		<h2>{{dan1shuju.name}}{{dan1shuju.age}}</h2>
		<button @click="sendDan1">子组件数据传递给父组件（通过子定义事件来实现）</button>		
	</div>
</template>

<script>
	 export default {
		data(){
			return {
					dan1shuju:{name:"dan1", age:"21"}
							
			}
		},
		methods: {
			sendDan1(){
			//触发dan1组件实例身上的wangyihuan事件,自定义wangyihuan事件和@click一样，所以$emit就像个触发事件的按钮一样，
			 this.$emit("wangyihuan",this.dan1shuju)
			 this.dan1shuju={}
			}
		},
		
	}
</script>

```

>方法三  :通过ref 给组件打标识符来实现子给父传值 ,通过this.$refs.子组件，来获取子组件的数据

```javascript
// dan2.vue
<template>
	<div class="dan_wang">
		<h2>{{dan2shuju.name}}{{dan2shuju.age}}</h2>		
	</div>
</template>

<script>
	 export default {
		data(){
			return {
					dan2shuju:{name:"dan2", age:"22"}
							
			}
		}
	}
</script>
```

## 3.兄弟组件的传值
>1.全局事件总线：用于兄弟组件之间的传值，或各任意组件之间的传值

>使用方法 :在口入文件main.js中,设置这段的一种方法的代码

```javascript
        //创建Vue实例对象vm 
        new Vue({
        render: h => h(App),

        //设置x为vm
        beforeCreate(){
        //  Vue.prototype.x =this
        Vue.prototype.$bus =this
        }
        }).$mount('#app') //根容器
```
>使用方法 :
> this.$bus.$emit("事件名", 传的数据);
>this.$bus.$on("事件名", 回调函数）

```javascript
// dan1.vue
<template>
// dan1.vue
  <div class="dan_wang">
    <h2 v-for="item in dan1shuju" :key="item.index">{{item}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dan1shuju: [ 	  
         {name:"我是dan1组件"}
	  ]
    };
  },
  mounted() {
    this.$bus.$on("wangyihuan", data => {
	  console.log("dan组件传回来的数据姓名:"+data);
      this.dan1shuju.push(data)

    });
  },
 //事件用完了要销毁一下
 beforeDestroy(){
   this.$bus.$off("wangyihuan")
 }

};
</script>
```

```javascript
// dan.vue
<template>
  <div class="dan_wei">
   <h2 v-for="item in dan" :key="item.index">{{item.name}}</h2>
    <button @click="dason()">把dan组件中的数据传给dan1中</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
		dan: [
         {name:"我是dan组件"}
	     ]
	
    };
  },
  methods: {
    dason() {
		this.$bus.$emit("wangyihuan",this.dan[0].name)
		this.dan=[]
    }
  }
};
</script>

```
>2.消息订阅与发布（pubsub）:任意组件之间，兄弟组件之间的传值

>   使用方法:
>   1. 安装pubsub:npm i pubsub-js
>   2. 引入: import pubsub from 'pubsub-js'
>    3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身
>         methods(){
>           demo(data){......}
>         }
>         mounted() {
>           this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
>         }
>   4. 提供数据:pubsub.publish('xxx',数据)
>   5. 最好在beforeDestroy钩子中，用pubsub.unsubscribe(pid)取消订阅。

```javascript
// dan1.vue
<template>
  <div class="dan_wang">
    <h2 v-for="item in dan1shuju" :key="item.id">{{item}}</h2>
  </div>
</template>
<script>
//引入消息订阅与发布的库
import pubsub from "pubsub-js";
export default {
  data() {
    return {
      dan1shuju: [{ name: "我是dan1组件", id: "001" }]
    };
  },

  mounted() {
    //订阅消息
    // 语法:回调函数中必须为两个参数(a，data),a:代表返回的事件名,data为传回来的数据,还有这快必须写成箭头函数
    this.pid = pubsub.subscribe("wangyihuan", (a, data) => {
      console.log(a, data);
      this.dan1shuju.unshift(data);
    });
  },

  //销毁订阅
  beforeDestroy() {
    pubsub.unsubscribe(pid);
  }
};
</script>

```
```javascript
// dan.vue
<template>
  <div class="dan_wei">
   <h2 v-for="item in dan" :key="item.index">{{item.name}}</h2>
   <button @click="chuanD">把dan组件数据传给组件dan1</button>
  </div>
</template>

<script>
//引入消息订阅与发布的库
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
		dan: [
         {name:"我是dan组件"}
	     ]
	
    };
  },
  methods: {
    chuanD(){
      //发布消息
      pubsub.publish('wangyihuan',this.dan[0].name)
      this.dan=[]
    }
 
  }
};
</script>
```