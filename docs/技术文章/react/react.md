---
title: 'react.js旧的生命周期和新的生命周期的对比'
date: 2021-10-01 20:44:25
tags:
- 'react'
- 'react'
categories:
- 'react'
---


>**旧的生命周期**
  
				一. 初始化阶段: 由ReactDOM.render()触发---初次渲染
									1.	constructor()
									2.	componentWillMount()
                                    3.	render()
									4.	componentDidMount() =====> 常用   一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、.订阅消息
                                                    
				二.. 更新阶段: 由组件内部this.setSate()或父组件render触发
									1.	shouldComponentUpdate()
									2.	componentWillUpdate()
									3.	render() =====> 必须使用的一个
									4.	componentDidUpdate()
                三. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
									1.	componentWillUnmount()  =====> 常用一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
		

```javascript

    <script type="text/babel">
        class Life extends React.Component {

           //初次加载页面时的生命周期
            //(1)构造器
            constructor(props) {
                super(props)
 
                console.log("构造器constructor",)
                   //初始化状态
                  this.state={sum:0}
            }

            //(2)组件将要挂载的钩子
            componentWillMount(){
				console.log("组件将要挂载的钩子")
			}

            //(4)组件挂载完毕的钩子
            componentDidMount(){
             console.log('组件挂载完毕的钩子')
            }

            //(5)组件将要卸载的钩子
            componentWillUnmount(){
                console.log('组件将要卸载的钩子')
                            }


           //更新状态时的生命周期（具体看图）
           //(1)控制组件更新的"阀门"
           shouldComponentUpdate(){
            console.log('状态更新');
			return true //默认返回true,同意更新，false,不让更新

           }

           //（3）组件将要更新的钩子
           componentWillUpdate(){
               console.log("组件将要更新")

           }

           //(4)组件更新完毕的钩子
           componentDidUpdate(){
				console.log('组件更新完毕');
            }
            

        //组件强制更新
        force=()=>{
            this.forceUpdate()
        }


            //自定义赋值函数
            getSum=()=>{
            let {sum} =this.state
            sum =sum+1
            this.setState({sum})
            }

            getXz=()=>{
           //(2)卸载组件
           ReactDOM.unmountComponentAtNode(document.getElementById('react'))
                        
            }

             render() {
                console.log("组件挂载render")
                const {sum}=this.state
                return(
                    <div>
                      <h2>求和案列:{sum}</h2>
                     <button onClick={this.getSum}>求个和</button>
                     <button onClick={this.getXz}>卸载组件</button>
                     <button onClick={this.force}>不更改任何状态中的数据，强制更新一下</button>
                    </div>
                )
             }
            }  
            ReactDOM.render(<Life/>, document.getElementById("react"));
    </script>

</body>

</html>
```
>**新的生命周期**

        新生命周期中废弃了3个旧的，componentWillMount(组件将要挂载)，componentWillReceiveProps(组件将要接收新的props的钩子),组件将要更新的钩子(组件将要更新)
        引用了两个新的生命周期:getDerivedStateFromProps，getSnapshotBeforeUpdat
        一. 初始化阶段: 由ReactDOM.render()触发---初次渲染
                            1.	constructor()
                            2.	getDerivedStateFromProps
                            3.	render()
                            4.	componentDidMount() =====> 常用    一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
                                            
        二. 更新阶段: 由组件内部this.setSate()或父组件render触发
                            1.	getDerivedStateFromProps()
                            2.  shouldComponentUpdate()
                            3.	render() =====> 必须使用的一个
                            4.	getSnapshotBeforeUpdate
                            5.  componentDidUpdate()



        三. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
                            1.	componentWillUnmount()  =====> 常用   一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
		
```javascript
<script type="text/babel">

        class Life extends React.Component {

           //初次加载页面时的生命周期
            //(1)构造器
            constructor(props) {
                super(props)
 
                console.log("构造器constructor",)
                   //初始化状态
                  this.state={sum:0}
            }

            //(2)组件将要挂载的钩子
            componentWillMount(){
				console.log("组件将要挂载的钩子")
			}

            //(4)组件挂载完毕的钩子
            componentDidMount(){
             console.log('组件挂载完毕的钩子')
            }

            //(5)组件将要卸载的钩子
            componentWillUnmount(){
                console.log('组件将要卸载的钩子')
                            }
         
           //若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps
			static getDerivedStateFromProps(props,state){
				console.log('getDerivedStateFromProps',props,state);
				return null
            }
            
            //在更新之前获取快照
			getSnapshotBeforeUpdate(){
				console.log('getSnapshotBeforeUpdate');
				return 'atguigu'
			}

           //（3）组件将要更新的钩子
           componentWillUpdate(){
               console.log("组件将要更新")

           }

           //(4)组件更新完毕的钩子
           componentDidUpdate(){
				console.log('组件更新完毕');
            }
            

        //组件强制更新
        force=()=>{
            this.forceUpdate()
        }
            //自定义赋值函数
            getSum=()=>{
            let {sum} =this.state
            sum =sum+1
            this.setState({sum})
            }
            getXz=()=>{
           //(2)卸载组件
           ReactDOM.unmountComponentAtNode(document.getElementById('react'))
                        
            }

             render() {
                console.log("组件挂载render")
                const {sum}=this.state
                return(
                    <div>
                      <h2>求和案列:{sum}</h2>
                     <button onClick={this.getSum}>求个和</button>
                     <button onClick={this.getXz}>卸载组件</button>
                     <button onClick={this.force}>不更改任何状态中的数据，强制更新一下</button>
                    </div>
                )
             }
            }  
            ReactDOM.render(<Life/>, document.getElementById("react"));
    </script>

```
