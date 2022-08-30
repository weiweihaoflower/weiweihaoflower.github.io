module.exports = {
    'flowchart': {

    },
	'@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "有新的内容更新",
                buttonText: "刷新"
            }
     },
    "vuepress-plugin-auto-sidebar": {
        // collapsable: true,
        // titleMode: "titlecase",
    },
    "vuepress-plugin-baidu-autopush":{

    },
    'sitemap': {
        hostname: 'https://www.xxx.com'
    },
	'copyright': {
        noCopy: true, // 选中的文字将无法被复制
        minLength: 100, // 如果长度超过 100 个字符
    },
    '@vuepress/medium-zoom': {
        selector: 'img',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
            margin: 16
        }
    },
    "dynamic-title":{
        showIcon: "/favicon.ico",
        showText: "欢迎回来！",
        hideIcon: "/favicon.ico",
        hideText: "欢迎进入文海鸥的个人博客",
        recoverTime: 2000
    },
	'@vuepress/nprogress':{
		
	},
	'vuepress-plugin-smooth-scroll':{
		
	},
	'@vuepress-reco/vuepress-plugin-rss':{
		site_url: "https://it235.com", //网站地址
        copyright: "文海鸥聊前端", //版权署名
	},
	'reading-progress':{
		//阅读进度条
	},
	'vuepress-plugin-code-copy':{
		//一键复制代码
	},
	'@vuepress-reco/vuepress-plugin-bgm-player':{
		autoShrink: {
			type: true
		},
        audios: [

          {
            name: "稻香",
            artist: "周杰伦",
            url:
              "https://webfs.tx.kugou.com/202208301445/7652c1a7e278f7918483ded89a07babd/v2/8909e1809908cd8e3bf6cf85d98b93f0/part/0/960115/KGTX/CLTX001/clip_8909e1809908cd8e3bf6cf85d98b93f0.mp3",
            cover:
              "https://imgessl.kugou.com/stdmusic/20200909/20200909135350181905.jpg",
          },
          {
            name: "青花瓷",
            artist: "周杰伦",
            url:
              "https://webfs.ali.kugou.com/202208301453/84d1f1d0f7500008c91088e7b58d8cba/part/0/960131/KGTX/CLTX001/clip_337d5e77aa94aefc88bd1d67544fa0b9.mp3",
            cover:
              "this.onerror=null;this.src=https://imgessl.kugou.com/stdmusic/20150720/20150720160716937643.jpg",
          },
          {
            name: "Time Travel",
            artist: "岸部真明",
            url:
              "https://webfs.ali.kugou.com/202208301454/ef1eeabdf150bd2357a796cb31758f6f/KGTX/CLTX001/3ed565d9489a73c853d170543e2c80c0.mp3",
            cover:
              "https://imgessl.kugou.com/stdmusic/20210409/20210409165713682223.jpg",
          },

          {
            name: "冰河时代",
            artist: "邓紫棋",
            url:
              "https://webfs.ali.kugou.com/202208301434/70717cf403e6a3e9095d5f510fab8932/KGTX/CLTX001/af805ee7879c421ee00d196f017a2e60.mp3",
            cover:
              "https://imgessl.kugou.com/stdmusic/20220809/20220809160352403622.jpg",
          },
          {
            name: "花",
            artist: "岸部真明",
            url:
              "https://webfs.ali.kugou.com/202208301438/5c37781c09d078e0f140c98f8daa8a25/KGTX/CLTX001/88f39176bf355e0a3273179e4d04d972.mp3",
            cover:
              "https://imgessl.kugou.com/stdmusic/20150717/20150717124217827383.jpg",
          },
          {
            name: "夜曲",
            artist: "周杰伦",
            url:
              "https://webfs.ali.kugou.com/202208301445/71747e410e5472a7d1f2afc50dac11b2/part/0/960121/KGTX/CLTX001/clip_16c8ab298231370293d16bcf9e5ff9b6.mp3",
            cover:
              "this.onerror=null;this.src=https://imgessl.kugou.com/stdmusic/20150720/20150720160716937643.jpg",
          },
          {
            name: "再见",
            artist: "邓紫棋",
            url:
              "https://webfs.ali.kugou.com/202208301440/b25d5d7b4bb3412578f7840c98bf0fbe/KGTX/CLTX001/af805ee7879c421ee00d196f017a2e60.mp3",
            cover:
              "https://imgessl.kugou.com/stdmusic/20220711/20220711074007533569.jpg",
          },
          {
            name: "一路生化",
            artist: "温奕心",
            url:
              "https://webfs.ali.kugou.com/202208301456/62f2abd7301f127f3623d4673de7c210/KGTX/CLTX001/df0acdd00974c91888e6e8258f23dc70.mp3",
            cover:
              "https://imgessl.kugou.com/stdmusic/20211021/20211021094704512813.jpg",
          },
         
         
          
        ],
      },
	"social-share": //分享插件
      {
		title               : '234',
	    description         : '123',
		sites               : ['qzone', 'qq', 'weibo','wechat', 'douban'], // 启用的站点
        networks: ['qzone',"qq", "weibo", "wechat", "douban", "email"], //分享类型
        email: "nobug@mail.com", //email地址
		wechatQrcodeTitle : '微信扫一扫：分享', // 微信二维码提示文字
      },
}