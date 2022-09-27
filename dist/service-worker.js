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
    "revision": "0f8a59a864bf59f2047846713ece55c6"
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
    "url": "assets/js/11.797c568a.js",
    "revision": "17f4e303af8f1c4c6ad9e29378eac133"
  },
  {
    "url": "assets/js/12.ecfc6052.js",
    "revision": "b470e4e806ac9451af3ea95b903a10cc"
  },
  {
    "url": "assets/js/13.09eace1c.js",
    "revision": "c6788df9f398d66d64c636dbed6cf483"
  },
  {
    "url": "assets/js/14.27ac5749.js",
    "revision": "61f9cdf7a99502f476703908e618d898"
  },
  {
    "url": "assets/js/15.1d457069.js",
    "revision": "9f7c8161d94e9385fe1b93189619cc6f"
  },
  {
    "url": "assets/js/16.7eca0dde.js",
    "revision": "5ff66ff6edb7150deeb45e4b40838fe5"
  },
  {
    "url": "assets/js/17.b5084362.js",
    "revision": "59500645dc4602f1583a5085d29e7705"
  },
  {
    "url": "assets/js/18.1c11717a.js",
    "revision": "4c586b3e0bbfc2aa684979ae42c6840f"
  },
  {
    "url": "assets/js/19.3b398381.js",
    "revision": "48961e796595bee1e1b86b28c9b4c225"
  },
  {
    "url": "assets/js/20.b89b2c70.js",
    "revision": "ba4391101b3b5004a10fa8cd4372677a"
  },
  {
    "url": "assets/js/21.ea8ee915.js",
    "revision": "d85d25aa1077d12d2b306831c9d20585"
  },
  {
    "url": "assets/js/22.2ec0798c.js",
    "revision": "e42897bbb3ec5dcacb30dc6696b8026e"
  },
  {
    "url": "assets/js/23.4b13f12f.js",
    "revision": "1fb486569d2782897fb9ecd7fb0b4d38"
  },
  {
    "url": "assets/js/24.ecf4b99b.js",
    "revision": "2c20504290206787998b5dac80a77214"
  },
  {
    "url": "assets/js/25.bcac6892.js",
    "revision": "a029a99be2276f563680a07830d5b078"
  },
  {
    "url": "assets/js/26.e8a5b890.js",
    "revision": "d73d00f8bbe4569f8b08a05e28383824"
  },
  {
    "url": "assets/js/27.98e192a7.js",
    "revision": "05e83fbc8c13ada1f9a5774f25cb8561"
  },
  {
    "url": "assets/js/28.394ed0b1.js",
    "revision": "335641d5251a68a325ba01cf5f350734"
  },
  {
    "url": "assets/js/29.97a6fc0e.js",
    "revision": "9627d0f3670bbf77665010225947ce49"
  },
  {
    "url": "assets/js/30.d57fef55.js",
    "revision": "d373b3dd8104f620d45013ae4855c702"
  },
  {
    "url": "assets/js/31.5d6a2ee3.js",
    "revision": "4d743e736371b744d2f3ff99ea92cb82"
  },
  {
    "url": "assets/js/32.e377df51.js",
    "revision": "2ee33bf0a788e0c62f5a1e9deaba7d79"
  },
  {
    "url": "assets/js/33.71ca5608.js",
    "revision": "ac648e260eb313e9158cb82625272b7c"
  },
  {
    "url": "assets/js/34.34cd746b.js",
    "revision": "80cde271cba30b878420c321efbaa6e0"
  },
  {
    "url": "assets/js/35.8fb1b755.js",
    "revision": "1b999dcfe5b416ff5fd98a0528a00ef2"
  },
  {
    "url": "assets/js/36.984cbc07.js",
    "revision": "ec29904015ff324acff679c288ba388d"
  },
  {
    "url": "assets/js/37.ccd5651a.js",
    "revision": "69679fdece28a0d801fb8b3cc841295e"
  },
  {
    "url": "assets/js/38.e30e40cb.js",
    "revision": "24c64f02f5ad24f5441954129138b104"
  },
  {
    "url": "assets/js/39.de55d3c6.js",
    "revision": "16948696fc6f5f32682917f9d3025041"
  },
  {
    "url": "assets/js/4.2e0730c5.js",
    "revision": "49dfe2b674ca1fb5e2ac48059c9703fc"
  },
  {
    "url": "assets/js/40.d0579db1.js",
    "revision": "e29a7b123f2d138fe33d7b00ae743efe"
  },
  {
    "url": "assets/js/41.2d3793e2.js",
    "revision": "6e1a93f147035a4927263ce8b0adb2a3"
  },
  {
    "url": "assets/js/42.7f850243.js",
    "revision": "074cf4a9738389dee4edfccd841922e5"
  },
  {
    "url": "assets/js/43.841485ce.js",
    "revision": "4c7262d23a0460729c759f124f9937bb"
  },
  {
    "url": "assets/js/44.61bc0e1c.js",
    "revision": "1740cdc21de7803cf440ac580a2d03de"
  },
  {
    "url": "assets/js/45.44fbf72d.js",
    "revision": "029a368d7e169bfbfa2677d8f40f2cd7"
  },
  {
    "url": "assets/js/46.ca718c17.js",
    "revision": "9df7e05608e6e9f8987bc3bc74c6e588"
  },
  {
    "url": "assets/js/47.7ccdb9c1.js",
    "revision": "f96f2f9e7a19312a1f1951c89b6259b5"
  },
  {
    "url": "assets/js/48.da0d268c.js",
    "revision": "c1fc0e93f43b198ab672750b6917172d"
  },
  {
    "url": "assets/js/49.5040b7f0.js",
    "revision": "f05cca49fc7917c412ce7a8ae39a606f"
  },
  {
    "url": "assets/js/5.0c98980d.js",
    "revision": "b9d96a147090548206d9a93fa5196ece"
  },
  {
    "url": "assets/js/50.a0435fd0.js",
    "revision": "33795e52ec2a52cc2cb0b63aa989ab1a"
  },
  {
    "url": "assets/js/51.1c8f5c48.js",
    "revision": "c817be71ce7fe93ad8f29f2199f0ecfc"
  },
  {
    "url": "assets/js/52.c45092b7.js",
    "revision": "504e77ee8e7a0edd3edad2c76a4381d5"
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
    "url": "assets/js/app.cdbe7714.js",
    "revision": "f02f01b7c58c217c9cadeb30372f6a4d"
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
    "revision": "1eb0169bcbb5c91b3a8c79a8db721ee0"
  },
  {
    "url": "categories/Adobe Illustrator CS6/index.html",
    "revision": "23c2c044659205119fe37acae51f304f"
  },
  {
    "url": "categories/Adobe pr/index.html",
    "revision": "5f307c885525eb99c07abd2613288e54"
  },
  {
    "url": "categories/Adobe PS CS6下载地址/index.html",
    "revision": "6d6712b696c2b427f3258169ee15973f"
  },
  {
    "url": "categories/Adobe ps/index.html",
    "revision": "160e709c86c235eb0472f0df0872d30b"
  },
  {
    "url": "categories/axure8/index.html",
    "revision": "322009696317718ae2f665c399488e9b"
  },
  {
    "url": "categories/Express/index.html",
    "revision": "e8fc90ca34d519a90028d794fe6fee63"
  },
  {
    "url": "categories/index.html",
    "revision": "460febdfc2adf8676cfb389374830a11"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "463a190508c44b5329494f0e973aa380"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "f11e26469ed1a7d6af64185f1ae8c069"
  },
  {
    "url": "categories/node.js/index.html",
    "revision": "bef25a7016e49c5d3a9bd6d2228a2333"
  },
  {
    "url": "categories/nuxt/index.html",
    "revision": "98ebc28a3fbd8bbe19e46c680b4b84c5"
  },
  {
    "url": "categories/NuxtJS/index.html",
    "revision": "64b5969f74ed29285f288aa56a7bc68f"
  },
  {
    "url": "categories/react/index.html",
    "revision": "7dae6eec3049af29fccef4c728e6b54a"
  },
  {
    "url": "categories/react基础加原理教程/index.html",
    "revision": "46b7979b057715448450ed4e2a1bf2ea"
  },
  {
    "url": "categories/react项目实战/index.html",
    "revision": "705d4d76edbf34135c3806ede4c8a740"
  },
  {
    "url": "categories/three.js/index.html",
    "revision": "d3ab96830ced3b0cf0f205c3cf662120"
  },
  {
    "url": "categories/three.js基础/index.html",
    "revision": "c666014541012b1be8a77fda9ea2214a"
  },
  {
    "url": "categories/uniapp/index.html",
    "revision": "15a78740bc304a281b26ee46d6993661"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "205be5036ddcaaf185c4de28cb17a7b8"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "c79691da9a6f5acd45490f42d72b9396"
  },
  {
    "url": "categories/Vue2.0/index.html",
    "revision": "d04ad78d484e99c0f0c0753c98044412"
  },
  {
    "url": "categories/vue2/index.html",
    "revision": "15d4155644f59b39cd983963fccc77f2"
  },
  {
    "url": "categories/vue3.0/index.html",
    "revision": "60aa6a3cf5fa8b1874edb5f0687da9f6"
  },
  {
    "url": "categories/vue3.2/index.html",
    "revision": "30c9146beba3d1ffad23a93b5f9afbb9"
  },
  {
    "url": "categories/vue3+vite+pinia基础/index.html",
    "revision": "60996d1e55c6af5283aaf69b1afb12cf"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "6ff3c5d392d393c79cd8334e250ec2d1"
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
    "revision": "aaf8d2cd4d0cdbee62123ace227c0c59"
  },
  {
    "url": "js/custom.js",
    "revision": "f5494e08d3dc2634c7ceda60f85c97c1"
  },
  {
    "url": "tag/index.html",
    "revision": "a490c722de7ab06df4149353fdb2641d"
  },
  {
    "url": "tags/Adobe ae/index.html",
    "revision": "6004701afced3de4551703c475ae6e1c"
  },
  {
    "url": "tags/Adobe Illustrator CS6/index.html",
    "revision": "cc1f76644435b18c6c680c8868a6c10b"
  },
  {
    "url": "tags/Adobe pr/index.html",
    "revision": "29601fa078ecacd7e38bd496ce9abe49"
  },
  {
    "url": "tags/Adobe PS CS6下载地址/index.html",
    "revision": "599c355cb7b57a2f8a163840b95f1933"
  },
  {
    "url": "tags/Adobe ps/index.html",
    "revision": "55ae25254f44d197cdff822e9d0f6f69"
  },
  {
    "url": "tags/axure8.0/index.html",
    "revision": "b6521d98a6fade791a482d5e4a26dd80"
  },
  {
    "url": "tags/Cesium.js/index.html",
    "revision": "d2341fbab68b78becb19bea0046a7c54"
  },
  {
    "url": "tags/express/index.html",
    "revision": "1f4d562c6ed361d14e056ce416803487"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "47080685faa9991cf324589c4f4b3f5e"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "5a6beebd876b6a7cc70a96370827d60b"
  },
  {
    "url": "tags/navicat/index.html",
    "revision": "cbd822c6bc401f50faf0351907f6f613"
  },
  {
    "url": "tags/node.js/index.html",
    "revision": "1900d3bd51fb0f360b564613ff969380"
  },
  {
    "url": "tags/node.js框架/index.html",
    "revision": "7d8a1240fb9646fedef95e285606d121"
  },
  {
    "url": "tags/nuxt.js/index.html",
    "revision": "4f3e90c845e81b6c2423b58f5d82bbad"
  },
  {
    "url": "tags/nuxt/index.html",
    "revision": "26ab96d9d2d37ccb217aac359c77700b"
  },
  {
    "url": "tags/NuxtJS/index.html",
    "revision": "971b23c32aa6ba7d6d3fc65e05d88285"
  },
  {
    "url": "tags/react/index.html",
    "revision": "af3f975107f857b24c7b425a5c009ccc"
  },
  {
    "url": "tags/react基础加原理教程/index.html",
    "revision": "838c33aa3bed12a79aaffa707e757aa0"
  },
  {
    "url": "tags/react项目实战/index.html",
    "revision": "88009adf8b7e2c4745a58f17d89e5d13"
  },
  {
    "url": "tags/three.js/index.html",
    "revision": "9dacd93f835ec3760d5498e708481dfa"
  },
  {
    "url": "tags/uniapp/index.html",
    "revision": "9c1fab95a72ba2f86c2941e60b87d7b6"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "ac48d59da261d59ea48cbee1ebb0ac50"
  },
  {
    "url": "tags/vue.js/index.html",
    "revision": "c9ee18ee7f37c638527199995e82bc28"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8a6c689c9fbcf5b61e52629833669d65"
  },
  {
    "url": "tags/Vue2.0/index.html",
    "revision": "6b7258a231f19f232e8dd49e54df72ff"
  },
  {
    "url": "tags/vue2/index.html",
    "revision": "0b29ba57b6c3fdbb6d3d99855e7b2ad2"
  },
  {
    "url": "tags/vue3.0.js/index.html",
    "revision": "20c6676f9b8226b22b4f74ffbebd60f4"
  },
  {
    "url": "tags/vue3.0/index.html",
    "revision": "ec3f31216254bf8a5348827b6a5d7f61"
  },
  {
    "url": "tags/vue3.2/index.html",
    "revision": "b6e72d52d8ced9c12024928cc7b7d3f1"
  },
  {
    "url": "tags/vue3+vite+pinia基础/index.html",
    "revision": "c48657cdc7210241b21359bf9c7cd91f"
  },
  {
    "url": "timeline/index.html",
    "revision": "0e8b5d8f6bd4bf7a1b2e0dadc4f76cab"
  },
  {
    "url": "工具下载/life copy 2.html",
    "revision": "5a35a8cdbd11f2a4e1e7e302525d49e8"
  },
  {
    "url": "工具下载/life copy 3.html",
    "revision": "ff2bcee9b41c0f0e1f9734125013de2c"
  },
  {
    "url": "工具下载/life copy 4.html",
    "revision": "3d27349ac2e1d9755d8157c2fb860c0a"
  },
  {
    "url": "工具下载/life copy 5.html",
    "revision": "a1b36b32e26a7961ee6c1f56ca6bab3d"
  },
  {
    "url": "工具下载/life copy 6.html",
    "revision": "6d299451a746c9b645d4645b373b00de"
  },
  {
    "url": "工具下载/life copy 7.html",
    "revision": "45ca322c35c00f2054fa4724c3f1d67e"
  },
  {
    "url": "工具下载/life copy 8.html",
    "revision": "938d45945cf14f547ab1395179d4e685"
  },
  {
    "url": "工具下载/life copy.html",
    "revision": "6a7b6495dffae453b626a53f1f5761a1"
  },
  {
    "url": "工具下载/life.html",
    "revision": "29fda5e9d80863d21f8d761af54d3a87"
  },
  {
    "url": "技术文章/index.html",
    "revision": "9914a968f46eacdf08ed877c56c73f55"
  },
  {
    "url": "技术文章/javascript/javascript.html",
    "revision": "1a46ffae061f127143524dbb896e172c"
  },
  {
    "url": "技术文章/node.js/express.html",
    "revision": "3d98e77704394233a0398747b5347479"
  },
  {
    "url": "技术文章/node.js/koa.html",
    "revision": "370fc51834646d4488e8899f0720b7d0"
  },
  {
    "url": "技术文章/node.js/mysql.html",
    "revision": "f431c71730de93d5e315d836692d9ff2"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js copy.html",
    "revision": "f838de58c7a504b7de168591c8ae1dbf"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js.html",
    "revision": "e1f690fcc40f62b3e487b473ea394147"
  },
  {
    "url": "技术文章/react/react.html",
    "revision": "e8cf3b1dffe718967d572120c8a32d99"
  },
  {
    "url": "技术文章/three.js/three.js.html",
    "revision": "da52e24d2a8562faa101acd044bf4af2"
  },
  {
    "url": "技术文章/three.js/three.js第三人称漫游.html",
    "revision": "bf1e295bee2966d0bb6295d99208e3ad"
  },
  {
    "url": "技术文章/vue.js/javase.html",
    "revision": "ccb2e2301a62d68e2cd219228cf25a9f"
  },
  {
    "url": "技术文章/vue2.0/vue2.0.html",
    "revision": "40f5b149afe957be8a675dcc23494a62"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 - 副本.html",
    "revision": "8f26693b9f2b886fe2e97beaa7638a2a"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 copy.html",
    "revision": "cf63a63d95196101c4ee327c96fd7ab3"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式.html",
    "revision": "a0ce9d2587a176984a2d1834f46aa67f"
  },
  {
    "url": "技术文章/vue2.0/浅谈javascript中的深拷贝和浅拷贝.html",
    "revision": "d35981f1c62c636e91e2bb29ff9b9064"
  },
  {
    "url": "技术文章/vue2.0/认识vue.html",
    "revision": "82d916542b6a148f3fdc0e190ba662f7"
  },
  {
    "url": "技术文章/vue3.0/nuxt3入门.html",
    "revision": "751c5fb3712bf6de13479431fcb4ead8"
  },
  {
    "url": "技术文章/vue3.0/vue3.0.html",
    "revision": "d16f68f91dc929a55b765548b63115be"
  },
  {
    "url": "技术文章/vue3.0/vue3.0ref.html",
    "revision": "0ef0a4a69766beedd93aa113a475fe32"
  },
  {
    "url": "教学视频/life copy 2.html",
    "revision": "e50503bd287a617c9e07c180d2d8b98d"
  },
  {
    "url": "教学视频/life copy 3.html",
    "revision": "d7ed9eb131ed06ccc73176889a7f0e17"
  },
  {
    "url": "教学视频/life copy 4.html",
    "revision": "8e764b36edb8b84a65dda30d862d7a61"
  },
  {
    "url": "教学视频/life copy 5.html",
    "revision": "e6661171772af8d1e3110bec34d3d82b"
  },
  {
    "url": "教学视频/life copy 6.html",
    "revision": "cdcee3fd444cc16085d4f24b04a08145"
  },
  {
    "url": "教学视频/life copy 7.html",
    "revision": "31e8a475ba0e1dc57663a67783987bc9"
  },
  {
    "url": "教学视频/life copy 8.html",
    "revision": "f37b79696ed68dfb33009cb9207a2861"
  },
  {
    "url": "教学视频/life copy 9.html",
    "revision": "309c304a5c8d7b56755814cf2e43ae6d"
  },
  {
    "url": "教学视频/life copy.html",
    "revision": "714f8a7c25338c08e34b305e9111a562"
  },
  {
    "url": "教学视频/life.html",
    "revision": "d788c2aef883bfca32f3be6f575e6df8"
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
