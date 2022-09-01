---
title: 'Vue中使用Cesium.js的库'
date: 2022-06-12 22:30:32
tags:
- 'Cesium.js'
- 'Vue'
categories:
- 'three.js'
---

::: tip
Vue中使用Cesium.js的库,Vue中使用Cesium.js的库Vue中使用Cesium.js的库Vue中使用Cesium.js的库Vue中使用Cesium.js的库Vue中使用Cesium.js的库
:::



点击进入 [**Vue Cesium官网**](https://zouyaoji.top/vue-cesium/#/zh-CN)

![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0224dd7c0b0049758eecc2afbf2b0f75~tplv-k3u1fbpfcp-zoom-1.image)
![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b42d57ce3f8d4437bd8e9fff384eef11~tplv-k3u1fbpfcp-zoom-1.image)

```javascript
//vc-navigation
<template>
  <el-row ref="viewerContainer" class="demo-viewer">
  <vc-viewer sceneModePicker>
    <vc-navigation ref="navigation" :offset="[35, 35]"></vc-navigation>
    <!-- 自定义风格 -->
    <vc-navigation
      :position="position"
      :offset="offset"
      :compass-opts="compassOpts"
      :zoom-opts="zoomOpts"
      :location-opts="locationOpts"
      :other-opts="otherOpts"
      @compass-evt="onNavigationEvt"
      @zoom-evt="onNavigationEvt"
      @print-evt="onNavigationEvt"
      @location-evt="onNavigationEvt"
      @status-bar-evt="onNavigationEvt"
      @distance-legend-evt="onNavigationEvt"
    >
    </vc-navigation>
    <vc-layer-imagery :sort-order="20">
      <vc-imagery-provider-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
    <vc-layer-imagery :sort-order="10">
      <vc-imagery-provider-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0" ref="provider"></vc-imagery-provider-tianditu>
    </vc-layer-imagery>
  </vc-viewer>
  <el-row class="demo-toolbar">
    <el-button type="danger" round @click="unload">销毁</el-button>
    <el-button type="danger" round @click="load">加载</el-button>
    <el-button type="danger" round @click="reload">重载</el-button>
  </el-row>
</el-row>
</template>

<script>
  export default {
    data() {
      return {
        position: 'top-left',
        offset: [10, 80],
        compassOpts: {
          enableCompassOuterRing: true,
          outerOptions: {
            icon: 'svguse:#vc-icons-compass-outer', // svg 加载方式
            size: '120px'
          },
          innerOptions: {
            icon: 'fa fa-compass',
            size: '24px',
            color: '#3f4854',
            background: '#fff',
            tooltip: {
              tip: 'asd'
            }
          },
          markerOptions: {
            size: '120px',
            color: 'yellow'
          }
        },
        zoomOpts: {
          background: '#1976D2',
          direction: 'horizontal'
        },
        locationOpts: {
          color: 'red',
          // 使用高德api定位
          amap: {
            key: '42d22e6ed83f077bc28b7864718726de',
            version: '2.0',
            options: {
              timeout: 5000,
              noGeoLocation: 3,
              needAddress: true,
              extensions: 'all'
            },
            transformToWGS84: true
          }
        },
        otherOpts: false
        // otherOpts: {
        //   position: 'bottom-right',
        //   offset: [2, 3],
        //   statusBarOpts:  // 与 vc-status-bar 保持一致
        //   distancelegendOpts: // 与 vc-distance-legend 保持一致
        // }
      }
    },
    mounted() {
      // 仅调试使用 打开浏览器控制台 用 vm 获取data中的属性修改。
      // 如 vm.offset = [0, 0]  或 vm.offset[0] = 100
      // 甚至加一个初始化未给的属性都可以
      // vm.zoomOpts.zoomOutOptions = {size: '40px'}
      window.vm = this
    },
    methods: {
      load() {
        this.$refs.navigation.load()
      },
      reload() {
        this.$refs.navigation.reload()
      },
      unload() {
        this.$refs.navigation.unload()
      },
      onNavigationEvt(e) {
        console.log(e)
      }
    }
  }
</script>
```
