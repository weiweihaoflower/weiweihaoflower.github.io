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
    "revision": "01a4b8863a69436d8304a8eabd9df3d7"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
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
    "url": "assets/js/1.eea47602.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.d5946778.js",
    "revision": "8f5295a943bc9282ba34d7885db10bed"
  },
  {
    "url": "assets/js/13.ff8869d1.js",
    "revision": "b8934ecdfbc3eb16d6388595c0372104"
  },
  {
    "url": "assets/js/14.179eaf8f.js",
    "revision": "7fdc669ad85130ad137a228209249b3d"
  },
  {
    "url": "assets/js/15.c1e5e647.js",
    "revision": "093c90a0e10c4035ae10e0aea613fcc7"
  },
  {
    "url": "assets/js/16.dc7c3db8.js",
    "revision": "7bb0e61bd61fb18e74d0c8023b8349b4"
  },
  {
    "url": "assets/js/17.82edbc76.js",
    "revision": "9e25ee41b8d2cc75f53f8354ae523aa8"
  },
  {
    "url": "assets/js/18.5afc78c2.js",
    "revision": "88ff354f0941ee76427a488c0f288c90"
  },
  {
    "url": "assets/js/4.e853cff9.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.d89db665.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.e71c24f3.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.7715dcdd.js",
    "revision": "58928b89979ed71c4222b400df57e5d6"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "e60e151d5d1609f02bfd50514a03f4a5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "18e73f8afd25912e91696064aaee28bd"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "50a3595061571449b63a061827d9ac7e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "35f7f50f5b7133e8fc079c16d26d50fc"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ca444dd67fb5faf40fce2d0d8a28b3eb"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "8f45360f72004167af2f3c36d9204b7a"
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
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
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
    "revision": "42f26b0d953a41e971297edb83accb7e"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "28fc0ddd1373360970af81b28fadb36b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "154fa055a0ca5bb84882aeb89c5484dc"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "10cdeaac8129cab3d0126b1d5bb955b9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "dd6c09fc6a8bf05c8461ed317ce425b3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "de397461ffaab564447cce9247109cd2"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ed4bf75fce3a3e696cde7eb3503aca12"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "49ea00f0afe9b4467901f0d91bdaa167"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4f024a391824f450bce119df5e25e7b6"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "4f62a6822728d5934c37b25e1b155167"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3c65c242bd43eae761dd77599f860062"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "bef2dd792b69b8cda70a143fd22ce2aa"
  },
  {
    "url": "timeline/index.html",
    "revision": "72d5947cef72abe7eb99b5eb15aab930"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "75a98ded0bb4bec2c9fc6daa40652191"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0acd89a9252a14381d007de1e712e837"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "674fe3670a4e31893c069550b37ceecf"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "27c884caeff361d99db44619cce5162d"
  },
  {
    "url": "生活分享/life.html",
    "revision": "ecd85caa8af2c591ee9977df604d9efa"
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
