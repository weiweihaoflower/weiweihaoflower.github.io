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
    "revision": "15eebbaa2bf013fcc282eaa25cf280b6"
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
    "url": "assets/js/14.5aab049b.js",
    "revision": "0e9eb63c4f4634471dac30fa31da2dc2"
  },
  {
    "url": "assets/js/15.e9d940f6.js",
    "revision": "61fb3520173398ac9437b64d69bae809"
  },
  {
    "url": "assets/js/16.24761e0d.js",
    "revision": "4c0aef70d52c77cd8c871af7657dddb4"
  },
  {
    "url": "assets/js/17.bd6b0bf3.js",
    "revision": "69dfc52bc0e9272046cbdddad4f35013"
  },
  {
    "url": "assets/js/18.d1419149.js",
    "revision": "35f11e5ba05db06f2f299dee7231698f"
  },
  {
    "url": "assets/js/19.b6ac9d4a.js",
    "revision": "f46cd3e103a75c16ab6cc433227dacea"
  },
  {
    "url": "assets/js/20.ed451e81.js",
    "revision": "90c7ecd0de893e5cebc0c3a6a5eb2573"
  },
  {
    "url": "assets/js/21.910ccde2.js",
    "revision": "e0c1f17bf73e90d5d1d693a89796ae3f"
  },
  {
    "url": "assets/js/22.e4a1e4f4.js",
    "revision": "64260c48621989d1684cf6461049a058"
  },
  {
    "url": "assets/js/23.bb43ecbe.js",
    "revision": "f20ab48a76207167cfe79c6173ea2f18"
  },
  {
    "url": "assets/js/24.1f0028d0.js",
    "revision": "55b29b896c6efcee70dad42c1fd18137"
  },
  {
    "url": "assets/js/25.169b0bcd.js",
    "revision": "fbf5a99d4d9e62a72167afb5cf8834a4"
  },
  {
    "url": "assets/js/26.e45834cf.js",
    "revision": "36ae26a4d179c55a7d85639f0d282a12"
  },
  {
    "url": "assets/js/27.aa664c4a.js",
    "revision": "5fc8d7e92460243a6561dfc7998ab148"
  },
  {
    "url": "assets/js/28.74d2655b.js",
    "revision": "6fd74fb6a91a31bd3e9b398dcc82d5dd"
  },
  {
    "url": "assets/js/29.3e3a506d.js",
    "revision": "23d0c318f8810266f8e7bb20c33cb434"
  },
  {
    "url": "assets/js/30.785731db.js",
    "revision": "f1f8f113b2d29aa5d76da705690833ba"
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
    "url": "assets/js/34.3f6268f7.js",
    "revision": "b45c3704256b439c7eb38dd36ac9a44d"
  },
  {
    "url": "assets/js/35.173889bd.js",
    "revision": "c02e5d945b396d251cd723d41d7559e6"
  },
  {
    "url": "assets/js/36.b9d2c611.js",
    "revision": "5f74def2f49d3521c955fa6ea0004c97"
  },
  {
    "url": "assets/js/37.4f25943a.js",
    "revision": "cb6d9a8f9616dc3620504dc24de215d1"
  },
  {
    "url": "assets/js/38.8c775759.js",
    "revision": "84d9c6afb641fc9fdfd7063adf20e4aa"
  },
  {
    "url": "assets/js/39.2f86cbf1.js",
    "revision": "04f609e3d5804a9ece8f25b4dfb14b2b"
  },
  {
    "url": "assets/js/4.2e0730c5.js",
    "revision": "49dfe2b674ca1fb5e2ac48059c9703fc"
  },
  {
    "url": "assets/js/40.ef88cff0.js",
    "revision": "0b0dfe164e5ccec0df3f67ab1f4c8eef"
  },
  {
    "url": "assets/js/41.17377081.js",
    "revision": "b9a7ece1f96fdba9a4880095e1f271d3"
  },
  {
    "url": "assets/js/42.9bf7db6e.js",
    "revision": "fa71fe64c6dccf7e90b0021637ef7d09"
  },
  {
    "url": "assets/js/43.d5d27474.js",
    "revision": "71c57129f111d02003c8d4b88369d4ba"
  },
  {
    "url": "assets/js/44.8f2c320a.js",
    "revision": "1c3f7d87b17ae7bd27aeadc210d13bd9"
  },
  {
    "url": "assets/js/45.dc958590.js",
    "revision": "7332dbc002d3186b197fd3d5e695aab1"
  },
  {
    "url": "assets/js/46.05abb664.js",
    "revision": "2cabd78392d95d85ab5305e457401941"
  },
  {
    "url": "assets/js/47.5ec2d98a.js",
    "revision": "12479dfa35663f2385ad721a5f649bd8"
  },
  {
    "url": "assets/js/48.0186471d.js",
    "revision": "8d08670c3e79b33f62fba1d73d4756a8"
  },
  {
    "url": "assets/js/49.9bf0105c.js",
    "revision": "2b47b709311d3390d262ff5448fcd758"
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
    "url": "assets/js/52.1df7067d.js",
    "revision": "b3846e25351005109f29bc32169c49c4"
  },
  {
    "url": "assets/js/53.9b04b845.js",
    "revision": "59e856faf5cac6b61d56913a6f5e5a35"
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
    "url": "assets/js/56.b65a3588.js",
    "revision": "72c77cac9c3f79f012e3be84ced78d6a"
  },
  {
    "url": "assets/js/57.063c35ca.js",
    "revision": "ba8200da0f353c2c54a6089956968720"
  },
  {
    "url": "assets/js/58.187344aa.js",
    "revision": "274ea45ba4b76d7afd583dfd64fd49e8"
  },
  {
    "url": "assets/js/59.ee74b0ef.js",
    "revision": "c0c1ff13f97a264e17812bbb27c19a25"
  },
  {
    "url": "assets/js/6.40fece1c.js",
    "revision": "36695367ee4859a08a01058a6c3ac770"
  },
  {
    "url": "assets/js/60.3c962dd1.js",
    "revision": "ab9f2716bf8f4d6e8c2b94eec63490d2"
  },
  {
    "url": "assets/js/61.f91fc21f.js",
    "revision": "cfa4d7e82cfcf0351e74cfd019a01436"
  },
  {
    "url": "assets/js/62.d3aa7cc2.js",
    "revision": "f4a5574551a2d9862a990034e00fbfef"
  },
  {
    "url": "assets/js/63.2ba23052.js",
    "revision": "990c523052ac1247ff890a82e7baa27d"
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
    "url": "assets/js/app.79fdbf8c.js",
    "revision": "8d7ce49d0ac25bf54c45b42f07903d59"
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
    "revision": "404a05473281bc69b9df74fbccce2c23"
  },
  {
    "url": "categories/Adobe Illustrator CS6/index.html",
    "revision": "0a99484d7205bdd85359a9c525733999"
  },
  {
    "url": "categories/Adobe pr/index.html",
    "revision": "b87ad96b71030d3fddc2f74aad8048b4"
  },
  {
    "url": "categories/Adobe PS CS6下载地址/index.html",
    "revision": "a3fba2a0e863907e42c3f98b4026fc3e"
  },
  {
    "url": "categories/Adobe ps/index.html",
    "revision": "4488578d8776fe933dbe9b004368a173"
  },
  {
    "url": "categories/axure8/index.html",
    "revision": "e1e6c3a25d095f913d82e4b978471388"
  },
  {
    "url": "categories/Express/index.html",
    "revision": "cf13c18eb759415e5255295ff42340df"
  },
  {
    "url": "categories/index.html",
    "revision": "6e14fe7a35af41e3a0c3c8e3ea4b639e"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "48017ee2d1d69bbe353a69d8c1c41896"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "8d54b22ce574189ec590838980d63159"
  },
  {
    "url": "categories/node.js/index.html",
    "revision": "0a0a78a1d1cc2a095ef6d9a754b283ea"
  },
  {
    "url": "categories/nuxt/index.html",
    "revision": "a1c2a4213bbfeadaa317bbb40d866648"
  },
  {
    "url": "categories/NuxtJS/index.html",
    "revision": "0987555a3256641682ae01d3fc485a85"
  },
  {
    "url": "categories/panjiachen博客/index.html",
    "revision": "95fab1b82cbfad6c1b6eab3f1d066bad"
  },
  {
    "url": "categories/react/index.html",
    "revision": "5ee671a1bc78a4befecad6da54e58697"
  },
  {
    "url": "categories/react18项目/index.html",
    "revision": "b6840c3ef579126de81340e61eb108ea"
  },
  {
    "url": "categories/react基础加原理教程/index.html",
    "revision": "05062740b85efc10a284a41139ca22f3"
  },
  {
    "url": "categories/react项目实战/index.html",
    "revision": "d23adce078e8e9f0d4128480fc8ba7f5"
  },
  {
    "url": "categories/three.js/index.html",
    "revision": "17e7d235d90895c00e79e510828215cc"
  },
  {
    "url": "categories/three.js基础/index.html",
    "revision": "ed226cf4cd35b1a16bfb2b2fd3174b09"
  },
  {
    "url": "categories/uniapp/index.html",
    "revision": "a5979d51db72d03931c1098933bea920"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "894cec5740a652496f43ebf9df12a38c"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "19dbe47d93c1584cbbfdf71fed7f5f02"
  },
  {
    "url": "categories/Vue2.0/index.html",
    "revision": "dd04fe2ac341e3c5ac27f8ba6cf8e2d6"
  },
  {
    "url": "categories/vue2/index.html",
    "revision": "b4b9ccbc38d8d0a6e43d9e1633437913"
  },
  {
    "url": "categories/vue2项目/index.html",
    "revision": "01cfbe3b5529581c6a677481a89d4f1b"
  },
  {
    "url": "categories/vue3.0/index.html",
    "revision": "7e49773c331e768f3a9878c7ac7e96a1"
  },
  {
    "url": "categories/vue3.2/index.html",
    "revision": "8e13fddc7d4f811b30da4991a23b91b9"
  },
  {
    "url": "categories/vue3/index.html",
    "revision": "f28a990730c5b7347437f91ae4a88ce4"
  },
  {
    "url": "categories/vue3+vite+pinia基础/index.html",
    "revision": "56f37e84342cda0e330351fd9bfa9440"
  },
  {
    "url": "categories/vue3项目/index.html",
    "revision": "99295884786a3eaf4835327cb888cf07"
  },
  {
    "url": "categories/网站抓取精灵/index.html",
    "revision": "7d154191bdb1c5c537169bd1bdd87755"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "6cab837380540548a7c230f5de2cee45"
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
    "revision": "5fbb06be7122a64696ff5fd3dd3cee67"
  },
  {
    "url": "js/custom.js",
    "revision": "f5494e08d3dc2634c7ceda60f85c97c1"
  },
  {
    "url": "tag/index.html",
    "revision": "e3b959107ffa06f5e37bc31754600319"
  },
  {
    "url": "tags/Adobe ae/index.html",
    "revision": "a597829d505399730986a6d1a533484e"
  },
  {
    "url": "tags/Adobe Illustrator CS6/index.html",
    "revision": "592207f4080bb3b6294f3bcc46f589b5"
  },
  {
    "url": "tags/Adobe pr/index.html",
    "revision": "3b88cda1a47754bd83328026fb229f7b"
  },
  {
    "url": "tags/Adobe PS CS6下载地址/index.html",
    "revision": "c9824ccb8b9cf7836cc2b3e051dc09c9"
  },
  {
    "url": "tags/Adobe ps/index.html",
    "revision": "072985cece9cde030a913d5300360159"
  },
  {
    "url": "tags/axure8.0/index.html",
    "revision": "da4adb874fb30a486b05fddeafc029fb"
  },
  {
    "url": "tags/Cesium.js/index.html",
    "revision": "7df3525371895e39fd7d7540f9d15310"
  },
  {
    "url": "tags/express/index.html",
    "revision": "ab4b088d4abc225138a5b371d34cb0b9"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "b72ba0f68f24360600f0e98b5cced4fd"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "9f8dcb399d5bbccff9e5e258bc28b8a4"
  },
  {
    "url": "tags/navicat/index.html",
    "revision": "4a6f1b9cee3bd85bca2c9b852ab537f6"
  },
  {
    "url": "tags/node.js/index.html",
    "revision": "989f28dc7097eea0fc6d4e783fa396a8"
  },
  {
    "url": "tags/node.js框架/index.html",
    "revision": "d62a439e8c3f594e549e80af9df5577a"
  },
  {
    "url": "tags/nuxt.js/index.html",
    "revision": "a0d69c660ce4280a118df4fef2296d9b"
  },
  {
    "url": "tags/nuxt/index.html",
    "revision": "65e8e443eb263d3b05a16c5517127060"
  },
  {
    "url": "tags/NuxtJS/index.html",
    "revision": "f7ebcd4f19ada946a9f76823890a254c"
  },
  {
    "url": "tags/panjiachen博客/index.html",
    "revision": "22fe5c0888b73271ef4ba25ced1e53d2"
  },
  {
    "url": "tags/react/index.html",
    "revision": "588c7a52caf22edc1d0bcc054670dd04"
  },
  {
    "url": "tags/react18/index.html",
    "revision": "583f34314dd4b689076acd6146b3cbf2"
  },
  {
    "url": "tags/react18项目/index.html",
    "revision": "6ea68bc1a5d45eee3d581937826d5f59"
  },
  {
    "url": "tags/react基础加原理教程/index.html",
    "revision": "ead31e4a9e9d9481903bd17b7dc40f0e"
  },
  {
    "url": "tags/react项目实战/index.html",
    "revision": "66ccf360504724a20b76dd568053c367"
  },
  {
    "url": "tags/three.js/index.html",
    "revision": "3a4320be8536775c2c5431d75d96c8c9"
  },
  {
    "url": "tags/uniapp/index.html",
    "revision": "4fec118cd914780254ab03a29d9852db"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "241bf7ecf09636b0d4df7968730eba12"
  },
  {
    "url": "tags/vue.js/index.html",
    "revision": "cebf819e2add170586ee5c3ddd44fd8a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "96291f82c1de2c501db61208115f9ad5"
  },
  {
    "url": "tags/Vue2.0/index.html",
    "revision": "31293e51eaa713927d9b1003aca29d9d"
  },
  {
    "url": "tags/vue2/index.html",
    "revision": "288029b16de82e34aa71ca70b889a7da"
  },
  {
    "url": "tags/vue2后台管理系统/index.html",
    "revision": "585d57829ae4154d060af65cbefa8dbd"
  },
  {
    "url": "tags/vue2项目/index.html",
    "revision": "6f2b54481db0a176effe405bfdb08ca4"
  },
  {
    "url": "tags/vue3.0.js/index.html",
    "revision": "12bfc18049fe4d7483579f38e164a5cd"
  },
  {
    "url": "tags/vue3.0/index.html",
    "revision": "7f9649108d1bae9e2e4e5870c663eab5"
  },
  {
    "url": "tags/vue3.2/index.html",
    "revision": "572caab24146cce25b2f3ceab0fa2552"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "79d5edb6ae51e83f830efd07363af290"
  },
  {
    "url": "tags/vue3+vite+pinia基础/index.html",
    "revision": "aab45cdb05d9138d762533ebce97799c"
  },
  {
    "url": "tags/Vue3后台管理系统/index.html",
    "revision": "2618e445c773e0f2ea11626a6038e935"
  },
  {
    "url": "tags/vue3精简后台管理模板项目/index.html",
    "revision": "8994ffac2092b02dc2ee85feadc55676"
  },
  {
    "url": "tags/vue3项目/index.html",
    "revision": "a159708e53e6d628f23453c753ce05e6"
  },
  {
    "url": "tags/优秀博主博客项目模板推荐/index.html",
    "revision": "9d543c486acab045283647341b9202d3"
  },
  {
    "url": "tags/网站抓取js html css/index.html",
    "revision": "dbb458e2bb48d497a8ad816ad720da82"
  },
  {
    "url": "tags/网站抓取精灵/index.html",
    "revision": "02bb4db0520bb9ee424b5526a9bbf39e"
  },
  {
    "url": "timeline/index.html",
    "revision": "49c6978d077fc69173d6648677f2f9a6"
  },
  {
    "url": "优秀项目/life copy 2.html",
    "revision": "131fe8663456279071d8b626ee638b7d"
  },
  {
    "url": "优秀项目/life copy.html",
    "revision": "3f7e2b9a06949a2a8aa4aad80857e831"
  },
  {
    "url": "优秀项目/life.html",
    "revision": "d4bd652958d3944711d7238077f0072c"
  },
  {
    "url": "优秀项目/react18后台管理系统.html",
    "revision": "3ce294fc182b0ac8d98676de141df347"
  },
  {
    "url": "优秀项目/vue2电商网站.html",
    "revision": "5dd5d02ae381950eac1d68fe6a3c8ee0"
  },
  {
    "url": "优秀项目/vue3+ts腾讯课堂.html",
    "revision": "dd8979ab2f382908027ceb65360c01b9"
  },
  {
    "url": "优秀项目/尚硅谷尚品汇vue2后台管理.html",
    "revision": "f710d899c3f37c34e80fa9b497a9a1e9"
  },
  {
    "url": "优秀项目/尚硅谷尚品汇vue3+ts后台管理 copy.html",
    "revision": "8810ec17fc38e3c836a5247826ee6433"
  },
  {
    "url": "优秀项目/黑马头条vue2后台管理 copy.html",
    "revision": "1a59c0638f46653f86f0955101f53281"
  },
  {
    "url": "优秀项目/黑马电商vue2shop后台管理 copy 2.html",
    "revision": "46f4a558d5e2f53ad975353176b2e85b"
  },
  {
    "url": "工具下载/life copy 2.html",
    "revision": "25c899580d1dc73016b091e5672016e6"
  },
  {
    "url": "工具下载/life copy 3.html",
    "revision": "0fc5f5fee42941d9b696c91252a02759"
  },
  {
    "url": "工具下载/life copy 4.html",
    "revision": "2cf51f794d236a3b100cf342560bf777"
  },
  {
    "url": "工具下载/life copy 5.html",
    "revision": "6aa82dfdc14332dba5f53d2832ad7484"
  },
  {
    "url": "工具下载/life copy 6.html",
    "revision": "e89508901f604cde6ea58da0f6f165ba"
  },
  {
    "url": "工具下载/life copy 7.html",
    "revision": "e476b7d04f30320846e568dcddda48bc"
  },
  {
    "url": "工具下载/life copy.html",
    "revision": "f8b8e7e12a5af999e293a056d93ae85d"
  },
  {
    "url": "工具下载/life.html",
    "revision": "8082621c8f3622471fccadbc1dcb9a63"
  },
  {
    "url": "工具下载/ps.html",
    "revision": "c478965e198347ba641be7605174677b"
  },
  {
    "url": "工具下载/网站抓取精灵.html",
    "revision": "39b18e8c1d0969918bc6498b31cb3f5f"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e8df4b8675ec4af90223d7e1cfa77613"
  },
  {
    "url": "技术文章/javascript/javascript.html",
    "revision": "404d0264491c48c016d44c94d1caeb8a"
  },
  {
    "url": "技术文章/node.js/express.html",
    "revision": "499ff7a012d0aba0239ad3bdc30ca27c"
  },
  {
    "url": "技术文章/node.js/koa.html",
    "revision": "75ea623b6833e486031793830864f754"
  },
  {
    "url": "技术文章/node.js/mysql.html",
    "revision": "a666c6ed435bae2a7ea378abdeca1c06"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js copy.html",
    "revision": "f0b7232b0be6db3394194283337c0282"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js.html",
    "revision": "c9d01c3b8aeb2af1207fc757694ede89"
  },
  {
    "url": "技术文章/react/react.html",
    "revision": "be7a8f6570f1b6bb9abdf233616b1fdf"
  },
  {
    "url": "技术文章/three.js/three.js.html",
    "revision": "879856bbeb5fce43336419e82757a54d"
  },
  {
    "url": "技术文章/three.js/three.js第三人称漫游.html",
    "revision": "9e399a153c276d2bebbe23cc87df8c9c"
  },
  {
    "url": "技术文章/vue.js/javase.html",
    "revision": "d534319499e93d5be0714b16971e2641"
  },
  {
    "url": "技术文章/vue2.0/vue2.0.html",
    "revision": "302d29e82a4b615eacba338dc5c74895"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 - 副本.html",
    "revision": "d43125befa3ad7b91b0c0fab12b7522b"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 copy.html",
    "revision": "e4463a66705093bab181e8b6b81b74d0"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式.html",
    "revision": "b8c0622547f152ac96afce609b969cfb"
  },
  {
    "url": "技术文章/vue2.0/浅谈javascript中的深拷贝和浅拷贝.html",
    "revision": "2bb29c7d3778bbd1db7985d08cac2493"
  },
  {
    "url": "技术文章/vue2.0/认识vue.html",
    "revision": "6bcb56ed3897c2da7c0694653bdab93d"
  },
  {
    "url": "技术文章/vue3.0/nuxt3入门.html",
    "revision": "cc261fb7757b60054015c6114d454b94"
  },
  {
    "url": "技术文章/vue3.0/vue3.0.html",
    "revision": "06b575f88c62c0b56bc8f0647039b0e7"
  },
  {
    "url": "技术文章/vue3.0/vue3.0ref.html",
    "revision": "cb80327d773409ce6f6ad924bfa2c362"
  },
  {
    "url": "教学视频/life copy 2.html",
    "revision": "d28fb7b2679541a04219294cf7455ab0"
  },
  {
    "url": "教学视频/life copy 3.html",
    "revision": "0d544b98da5d684f3b2ad7d93d2d858f"
  },
  {
    "url": "教学视频/life copy 4.html",
    "revision": "8774dec9f975c9f3ff2cf531d79cc0e7"
  },
  {
    "url": "教学视频/life copy 5.html",
    "revision": "532cac6d29d27268da36eb479c1b8418"
  },
  {
    "url": "教学视频/life copy 6.html",
    "revision": "9b3ec5ac6f0767902b708d85dbdcba81"
  },
  {
    "url": "教学视频/life copy 7.html",
    "revision": "f1c4d67bc0df88d87a8a0a2cafc39792"
  },
  {
    "url": "教学视频/life copy 8.html",
    "revision": "4b061da6a06afffd87e9063a901e7c1c"
  },
  {
    "url": "教学视频/life copy 9.html",
    "revision": "bfd8f147d470106fe7dbebda5008d5c0"
  },
  {
    "url": "教学视频/life copy.html",
    "revision": "df79f9916ff29f5aeff73957a1a9858d"
  },
  {
    "url": "教学视频/life.html",
    "revision": "cd240e1cc67e4c2a26defc0d8ddb9e24"
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
