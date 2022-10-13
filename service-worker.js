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
    "revision": "4e9bbb3f3e496aa57c8177a0eb837d56"
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
    "url": "assets/js/11.3c358e48.js",
    "revision": "d4e7cd4d7b1d6c94cfcf0eb97ba21dc2"
  },
  {
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.12f81d66.js",
    "revision": "f181e93e1f26236091b234952ec16d44"
  },
  {
    "url": "assets/js/14.96d24f00.js",
    "revision": "65acc81672504c389151b6c178962e62"
  },
  {
    "url": "assets/js/15.ee221836.js",
    "revision": "552862718e6951da8dfc8ef208170574"
  },
  {
    "url": "assets/js/16.a71bd56d.js",
    "revision": "22a81e2d41ff521beb65ad0101adbdbd"
  },
  {
    "url": "assets/js/17.582719e9.js",
    "revision": "ad089e276fd1013e0cf10d5c2eb0a5b3"
  },
  {
    "url": "assets/js/18.704ac738.js",
    "revision": "17bf09e5cf2faab48209e27a313259e1"
  },
  {
    "url": "assets/js/19.f500a6a1.js",
    "revision": "024cadadc4d0102ac718a4db87807776"
  },
  {
    "url": "assets/js/20.8a9a6525.js",
    "revision": "39ad3bd3e403657f5c5c56c8f0d91d41"
  },
  {
    "url": "assets/js/21.203e40f7.js",
    "revision": "81e4f9022d49419cb3b5ff29915976ba"
  },
  {
    "url": "assets/js/22.73a1e3ba.js",
    "revision": "bf4d30635a166afeaf9c9fe2bcb32daf"
  },
  {
    "url": "assets/js/23.33b526d4.js",
    "revision": "a427540814ce5e4deb6bf029cdcef089"
  },
  {
    "url": "assets/js/24.308ff0d2.js",
    "revision": "492742cc72645b7cce2ab85a969cabd3"
  },
  {
    "url": "assets/js/25.0c3308d6.js",
    "revision": "2f998d99b5bd4967483758c812b299b8"
  },
  {
    "url": "assets/js/26.fe645607.js",
    "revision": "6b3705fdad6f44f4645a17c6c6d8678b"
  },
  {
    "url": "assets/js/27.9dd1b90a.js",
    "revision": "4deed61ead2857a0a46c3544c8fb9b82"
  },
  {
    "url": "assets/js/28.e0511003.js",
    "revision": "6a30d12ff90ff4e981fd436767e34c19"
  },
  {
    "url": "assets/js/29.0cba5848.js",
    "revision": "dc4309900fb73f7a0f32b01c0697d43f"
  },
  {
    "url": "assets/js/30.d878a019.js",
    "revision": "a4b64abf74497bd5cee7c3323c171a3d"
  },
  {
    "url": "assets/js/31.ee863645.js",
    "revision": "0522eda1b983c899c650b21ec3a6f0ea"
  },
  {
    "url": "assets/js/32.a2942982.js",
    "revision": "ea78670c2a91239f6f16b6d0ba91f160"
  },
  {
    "url": "assets/js/33.99c9f1b2.js",
    "revision": "1fc3b58105257ae018e31476d9b192e8"
  },
  {
    "url": "assets/js/34.31f95439.js",
    "revision": "66ddc29b203d74f590656074a560040c"
  },
  {
    "url": "assets/js/35.1ceba412.js",
    "revision": "485160af5ca7a633f9f2a3b920d39d96"
  },
  {
    "url": "assets/js/36.5909a0e5.js",
    "revision": "1ce7f9b233efce758e055dbf950e3164"
  },
  {
    "url": "assets/js/37.4112a4b7.js",
    "revision": "23d268f45d11eb5e0120b5224277a4d4"
  },
  {
    "url": "assets/js/38.ff0e014b.js",
    "revision": "c0a8a203ac378bc5e8364286cd436ecf"
  },
  {
    "url": "assets/js/39.d68c1b62.js",
    "revision": "7f654b7c02d8d21dd5fbb0a76850af92"
  },
  {
    "url": "assets/js/4.2e0730c5.js",
    "revision": "49dfe2b674ca1fb5e2ac48059c9703fc"
  },
  {
    "url": "assets/js/40.d153e1f0.js",
    "revision": "64d2dc884f6b09af851b25733f651b19"
  },
  {
    "url": "assets/js/41.4bbed9a1.js",
    "revision": "3e616bbda83d7a1c1576029ede8a5a3a"
  },
  {
    "url": "assets/js/42.2b24b2b5.js",
    "revision": "0339bd3b745fd53292abc350282fcdf5"
  },
  {
    "url": "assets/js/43.f9c46079.js",
    "revision": "ef62ae33dcaa3d72d6f77827d29c2588"
  },
  {
    "url": "assets/js/44.a020b803.js",
    "revision": "3ad3ea1481ceca5e2f0b1a16f510fa67"
  },
  {
    "url": "assets/js/45.dc958590.js",
    "revision": "7332dbc002d3186b197fd3d5e695aab1"
  },
  {
    "url": "assets/js/46.5cc6ad85.js",
    "revision": "51402d1639be6f2c8cdfb092b1ee0761"
  },
  {
    "url": "assets/js/47.5ec2d98a.js",
    "revision": "12479dfa35663f2385ad721a5f649bd8"
  },
  {
    "url": "assets/js/48.7055cd03.js",
    "revision": "f2bd1085ddc05e7c2a0a4fcdd629a678"
  },
  {
    "url": "assets/js/49.331bdc2a.js",
    "revision": "95dcdce567938b6b94e511a7c780b27b"
  },
  {
    "url": "assets/js/5.0c98980d.js",
    "revision": "b9d96a147090548206d9a93fa5196ece"
  },
  {
    "url": "assets/js/50.c612b619.js",
    "revision": "196c40823e8417e14491da4a64c6f276"
  },
  {
    "url": "assets/js/51.b9eec473.js",
    "revision": "9493919eae888ba01f86572ab8af0fbd"
  },
  {
    "url": "assets/js/52.5f24cb14.js",
    "revision": "049aa5be816cf9c115afd0e1be7bf581"
  },
  {
    "url": "assets/js/53.1f2ee625.js",
    "revision": "cb2ae5737dfca593cb200954b98326fd"
  },
  {
    "url": "assets/js/54.d0fe46ad.js",
    "revision": "1ae7c5a8040245cb5dea626ce5c209ef"
  },
  {
    "url": "assets/js/55.f73defa2.js",
    "revision": "a543a35048e1ef0a06be7b422b78dcb1"
  },
  {
    "url": "assets/js/56.e730bf9b.js",
    "revision": "7ffece7cfbbbcf95e3dcc687a4d436c8"
  },
  {
    "url": "assets/js/57.62597a58.js",
    "revision": "af849d3c6037bcad504ecbad8fb49c99"
  },
  {
    "url": "assets/js/58.187344aa.js",
    "revision": "274ea45ba4b76d7afd583dfd64fd49e8"
  },
  {
    "url": "assets/js/59.b2df8a0b.js",
    "revision": "e5e7361c196b1674ef2f064425fcd1b4"
  },
  {
    "url": "assets/js/6.40fece1c.js",
    "revision": "36695367ee4859a08a01058a6c3ac770"
  },
  {
    "url": "assets/js/60.85f635b0.js",
    "revision": "9854383605414ec097d8efc00b35e50f"
  },
  {
    "url": "assets/js/61.9145a130.js",
    "revision": "d1d1210aa60d273ea8621b8670debfaa"
  },
  {
    "url": "assets/js/62.ebf34926.js",
    "revision": "d933eb5685a4e2d24dbbb6a73b0a5375"
  },
  {
    "url": "assets/js/63.905e9adb.js",
    "revision": "1c55c546fdd8e07693b97ac27664dfaf"
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
    "url": "assets/js/app.f5c06e70.js",
    "revision": "1db4bd95691505d4b52a9710c9ae246c"
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
    "revision": "1926fbf0f9aa6f22bd8b0aa47c5661df"
  },
  {
    "url": "categories/Adobe Illustrator CS6/index.html",
    "revision": "6aaf3874aa263a5a3e942514db850750"
  },
  {
    "url": "categories/Adobe pr/index.html",
    "revision": "3480e4fcb9d79e6b79fdd7c746bb377e"
  },
  {
    "url": "categories/Adobe PS CS6下载地址/index.html",
    "revision": "e19d8818c6146d67ed6b435645d3a510"
  },
  {
    "url": "categories/Adobe ps/index.html",
    "revision": "7a32289ef4327a97f5de88224d89ed6b"
  },
  {
    "url": "categories/axure8/index.html",
    "revision": "c10bf0a5b58a39b8dd80391300d82214"
  },
  {
    "url": "categories/Express/index.html",
    "revision": "5673374cb47106edb0c3578b16e064e5"
  },
  {
    "url": "categories/index.html",
    "revision": "a0000e4d61ca2b3424e9807de19df742"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "b47efd2facf643f424c9941b4253fba7"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "57ad64aa9dfbc7e91d0739704ccad93a"
  },
  {
    "url": "categories/node.js/index.html",
    "revision": "92b6b0ecd67dedc245840786e34e6906"
  },
  {
    "url": "categories/nuxt/index.html",
    "revision": "8510f40caadca07016d21c38897d80cb"
  },
  {
    "url": "categories/NuxtJS/index.html",
    "revision": "4d4311192c3666f2c1cad5e2c252a708"
  },
  {
    "url": "categories/panjiachen博客/index.html",
    "revision": "fcd1374e552914ba35361eb4fb44f81d"
  },
  {
    "url": "categories/react/index.html",
    "revision": "7af6c937fe5fad815dafc3b0715a2de2"
  },
  {
    "url": "categories/react18项目/index.html",
    "revision": "5efba3b842a1b8b56700e1fdbaf81fd4"
  },
  {
    "url": "categories/react基础加原理教程/index.html",
    "revision": "bb30a42367afa03ab2ac74996f3e93db"
  },
  {
    "url": "categories/react项目实战/index.html",
    "revision": "b2b372d5295d5e88e2000a322462256c"
  },
  {
    "url": "categories/three.js/index.html",
    "revision": "f070b32a24bba27b76f7eac62c0ceee4"
  },
  {
    "url": "categories/three.js基础/index.html",
    "revision": "7142b14a2cffc7a39765d37ef77df8d8"
  },
  {
    "url": "categories/uniapp/index.html",
    "revision": "5aa21ee3eb970bbae984c18132b09371"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "3b3b81579e15d9e848a661a555eea35f"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "9c23b0cd1dd210af5a33a9d76d77171e"
  },
  {
    "url": "categories/Vue2.0/index.html",
    "revision": "b1922148d8fc497f48847beea80552bb"
  },
  {
    "url": "categories/vue2/index.html",
    "revision": "c94f0822d2c59938a3efc0134a798431"
  },
  {
    "url": "categories/vue2项目/index.html",
    "revision": "77011a9f3521191040fe6f72b539661f"
  },
  {
    "url": "categories/vue3.0/index.html",
    "revision": "a4238e24110087a3af56962cb7065276"
  },
  {
    "url": "categories/vue3.2/index.html",
    "revision": "b7dfddbc850dfb38637900cf1301385f"
  },
  {
    "url": "categories/vue3/index.html",
    "revision": "29078dc96c822fecbc9362b388ffbda1"
  },
  {
    "url": "categories/vue3+vite+pinia基础/index.html",
    "revision": "d57b70780bf10a20c82eb2b21768701d"
  },
  {
    "url": "categories/vue3项目/index.html",
    "revision": "8624560b1116ea6842ecb8fac2bd8a1e"
  },
  {
    "url": "categories/网站抓取精灵/index.html",
    "revision": "7ebee70fd6bd8e96cc5e864de5ce4799"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "d4bfec3797d86104ecbe2b49e20bd2a7"
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
    "revision": "ad5e179f389a664e09ee2078862be572"
  },
  {
    "url": "js/custom.js",
    "revision": "f5494e08d3dc2634c7ceda60f85c97c1"
  },
  {
    "url": "tag/index.html",
    "revision": "1c7554f678be264e4001f04984aca766"
  },
  {
    "url": "tags/Adobe ae/index.html",
    "revision": "634ddfbeb74b73d6db821a1d68fd3c9a"
  },
  {
    "url": "tags/Adobe Illustrator CS6/index.html",
    "revision": "59ce3889868419f6b697976eafa3a87c"
  },
  {
    "url": "tags/Adobe pr/index.html",
    "revision": "0c6cce6bc943f264ed8847fe94209cf6"
  },
  {
    "url": "tags/Adobe PS CS6下载地址/index.html",
    "revision": "7ba173e89e9ce1d36db11edebb3a9d8c"
  },
  {
    "url": "tags/Adobe ps/index.html",
    "revision": "2144c985e0da3b8b99ca861fae6c8d56"
  },
  {
    "url": "tags/axure8.0/index.html",
    "revision": "f1f651a6b38c1384d23f991edfb4702c"
  },
  {
    "url": "tags/Cesium.js/index.html",
    "revision": "9dd1c6bb8e522b1f2c97d87b895d9e9e"
  },
  {
    "url": "tags/express/index.html",
    "revision": "b838ff1cfd9c0229d2c510f6f2ee0977"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "6a7ac9851418ea41f1d575b5c50c3ff7"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "6b62fa44e832d9314edc3004300d8cd2"
  },
  {
    "url": "tags/navicat/index.html",
    "revision": "1ee02b704fa27019c72e33e32f867588"
  },
  {
    "url": "tags/node.js/index.html",
    "revision": "015231ffc647b58cce9cd1d45155306d"
  },
  {
    "url": "tags/node.js框架/index.html",
    "revision": "7dbf6a254c3e4111501bd8077f73ed2a"
  },
  {
    "url": "tags/nuxt.js/index.html",
    "revision": "9b4648fe714083339bccbbf3b74920cd"
  },
  {
    "url": "tags/nuxt/index.html",
    "revision": "d1f82dd7cb24fb0fec78332421506057"
  },
  {
    "url": "tags/NuxtJS/index.html",
    "revision": "7b7dd90b08decf200d9d726af168630b"
  },
  {
    "url": "tags/panjiachen博客/index.html",
    "revision": "a5406ca9866ab6fb088107cd206c0c27"
  },
  {
    "url": "tags/react/index.html",
    "revision": "d34b9bacaf1e7f2797884ba93df6021d"
  },
  {
    "url": "tags/react18/index.html",
    "revision": "a938c9a606b373bb704f9a3d352cdc7f"
  },
  {
    "url": "tags/react18项目/index.html",
    "revision": "3c5584c8b909b5e66f7c3cb5db851cd3"
  },
  {
    "url": "tags/react基础加原理教程/index.html",
    "revision": "560e9296ccc9e4e5b63f5329762d709d"
  },
  {
    "url": "tags/react项目实战/index.html",
    "revision": "9c327e6efbda872a96cf916df4472045"
  },
  {
    "url": "tags/three.js/index.html",
    "revision": "27b006887d50282e823ea12546528c1a"
  },
  {
    "url": "tags/uniapp/index.html",
    "revision": "ec201c05bbd5660aa1376bc4ec60641e"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "d98ae1f9aa21e4d7a51f4f9db34bce02"
  },
  {
    "url": "tags/vue.js/index.html",
    "revision": "9dda6d8930f4d86e888fddca5d5c3986"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "9b9dfd9d6ecdf3efef4c684d8a1a8a35"
  },
  {
    "url": "tags/Vue2.0/index.html",
    "revision": "3d9930854ff981903e42242749404a37"
  },
  {
    "url": "tags/vue2/index.html",
    "revision": "381681cd8d0d38e0994f396550d1dc9b"
  },
  {
    "url": "tags/vue2后台管理系统/index.html",
    "revision": "be865259b1baedddaf9f7f15f5e34678"
  },
  {
    "url": "tags/vue2项目/index.html",
    "revision": "0d1ffd5075e1b5ad9c6f35caab58ba73"
  },
  {
    "url": "tags/vue3.0.js/index.html",
    "revision": "2b1d6db75627e0285cedcc28d3b5312d"
  },
  {
    "url": "tags/vue3.0/index.html",
    "revision": "d399e75eb4e655ccb9c511effbf1f387"
  },
  {
    "url": "tags/vue3.2/index.html",
    "revision": "ea20899dacd5a4a8c06b7ca05327b9f5"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "c678f74d786209068bd6f565d91957c2"
  },
  {
    "url": "tags/vue3+vite+pinia基础/index.html",
    "revision": "9001bf9edd6f51d4e014da198fb8d524"
  },
  {
    "url": "tags/Vue3后台管理系统/index.html",
    "revision": "39c73ee9cfa079887b111bdac18671d7"
  },
  {
    "url": "tags/vue3精简后台管理模板项目/index.html",
    "revision": "6d2a431947656c04d5bbb8d2854a5524"
  },
  {
    "url": "tags/vue3项目/index.html",
    "revision": "94b96252b1e97392c89bb2183f302608"
  },
  {
    "url": "tags/优秀博主博客项目模板推荐/index.html",
    "revision": "e22f0e785293f60c38ab5ccd3e04fa2e"
  },
  {
    "url": "tags/网站抓取js html css/index.html",
    "revision": "69d221fc51836775ae1a2e789ba2296c"
  },
  {
    "url": "tags/网站抓取精灵/index.html",
    "revision": "f682392105ddcdee1aa5ccc478a2f172"
  },
  {
    "url": "timeline/index.html",
    "revision": "bb50e40d598018b65918c0643dde9df0"
  },
  {
    "url": "优秀项目/life copy 2.html",
    "revision": "8d30e1c7387c768736c231f4b591a72c"
  },
  {
    "url": "优秀项目/life copy.html",
    "revision": "5e72a3d1386346598813c91429791ec4"
  },
  {
    "url": "优秀项目/life.html",
    "revision": "81ff7f552861ca78929370444d5ce6a6"
  },
  {
    "url": "优秀项目/react18后台管理系统.html",
    "revision": "7e622ff29ef9bdf59707bbbc3643379a"
  },
  {
    "url": "优秀项目/vue2电商网站.html",
    "revision": "dc9937171642377c0772d3e79e640c87"
  },
  {
    "url": "优秀项目/vue3+ts腾讯课堂.html",
    "revision": "d53f1f24a5b19329db2a7c695deb69a7"
  },
  {
    "url": "优秀项目/尚硅谷尚品汇vue2后台管理.html",
    "revision": "a7c7fd203320937e434572834300dcec"
  },
  {
    "url": "优秀项目/尚硅谷尚品汇vue3+ts后台管理 copy.html",
    "revision": "71a9e4030077f6e6b790e4909babaa56"
  },
  {
    "url": "优秀项目/黑马头条vue2后台管理 copy.html",
    "revision": "b3fd1c1cce9c716cea03ae635bb7882d"
  },
  {
    "url": "优秀项目/黑马电商vue2shop后台管理 copy 2.html",
    "revision": "363cc99a4891e19d7b16b231f6d0603b"
  },
  {
    "url": "工具下载/life copy 2.html",
    "revision": "54a57da6bba24b9745b6e3a0ad592c7e"
  },
  {
    "url": "工具下载/life copy 3.html",
    "revision": "d64280f5c09e58185b94c3ad8c6a5689"
  },
  {
    "url": "工具下载/life copy 4.html",
    "revision": "63e8d3876eec3b4b7e9b8bd77c4ca5ea"
  },
  {
    "url": "工具下载/life copy 5.html",
    "revision": "ff15e84d9b39b799d5baf6ebd328484c"
  },
  {
    "url": "工具下载/life copy 6.html",
    "revision": "235f085b64b8aef478ea1941a6e0a014"
  },
  {
    "url": "工具下载/life copy 7.html",
    "revision": "1be433e062cac9c3d7a07fc2070fd35f"
  },
  {
    "url": "工具下载/life copy.html",
    "revision": "e464ff5ea5d323c26353584ae09b16b6"
  },
  {
    "url": "工具下载/life.html",
    "revision": "4623e5761fa8744be2c016a511b195b4"
  },
  {
    "url": "工具下载/ps.html",
    "revision": "9007d0c54a0b579a0364d7ceb3837e09"
  },
  {
    "url": "工具下载/网站抓取精灵.html",
    "revision": "1b4b394bd16ab7646d1ffebd6a1ddfd7"
  },
  {
    "url": "技术文章/index.html",
    "revision": "3adfc3fe418806127ca63a12cff2277a"
  },
  {
    "url": "技术文章/javascript/javascript.html",
    "revision": "520bc9b77fda3029eaab49944d8f59cc"
  },
  {
    "url": "技术文章/node.js/express.html",
    "revision": "f9d675d6074bf5d98d2037099513f13a"
  },
  {
    "url": "技术文章/node.js/koa.html",
    "revision": "b16570d8d24cfefb5c2b2f5c306981f5"
  },
  {
    "url": "技术文章/node.js/mysql.html",
    "revision": "a89ebde0e5222ed722820d7102a0347e"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js copy.html",
    "revision": "b4548a3c93fa10f010817b16444d7e3c"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js.html",
    "revision": "18afd1b7d0f95388d400bfca3ef0c204"
  },
  {
    "url": "技术文章/react/react.html",
    "revision": "13623e6d0e39cf576cd681d34127e6b3"
  },
  {
    "url": "技术文章/three.js/three.js.html",
    "revision": "a3f0715248c82031fe7a787464b42dbc"
  },
  {
    "url": "技术文章/three.js/three.js第三人称漫游.html",
    "revision": "69b0a1529597281ba4242c06ceedbb18"
  },
  {
    "url": "技术文章/vue.js/javase.html",
    "revision": "a6adcc0ea7b1173f284725cfcf6e87db"
  },
  {
    "url": "技术文章/vue2.0/vue2.0.html",
    "revision": "f291987ffeea844c4bd9dd85045f285f"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 - 副本.html",
    "revision": "c56060de8cf56ba9bdf77a1b634f067e"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 copy.html",
    "revision": "cfb296cab2ac5f3519339bc613dc4b95"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式.html",
    "revision": "f559a9d519379c526df0f4ce49130a85"
  },
  {
    "url": "技术文章/vue2.0/浅谈javascript中的深拷贝和浅拷贝.html",
    "revision": "059abd58f420c36caf2ff2926a63ff9b"
  },
  {
    "url": "技术文章/vue2.0/认识vue.html",
    "revision": "abd7003172f3a9f21e0b4c74a96cd3e5"
  },
  {
    "url": "技术文章/vue3.0/nuxt3入门.html",
    "revision": "65c0b7542fd72805c77262da6d839961"
  },
  {
    "url": "技术文章/vue3.0/vue3.0.html",
    "revision": "81e090eb121d8ff3e6567b62efc33d34"
  },
  {
    "url": "技术文章/vue3.0/vue3.0ref.html",
    "revision": "44f4e018f918d8dfe213c39221ecd068"
  },
  {
    "url": "教学视频/life copy 2.html",
    "revision": "42b9db46929a1359feda5e014fc1ceb7"
  },
  {
    "url": "教学视频/life copy 3.html",
    "revision": "e2058e512a8e814c2d20f2b2a99587a2"
  },
  {
    "url": "教学视频/life copy 4.html",
    "revision": "2f5d2fc6461e480bf909b1e8cded25da"
  },
  {
    "url": "教学视频/life copy 5.html",
    "revision": "3042f0da1a030f6924cd778062c35407"
  },
  {
    "url": "教学视频/life copy 6.html",
    "revision": "bebc1593a3f5aefa060b1fa475cd0ac8"
  },
  {
    "url": "教学视频/life copy 7.html",
    "revision": "bf48a980978dea2e45a09b77d6048d58"
  },
  {
    "url": "教学视频/life copy 8.html",
    "revision": "3868953ed8929e276fe9bddaa1594075"
  },
  {
    "url": "教学视频/life copy 9.html",
    "revision": "f2c3d0b67823df0a92aba90ac4b3be4a"
  },
  {
    "url": "教学视频/life copy.html",
    "revision": "e6aeacb14dad32b7d2df9f6a9a68d32e"
  },
  {
    "url": "教学视频/life.html",
    "revision": "462e4820b23339861bdf47b3771f3d9d"
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
