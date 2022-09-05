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
    "revision": "dd2692320daacd0d3252e723611e1fd8"
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
    "url": "assets/js/11.68ec98b5.js",
    "revision": "6a2625a16070503310aaff1ce22c5b42"
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
    "url": "assets/js/14.39a64a82.js",
    "revision": "5980be237438995c7ea6aa1f8b2c92f9"
  },
  {
    "url": "assets/js/15.8f905a69.js",
    "revision": "3de207dcbab143aa03a6cae65503315c"
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
    "url": "assets/js/18.beab8237.js",
    "revision": "9a0f3d154cb14695fbe6af01bff595a5"
  },
  {
    "url": "assets/js/19.3b398381.js",
    "revision": "48961e796595bee1e1b86b28c9b4c225"
  },
  {
    "url": "assets/js/20.8a773885.js",
    "revision": "cc8a7b21a3dd1fb69ccb6c74216ff8d4"
  },
  {
    "url": "assets/js/21.90032a82.js",
    "revision": "303c07550fe5a82b506e4d8ef7aa7332"
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
    "url": "assets/js/24.f9740852.js",
    "revision": "7a878260f764f7987edbcfb3be7c90fb"
  },
  {
    "url": "assets/js/25.02d3cd8d.js",
    "revision": "48c4f029a2edc9a7e88426728194e78e"
  },
  {
    "url": "assets/js/26.5677f0a8.js",
    "revision": "c7ae8e4fbf334fc9f4500f30487d16b1"
  },
  {
    "url": "assets/js/27.99a7ed6b.js",
    "revision": "9e101be1363536bda8e009fd82c28c51"
  },
  {
    "url": "assets/js/28.f1dc9d48.js",
    "revision": "2154496c8d3e851643cc63d825c1f240"
  },
  {
    "url": "assets/js/29.8b31245e.js",
    "revision": "5eaf0b46f17f6558810a4035c2d07b50"
  },
  {
    "url": "assets/js/30.b0d8aa77.js",
    "revision": "fbfd8c53dc80568848dfc75694094228"
  },
  {
    "url": "assets/js/31.c54e6069.js",
    "revision": "9b1f2c78acbf9d9cc71c330fa3631d01"
  },
  {
    "url": "assets/js/32.fe15b1ff.js",
    "revision": "15277511f1bee7f8ce17db51629075a0"
  },
  {
    "url": "assets/js/33.fc7cd8f0.js",
    "revision": "714a031aeceb9edbdc56fa9aa8e0db29"
  },
  {
    "url": "assets/js/34.2946da98.js",
    "revision": "59909ad4527d65584753752f93a16278"
  },
  {
    "url": "assets/js/35.a0870163.js",
    "revision": "390545d62bb266ce98079941329e86f4"
  },
  {
    "url": "assets/js/36.5643e831.js",
    "revision": "8203d84a1d8aa3846c59f6451cbbd4ae"
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
    "url": "assets/js/app.4e2e1d4b.js",
    "revision": "c607c56ddaefa26bfc40098a278f322e"
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
    "revision": "0606e4a23c338fdbd2b906b66a3466ee"
  },
  {
    "url": "categories/Adobe Illustrator CS6/index.html",
    "revision": "22936fcfef1c7600bb7942184e086bd5"
  },
  {
    "url": "categories/Adobe pr/index.html",
    "revision": "f21d332ace978ecf61dde08383f0442e"
  },
  {
    "url": "categories/Adobe ps/index.html",
    "revision": "d8a032fef7a014b01e474c00b6ab99c8"
  },
  {
    "url": "categories/axure8/index.html",
    "revision": "fba91e8b51053a72ffd2f6022410bd02"
  },
  {
    "url": "categories/index.html",
    "revision": "7bfbf96e53c3af27e06312f6a63f24be"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "d3fff344a655b0ac02de7c0f6191f475"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "6e53eb8d3f819a8d6071aee6b2af174a"
  },
  {
    "url": "categories/node.js/index.html",
    "revision": "d114cd18ecf7786dba9942566c1ac0a2"
  },
  {
    "url": "categories/react/index.html",
    "revision": "6fc3d79b57138a97b7a6f2ddcdaac435"
  },
  {
    "url": "categories/three.js/index.html",
    "revision": "e196b57a9adc3345a58ea59540c4e34b"
  },
  {
    "url": "categories/three.js基础/index.html",
    "revision": "40090ae8d6d316cc1a23eaeef2ca4073"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "e3728eb6b20ba67fb9d81b21ef30a775"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "883776a9fa48ff9bb575252aba6d3844"
  },
  {
    "url": "categories/vue3.0/index.html",
    "revision": "29f66f8324ac4bae7029e9732745c1d8"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "bdd1f07d31f2a093b842b3118f296cba"
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
    "revision": "8cb3383531521110e6116fd6eaa29f47"
  },
  {
    "url": "js/custom.js",
    "revision": "f5494e08d3dc2634c7ceda60f85c97c1"
  },
  {
    "url": "tag/index.html",
    "revision": "9da3f0584304765a6e15fb1becd1975d"
  },
  {
    "url": "tags/Adobe ae/index.html",
    "revision": "e5daa24645f633d368bb2d9e3026615a"
  },
  {
    "url": "tags/Adobe Illustrator CS6/index.html",
    "revision": "b92aa65f498aa2eecda4c7310fe71e7c"
  },
  {
    "url": "tags/Adobe pr/index.html",
    "revision": "9fad3a37782a878447b05ffc843df278"
  },
  {
    "url": "tags/Adobe ps/index.html",
    "revision": "f4c49348f8ece919e0214fe5b630c8b1"
  },
  {
    "url": "tags/axure8.0/index.html",
    "revision": "3d0436d2f4b138f532f8d255b603a1d2"
  },
  {
    "url": "tags/Cesium.js/index.html",
    "revision": "8385a3d81b97de12cd596ba56021ed52"
  },
  {
    "url": "tags/express/index.html",
    "revision": "88421f8158f0b7ac69de65ff2cafb319"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "9246be863486b6048e9351e9910880a5"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "c6b930d53bdf4f3d54bb052cc758e79a"
  },
  {
    "url": "tags/navicat/index.html",
    "revision": "5df825e5132f430b3f45b6ae0ce22bbb"
  },
  {
    "url": "tags/node.js/index.html",
    "revision": "61230668bca5f8a43662b20958efe105"
  },
  {
    "url": "tags/node.js框架/index.html",
    "revision": "3326b17401a0564148a9513947fffb67"
  },
  {
    "url": "tags/react/index.html",
    "revision": "33ed82995dda8d2d5d6bf1268bf8e9d2"
  },
  {
    "url": "tags/three.js/index.html",
    "revision": "a7f25981a484e6e7a9ce1c34a674bd59"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "9a85fe385bd33aca8a643b9aaa13c18c"
  },
  {
    "url": "tags/vue.js/index.html",
    "revision": "58c364dde564b33b0793d876b58a5011"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "79cd8e7dde1f1fcb5cbf0d8c41069584"
  },
  {
    "url": "tags/vue3.0.js/index.html",
    "revision": "c2f2461e37650b1a67cc08a4361c43a9"
  },
  {
    "url": "tags/vue3.0/index.html",
    "revision": "47174a12592d7747f50578074ec8c38b"
  },
  {
    "url": "timeline/index.html",
    "revision": "a4d0dea825137f3222252691bb5fe864"
  },
  {
    "url": "工具下载/life copy 2.html",
    "revision": "b8e2b0608e0684946f91efafe5531893"
  },
  {
    "url": "工具下载/life copy 3.html",
    "revision": "1f9abaf0a6235691beda19b697a3fc6a"
  },
  {
    "url": "工具下载/life copy 4.html",
    "revision": "28fb6fccf6c8c9193ec26c192a3fe60e"
  },
  {
    "url": "工具下载/life copy 5.html",
    "revision": "284e99879e7a3e8f065501afe45f865d"
  },
  {
    "url": "工具下载/life copy 6.html",
    "revision": "417d247b0fab4e8d1da16053576c1612"
  },
  {
    "url": "工具下载/life copy 7.html",
    "revision": "cb11a040a5709782565fccb365131d43"
  },
  {
    "url": "工具下载/life copy.html",
    "revision": "8fcb05126899d336e23806582e29b50c"
  },
  {
    "url": "工具下载/life.html",
    "revision": "837fea151866c2a62476d7a277a1ef30"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c45ae1fbf2f9997283204c9d5eb98620"
  },
  {
    "url": "技术文章/javascript/javascript.html",
    "revision": "12d349b0ad93fbc3e63bdb223d82745e"
  },
  {
    "url": "技术文章/node.js/express.html",
    "revision": "22888a0e9acee53a4aa937ab6c5b25e2"
  },
  {
    "url": "技术文章/node.js/koa.html",
    "revision": "2e9418a20b54775541656dd337a0912e"
  },
  {
    "url": "技术文章/node.js/mysql.html",
    "revision": "5a658866b2dece2897e845991c5ba959"
  },
  {
    "url": "技术文章/react/react.html",
    "revision": "1d2442fc9f42747e91b06f1a62e5b08c"
  },
  {
    "url": "技术文章/three.js/three.js.html",
    "revision": "2c478d9c752d98b9903f784bbece462c"
  },
  {
    "url": "技术文章/three.js/three.js第三人称漫游.html",
    "revision": "c349325bded0b8eead43543a7d1afcf8"
  },
  {
    "url": "技术文章/vue.js/javase.html",
    "revision": "44f9d44abe9299c7c5417a71126f6e22"
  },
  {
    "url": "技术文章/vue2.0/vue2.0.html",
    "revision": "016cfe425df5da1f4aa1421e400a0192"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 - 副本.html",
    "revision": "306317941dca82a6015e1f45af4f6848"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式.html",
    "revision": "f398ecda276eec8affc25e8da9923621"
  },
  {
    "url": "技术文章/vue2.0/浅谈javascript中的深拷贝和浅拷贝.html",
    "revision": "71606865ae48e03ad6012d31243bf3e5"
  },
  {
    "url": "技术文章/vue3.0/vue3.0.html",
    "revision": "0165b2c9b4928fcae0402ba933c3c4cf"
  },
  {
    "url": "技术文章/vue3.0/vue3.0ref.html",
    "revision": "aa95607b17eee1b4f567afe8557d8847"
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
