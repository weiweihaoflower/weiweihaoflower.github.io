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
    "revision": "e936c906e4a389b91d492cc007d4f926"
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
    "url": "assets/js/13.3d5eba44.js",
    "revision": "ae7fdcde49b3e6b6788c288f3a6f61a6"
  },
  {
    "url": "assets/js/14.a9669872.js",
    "revision": "ce6496705e9d2c2e161f4f27475c9aee"
  },
  {
    "url": "assets/js/15.d1876887.js",
    "revision": "211f59ea29d1c2f8f968169016df4c26"
  },
  {
    "url": "assets/js/16.24761e0d.js",
    "revision": "4c0aef70d52c77cd8c871af7657dddb4"
  },
  {
    "url": "assets/js/17.499cb333.js",
    "revision": "c4fe6a80f1e28a83cca657c921c324ff"
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
    "url": "assets/js/20.03172391.js",
    "revision": "026ea9ffe9099e2dbf3fbfc8b534dd14"
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
    "url": "assets/js/23.9042bea5.js",
    "revision": "0e36fc1dc92c21c7674decfccd7e7836"
  },
  {
    "url": "assets/js/24.37a18e46.js",
    "revision": "64857d25c77d3187904c60b45adb5966"
  },
  {
    "url": "assets/js/25.b555c0fb.js",
    "revision": "23c33ce895a5738d247c049fee375109"
  },
  {
    "url": "assets/js/26.af4e10cb.js",
    "revision": "b17d4c8af6dff5c5ffce001280fc24e6"
  },
  {
    "url": "assets/js/27.ec734cf4.js",
    "revision": "59707af670cab4565e9ed5e8fd3e0432"
  },
  {
    "url": "assets/js/28.fcba87af.js",
    "revision": "962d1f1d0ea9e991dc17811aa1761b7b"
  },
  {
    "url": "assets/js/29.2b023415.js",
    "revision": "b08be65a2ce2888cd2e39e322ac1f8a8"
  },
  {
    "url": "assets/js/30.785731db.js",
    "revision": "f1f8f113b2d29aa5d76da705690833ba"
  },
  {
    "url": "assets/js/31.0a8387d5.js",
    "revision": "23b170451333a633aab739a076811172"
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
    "url": "assets/js/36.a8596226.js",
    "revision": "8e59a2324dc1aadbe29d90f0662d54df"
  },
  {
    "url": "assets/js/37.56a9c171.js",
    "revision": "33ea0135b344777cb38c38f82b44a6ef"
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
    "url": "assets/js/40.1d148758.js",
    "revision": "dd8abb85a8c84accedc649a3e738b470"
  },
  {
    "url": "assets/js/41.a111939d.js",
    "revision": "e33766e7c557a4822fb3301947d8da48"
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
    "url": "assets/js/47.b3cea2b5.js",
    "revision": "50a3898415869416565a23a14e9aacce"
  },
  {
    "url": "assets/js/48.421363d6.js",
    "revision": "c567907286e66729395204c83e8c09df"
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
    "url": "assets/js/52.8e67b1b5.js",
    "revision": "88a58f6e5586c10be3bc67bc56fbb8d0"
  },
  {
    "url": "assets/js/53.403dec41.js",
    "revision": "428fe819ef2e0819ba9233f2fcc1ed4c"
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
    "url": "assets/js/app.4a005e0d.js",
    "revision": "3f247c36d8012b2ad6f17a9c89029219"
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
    "revision": "e956a0b12c06508fff2f3d7e69c79b73"
  },
  {
    "url": "categories/Adobe Illustrator CS6/index.html",
    "revision": "5fe0003a3256c5bbb397dfeed067c3da"
  },
  {
    "url": "categories/Adobe pr/index.html",
    "revision": "7631ef4afbdd22284fa2217226a9e5d5"
  },
  {
    "url": "categories/Adobe PS CS6下载地址/index.html",
    "revision": "bb8e1b21af66d1299244166e373fa252"
  },
  {
    "url": "categories/Adobe ps/index.html",
    "revision": "d95bbdef60b20eb32ddfc857ea3112f5"
  },
  {
    "url": "categories/axure8/index.html",
    "revision": "48e1931ad23f5d7ad7f43bc0ab8d29e4"
  },
  {
    "url": "categories/Express/index.html",
    "revision": "0d66609e61dbc9c65e57eafe3f3b1136"
  },
  {
    "url": "categories/index.html",
    "revision": "4c157c4f6c86a15d1eb64a766d0ada14"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "99dd2953c4d3976e624cf4ee83f199f2"
  },
  {
    "url": "categories/Mysql/index.html",
    "revision": "8d5512b4cf0ed2ee1671461fb9b05bf8"
  },
  {
    "url": "categories/node.js/index.html",
    "revision": "19152bbadafeb128a0398cb6609b9556"
  },
  {
    "url": "categories/nuxt/index.html",
    "revision": "c142dc44978486b8c7abc93210f48dde"
  },
  {
    "url": "categories/NuxtJS/index.html",
    "revision": "0f23fc3fe4ccaf99d8f6143a1c301c41"
  },
  {
    "url": "categories/panjiachen博客/index.html",
    "revision": "c444b423857629b28898c00c287f7c4c"
  },
  {
    "url": "categories/react/index.html",
    "revision": "8fb5e820fe28563bbe337bf1089611f2"
  },
  {
    "url": "categories/react18项目/index.html",
    "revision": "ab519fa11da5fd35826f4a96652c0b1d"
  },
  {
    "url": "categories/react基础加原理教程/index.html",
    "revision": "f4e99f67f7cda652f4c231e3234ed9cf"
  },
  {
    "url": "categories/react项目实战/index.html",
    "revision": "435e486d8f83097169bf14ff304ad834"
  },
  {
    "url": "categories/three.js/index.html",
    "revision": "6c6c6657a2ac5776d716a92ecd57cf44"
  },
  {
    "url": "categories/three.js基础/index.html",
    "revision": "6cd71180611e38b2a959154bc1ca2129"
  },
  {
    "url": "categories/uniapp/index.html",
    "revision": "68eaddbb6c469027fe23ac8372e83c06"
  },
  {
    "url": "categories/VsCode/index.html",
    "revision": "1f3524df2d43f4834c21cc5c1239248a"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "3f362c86da1f3e6b646708d0f657dd2a"
  },
  {
    "url": "categories/Vue2.0/index.html",
    "revision": "c575209d5028915ed9eed012c03babd1"
  },
  {
    "url": "categories/vue2/index.html",
    "revision": "b0844c2a66859ced8dbc1929040315c5"
  },
  {
    "url": "categories/vue2项目/index.html",
    "revision": "bf4d368a59efb3d57b4a31093048f5b6"
  },
  {
    "url": "categories/vue3.0/index.html",
    "revision": "977604ea5739e71165dada873707b2a7"
  },
  {
    "url": "categories/vue3.2/index.html",
    "revision": "90f3cec2ed7b64071040fc5fe8e3b63d"
  },
  {
    "url": "categories/vue3/index.html",
    "revision": "83226ffe1b8a310eca4568683a760222"
  },
  {
    "url": "categories/vue3+vite+pinia基础/index.html",
    "revision": "0e416b2486d7cfc667b2bb2fc36f6d9a"
  },
  {
    "url": "categories/vue3项目/index.html",
    "revision": "f9c31e1e041a2f6b6cd6c84a431becd6"
  },
  {
    "url": "categories/网站抓取精灵/index.html",
    "revision": "99718d8ccecd29c4bdfdaf813fb3c9a1"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "542dacf3a56cfea89a2787341d6d591c"
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
    "revision": "dbba8fffc954f720f901a194fbbcb9c0"
  },
  {
    "url": "js/custom.js",
    "revision": "f5494e08d3dc2634c7ceda60f85c97c1"
  },
  {
    "url": "tag/index.html",
    "revision": "9902703f0d998f8e5d0b29ccd9a6bed8"
  },
  {
    "url": "tags/Adobe ae/index.html",
    "revision": "ecd2eb44984b095905931771b43f4522"
  },
  {
    "url": "tags/Adobe Illustrator CS6/index.html",
    "revision": "f20bd191fcf7fedccf20b2122cba5f5a"
  },
  {
    "url": "tags/Adobe pr/index.html",
    "revision": "74b4e74bc013feaa2305994aba071edd"
  },
  {
    "url": "tags/Adobe PS CS6下载地址/index.html",
    "revision": "b3a1cea16acf18f547cffe6690dd5423"
  },
  {
    "url": "tags/Adobe ps/index.html",
    "revision": "425b939b2acd5a499ef1951430d109ec"
  },
  {
    "url": "tags/axure8.0/index.html",
    "revision": "dca5b0d3d9ca7bc14fde3f90f0e8c66d"
  },
  {
    "url": "tags/Cesium.js/index.html",
    "revision": "8e9ebcece649ef33a58f059c739330cc"
  },
  {
    "url": "tags/express/index.html",
    "revision": "8040406a9c221a719867dc50d2e5daf8"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "19fb5e54207af0d57815195cfe390021"
  },
  {
    "url": "tags/Mysql/index.html",
    "revision": "1c7273ad07f9dfac1561f4461cb211ed"
  },
  {
    "url": "tags/navicat/index.html",
    "revision": "5dd92e16952e1ca8fbb44df47f77ec52"
  },
  {
    "url": "tags/node.js/index.html",
    "revision": "40f98b3559cf3cc1de1914ab542af4d8"
  },
  {
    "url": "tags/node.js框架/index.html",
    "revision": "5c15b51c77812923627435e2f3c0504c"
  },
  {
    "url": "tags/nuxt.js/index.html",
    "revision": "3b484d120a7302c7ce8791eae450c499"
  },
  {
    "url": "tags/nuxt/index.html",
    "revision": "52926e7db05639ee723d6b2a57639464"
  },
  {
    "url": "tags/NuxtJS/index.html",
    "revision": "58591ab3c51143fe8d3fc860c98d07e7"
  },
  {
    "url": "tags/panjiachen博客/index.html",
    "revision": "49ae615bdc52038b9982aa5a145dd18d"
  },
  {
    "url": "tags/react/index.html",
    "revision": "1489f43acedbb0e6d96bcee3e1866cce"
  },
  {
    "url": "tags/react18/index.html",
    "revision": "558b985bb37828ee9b14ef441c96a3be"
  },
  {
    "url": "tags/react18项目/index.html",
    "revision": "8da08ed82c77d1b999f239a28a25d817"
  },
  {
    "url": "tags/react基础加原理教程/index.html",
    "revision": "3a3eaf849d4e32a69c2e00954880bdfa"
  },
  {
    "url": "tags/react项目实战/index.html",
    "revision": "0f73fbd9ff9b20466dc596f047f36413"
  },
  {
    "url": "tags/three.js/index.html",
    "revision": "472ee9de4d7acae22a2d3e740e0b4609"
  },
  {
    "url": "tags/uniapp/index.html",
    "revision": "2746c9391a91e3f21efb359d1ec59d0e"
  },
  {
    "url": "tags/VsCode/index.html",
    "revision": "19d66052411ad9b7953570c1dbdad999"
  },
  {
    "url": "tags/vue.js/index.html",
    "revision": "3488ca1941e0742d989bc39ee2eddd10"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e9efedf36b7459e395859e35c8de3750"
  },
  {
    "url": "tags/Vue2.0/index.html",
    "revision": "37001f8eb6f344303b89826b9fd710bf"
  },
  {
    "url": "tags/vue2/index.html",
    "revision": "ae8fc4310214835fffddf54af5de53d6"
  },
  {
    "url": "tags/vue2后台管理系统/index.html",
    "revision": "230d8159cbc8df38c6589719a99c1b34"
  },
  {
    "url": "tags/vue2项目/index.html",
    "revision": "6ca6c829b22064702f1ecce00f51a20b"
  },
  {
    "url": "tags/vue3.0.js/index.html",
    "revision": "2d4f3925a47d40a1fc74670117fc013f"
  },
  {
    "url": "tags/vue3.0/index.html",
    "revision": "e1b580a5d9b6f0462c5d0fa1102f1a03"
  },
  {
    "url": "tags/vue3.2/index.html",
    "revision": "b845ad2eda5b63ab349d597b66a8821e"
  },
  {
    "url": "tags/vue3/index.html",
    "revision": "8f0dead9789ed1fc9976d5866e08aa77"
  },
  {
    "url": "tags/vue3+vite+pinia基础/index.html",
    "revision": "d7b948ea9a65ef23673cf4e953c7cd45"
  },
  {
    "url": "tags/Vue3后台管理系统/index.html",
    "revision": "6216873a6372492f844140a0a451f9be"
  },
  {
    "url": "tags/vue3精简后台管理模板项目/index.html",
    "revision": "5ea2dd2635e4cd9ee24101f18974c6f7"
  },
  {
    "url": "tags/vue3项目/index.html",
    "revision": "44ee3c27f95b692c8547d7b2ff48661f"
  },
  {
    "url": "tags/优秀博主博客项目模板推荐/index.html",
    "revision": "c89b7e6c617309725c4c9cc79b3e8f5c"
  },
  {
    "url": "tags/网站抓取js html css/index.html",
    "revision": "c137d6a50d0cfdb544ef838b11210a0b"
  },
  {
    "url": "tags/网站抓取精灵/index.html",
    "revision": "6643e3db4d3f23e9b7b5df5f94b6b74d"
  },
  {
    "url": "timeline/index.html",
    "revision": "9c1db0a8e010644b4c8be007059a3654"
  },
  {
    "url": "优秀项目/life copy 2.html",
    "revision": "d7b1176323e57da5dd3598feeae066bc"
  },
  {
    "url": "优秀项目/life copy.html",
    "revision": "1acf300a20e9c0113098acb0592fb76c"
  },
  {
    "url": "优秀项目/life.html",
    "revision": "e673ca2869d8513b8bee5b99f73fc0ce"
  },
  {
    "url": "优秀项目/react18后台管理系统.html",
    "revision": "53f47d4182bc3dbcd97d4add8ac2ee2a"
  },
  {
    "url": "优秀项目/vue2电商网站.html",
    "revision": "d9e632d6ca4c19bb2c040d674410bf61"
  },
  {
    "url": "优秀项目/vue3+ts腾讯课堂.html",
    "revision": "da37782cc119286e5f2c8ac9be019ff3"
  },
  {
    "url": "优秀项目/尚硅谷尚品汇vue2后台管理.html",
    "revision": "820827af6f3698d4eda5a8df473fd05c"
  },
  {
    "url": "优秀项目/尚硅谷尚品汇vue3+ts后台管理 copy.html",
    "revision": "213e3d6e111edb674abc0e6ff624f22e"
  },
  {
    "url": "优秀项目/黑马头条vue2后台管理 copy.html",
    "revision": "28d9119e3eb0a88a137eb541e9b9dc2d"
  },
  {
    "url": "优秀项目/黑马电商vue2shop后台管理 copy 2.html",
    "revision": "e6aecdbfebd7338b8381268da266eed3"
  },
  {
    "url": "工具下载/life copy 2.html",
    "revision": "9d4819eaf1e88e055969bd1ed74fe910"
  },
  {
    "url": "工具下载/life copy 3.html",
    "revision": "e27c141ff07d82da47e9460e6e628744"
  },
  {
    "url": "工具下载/life copy 4.html",
    "revision": "2bc933b2c16ddd31c53dac48f10f95fb"
  },
  {
    "url": "工具下载/life copy 5.html",
    "revision": "e419b8262e87481d9d302dfbe90d1510"
  },
  {
    "url": "工具下载/life copy 6.html",
    "revision": "3af65936e5d9deb5679d607e0630787a"
  },
  {
    "url": "工具下载/life copy 7.html",
    "revision": "0ae63583ede93ee62f27c4492f74609b"
  },
  {
    "url": "工具下载/life copy.html",
    "revision": "c896d21c6b4399881017911a82399f5f"
  },
  {
    "url": "工具下载/life.html",
    "revision": "d1a0214f4222d7212da3e47f754caf42"
  },
  {
    "url": "工具下载/ps.html",
    "revision": "a58fe454b5c48ed7297bb11cc91680d1"
  },
  {
    "url": "工具下载/网站抓取精灵.html",
    "revision": "4f901229f3f4adf245a83fec0e82cdb9"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a34dfdd5e817e28af057ff2a7c0d3201"
  },
  {
    "url": "技术文章/javascript/javascript.html",
    "revision": "5a995b32ae63ad69fcd92084fe561a30"
  },
  {
    "url": "技术文章/node.js/express.html",
    "revision": "577279c8d7bf4e05a0671bb570504a68"
  },
  {
    "url": "技术文章/node.js/koa.html",
    "revision": "82e26383c9c7710d2f28c05b9084a531"
  },
  {
    "url": "技术文章/node.js/mysql.html",
    "revision": "5bcfd114cbad1873954ce62ebb146d2b"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js copy.html",
    "revision": "8a3ea0ee9c2f694d222ba6ed983605db"
  },
  {
    "url": "技术文章/nuxt.js/nuxt.js.html",
    "revision": "14871ef1cdb74d764a3e43db59df43d7"
  },
  {
    "url": "技术文章/react/react.html",
    "revision": "8926c97c7b13bfbab165d39e961361f7"
  },
  {
    "url": "技术文章/three.js/three.js.html",
    "revision": "28a9ef0e5b8fd62797c9edf18de602a2"
  },
  {
    "url": "技术文章/three.js/three.js第三人称漫游.html",
    "revision": "a63ae548d6770125969aa6e33be19178"
  },
  {
    "url": "技术文章/vue.js/javase.html",
    "revision": "4b5d8f7b777e7238a6460150042e6190"
  },
  {
    "url": "技术文章/vue2.0/vue2.0.html",
    "revision": "ee2c4693fecb3abb9def0c3ff9364a90"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 - 副本.html",
    "revision": "e89b709bcca5a8bcd5b65f73c7f176de"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式 copy.html",
    "revision": "dca435b6126e1d4d2f1243085673d822"
  },
  {
    "url": "技术文章/vue2.0/vue组件传值的方式.html",
    "revision": "ff7cb749eafea4f41dfb34d9e80b457a"
  },
  {
    "url": "技术文章/vue2.0/浅谈javascript中的深拷贝和浅拷贝.html",
    "revision": "496c88aed0d957773a5a24b4f83888f4"
  },
  {
    "url": "技术文章/vue2.0/认识vue.html",
    "revision": "23dbd0474853dd5bf2aebf97276e5ed8"
  },
  {
    "url": "技术文章/vue3.0/nuxt3入门.html",
    "revision": "f3bba05a4084899a79abeff9958101db"
  },
  {
    "url": "技术文章/vue3.0/vue3.0.html",
    "revision": "da652fd780bc4f52799a3bbf03556060"
  },
  {
    "url": "技术文章/vue3.0/vue3.0ref.html",
    "revision": "037fe16a4a6ce9b99e1afef79290ea64"
  },
  {
    "url": "教学视频/life copy 2.html",
    "revision": "853604c4a42cfdfddcf712731ab5fd18"
  },
  {
    "url": "教学视频/life copy 3.html",
    "revision": "a81ab3c32f73f14fe3f098ae4492b961"
  },
  {
    "url": "教学视频/life copy 4.html",
    "revision": "caf571cdff515924c30123d18dc4770b"
  },
  {
    "url": "教学视频/life copy 5.html",
    "revision": "853d3f90ee695b21a17e32655a798cda"
  },
  {
    "url": "教学视频/life copy 6.html",
    "revision": "9ce9c15b8a0396c067183ab87602cc35"
  },
  {
    "url": "教学视频/life copy 7.html",
    "revision": "4b888342b195275de4d0fe1f2411c4dd"
  },
  {
    "url": "教学视频/life copy 8.html",
    "revision": "c7369bb7d7fa9c29a2cbfaee6ce21666"
  },
  {
    "url": "教学视频/life copy 9.html",
    "revision": "7199c8fefb53c467f89dee4417a55c7d"
  },
  {
    "url": "教学视频/life copy.html",
    "revision": "ed69c159c22f36963f98771a6e5a7d5d"
  },
  {
    "url": "教学视频/life.html",
    "revision": "533ea9c265950a6709ffed555a319131"
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
