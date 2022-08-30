---
title: 'vue实现前端权限控制'
date: 2021-05-01 12:44:15
tags:
- 'vue'
- 'vue.js'
categories:
- 'vue'
---

## 前端权限的意义
**1.前端权限就是控制前端的视图层的展示和前端所发送的请求。**
**2. 前端权限的控制，主要由这几方面的好处**
（1）降低非法早操作的可能性
（2）提高用户体验
（3）尽可能排除不必要的请求，减轻服务器的压力
##  前端权限的控制思路
> ****一.菜单的控制****
>        在登录请求中，会得到权限数据，这个需要后台返回数据的支持，前端根据权限的数据，展示对应的菜单，点击菜单，才能查看相关的界面
> **二.界面的控制**
>  如果用户没有登录，手动在地址栏敲入管路界面的地址，则需要转到登录界面
>  如果用户已经登录，可以手动敲入非权限被的地址，则需要跳转到界面
> **三.按钮的控制**
> 在某个菜单的界面中，还的根据权限数据，展示出可以进行操作的按钮，如果删除，修改，新增
> **四.请求和响应的控制**
> 如果用户通过非常规的操作，比如通过浏览器调试工具将一些禁用的按钮变成启用状态，此时发的请求，也应该被前前端所拦截
## Vue项目中前端权限的实现
> **一.菜单权限的实现**
>
> (一).把登录接口返回后的权限数据存入store中，共享菜单的数据
> **1.login.vue页面**
```typescript
  login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败！')
        console.log(res)
        // res.right为后台返回的的菜单数据
        this.$store.commit('setRightList', res.rights)
        this.$message.success('登录成功')
        this.$router.push('/home')
      })
    }
```
**2.Store.js模块**
```typescript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
 //把后台返回的菜单数据存入Store
  state: {
    rightList: []
  },
  mutations: {
    setRightList(state, data) {
      state.rightList = data;
    }
  },
  actions: {
  },
  getters: {
  }
})
```
**3.在home.vue页面中使用store.js中保存的菜单数据rightList**

```typescript
import {mapState} from 'vuex';
export default {
  data() {
    return {
      // 左侧菜单数据(把menulist绑定到<el-submenu  v-for="item in menulist"  :key="item.id">进行遍历展示)
      menulist: [],
    }
  },
  created() {
    this.menulist = this.rightList;
  },
  computed: {
    ...mapState(['rightList'])
  },
}
```
**解决刷新页面菜单消失的问题**
 *将rightList保存到sessionStorage中使数据持久化
         **Store.js模块**
```typescript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 初始化rightList，从而解决刷新页面菜单消失的问题
    rightList: JSON.parse(sessionStorage.getItem('rightList') || '[]'),
  },
  mutations: {
    setRightList(state, data) {
      state.rightList = data;
       // 把rightList保存到本地sessionStorage
      sessionStorage.setItem('rightList', JSON.stringify(data));
    }
  },
  actions: {
  },
  getters: {
  }
})
```
> **二.界面权限的实现**
> （1）.判断只有登录成功后才能访问登录以外的其他页面
```typescript

  // login.vue页面
  methods: {
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return this.$message.error('登录失败！')
        // console.log(res)
        // 登录成功把token存到本地sessionStorage
        sessionStorage.setItem('token', res.data.token)
        this.$message.success('登录成功')
        this.$router.push('/home')
      })
    }
  }
```
```typescript
//router.js模块
//路由导航守卫中配置如下:
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    const token = sessionStorage.getItem('token');
    if (!token) {
      next('/login');
    } else {
      next();
    }
  }
});
```
> **（2）请求和响应的权限的控制**.
```javascript
import axios from 'axios'
import Vue from 'vue';
import router from '@/router.js';
// 配置请求的跟路径, 目前用mock模拟数据, 所以暂时把这一项注释起来
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
const actionMapping = {
    'get': 'view',
    'post': 'add',
    'put':'edit',
    'delete': 'delete'
};
// 请求拦截器
axios.interceptors.request.use((req) => {
    if (req.url !== 'login') {
    //把token存放到请求头中
        req.headers.Authorization = sessionStorage.getItem('token');
        const action = actionMapping[req.method];
        const currentRight = router.currentRoute.meta;
        // 判断非法操作警用按钮
        if (currentRight && currentRight.indexOf(action) === -1) {
            alert('没有权限');
            return Promise.reject(new Error('没有权限'));
        }
    }
    return req;
});
 // 响应拦截器
axios.interceptors.response.use((res) => {
    if (res.data.meta.status === 401) {
    //token过去的处理
        router.push('/login');
        sessionStorage.clear();
        window.location.reload();
    }
    return res;
});
Vue.prototype.$http = axios;
```

> **三.动态路由的实现**
```typescript
// 路由规则的配置
import Vue from 'vue'
import Router from 'vue-router'
// 引入store 获取数据rightList
import store from '@/store';
Vue.use(Router)
const router = new Router({
  routes: [
    { 
      path: '/', 
      redirect: '/home' 
    },
    { 
      path: '/login', 
      component: Login 
    },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
      ]
    },
    // 匹配不到走着比如(404)
    {
      path: '*',
      component: NotFound
    }
  ]
});
// 路由规则的配置
const userRule = { path: '/users', component: Users };
const roleRule = { path: '/roles', component: Roles };
const goodRule = { path: '/goods', component: GoodsList };
const categoryRule = { path: '/categories', component: GoodsCate };
//路由规则和字符串的映射
//字符串是后台返回的菜单数据中的path
const ruleMapping = {
  'users': userRule,
  'roles': roleRule,
  'goods': goodRule,
  'categories': categoryRule
};

export function initDynamicRoutes() {
// 根据二级权限，对路由规则进行
  const currentRoutes = router.options.routes;
  const rightList = store.state.rightList;
   // 从store拿到rightList菜单数据进行遍历
    rightList.forEach(item => {
  // rightList菜单的二级路由数据进行遍历
    item.children.forEach(item => {
      const temp = ruleMapping[item.path];
      // 二级路由的添加
      currentRoutes[2].children.push(temp);
    })
  });
  router.addRoutes(currentRoutes);
};
```
> ***解决刷新页面动态路由消失的问题**
```typescript
//在app.vue组件中初始化动态路由
import { initDynamicRoutes } from '@/router.js';
export default {
  name: 'app',
  created() {
    initDynamicRoutes()
  }
}
```
> **四.页面新增，删除，修改按钮的权限控制**.

```typescript
//自定义指令@/utils/permission.js模块代码如下
import Vue from 'vue';
import router from '@/router.js';
Vue.directive('permission', {
    inserted(el, binding) {
        const action = binding.value.action;
        const effect = binding.value.effect;  
        if (router.currentRoute.meta.indexOf(action) == -1) {
            if (effect === 'disabled') {
                el.disabled = true;
                el.classList.add('is-disabled');
            } else {
                el.parentNode.removeChild(el);
            }
        }    
    }
});
```

```html
      <!--在组件中使用这个指令-->
       <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button 
              type="primary" 
              icon="el-icon-edit" 
              v-permission = "{action:'edit', effect: 'disabled'}"
              size="mini">
            </el-button>
            <!-- 删除按钮 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              v-permission = "{action:'delete', effect: 'disabled'}"
              @click="removeById(scope.row.id)">
            </el-button>
          </template>
        </el-table-column>
```