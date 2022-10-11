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
    "revision": "5aee8d4238bd7f0d17b277d646b3bbd1"
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
    "url": "assets/js/13.ed0285f9.js",
    "revision": "2e924b3db4097ef99b2acdd103933639"
  },
  {
    "url": "assets/js/14.9410b12f.js",
    "revision": "f18f25e4673251a17b8ec3c542572c90"
  },
  {
    "url": "assets/js/15.5484fd0d.js",
    "revision": "e6ee8bf5c5f2a936a04761fd54e7d50b"
  },
  {
    "url": "assets/js/16.8e324471.js",
    "revision": "8e9c08c5cb20b949dbdb6ca2d4a4fd7d"
  },
  {
    "url": "assets/js/17.bd6b0bf3.js",
    "revision": "69dfc52bc0e9272046cbdddad4f35013"
  },
  {
    "url": "assets/js/18.704ac738.js",
    "revision": "17bf09e5cf2faab48209e27a313259e1"
  },
  {
    "url": "assets/js/19.98f31796.js",
    "revision": "c2e10e7f1f4078a02fc0f34183b6da0e"
  },
  {
    "url": "assets/js/20.a7279e99.js",
    "revision": "58df8e3bdc3dffa3f6f5aac809341e28"
  },
  {
    "url": "assets/js/21.203e40f7.js",
    "revision": "81e4f9022d49419cb3b5ff29915976ba"
  },
  {
    "url": "assets/js/22.2cf8c960.js",
    "revision": "38cfaa265790d66cc7554399c5c0d222"
  },
  {
    "url": "assets/js/23.02117e2b.js",
    "revision": "bb80e06696e03f6627fb996c9ee69e29"
  },
  {
    "url": "assets/js/24.f87db200.js",
    "revision": "933f4acce5d616a0281fff93e75da176"
  },
  {
    "url": "assets/js/25.6ced0307.js",
    "revision": "1642a661c3646c22530c5f3194f68ab8"
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
    "url": "assets/js/30.851362c2.js",
    "revision": "a8ac6bd2825d6bf5f1ccc255a8bd3886"
  },
  {
    "url": "assets/js/31.010bdcba.js",
    "revision": "f7f6397486ea6d6b79df4070df01a1fd"
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
    "url": "assets/js/34.eec16458.js",
    "revision": "562baed6859ab985edc979356a82bf9c"
  },
  {
    "url": "assets/js/35.173889bd.js",
    "revision": "c02e5d945b396d251cd723d41d7559e6"
  },
  {
    "url": "assets/js/36.5909a0e5.js",
    "revision": "1ce7f9b233efce758e055dbf950e3164"
  },
  {
    "url": "assets/js/37.f17f1be6.js",
    "revision": "7530c00cc1f9e87f5f91755f6928dd9a"
  },
  {
    "url": "assets/js/38.a7470dad.js",
    "revision": "08235c00d1d694c47d8551dfc70b7230"
  },
  {
    "url": "assets/js/39.e891bd35.js",
    "revision": "b798bbabd7cfd4919258511d3ad05ed9"
  },
  {
    "url": "assets/js/4.2e0730c5.js",
    "revision": "49dfe2b674ca1fb5e2ac48059c9703fc"
  },
  {
    "url": "assets/js/40.11a600f0.js",
    "revision": "49a5027c563b9de502ee48655c8e839f"
  },
  {
    "url": "assets/js/41.a111939d.js",
    "revision": "e33766e7c557a4822fb3301947d8da48"
  },
  {
    "url": "assets/js/42.9bf7db6e.js",
    "revision": "fa71fe64c6dccf7e90b0021637ef7d09"
  },
  {
    "url": "assets/js/43.2721c679.js",
    "revision": "72a0aa37583060afa65e477fe5a50f18"
  },
  {
    "url": "assets/js/44.68fe0918.js",
    "revision": "f575aabb4c30f18df6c17da91a6798d9"
  },
  {
    "url": "assets/js/45.788d35c4.js",
    "revision": "cff950d8e85fc81712163cfef9fc244c"
  },
  {
    "url": "assets/js/46.e709bed1.js",
    "revision": "1e07cb14fae254c148a7f301b61f7abc"
  },
  {
    "url": "assets/js/47.cfc1013e.js",
    "revision": "6576a3d038805f828d52684159720281"
  },
  {
    "url": "assets/js/48.b238c787.js",
    "revision": "988283c0a63635b2167b2e222b4a08fc"
  },
  {
    "url": "assets/js/49.622f75d3.js",
    "revision": "737276a5042a496fcffcd2e1185e425e"
  },
  {
    "url": "assets/js/5.0c98980d.js",
    "revision": "b9d96a147090548206d9a93fa5196ece"
  },
  {
    "url": "assets/js/50.94056a73.js",
    "revision": "d4a0adc7101826421dd99ffdf01700f3"
  },
  {
    "url": "assets/js/51.b9eec473.js",
    "revision": "9493919eae888ba01f86572ab8af0fbd"
  },
  {
    "url": "assets/js/52.6fdab8af.js",
    "revision": "6bd016bd5ac7420613ee2039155c10d9"
  },
  {
    "url": "assets/js/53.3258d62a.js",
    "revision": "5fadfdce5437b3fe86535b84ffd6a324"
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
    "url": "assets/js/63.fda7105b.js",
    "revision": "298fb5e30ae2fa42a424091c1b220089"
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
    "url": "assets/js/app.329fd61d.js",
    "revision": "f380e4fd13482fedf0ec8c77fdd83ce4"
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
    "revision": "3bebcbf60195fba05b6e523e260a3c42"
  },
  {
    "url": "categories/Adobe Illustrator CS6/index.html",
    "revision": "9efb607ad91f8445c4928b818e202e09"
  },
  {
    "url": "categories/Adobe pr/index.html",
    "revision": "6d8aa926772d94755b70e75f979cdbba"
  },
  {
    "url": "categories/Adobe PS CS6下载地址/index.html",
    "revision": "8d185dd709b6f87fdafcec52d822d635"
  },
  {
    "url": "categories/Adobe ps/index.html",
    "revision": "bcde19b42b7a063796d6b9ef744b0384"
  },
  {
    "url": "categories/axure8/index.html",
    "revision": "854f1eb0eab08ddf5b6093979c7991bd"
  },
  {
    "url": "categories/Express/index.html",
    "revision": "b5475c90f55f97216547b4dc783832dd"
  },
  {
    "url": "categories/index.html",
    "revision": "8c7bb4013717af3571d0b143447b0ac4"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "08a8dec249a347c77bb456dc2410f00b"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "04298bdbaacf76c6cf3143004ba19c29"
  },
  {
    "url": "categories/node.js/index.html",
    "revision": "05a2529e5c878ba67ab7ad6489a95a93"
  },
  {
    "url": "categories/nuxt/index.html",
    "revision": "1c6102c409d63a8792cc3aa1ee998d17"
  },
  {
    "url": "categories/NuxtJS/index.html",
    "revision": "55f2d14ac92e2d1fac0ff7c975cdf18f"
  },
  {
    "url": "categories/panjiachen博客/index.html",
    "revision": "40ad54f10f81bb6c76f1c129e53933f1"
  },
  {
    "url": "categories/react/index.html",
    "revision": "a007a957765e31e4b8cc7974edb4f40f"
  },
  {
    "url": "categories/react18项目/index.html",
    "revision": "c6548ebc41eda002f50a60f0c41c45a9"
  },
  {
    "url": "categories/react基础加原理教程/index.html",
    "revision": "75a2973c60ce6d2102bcca1a1a626fc0"
  },
  {
    "url": "categories/react项目实战/index.html",
    "revision": "906ebe6a5f5428284b20e5e05fe82197"
  },
  {
    "url": "categories/three.js/index.html",
    "revision": "dd7e8759b81c271a257c0da0f6bd3fd9"
  },
  {
    "url": "categories/three.js基础/index.html",
    "revision": "7ff8cbddfec8d9cf265b62585cabbe29"
  },
  {
    "url": "categories/uniapp/index.html",
    "revision": "ad85599ccfc776c6ba462153ed879ae5"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "8a50dd64498830ceffcf0d88f031bd6e"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "3d3418d920286ef7ad3cceb26279aa50"
  },
  {
    "url": "categories/Vue2.0/index.html",
    "revision": "fd5484cc783652c5906e38cb73de19db"
  },
  {
    "url": "categories/vue2/index.html",
    "revision": "20d050665f0032a2c80dc521d39488f6"
  },
  {
    "url": "categories/vue2项目/index.html",
    "revision": "236d097a3a1b03a35069b8d346b2c990"
  },
  {
    "url": "categories/vue3.0/index.html",
    "revision": "57785bafcb7a48b23a61604a567047f2"
  },
  {
    "url": "categories/vue3.2/index.html",
    "revision": "3814846a80aa83d295c12c3a0935122c"
  },
  {
    "url": "categories/vue3/index.html",
    "revision": "c1bbb64fefa55614456c2b26acecd3ce"
  },
  {
    "url": "categories/vue3+vite+pinia基础/index.html",
    "revision": "101d014e2b43ac96098a7fc4bf82bc6d"
  },
  {
    "url": "categories/vue3项目/index.html",
    "revision": "0cf0e4976862661031409efe6e0c825d"
  },
  {
    "url": "categories/网站抓取精灵/index.html",
    "revision": "f3cbc40c81d521a6313bf2e38b1a9cd3"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "71d4d9e3e4a040488a7904eab66871a3"
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
    "revision": "f80224ab480f4b8895f4ccce69b9730f"
  },
  {
    "url": "js/custom.js",
    "revision": "f5494e08d3dc2634c7ceda60f85c97c1"
  },
  {
    "url": "tag/index.html",
    "revision": "4a2a74174f0e7daa4829a4ce92af947a"
  },
  {
    "url": "tags/Adobe ae/index.html",
    "revision": "b87cfd9e29541340f97435b3703bc87a"
  },
  {
    "url": "tags/Adobe Illustrator CS6/index.html",
    "revision": "54626d565880476e22cc6fbcd519b315"
  },
  {
    "url": "tags/Adobe pr/index.html",
    "revision": "e42a001d6d540889b339c648bcf3c789"
  },
  {
    "url": "tags/Adobe PS CS6下载地址/index.html",
    "revision": "c7cc7aea940ba38a2bd9f853196b80a1"
  },
  {
    "url": "tags/Adobe ps/index.html",
    "revision": "3f916c39ee08d6d54632a4a401a30151"
  },
  {
    "url": "tags/axure8.0/index.html",
    "revision": "02adc80c9f3bbe3a52e5124ae083c3ba"
  },
  {
    "url": "tags/Cesium.js/index.html",
    "revision": "79c26f777259c3dbe99b096f084ce1be"
  },
  {
    "url": "tags/express/index.html",
    "revision": "efe7030531835faee607712034b3320c"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "7abf7b6dd7183e32ca04af4b3a37782e"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "3acb1f4c091bdb22d0f7114456b957fa"
  },
  {
    "url": "tags/navicat/index.html",
    "revision": "d5dc8cb51a03f7bc9ddb4db918794e38"
  },
  {
    "url": "tags/node.js/index.html",
    "revision": "a5b9873d4a11a24c59919d541a0c6bdc"
  },
  {
    "url": "tags/node.js框架/index.html",
    "revision": "356b1263ac4b144c32ae4a7d6eb8dfa4"
  },
  {
    "url": "tags/nuxt.js/index.html",
    "revision": "2421d7dc6945aefceb40a893d76fe34d"
  },
  {
    "url": "tags/nuxt/index.html",
    "revision": "cc619b79fcb353036d91a1fb333c55c8"
  },
  {
    "url": "tags/NuxtJS/index.html",
    "revision": "2908af40be3cdea5df404b8e00de460f"
  },
  {
    "url": "tags/panjiachen博客/index.html",
    "revision": "62acfa0ecbe456420a8ee95114a1d16b"
  },
  {
    "url": "tags/react/index.html",
    "revision": "d660975fd0fb6a2c732e3f913a8a02b9"
  },
  {
    "url": "tags/react18/index.html",
    "revision": "018252eac54787999a3d549574412613"
  },
  {
    "url": "tags/react18项目/index.html",
    "revision": "0b193a61cb5bb02d913c241da55ca355"
  },
  {
    "url": "tags/react基础加原理教程/index.html",
    "revision": "b9503f32466c13ef39118da5c5554ab3"
  },
  {
    "url": "tags/react项目实战/index.html",
    "revision": "29e090002eca3b2c0d177fa2dc0b9466"
  },
  {
    "url": "tags/three.js/index.html",
    "revision": "13612551bab68bcd7dd4cb803ac1fe4d"
  },
  {
    "url": "tags/uniapp/index.html",
    "revision": "a3fe9dcc9a529b3991d3d7f53c7be39d"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "c446621e3b7baa1c66f1aa81eee1cb23"
  },
  {
    "url": "tags/vue.js/index.html",
    "revision": "347a77059efd51b0d8259be52c2d288b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fd6a22a07cb7dceea4b5f55863cd2cb8"
  },
  {
    "url": "tags/Vue2.0/index.html",
    "revision": "3f0fe20330e381c516063c8f844b7061"
  },
  {
    "url": "tags/vue2/index.html",
    "revision": "488e9d077de725cb7c860818b9921be2"
  },
  {
    "url": "tags/vue2后台管理系统/index.html",
    "revision": "cf174260c04ef5024fad8db30cb9e430"
  },
  {
    "url": "tags/vue2项目/index.html",
    "revision": "75b5f791dfa07a12a05f2cf31e9474f7"
  },
  {
    "url": "tags/vue3.0.js/index.html",
    "revision": "be2d0246a5ffcf643bb0aa072088ac02"
  },
  {
    "url": "tags/vue3.0/index.html",
    "revision": "5b0788574cd2df9d153d440ba3e3bcc7"
  },
  {
    "url": "tags/vue3.2/index.html",
    "revision": "130b72037b84d3bf80667696e9adf9c3"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "3d3354c3f8114b238a573b77b891257e"
  },
  {
    "url": "tags/vue3+vite+pinia基础/index.html",
    "revision": "c9b66ccb2231b606917156bdb44a1c9d"
  },
  {
    "url": "tags/Vue3后台管理系统/index.html",
    "revision": "6e1a0e6feb432c76c93008559b87f68e"
  },
  {
    "url": "tags/vue3精简后台管理模板项目/index.html",
    "revision": "9d0ce09278e6b8a05992f74508a4f129"
  },
  {
    "url": "tags/vue3项目/index.html",
    "revision": "01baec08d2d8c4ea3a01a4af397d6545"
  },
  {
    "url": "tags/优秀博主博客项目模板推荐/index.html",
    "revision": "46f8ba0c60d45407126659f224116f4c"
  },
  {
    "url": "tags/网站抓取js html css/index.html",
    "revision": "3c5d51ecad112728a297df7b523fff58"
  },
  {
    "url": "tags/网站抓取精灵/index.html",
    "revision": "14b5b2e323fa32f7c9a8249f0fb3bf89"
  },
  {
    "url": "timeline/index.html",
    "revision": "4c45cabe4923ae9cf808ec967fb86f3a"
  },
  {
    "url": "优秀项目/life copy 2.html",
    "revision": "e50e2b30a752767627f964a8b5d2630d"
  },
  {
    "url": "优秀项目/life copy.html",
    "revision": "21ccc3f96434853e5f013059ee9c9d3e"
  },
  {
    "url": "优秀项目/life.html",
    "revision": "1e79e5caa03fe3d37cb2721a35f5db3f"
  },
  {
    "url": "优秀项目/react18后台管理系统.html",
    "revision": "ed926bc3f6716e5fb6108db63b822b63"
  },
  {
    "url": "优秀项目/vue2电商网站.html",
    "revision": "8c6c20bb6731f3e0679bc84e253e6db3"
  },
  {
    "url": "优秀项目/vue3+ts腾讯课堂.html",
    "revision": "9c2546e7d562ef74acea5c8adc34d1fc"
  },
  {
    "url": "优秀项目/尚硅谷尚品汇vue2后台管理.html",
    "revision": "8391b0bcee1eec7c70bf5d7367fea0db"
  },
  {
    "url": "优秀项目/尚硅谷尚品汇vue3+ts后台管理 copy.html",
    "revision": "1c5259100faf9c33b5a849e8cdc96c54"
  },
  {
    "url": "优秀项目/黑马头条vue2后台管理 copy.html",
    "revision": "cfff07401eacde7449b5ba5b7782d378"
  },
  {
    "url": "优秀项目/黑马电商vue2shop后台管理 copy 2.html",
    "revision": "e0d689e86fee16124b7f2efb9655d211"
  },
  {
    "url": "工具下载/life copy 2.html",
    "revision": "71e1746e79a94e0fb79c51f95ef24fee"
  },
  {
    "url": "工具下载/life copy 3.html",
    "revision": "2d292212280129ec5e7f2514a459022e"
  },
  {
    "url": "工具下载/life copy 4.html",
    "revision": "f11ef04a742e4ab394dc74c229c369d9"
  },
  {
    "url": "工具下载/life copy 5.html",
    "revision": "6f2a341597ed84df141b8aa452473024"
  },
  {
    "url": "工具下载/life copy 6.html",
    "revision": "dc480bd0bdc01443672043c77b33419e"
  },
  {
    "url": "工具下载/life copy 7.html",
    "revision": "0ecb342d868cfa88b948e4fb65c19b38"
  },
  {
    "url": "工具下载/life copy.html",
    "revision": "dacbb217668502b6985a2c347ef39474"
  },
  {
    "url": "工具下载/life.html",
    "revision": "66cbe9bafadc341d3589a5c799f22cce"
  },
  {
    "url": "工具下载/ps.html",
    "revision": "fd4effbc445b2ca4f76f7c945924b059"
  },
  {
    "url": "工具下载/网站抓取精灵.html",
    "revision": "410d772df803960093fc48e2df918d77"
  },
  {
    "url": "技术文章/index.html",
    "revision": "4c20e6f1f555c8fa25332bebf3f2eb9c"
  },
  {
    "url": "技术文章/javascript/javascript.html",
    "revision": "2f32a1c987b9d42f943ac37b8af98c31"
  },
  {
    "url": "技术文章/node.js/express.html",
    "revision": "441e85e287a64ffa74fb288b76f67e53"
  },
  {
    "url": "技术文章/node.js/koa.html",
    "revision": "9ee8702f5ca6c843eccb03256c3476fa"
  },
  {
    "url": "技术文章/node.js/mysql.html",
    "revision": "38456b33552f660050cf78de237c8671"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js copy.html",
    "revision": "d1cc59e4bc0782dd4d30af239705fdf5"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js.html",
    "revision": "6291d70e27e9b34749a9966717902fe9"
  },
  {
    "url": "技术文章/react/react.html",
    "revision": "14e7123719b87c31638d5cdcdf1e17a3"
  },
  {
    "url": "技术文章/three.js/three.js.html",
    "revision": "8e177ae23e5e80effb4a6bc99eebecb7"
  },
  {
    "url": "技术文章/three.js/three.js第三人称漫游.html",
    "revision": "1b111dab3b26a5cccc02aea72132edb1"
  },
  {
    "url": "技术文章/vue.js/javase.html",
    "revision": "26149084296b33c3dacd0a2cc5bc5aeb"
  },
  {
    "url": "技术文章/vue2.0/vue2.0.html",
    "revision": "98475ec31a3b668210dfd7d0bcca6888"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 - 副本.html",
    "revision": "0aedd6854c03823b2fa25c32798ec90f"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 copy.html",
    "revision": "5345016f175daa1039ad2541be09f3eb"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式.html",
    "revision": "441fe03675c271a08de11045736011a4"
  },
  {
    "url": "技术文章/vue2.0/浅谈javascript中的深拷贝和浅拷贝.html",
    "revision": "2a9d840ff32513abbcc0e517eb9d8164"
  },
  {
    "url": "技术文章/vue2.0/认识vue.html",
    "revision": "f07dad4b3c1cf8a1a9cbc21358409f8e"
  },
  {
    "url": "技术文章/vue3.0/nuxt3入门.html",
    "revision": "b8f73adcd86c00414f9d93db519162d3"
  },
  {
    "url": "技术文章/vue3.0/vue3.0.html",
    "revision": "5856f50773835d72e7bb904f9715b2c1"
  },
  {
    "url": "技术文章/vue3.0/vue3.0ref.html",
    "revision": "bd934b71d2eded2af4481fe1ae6609ad"
  },
  {
    "url": "教学视频/life copy 2.html",
    "revision": "bbcd803b7f6c2359188bd2c368e79b59"
  },
  {
    "url": "教学视频/life copy 3.html",
    "revision": "3a983eef91844741731b1acb21c29962"
  },
  {
    "url": "教学视频/life copy 4.html",
    "revision": "4e30a71d1333f5e1202a6537d48fb866"
  },
  {
    "url": "教学视频/life copy 5.html",
    "revision": "dab20f520ec07f4c9ee79519df13f172"
  },
  {
    "url": "教学视频/life copy 6.html",
    "revision": "27a128a198ae6a5e30214a19397e7272"
  },
  {
    "url": "教学视频/life copy 7.html",
    "revision": "3139e4de43896883d3d9345b2726e0d7"
  },
  {
    "url": "教学视频/life copy 8.html",
    "revision": "4f69fb010e4c7625e7361c5f9650f8dc"
  },
  {
    "url": "教学视频/life copy 9.html",
    "revision": "9475c7f787cd260e5e68e9006e48aadd"
  },
  {
    "url": "教学视频/life copy.html",
    "revision": "876b98c7603af725b1132b409c7917f4"
  },
  {
    "url": "教学视频/life.html",
    "revision": "e580263be454fd3192a349f6c96b9799"
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
