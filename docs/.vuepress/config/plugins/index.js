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
		site_url: "https://weiweihaoflower.github.io/", //网站地址
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
              "https://webfs.ali.kugou.com/202209032223/89547874cb7bf61c6003188f6fb4e394/KGTX/CLTX001/8909e1809908cd8e3bf6cf85d98b93f0.mp3",
            cover:
              "https://imgessl.kugou.com/stdmusic/20200909/20200909135350181905.jpg",
          },
          {
            name: "青花瓷",
            artist: "周杰伦",
            url:
              "https://webfs.ali.kugou.com/202209032224/b3dabf39dce09d8a446cb7835cc7d7da/KGTX/CLTX001/37a8f50a9ec3b267c3cc6bec633d9c4a.mp3",
            cover:
              "this.onerror=null;this.src=https://imgessl.kugou.com/stdmusic/20150720/20150720160716937643.jpg",
          },
          {
            name: "一路生化",
            artist: "温奕心",
            url:
              "https://webfs.ali.kugou.com/202209032225/b6c94731715b0ac9b0987e9869c9d51c/KGTX/CLTX001/df0acdd00974c91888e6e8258f23dc70.mp3",
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
        email: "478346839@mail.com", //email地址
		wechatQrcodeTitle : '微信扫一扫：分享', // 微信二维码提示文字
      },

    
}