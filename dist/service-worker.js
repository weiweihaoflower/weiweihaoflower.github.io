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
    "revision": "88c3809b0afe0f9a498a52a15da4ff99"
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
    "url": "assets/js/11.e54fad52.js",
    "revision": "26a0a037131ebcfeb36436ef3382e56c"
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
    "url": "assets/js/14.25034a25.js",
    "revision": "269691681c224212ce30766e50b67e99"
  },
  {
    "url": "assets/js/15.45a39767.js",
    "revision": "33e571b9e132faab2df3f5b6dc4ad6bb"
  },
  {
    "url": "assets/js/16.c9a73161.js",
    "revision": "6f4e56c7b9aaaceababa95d4635dca7d"
  },
  {
    "url": "assets/js/17.b5084362.js",
    "revision": "59500645dc4602f1583a5085d29e7705"
  },
  {
    "url": "assets/js/18.7379c1d4.js",
    "revision": "c446d6fde69b4e1025cb5bb750818df1"
  },
  {
    "url": "assets/js/19.3b398381.js",
    "revision": "48961e796595bee1e1b86b28c9b4c225"
  },
  {
    "url": "assets/js/20.b331a18b.js",
    "revision": "443c9582da550c34b85ef8d5acbffde1"
  },
  {
    "url": "assets/js/21.14a95765.js",
    "revision": "00d4ec20760a757dacd7811e94fa24b4"
  },
  {
    "url": "assets/js/22.dc7b1eca.js",
    "revision": "4b87df7bf7036ba4583fd30861fca64c"
  },
  {
    "url": "assets/js/23.63660300.js",
    "revision": "2e835519c61c0e7219d37117ed62fc9a"
  },
  {
    "url": "assets/js/24.7ed7920c.js",
    "revision": "dc159043d56df5396f12d2a23b94193c"
  },
  {
    "url": "assets/js/25.0a191c12.js",
    "revision": "156985f3485601d8eae6c091c95bf69e"
  },
  {
    "url": "assets/js/26.6285e711.js",
    "revision": "bf6ca0373d137f8174937109f4c01588"
  },
  {
    "url": "assets/js/27.420ff230.js",
    "revision": "1f1aeb4dfebfaf850b15e019cbce332b"
  },
  {
    "url": "assets/js/28.333ecc15.js",
    "revision": "861e9c4a50f7cf216603d6c4cc277b74"
  },
  {
    "url": "assets/js/29.d7525b3f.js",
    "revision": "012dd6349ce7ccf40251dbf957dc2c0c"
  },
  {
    "url": "assets/js/30.46a4e7ca.js",
    "revision": "788f4edccc6d4025f59036f59b26d62e"
  },
  {
    "url": "assets/js/31.af6011ca.js",
    "revision": "05243d9271e7f0299c4323fffaa81865"
  },
  {
    "url": "assets/js/32.0d058822.js",
    "revision": "a0d43e14c81e431d8c074e7cfb45743b"
  },
  {
    "url": "assets/js/33.3caf8219.js",
    "revision": "51fee4bfde620727b815f47a7111abba"
  },
  {
    "url": "assets/js/34.6ea89593.js",
    "revision": "c257e142cc3e6407092010a0dd9080fb"
  },
  {
    "url": "assets/js/35.148d8836.js",
    "revision": "46cfd4fafd9bdca61add88051c8cd4a1"
  },
  {
    "url": "assets/js/4.2e0730c5.js",
    "revision": "49dfe2b674ca1fb5e2ac48059c9703fc"
  },
  {
    "url": "assets/js/5.0c98980d.js",
    "revision": "b9d96a147090548206d9a93fa5196ece"
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
    "url": "assets/js/app.43fa3c9e.js",
    "revision": "2413676ba9736d3251eb6121a4a82dee"
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
    "revision": "9d835d8fae4fdac73b0229ff95254154"
  },
  {
    "url": "categories/Adobe Illustrator CS6/index.html",
    "revision": "f6fe5fb0b2c1f066a2c9ba14a2de7c24"
  },
  {
    "url": "categories/Adobe pr/index.html",
    "revision": "20aac3df7d2114025ded6af27d3ef1cb"
  },
  {
    "url": "categories/Adobe ps/index.html",
    "revision": "3ab32983db744cf5221852ebd75a98e1"
  },
  {
    "url": "categories/axure8/index.html",
    "revision": "6cfcc286fa25d4f2126d65ee895547f9"
  },
  {
    "url": "categories/index.html",
    "revision": "e0bebdf3598e285e58f4a886f84bbb62"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "fd85492ea99abaf48ba3ecab94545b4c"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "1d1e701044654434d267110a2d8fd444"
  },
  {
    "url": "categories/node.js/index.html",
    "revision": "5cdbe0689a63fba947db08dd21d53ad4"
  },
  {
    "url": "categories/react/index.html",
    "revision": "c618eb03b837abee51276959c2f192a0"
  },
  {
    "url": "categories/three.js/index.html",
    "revision": "3da17a6b75c403e4f32d84ee9f3406ce"
  },
  {
    "url": "categories/three.js基础/index.html",
    "revision": "7d15ee090957716885801c8ba09e13d4"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "b9a1e00b660aa2609aeade1aad705688"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "fba3b07d9f634d81991d26525a8e2422"
  },
  {
    "url": "categories/vue3.0/index.html",
    "revision": "25a854aa7b0164834684ff8bca60a8f9"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "47663874c3bd49c00d2d1edd766752fc"
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
    "revision": "44b49920fecaac2febbe43c18deec4b4"
  },
  {
    "url": "js/custom.js",
    "revision": "f5494e08d3dc2634c7ceda60f85c97c1"
  },
  {
    "url": "tag/index.html",
    "revision": "2a60788e509fd4c9f9bf130bccd1168f"
  },
  {
    "url": "tags/Adobe ae/index.html",
    "revision": "82062b2500978eaa7933573d21e27e37"
  },
  {
    "url": "tags/Adobe Illustrator CS6/index.html",
    "revision": "d7f350f68c76b2b5e9c77123e47de0f3"
  },
  {
    "url": "tags/Adobe pr/index.html",
    "revision": "22703282b538da0a5c7df5411090d334"
  },
  {
    "url": "tags/Adobe ps/index.html",
    "revision": "b63acf62b90335683b5f5bc0eff04953"
  },
  {
    "url": "tags/axure8.0/index.html",
    "revision": "06fcba3883de48609a53f5be1d3a22de"
  },
  {
    "url": "tags/Cesium.js/index.html",
    "revision": "fffba5afcefd72eac1c58fce5c9e40f9"
  },
  {
    "url": "tags/express/index.html",
    "revision": "b4bbcee6aaf44e3eab3408ccaf1e3b6c"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "1667871417c785dc97b66bc79b203dc7"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "e76c9f8551c984b7ec78567bb2f5bde8"
  },
  {
    "url": "tags/navicat/index.html",
    "revision": "7dfd2f11fe7a63e532b8c8ce67a134bc"
  },
  {
    "url": "tags/node.js/index.html",
    "revision": "bab2a0d98bdd3f8c07f286001b1bf87a"
  },
  {
    "url": "tags/node.js框架/index.html",
    "revision": "35a5adaf8e4bd033c79fe52cf8cb3041"
  },
  {
    "url": "tags/react/index.html",
    "revision": "1dd4998545d83253a319f3b0ed2b6e73"
  },
  {
    "url": "tags/three.js/index.html",
    "revision": "fcf8d745a4a52cd4022190189069085a"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "8ef2a3da25aa9ca76f4da5bc6433e309"
  },
  {
    "url": "tags/vue.js/index.html",
    "revision": "4804392ed0a6a733a7d09fb4266bcc45"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "87b81c8723f8c022ecd907592f0a69a7"
  },
  {
    "url": "tags/vue3.0.js/index.html",
    "revision": "5479224788860a2a9e62b47030794638"
  },
  {
    "url": "tags/vue3.0/index.html",
    "revision": "512787d2cc67e21ceae533df6b2f2b38"
  },
  {
    "url": "timeline/index.html",
    "revision": "16194186834d9655081c0a2801905b66"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "工具下载/life copy 2.html",
    "revision": "1e15a5fd30e783be7768992acbddc1f8"
  },
  {
    "url": "工具下载/life copy 3.html",
    "revision": "a34035f68942de876cbab8072fcb7a64"
  },
  {
    "url": "工具下载/life copy 4.html",
    "revision": "daeef4cd7c3523b587a0d47e7acd4ec4"
  },
  {
    "url": "工具下载/life copy 5.html",
    "revision": "1b79bed251d7465f04ddedac1524a055"
  },
  {
    "url": "工具下载/life copy 6.html",
    "revision": "1c9f0f4632ccac25af4e20edcbb2877e"
  },
  {
    "url": "工具下载/life copy 7.html",
    "revision": "3083e11bc7491047438f46dd9abac62e"
  },
  {
    "url": "工具下载/life copy.html",
    "revision": "69d8daacd87d12c7810245fd10fe69bf"
  },
  {
    "url": "工具下载/life.html",
    "revision": "8128a77c4ee038438fc6c71226dcb5eb"
  },
  {
    "url": "技术文章/index.html",
    "revision": "6bee0119cc02565604a5a9f06ab81e40"
  },
  {
    "url": "技术文章/node.js/express.html",
    "revision": "dbba7b1fc9eaa846aa51fc1f15dbb1e5"
  },
  {
    "url": "技术文章/node.js/koa.html",
    "revision": "a98ed59eafa7fa9c1e1699ee08ac8c31"
  },
  {
    "url": "技术文章/node.js/mysql.html",
    "revision": "5ab794c9ce598e81d15c5cf79e8cb47c"
  },
  {
    "url": "技术文章/react/react.html",
    "revision": "f07dca1fa0f6f301cfd02c320e41ccff"
  },
  {
    "url": "技术文章/three.js/three.js.html",
    "revision": "2b740898b0484ed3597cc5ab6b81ac27"
  },
  {
    "url": "技术文章/three.js/three.js第三人称漫游.html",
    "revision": "ff51d0d83400c044eeec195fd92a007e"
  },
  {
    "url": "技术文章/vue.js/javase.html",
    "revision": "babab244139a04f0e4b40e9dd14af67b"
  },
  {
    "url": "技术文章/vue2.0/vue2.0.html",
    "revision": "afaea48b19b162e68a795925b1c08aea"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 - 副本.html",
    "revision": "8e29bb80a0cfa3c6d5dc9117eab5b7e7"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式.html",
    "revision": "9ac14baa1e5bb5982d51c85db4938f96"
  },
  {
    "url": "技术文章/vue2.0/浅谈javascript中的深拷贝和浅拷贝.html",
    "revision": "c8ea02e1fbef223d74679aa5e9546908"
  },
  {
    "url": "技术文章/vue3.0/vue3.0.html",
    "revision": "eda2db0eb34b750c024b1e9654f979f5"
  },
  {
    "url": "技术文章/vue3.0/vue3.0ref.html",
    "revision": "7f68f58b6b5cb9fddfff1a8d329efcef"
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
