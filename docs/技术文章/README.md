---
title: three.js官网的第一个案列代码解读
date: 2022-08-08
sidebarDepth: 2
categories:
 - three.js基础
tags:
- three.js
author: 文海鸥
publish: true
---

<!-- more -->



::: warning 
three.js官网的第一个案列代码解读
:::
![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ca1d92ba43d47e980701dbf9ef14f5c~tplv-k3u1fbpfcp-zoom-1.image)

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>three.js webgl - animation - keyframes</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
	</head>
	<body>
		<div id="container"></div>
		<script type="importmap">
			{
				"imports": {
					"three": "../build/three.module.js"
				}
			}
		</script>
		<script type="module">
			import * as THREE from 'three';
			import Stats from './jsm/libs/stats.module.js';
			import { OrbitControls } from './jsm/controls/OrbitControls.js';
			import { RoomEnvironment } from './jsm/environments/RoomEnvironment.js';
			import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
			import { DRACOLoader } from './jsm/loaders/DRACOLoader.js';
			let mixer;
                        // 时钟
			const clock = new THREE.Clock();
			const container = document.getElementById( 'container' );
                       // 这是一个FPS的指示器
			const stats = new Stats();
			container.appendChild( stats.dom );
                       // 渲染器创建
			const renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setPixelRatio( window.devicePixelRatio );
			 // 展示的大小   
			renderer.setSize( window.innerWidth, window.innerHeight );
			renderer.outputEncoding = THREE.sRGBEncoding;
			// 将canvas放到页面中去    
			container.appendChild( renderer.domElement );
			const pmremGenerator = new THREE.PMREMGenerator( renderer );
                        // 场景建立
			const scene = new THREE.Scene();
			    //点光源
				var point = new THREE.PointLight(0xffffff);
					point.position.set(400, 200, 300); //点光源位置
					scene.add(point); //点光源添加到场景中
					//环境光
					var ambient = new THREE.AmbientLight(0x0000);
					scene.add(ambient);
			scene.background = new THREE.Color( 0xbfe3dd );
			scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.04 ).texture;
            // 相机创建
			const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
			camera.position.set( 5, 2, 8 );
            // 这是一个控制器，可以控制用鼠标相机的位置 
			const controls = new OrbitControls( camera, renderer.domElement );
			controls.target.set( 0, 0.5, 0 );
			controls.update(); 
			controls.enablePan = false;
			controls.enableDamping = true;
			const dracoLoader = new DRACOLoader();
                         // 设置public下的解码路径，注意最后面的
			dracoLoader.setDecoderPath( 'js/libs/draco/gltf/' );
			const loader = new GLTFLoader();
			loader.setDRACOLoader( dracoLoader );
			// 加载模型时调用这个匿名函数
			loader.load( 'models/gltf/Horse.glb', function ( gltf ) {
                console.log("@@@",gltf)
				const model = gltf.scene; // 模型的场景信息
				model.position.set( 1, 1, 0 );
				model.scale.set( 0.01, 0.01, 0.01 );
				scene.add( model );
                // 动画
				//AnimationMixer是场景中特定对象的动画播放器。当场景中的多个对象独立动画时，可以为每个对象使用一个AnimationMixer
				// model作为混合器的参数，可以播放model中所有子对象的帧动画
				mixer = new THREE.AnimationMixer( model );
				// 再用AnimationMixer对象的clipAction方法生成可以控制执行动画的实例
				mixer.clipAction( gltf.animations[ 0 ] ).play();
				animate();
			}, undefined, function ( e ) {
				console.error( e );
			} );
		   // onresize 事件会在窗口或框架被调整大小时发生
			// window.onresize = function () {
			// 	camera.aspect = window.innerWidth / window.innerHeight;
			// 	camera.updateProjectionMatrix();
			// 	renderer.setSize( window.innerWidth, window.innerHeight );
			// };
			function animate() {
             // window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
				requestAnimationFrame( animate );
                    //clock.getDelta()方法获得两帧的时间间隔
				const delta = clock.getDelta();
                     // 更新混合器相关的时间
			 mixer.update( delta );
				 controls.update();
				 stats.update();
				renderer.render( scene, camera );
			}

		</script>
	</body>
</html>

```
