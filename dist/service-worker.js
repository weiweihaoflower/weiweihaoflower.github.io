/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "181bf6ee073011ea4f9c7d02c087d523"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.2fe3eb71.js",
    "revision": "235f14af27f33d405704fecb1267617a"
  },
  {
    "url": "assets/js/10.261f3ec2.js",
    "revision": "31ca423181830af932cc1ef09fdb879a"
  },
  {
    "url": "assets/js/11.7d7e6a28.js",
    "revision": "f249422415e7973153a74524ae4d3364"
  },
  {
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.ed0285f9.js",
    "revision": "2e924b3db4097ef99b2acdd103933639"
  },
  {
    "url": "assets/js/14.5ca6f7b5.js",
    "revision": "a417d07bad5df2db65a4ce0212e1feb9"
  },
  {
    "url": "assets/js/15.8f905a69.js",
    "revision": "3de207dcbab143aa03a6cae65503315c"
  },
  {
    "url": "assets/js/16.e33b99b9.js",
    "revision": "3330456a2a3bd309526b19e6a7ee4371"
  },
  {
    "url": "assets/js/17.b5084362.js",
    "revision": "59500645dc4602f1583a5085d29e7705"
  },
  {
    "url": "assets/js/18.03f795f2.js",
    "revision": "ae85954485f8037e1e318f3ad494fc18"
  },
  {
    "url": "assets/js/19.4a0d52d4.js",
    "revision": "7b654ae9fb24e811dfc2350d163a3468"
  },
  {
    "url": "assets/js/20.48fa5abd.js",
    "revision": "59b77614a61abaa7d7159beb5af0659a"
  },
  {
    "url": "assets/js/21.68688368.js",
    "revision": "f7fd449053483c09ed328332ab5ed3fa"
  },
  {
    "url": "assets/js/22.f72c4728.js",
    "revision": "70c12a2042e1dbd3945c04a1ef7d98c2"
  },
  {
    "url": "assets/js/23.ca6570f7.js",
    "revision": "a66d51430ff5ab06bf8d9d10caf3cbb8"
  },
  {
    "url": "assets/js/24.c60f0cf6.js",
    "revision": "61947528afb977a355c63d856bd24984"
  },
  {
    "url": "assets/js/25.3418839d.js",
    "revision": "b86646dd3fdad09316a668fa3803b9ff"
  },
  {
    "url": "assets/js/26.6c4ff5dc.js",
    "revision": "3bf6fb2f55873190282f7c64600c673f"
  },
  {
    "url": "assets/js/27.a27544e0.js",
    "revision": "d621517580b6219710ac209b83a6c299"
  },
  {
    "url": "assets/js/28.6093bfe5.js",
    "revision": "e9b941252e0eff8baaf86c60afdf0e93"
  },
  {
    "url": "assets/js/29.fb8de5a3.js",
    "revision": "313ac8d81bd3f9ce9675b71674316c90"
  },
  {
    "url": "assets/js/30.fc84a84e.js",
    "revision": "787d8a6fe845bcb28cf64521d9a4fcbb"
  },
  {
    "url": "assets/js/31.e06b69d0.js",
    "revision": "6fcde0af1381a114f6b8d567f2ad76a6"
  },
  {
    "url": "assets/js/32.9e30505e.js",
    "revision": "7f7b75a1802cb100cd28d46baa3844ec"
  },
  {
    "url": "assets/js/33.9829191b.js",
    "revision": "76693358a2d2bf33347d48c217566655"
  },
  {
    "url": "assets/js/34.e269eeb1.js",
    "revision": "1e5f180e9e52541c25a853acd32f9adb"
  },
  {
    "url": "assets/js/35.e0a14020.js",
    "revision": "b6b3c99ae12600645bbdc9a8d84be0b2"
  },
  {
    "url": "assets/js/36.ccc80dea.js",
    "revision": "01a833981f922e780561bc29f564a919"
  },
  {
    "url": "assets/js/37.39ada3b0.js",
    "revision": "7e1e73247309fd8388465b4b1ae6770e"
  },
  {
    "url": "assets/js/38.b5545d09.js",
    "revision": "113a29102b4be05b662c8f3c94cacefe"
  },
  {
    "url": "assets/js/39.2ed1e7c3.js",
    "revision": "fd6e1d182c4e553be9395324872553c6"
  },
  {
    "url": "assets/js/4.2e0730c5.js",
    "revision": "49dfe2b674ca1fb5e2ac48059c9703fc"
  },
  {
    "url": "assets/js/40.3c049628.js",
    "revision": "b7625db6798a8d1ea66796f76c5898a0"
  },
  {
    "url": "assets/js/41.a0d31e84.js",
    "revision": "ec5b814bf816f274846782befde8e3f4"
  },
  {
    "url": "assets/js/42.7532b6da.js",
    "revision": "80094237993f2e9b430bb9a075623190"
  },
  {
    "url": "assets/js/43.8dafe61b.js",
    "revision": "84b4d9c63113ba693f6f6b63f67b86c4"
  },
  {
    "url": "assets/js/44.66cfd1b7.js",
    "revision": "e49d8dc89e3cd4217f7ea14bdda6a125"
  },
  {
    "url": "assets/js/45.d7fe2f79.js",
    "revision": "7803a72bdde0c91ef454841859878e44"
  },
  {
    "url": "assets/js/46.dc9cd79f.js",
    "revision": "4f42cf14fa3af01dd264bd324e3abf2b"
  },
  {
    "url": "assets/js/47.ad84e31d.js",
    "revision": "5494b43574ce2a8324fe1ff3301a2fff"
  },
  {
    "url": "assets/js/48.a83e1ea1.js",
    "revision": "ab0795c53693763d79b4153d8b230b0f"
  },
  {
    "url": "assets/js/49.ab2c4aa7.js",
    "revision": "7ac4b9c7d52e134865e367b9eac745a6"
  },
  {
    "url": "assets/js/5.0c98980d.js",
    "revision": "b9d96a147090548206d9a93fa5196ece"
  },
  {
    "url": "assets/js/50.8b5cd3c2.js",
    "revision": "3a953d42588443955e7a741592df3b05"
  },
  {
    "url": "assets/js/51.0e32b24b.js",
    "revision": "cdad9c31af8935a4d5fd04862eaee2fe"
  },
  {
    "url": "assets/js/6.40fece1c.js",
    "revision": "36695367ee4859a08a01058a6c3ac770"
  },
  {
    "url": "assets/js/7.8504c2fd.js",
    "revision": "73d8c584d8c90a21c755828da770bc67"
  },
  {
    "url": "assets/js/8.05fc198f.js",
    "revision": "d36e27b50c5b87cd7bdb4c2130a4989d"
  },
  {
    "url": "assets/js/9.be95ca85.js",
    "revision": "76ff2e144d77b29951ed259e4416359f"
  },
  {
    "url": "assets/js/app.f8a2cf50.js",
    "revision": "af858dd2890784343368381a59f83c48"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.af4d3f11.js",
    "revision": "edca85aa74e4c030cffb56b25b077d94"
  },
  {
    "url": "avatar.png",
    "revision": "91655cbc24e91a101890ff59a8c109a9"
  },
  {
    "url": "categories/Adobe ae/index.html",
    "revision": "1cd7f2439669f67503844d3fa84efd61"
  },
  {
    "url": "categories/Adobe Illustrator CS6/index.html",
    "revision": "89702e30d3a7dfd7a2314be10903503d"
  },
  {
    "url": "categories/Adobe pr/index.html",
    "revision": "3e50bc52cf567fc9a08f993e53a99d49"
  },
  {
    "url": "categories/Adobe ps/index.html",
    "revision": "b0f6dc916ba365967c31a51852e44aec"
  },
  {
    "url": "categories/axure8/index.html",
    "revision": "e425b42b6191b6a8478fb2a9ec8808ef"
  },
  {
    "url": "categories/Express/index.html",
    "revision": "923b73ff1a2fe3f4937c6b1d8859379f"
  },
  {
    "url": "categories/index.html",
    "revision": "788d17611a28774fc9b44bb7723627d8"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "bcce6d3d2c302c697a3697031edda535"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "622551c37cb8eda580fd1218d0194170"
  },
  {
    "url": "categories/node.js/index.html",
    "revision": "ddd77f90cb85e49547ff38b5b393f88e"
  },
  {
    "url": "categories/nuxt/index.html",
    "revision": "2a19d24dfc8c316eb4663ed86f674b7d"
  },
  {
    "url": "categories/NuxtJS/index.html",
    "revision": "cc21874e5b45bd76e2512338066011d0"
  },
  {
    "url": "categories/react/index.html",
    "revision": "0d7ea628e0de25fbbbcfe261fc79d86d"
  },
  {
    "url": "categories/react基础加原理教程/index.html",
    "revision": "eed0fdb0b4dfa1978e7b2623587ee577"
  },
  {
    "url": "categories/react项目实战/index.html",
    "revision": "a3f9db0caa2007c3d2ab05a72c10f294"
  },
  {
    "url": "categories/three.js/index.html",
    "revision": "6b275367582c7af2670b353adb2bec44"
  },
  {
    "url": "categories/three.js基础/index.html",
    "revision": "016901d8c9d1c7975f24bf1faa359cc6"
  },
  {
    "url": "categories/uniapp/index.html",
    "revision": "6943163739d5775d511be2a41506e627"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "436790840c547918e9c342d4e1af34ac"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "65b366eb210b07709235ddb30276af9a"
  },
  {
    "url": "categories/Vue2.0/index.html",
    "revision": "d4620e44963edbde3b47a6e18def9733"
  },
  {
    "url": "categories/vue2/index.html",
    "revision": "71d3f72468c12909d16ff447ce58ac1d"
  },
  {
    "url": "categories/vue3.0/index.html",
    "revision": "c999c6d4788071bab0b22e38c4035e4c"
  },
  {
    "url": "categories/vue3.2/index.html",
    "revision": "714aa3fed4770b635fd41da20dd22556"
  },
  {
    "url": "categories/vue3+vite+pinia基础/index.html",
    "revision": "6dc18646a73a0dec64ba709053958110"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "d4300af76d262f02765445c67009ab81"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/55.jpg",
    "revision": "99609b18131a5e9db7e90cd41749acc3"
  },
  {
    "url": "img/65.jpg",
    "revision": "c09c3deb4c85ebee019b6dd8392ef016"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "91655cbc24e91a101890ff59a8c109a9"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "1c024c8369c8f9f9c80f306297dc68f3"
  },
  {
    "url": "js/custom.js",
    "revision": "f5494e08d3dc2634c7ceda60f85c97c1"
  },
  {
    "url": "tag/index.html",
    "revision": "0ea844784ae9dbc9c44eeb2198bd1ead"
  },
  {
    "url": "tags/Adobe ae/index.html",
    "revision": "5cf5ffbb3f77a55b8834e09de9a21d91"
  },
  {
    "url": "tags/Adobe Illustrator CS6/index.html",
    "revision": "7bc7ae14f3a3f886508ca89d51153dcb"
  },
  {
    "url": "tags/Adobe pr/index.html",
    "revision": "7c8b0012ae1821fb7b1c5b1b3ca41ccb"
  },
  {
    "url": "tags/Adobe ps/index.html",
    "revision": "193717178e3ed3c1f222c642749067c7"
  },
  {
    "url": "tags/axure8.0/index.html",
    "revision": "6c91fb3bd5c210224a74f193a53a5a84"
  },
  {
    "url": "tags/Cesium.js/index.html",
    "revision": "f5e7635507cb594e01cc898a740c9fb2"
  },
  {
    "url": "tags/express/index.html",
    "revision": "342003a49286941bea1e3ef26e662df7"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "345619147d96908115e8344851ad916e"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "acb0e4e2309cdd33a9c0684192395118"
  },
  {
    "url": "tags/navicat/index.html",
    "revision": "53dd0939e3f67e1d91b172fe84b08385"
  },
  {
    "url": "tags/node.js/index.html",
    "revision": "4858a9ccac62bc0568330da4736bd31e"
  },
  {
    "url": "tags/node.js框架/index.html",
    "revision": "abea9c7455d4fc61b3a3364450dd8cbf"
  },
  {
    "url": "tags/nuxt.js/index.html",
    "revision": "344f1c8eeb34f2bc73e30c522e99d4cb"
  },
  {
    "url": "tags/nuxt/index.html",
    "revision": "c48fe0516a80a016254d57e67ea3d2b0"
  },
  {
    "url": "tags/NuxtJS/index.html",
    "revision": "1bfa5700bf37bdce825ffcb3f43795e7"
  },
  {
    "url": "tags/react/index.html",
    "revision": "1a852ef981b768f946317fadca9e7167"
  },
  {
    "url": "tags/react基础加原理教程/index.html",
    "revision": "1e5330cfe4380f52eebade7565c56c11"
  },
  {
    "url": "tags/react项目实战/index.html",
    "revision": "005014421bf30cce5e93168584584604"
  },
  {
    "url": "tags/three.js/index.html",
    "revision": "452024a3ee79183383a7fc9589c1c277"
  },
  {
    "url": "tags/uniapp/index.html",
    "revision": "9890443d35205d0f2da054482429d6c3"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "554d83273bab36ff5bb13d69f4160312"
  },
  {
    "url": "tags/vue.js/index.html",
    "revision": "98e7c220e53cc792d694e5732303ee33"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1df972c5d59970edb6cf57c4989e09ab"
  },
  {
    "url": "tags/Vue2.0/index.html",
    "revision": "80e5a473fe5c677362724fce16f60c52"
  },
  {
    "url": "tags/vue2/index.html",
    "revision": "e2b144baa0028209a20b3cf54f144658"
  },
  {
    "url": "tags/vue3.0.js/index.html",
    "revision": "9cccca966e36487c6c89967f675528fc"
  },
  {
    "url": "tags/vue3.0/index.html",
    "revision": "b897b2f8b25c97ceaec652137cb26864"
  },
  {
    "url": "tags/vue3.2/index.html",
    "revision": "a7abe1896bc6577b5edd2ba9cef82275"
  },
  {
    "url": "tags/vue3+vite+pinia基础/index.html",
    "revision": "7f2f071ef8abec824e3a46ee5c941913"
  },
  {
    "url": "timeline/index.html",
    "revision": "486b924fb4aeac234e5e25c6beb64a29"
  },
  {
    "url": "工具下载/life copy 2.html",
    "revision": "164108787d3737885d565d370518c46e"
  },
  {
    "url": "工具下载/life copy 3.html",
    "revision": "700d05d2247c55ca95c1ec0305f86976"
  },
  {
    "url": "工具下载/life copy 4.html",
    "revision": "3187c93e2a1f764599d5a890b42d0aec"
  },
  {
    "url": "工具下载/life copy 5.html",
    "revision": "0dcccbbc6217c99a806560a4001d2dac"
  },
  {
    "url": "工具下载/life copy 6.html",
    "revision": "d25bbed37431a20d56428da82fa65f3a"
  },
  {
    "url": "工具下载/life copy 7.html",
    "revision": "5e163cf0bfbfbcd7a0b27f40c290f058"
  },
  {
    "url": "工具下载/life copy.html",
    "revision": "2ff930512c723073a2fb426d95f96f6a"
  },
  {
    "url": "工具下载/life.html",
    "revision": "e1fcab1f9d628f6ba179526660a0873f"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a3186d6b408c2e203dd202e347c3edfc"
  },
  {
    "url": "技术文章/javascript/javascript.html",
    "revision": "7edee42553f4bb31a282861e686ff419"
  },
  {
    "url": "技术文章/node.js/express.html",
    "revision": "034f375185e680f4a2569af6f8eeae25"
  },
  {
    "url": "技术文章/node.js/koa.html",
    "revision": "9d3ab06d990e6fc46bad864b82f44bdf"
  },
  {
    "url": "技术文章/node.js/mysql.html",
    "revision": "30c817dfb01f56d41c44d426745b7e60"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js copy.html",
    "revision": "50d5c866f9dac07fb3c25aa31dc875c9"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js.html",
    "revision": "ac9ae506f6f03a948f4a0bf2580c37ff"
  },
  {
    "url": "技术文章/react/react.html",
    "revision": "c2ae8b5869cdf9e3b262b7140e71899c"
  },
  {
    "url": "技术文章/three.js/three.js.html",
    "revision": "dc36d80afe610431f7a21b4eaf109137"
  },
  {
    "url": "技术文章/three.js/three.js第三人称漫游.html",
    "revision": "b08000452f4e97ab5b0c967417b53127"
  },
  {
    "url": "技术文章/vue.js/javase.html",
    "revision": "e9de82cd3be1d137f2b04c0629cc0cd8"
  },
  {
    "url": "技术文章/vue2.0/vue2.0.html",
    "revision": "dc19e7d03ffb2085beb9be821183ae9b"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 - 副本.html",
    "revision": "df7264d69cf055bf716d9c9becc27c9b"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 copy.html",
    "revision": "6e31218c9ca7b4e0f61051b8bb6d25cc"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式.html",
    "revision": "885f09882766183d772e306a9b261ac6"
  },
  {
    "url": "技术文章/vue2.0/浅谈javascript中的深拷贝和浅拷贝.html",
    "revision": "36fd638d23938a1907c7a42919413e5d"
  },
  {
    "url": "技术文章/vue2.0/认识vue.html",
    "revision": "0dc626835aeab64c1c4842ae19fa30c2"
  },
  {
    "url": "技术文章/vue3.0/nuxt3入门.html",
    "revision": "6d82a71dd5559b6a0991de9007d1f5d0"
  },
  {
    "url": "技术文章/vue3.0/vue3.0.html",
    "revision": "e37ab873c0e39772f842aa5ee26246d5"
  },
  {
    "url": "技术文章/vue3.0/vue3.0ref.html",
    "revision": "7b5dc29d7f8c79c3e877fb41d5d78ab6"
  },
  {
    "url": "教学视频/life copy 2.html",
    "revision": "c63b441d6c9b7e855670023d9f1b746c"
  },
  {
    "url": "教学视频/life copy 3.html",
    "revision": "c426476807043930ded81c8b9cad1ee7"
  },
  {
    "url": "教学视频/life copy 4.html",
    "revision": "2fb427847cb6c0e796372729e85caa44"
  },
  {
    "url": "教学视频/life copy 5.html",
    "revision": "e81b246586f0b007e89052567ee99dfe"
  },
  {
    "url": "教学视频/life copy 6.html",
    "revision": "7d015b54f4e2f55b6d563e6c5518f706"
  },
  {
    "url": "教学视频/life copy 7.html",
    "revision": "b2fb82a6750c1d69a930775e580246a1"
  },
  {
    "url": "教学视频/life copy 8.html",
    "revision": "56f8d004b72a1f47d3af14b4b8d72f49"
  },
  {
    "url": "教学视频/life copy 9.html",
    "revision": "2b5644888e7eb2554f32e2bfad6a4d8c"
  },
  {
    "url": "教学视频/life copy.html",
    "revision": "58e8641517cabf48505a4721f9d3e116"
  },
  {
    "url": "教学视频/life.html",
    "revision": "0bf998f3b6185136a01ea9cbfc61fdda"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
