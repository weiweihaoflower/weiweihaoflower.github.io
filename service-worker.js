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
    "revision": "f3f28398fe7b7f54e51b916e7c5dcb86"
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
    "url": "assets/js/14.a9669872.js",
    "revision": "ce6496705e9d2c2e161f4f27475c9aee"
  },
  {
    "url": "assets/js/15.6c32ad8c.js",
    "revision": "41959654e75360ba76f74b16beed16c5"
  },
  {
    "url": "assets/js/16.24761e0d.js",
    "revision": "4c0aef70d52c77cd8c871af7657dddb4"
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
    "url": "assets/js/19.f54af1b8.js",
    "revision": "e63d151728b7edefa27f722b17400478"
  },
  {
    "url": "assets/js/20.b0f53ee8.js",
    "revision": "999316d25824a02711742df1369b40a0"
  },
  {
    "url": "assets/js/21.203e40f7.js",
    "revision": "81e4f9022d49419cb3b5ff29915976ba"
  },
  {
    "url": "assets/js/22.d1d3967c.js",
    "revision": "634ff0d8aa0fba711fb9de6c20653d98"
  },
  {
    "url": "assets/js/23.2808f730.js",
    "revision": "d04020dd0f3b14394b07bd10eed73fe7"
  },
  {
    "url": "assets/js/24.19c5a433.js",
    "revision": "62901c4e51bf298ce75a6e66bae92f77"
  },
  {
    "url": "assets/js/25.39e7a2e1.js",
    "revision": "5856d9d78d734e24d747b5afec00e317"
  },
  {
    "url": "assets/js/26.5cb6cbfe.js",
    "revision": "46c24f12e14d53e6d9735d5751d7ee36"
  },
  {
    "url": "assets/js/27.66ec0623.js",
    "revision": "b47e667e13e1c59ad36251ef11e6bd99"
  },
  {
    "url": "assets/js/28.a61d91c0.js",
    "revision": "fbaeeac77133cb695126e610e4d6d1db"
  },
  {
    "url": "assets/js/29.6aeddf7a.js",
    "revision": "58e595c44429e16911d5e594e55596a7"
  },
  {
    "url": "assets/js/30.73aeeeae.js",
    "revision": "7754b5c4ecde340cbd4d8be232ac1cfc"
  },
  {
    "url": "assets/js/31.a7a9a67e.js",
    "revision": "b94a7127c03faf966966e1902d0d7295"
  },
  {
    "url": "assets/js/32.96d05d60.js",
    "revision": "efde8fa9ceea7321dd415c8328430f63"
  },
  {
    "url": "assets/js/33.33f73e5d.js",
    "revision": "33b288029b7f3bf878902a50a9a3fb21"
  },
  {
    "url": "assets/js/34.4f3ca343.js",
    "revision": "1fe07ed5b8249d89afc3e837ef225889"
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
    "url": "assets/js/37.6593b8a6.js",
    "revision": "4158f83c3b35094faf02061b7f53fc55"
  },
  {
    "url": "assets/js/38.e002ab9e.js",
    "revision": "4d79f35c0976dbdc5947567d1e752222"
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
    "url": "assets/js/40.ef88cff0.js",
    "revision": "0b0dfe164e5ccec0df3f67ab1f4c8eef"
  },
  {
    "url": "assets/js/41.c3851ce5.js",
    "revision": "01a17132d7f036222adb380550c72150"
  },
  {
    "url": "assets/js/42.07a69ea9.js",
    "revision": "a72dc21758e9f51b8ae7bc00110dca83"
  },
  {
    "url": "assets/js/43.d7034bbf.js",
    "revision": "bbf968ecdb3d0a68f10adeaf99815ece"
  },
  {
    "url": "assets/js/44.854e082f.js",
    "revision": "1defece43f1628284627b02a98c592bd"
  },
  {
    "url": "assets/js/45.9cb02bf0.js",
    "revision": "3e3686034cf1658139a2a2e586dc85e9"
  },
  {
    "url": "assets/js/46.0caf6bf9.js",
    "revision": "69d6784d46cc2c483425c132b07fba2d"
  },
  {
    "url": "assets/js/47.0cb5cbcb.js",
    "revision": "bfa5c77dcb2c8e0e0ca3ea1342b8bb87"
  },
  {
    "url": "assets/js/48.cca3a555.js",
    "revision": "2273f6d14abb8a2ea9a354432772aae5"
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
    "url": "assets/js/52.074a2e36.js",
    "revision": "90a4f19f0724b6d9f6ab93a1bed4377f"
  },
  {
    "url": "assets/js/53.6a9992e3.js",
    "revision": "4bb4285b2e37a06d40de28ed708211e5"
  },
  {
    "url": "assets/js/54.158805fb.js",
    "revision": "53c652a52746bafaa16403dc992388d6"
  },
  {
    "url": "assets/js/55.191ae1a0.js",
    "revision": "cb1986f115134140ac9163f52faa9cd0"
  },
  {
    "url": "assets/js/56.7e82ba31.js",
    "revision": "2198bcf875fbf7f4d8148b1adbccf081"
  },
  {
    "url": "assets/js/57.3cb4168e.js",
    "revision": "ec648ace3c6d6239aa4dd79e12e29e60"
  },
  {
    "url": "assets/js/58.de6e0485.js",
    "revision": "14bd3b32e466b1d4fd83aaed1fab231c"
  },
  {
    "url": "assets/js/59.8ef6e260.js",
    "revision": "7a9dd6873dfbc0e858913790093e57e2"
  },
  {
    "url": "assets/js/6.40fece1c.js",
    "revision": "36695367ee4859a08a01058a6c3ac770"
  },
  {
    "url": "assets/js/60.55030f9a.js",
    "revision": "3a7a861180065c3c6ce90b581cf4d3e8"
  },
  {
    "url": "assets/js/61.e266cc53.js",
    "revision": "2d25fc0005a0c934f0096ff2542e09b2"
  },
  {
    "url": "assets/js/62.db6be9e8.js",
    "revision": "5d20b8ac0024bc2a01c0eac3d0ccae7a"
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
    "url": "assets/js/app.30c9d97a.js",
    "revision": "a67698701c316184f8cb37a4aea12e3b"
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
    "revision": "dae388aa90a4f4e1abac907865d35ff2"
  },
  {
    "url": "categories/Adobe Illustrator CS6/index.html",
    "revision": "0095beafb685e9a274169208ba83f0eb"
  },
  {
    "url": "categories/Adobe pr/index.html",
    "revision": "2eed1c50e387abaca4b735139af416eb"
  },
  {
    "url": "categories/Adobe PS CS6下载地址/index.html",
    "revision": "fdac8bd673334e01fa22acf6aac349cd"
  },
  {
    "url": "categories/Adobe ps/index.html",
    "revision": "4388ef891b3ad3a8728ad1379663c65c"
  },
  {
    "url": "categories/axure8/index.html",
    "revision": "5e32accd9343183bc325668dc1f9f3d3"
  },
  {
    "url": "categories/Express/index.html",
    "revision": "2cf3cd3184f6f9cf0786fe327eeb0bb0"
  },
  {
    "url": "categories/index.html",
    "revision": "13b3592912f44c927dadc17a0cd28843"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "b46846365cbc9ec1911eda4e83f395ea"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "90395f50b853b355819e182390318a63"
  },
  {
    "url": "categories/node.js/index.html",
    "revision": "89da5da9d8bdf7a65909799306088dfa"
  },
  {
    "url": "categories/nuxt/index.html",
    "revision": "17a20bf34e37424d159eb44cfc0ad054"
  },
  {
    "url": "categories/NuxtJS/index.html",
    "revision": "5380cf06958ec76c5805687e21b62762"
  },
  {
    "url": "categories/panjiachen博客/index.html",
    "revision": "79080d93995b564763ae52e7f0790d32"
  },
  {
    "url": "categories/react18项目/index.html",
    "revision": "a6b07cfbf07956f42bcb97dffe255ecc"
  },
  {
    "url": "categories/react基础加原理教程/index.html",
    "revision": "611c08a73c39a8d3f5e4e5bce7d355e9"
  },
  {
    "url": "categories/react项目实战/index.html",
    "revision": "02db78cad922fdf5d865ded10a05c28c"
  },
  {
    "url": "categories/three.js基础/index.html",
    "revision": "074bd7af16df106f286c1f63d6f94d0b"
  },
  {
    "url": "categories/uniapp/index.html",
    "revision": "5e659592f011f4cfe971638dc57c24fd"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "8edfa95c1dc465b69ea6b9a54c3fdeb7"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "179967bb3c1bb38af184cbca261176b5"
  },
  {
    "url": "categories/Vue2.0/index.html",
    "revision": "1da72930e385fb90f95b73f20328e7a6"
  },
  {
    "url": "categories/vue2/index.html",
    "revision": "35f315475f9e88ca17321906046b6261"
  },
  {
    "url": "categories/vue2项目/index.html",
    "revision": "0765f5e16799b9fbc7c244c1dff35577"
  },
  {
    "url": "categories/vue3.0/index.html",
    "revision": "fe77a4c618102fe62dd2c076a1dcf70a"
  },
  {
    "url": "categories/vue3.2/index.html",
    "revision": "32f4d838422e8313eb29bd10a7d0ad33"
  },
  {
    "url": "categories/vue3/index.html",
    "revision": "55687270f5b4d6983fdd6e61a75d448b"
  },
  {
    "url": "categories/vue3+vite+pinia基础/index.html",
    "revision": "c31ff4e9566ace9bcc740837b80ab783"
  },
  {
    "url": "categories/vue3项目/index.html",
    "revision": "b907148e304f32418b295341c08ada05"
  },
  {
    "url": "categories/网站抓取精灵/index.html",
    "revision": "db43d697456e4d951d1448909d4da31f"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "f30af05e4909a4ffea53e07665a9709e"
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
    "revision": "7f8272730235faa512830bfb81bbaba6"
  },
  {
    "url": "js/custom.js",
    "revision": "f5494e08d3dc2634c7ceda60f85c97c1"
  },
  {
    "url": "tag/index.html",
    "revision": "725413f8ce295390ecf4ba50daccea7a"
  },
  {
    "url": "tags/Adobe ae/index.html",
    "revision": "9902f4a10a4e95a3c0c4d479f4d22c88"
  },
  {
    "url": "tags/Adobe Illustrator CS6/index.html",
    "revision": "0dbc9b7b69055a3aae46579fb3f1ae1b"
  },
  {
    "url": "tags/Adobe pr/index.html",
    "revision": "4275c30b597bcf28a294dbcbad4999e1"
  },
  {
    "url": "tags/Adobe PS CS6下载地址/index.html",
    "revision": "069404f2bc7a09fc77e95deee72fb504"
  },
  {
    "url": "tags/Adobe ps/index.html",
    "revision": "7e9e06529abe20af7dfcbd3087843bc8"
  },
  {
    "url": "tags/axure8.0/index.html",
    "revision": "e7f4d479f157da8d810f915fb15e3fa6"
  },
  {
    "url": "tags/express/index.html",
    "revision": "e65b3b1846df83cc04e8c1afb879bbf9"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "0f94b5c8caa9e8c84d533e4bc48fc56e"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "15d0c5db515d73933ed98cb46b93fadd"
  },
  {
    "url": "tags/navicat/index.html",
    "revision": "ac81ab128de3071a9377b2e3a94b6a05"
  },
  {
    "url": "tags/node.js/index.html",
    "revision": "c5cfae8718ebf2d0a8f7baf6e0a556b1"
  },
  {
    "url": "tags/nuxt.js/index.html",
    "revision": "e9dedecd9a58cdd69a5ffc34b618f0cf"
  },
  {
    "url": "tags/nuxt/index.html",
    "revision": "f6966b47b66c61a1e03e0cd5c22b1a7c"
  },
  {
    "url": "tags/NuxtJS/index.html",
    "revision": "1118768e3d38094924e3344d4de587ab"
  },
  {
    "url": "tags/panjiachen博客/index.html",
    "revision": "c46586ff89a97c1c6142b76d4e1963a6"
  },
  {
    "url": "tags/react18/index.html",
    "revision": "0dacc5cf7793d246d3c9d104533e9e86"
  },
  {
    "url": "tags/react18项目/index.html",
    "revision": "061882a115d60369d1f3bb23f46bade6"
  },
  {
    "url": "tags/react基础加原理教程/index.html",
    "revision": "5d9ddf7ca01514d408ddff0474055e2f"
  },
  {
    "url": "tags/react项目实战/index.html",
    "revision": "9e1f5a79bed3aab67821e3f63aed934a"
  },
  {
    "url": "tags/three.js/index.html",
    "revision": "09a196fd839f813559b5d14d57e7153e"
  },
  {
    "url": "tags/uniapp/index.html",
    "revision": "98957b6b5eedb892cf4b5a1b373800b0"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "6ace3863d79d65174fa6cfe133ec9597"
  },
  {
    "url": "tags/vue.js/index.html",
    "revision": "4635e9872b7eda1ab745a1c0d246e1b1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "f2a7ccb0eb2f15ef68b7534e24ccc67e"
  },
  {
    "url": "tags/Vue2.0/index.html",
    "revision": "9879c7b019560359a85baf36b522eef7"
  },
  {
    "url": "tags/vue2/index.html",
    "revision": "1b5813fe62eba65dc16aace995b258ee"
  },
  {
    "url": "tags/vue2后台管理系统/index.html",
    "revision": "2a00a4fc2ab744def61a8ed50326d333"
  },
  {
    "url": "tags/vue2项目/index.html",
    "revision": "dd9b2cf5772d41161f3228247cb8eb10"
  },
  {
    "url": "tags/vue3.0.js/index.html",
    "revision": "1e949e49060f1ca062af8dc922409561"
  },
  {
    "url": "tags/vue3.0/index.html",
    "revision": "567f35fa581c706cf341f857fb513729"
  },
  {
    "url": "tags/vue3.2/index.html",
    "revision": "ffaeb27f3e52fac93a1f78998900edb3"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "8d249476239708db10f30e977e306be2"
  },
  {
    "url": "tags/vue3+vite+pinia基础/index.html",
    "revision": "3f819214bc1e372ea8c856a9f35d6cc4"
  },
  {
    "url": "tags/Vue3后台管理系统/index.html",
    "revision": "1ae78f7f21c5e3d5d67e6bc7ad2339cf"
  },
  {
    "url": "tags/vue3精简后台管理模板项目/index.html",
    "revision": "820915577d79cf3d7b97e6ae5d3308c0"
  },
  {
    "url": "tags/vue3项目/index.html",
    "revision": "f41b73f6777585c68d2ef8b1205c3425"
  },
  {
    "url": "tags/优秀博主博客项目模板推荐/index.html",
    "revision": "dafd43e99b0d2046506a379bac65a882"
  },
  {
    "url": "tags/网站抓取js html css/index.html",
    "revision": "d06996756763a9f0a3e20b9a218343c0"
  },
  {
    "url": "tags/网站抓取精灵/index.html",
    "revision": "5d7292cd96927946ddfbf3b1294e1bfa"
  },
  {
    "url": "timeline/index.html",
    "revision": "a76d658993e9a13fd0f78f4cb3d6b758"
  },
  {
    "url": "优秀项目/life copy 2.html",
    "revision": "6d8954a8e98b875fc6d5228b5b0cedd7"
  },
  {
    "url": "优秀项目/life copy.html",
    "revision": "3cc3ebfe0df6f97401887ca7c17f39fd"
  },
  {
    "url": "优秀项目/life.html",
    "revision": "c8e1376f6b015ab8cafc0c0c93049372"
  },
  {
    "url": "优秀项目/react18后台管理系统.html",
    "revision": "82b97d54cdf1269671ef40f2037f0fa1"
  },
  {
    "url": "优秀项目/vue2电商网站.html",
    "revision": "60a7812224fb35a4e61da8949982f292"
  },
  {
    "url": "优秀项目/vue3+ts腾讯课堂.html",
    "revision": "246a9be8b90b4100ce16d0405c32c018"
  },
  {
    "url": "优秀项目/尚硅谷尚品汇vue2后台管理.html",
    "revision": "a0e8b66db61d576880340de99f6e01e8"
  },
  {
    "url": "优秀项目/尚硅谷尚品汇vue3+ts后台管理 copy.html",
    "revision": "fe688d06f64698b5c7c6191598d7bd13"
  },
  {
    "url": "优秀项目/黑马头条vue2后台管理 copy.html",
    "revision": "f2d5917b3a75c988e86d7e55cf167820"
  },
  {
    "url": "优秀项目/黑马电商vue2shop后台管理 copy 2.html",
    "revision": "e50a2e3fddc4136e1d9fd2a631c162bb"
  },
  {
    "url": "工具下载/life copy 2.html",
    "revision": "e58a0dadbf405160460f3755da3f381e"
  },
  {
    "url": "工具下载/life copy 3.html",
    "revision": "547d4feefb6f0124146050317f6a54e6"
  },
  {
    "url": "工具下载/life copy 4.html",
    "revision": "8ca9694e496085264df877653d8a2b7c"
  },
  {
    "url": "工具下载/life copy 5.html",
    "revision": "5ce0a028f21103da1e724fb615b7a73b"
  },
  {
    "url": "工具下载/life copy 6.html",
    "revision": "04fcb6972abaa6a4192e5eb49a8d4723"
  },
  {
    "url": "工具下载/life copy 7.html",
    "revision": "ad9a683121c90968110c0859163b07ce"
  },
  {
    "url": "工具下载/life copy.html",
    "revision": "612d911f4401e5f313179de5feeb6610"
  },
  {
    "url": "工具下载/life.html",
    "revision": "ef14c72799b58a78083f8f601d59a7dc"
  },
  {
    "url": "工具下载/ps.html",
    "revision": "ac87eb04758fded1d4e4d2c3af38a137"
  },
  {
    "url": "工具下载/网站抓取精灵.html",
    "revision": "0acb7bc7b96e79f2e006bf13365cf8a5"
  },
  {
    "url": "技术文章/index.html",
    "revision": "097caf0f6e63e1a880db38c49398c772"
  },
  {
    "url": "技术文章/javascript/javascript.html",
    "revision": "112dc7532ac2ccafe6f0644e3e6a8962"
  },
  {
    "url": "技术文章/node.js/express.html",
    "revision": "a7986ca41e82493653f1d20e59b7380c"
  },
  {
    "url": "技术文章/node.js/koa.html",
    "revision": "711de61dac00b49a3862bb787e19763f"
  },
  {
    "url": "技术文章/node.js/mysql.html",
    "revision": "4522b341752d3f48426939e3eaa6282c"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js copy.html",
    "revision": "4aee54d56fb2afc60e5ab76b3a37003e"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js.html",
    "revision": "e1717fee745bc929dfa0adf2ff71b4d6"
  },
  {
    "url": "技术文章/react/react.html",
    "revision": "4b904c3746a47e6a28ef6bb4dc198395"
  },
  {
    "url": "技术文章/three.js/three.js.html",
    "revision": "b08f292d966a457e16eb13a173e40b88"
  },
  {
    "url": "技术文章/three.js/three.js第三人称漫游.html",
    "revision": "842ba06c93b6d8c14e3890e8840aa319"
  },
  {
    "url": "技术文章/vue.js/javase.html",
    "revision": "89f3fa727e5daff7b8b66535dba5947b"
  },
  {
    "url": "技术文章/vue2.0/vue2.0.html",
    "revision": "d5e77d9e72b9bab21c4245c801a4d471"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 - 副本.html",
    "revision": "7d9a00c567e107b7762fc6cb6c2b77c7"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 copy.html",
    "revision": "d9fcbd2136b50430ba121783398bd1fe"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式.html",
    "revision": "6aea69a539fa38880f368d42bbba8f59"
  },
  {
    "url": "技术文章/vue2.0/浅谈javascript中的深拷贝和浅拷贝.html",
    "revision": "dd02ee797eebabafb885bd1e53779a57"
  },
  {
    "url": "技术文章/vue2.0/认识vue.html",
    "revision": "2fc29df8e4676d67f11bae5163cf09dd"
  },
  {
    "url": "技术文章/vue3.0/nuxt3入门.html",
    "revision": "f05f646ad765032d13246af29c431583"
  },
  {
    "url": "技术文章/vue3.0/vue3.0.html",
    "revision": "d1e2de8f8bfb103f7ba6a029d922dd23"
  },
  {
    "url": "技术文章/vue3.0/vue3.0ref.html",
    "revision": "4f2154253cfb00f0b21be161b057d06f"
  },
  {
    "url": "教学视频/life copy 2.html",
    "revision": "5efc5d81a80e9d2400e7b5eddf109935"
  },
  {
    "url": "教学视频/life copy 3.html",
    "revision": "ee088ff5470ed0c3595dc7f6fb50d71b"
  },
  {
    "url": "教学视频/life copy 4.html",
    "revision": "96fd8132d9c3b4ca4c01cc2c51decafd"
  },
  {
    "url": "教学视频/life copy 5.html",
    "revision": "d33b7d67329fbd780982d7f44716c7ca"
  },
  {
    "url": "教学视频/life copy 6.html",
    "revision": "2c0c46d77db3419b6c6e2a5d9357d8e5"
  },
  {
    "url": "教学视频/life copy 7.html",
    "revision": "3eec70cfa12ccc57f899141c63051e85"
  },
  {
    "url": "教学视频/life copy 8.html",
    "revision": "e53df39835ff43350385ff3d7ff4c4d8"
  },
  {
    "url": "教学视频/life copy 9.html",
    "revision": "7639f90cc47ae8aa6d22d727818b2845"
  },
  {
    "url": "教学视频/life copy.html",
    "revision": "c324950dea2a6305b6db6662f3678d62"
  },
  {
    "url": "教学视频/life.html",
    "revision": "db69d7920ca003b717874271555c70bd"
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
