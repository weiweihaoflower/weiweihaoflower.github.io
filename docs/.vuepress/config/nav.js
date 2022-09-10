module.exports = [
    {
        text: '首页', link: '/', icon: 'reco-eye'
    },
    {
        text: '前端技术分类', link: '/技术文章/', icon: 'reco-api',
        items: [
            {
				text: 'javascript',
				items: [
					{text: 'javascript', link: '/技术文章/javascript/javascript'},
				]
			},
            {
				text: 'vue.js',
				items: [
					{text: 'vue2.0', link: '/技术文章/vue2.0/vue2.0'},
					{text: 'vue3.0', link: '/技术文章/vue3.0/vue3.0'},
				]
			},
            {
				text: 'react.js',
				items: [
					{text: 'react', link: '/技术文章/react/react'},
				]
			},
            {
				text: 'three.js',
				items: [
					{text: 'three', link: '/技术文章/three/three'},
				]
			},
            {
				text: 'node.js',
				items: [
					{text: 'express', link: '/技术文章/node.js/express'},
                    {text: 'koa', link: '/技术文章/node.js/koa'},
				]
			},
            {
				text: 'nuxt.js',
				items: [
					{text: 'nuxt.js', link: '/技术文章/nuxt.js/nuxt.js'},
				]
			},

        ]
    },

  
    {
        text: '比较好的教学视频整理', link: '/教学视频/', icon: 'reco-faq',
        items: [
			{text: '教学视频', link: '/教学视频/life'},
        ]
    },
  
    {
        text: '工具下载', link: '/工具/', icon: 'reco-faq',
        items: [
			{text: '前端工具', link: '/工具下载/life'},
        ]
    },
    {
        text: '前端导航', icon: 'reco-blog',
        items: [
            {text: '码云gitee', link: 'https://gitee.com/flower-wei', icon: 'reco-blog'},
            {text: '我的掘金博客主页', link: 'https://juejin.cn/user/2542518622493949', icon: 'reco-blog'},
			{text: '我的CSDN博客主页', link: 'https://blog.csdn.net/weixin_50379372?spm=1010.2135.3001.5343', icon: 'reco-bilibili'},
            {text: '现代javascript教程', link: 'https://zh.javascript.info/', icon: 'reco-bilibili'},
            {text: 'vue2.0官网', link: 'https://v2.cn.vuejs.org/', icon: 'reco-bilibili'},
            {text: 'vue3.0官网', link: 'https://cn.vuejs.org/', icon: 'reco-bilibili'},
            {text: 'elementui官网', link: 'https://element.eleme.cn/#/zh-CN', icon: 'reco-bilibili'},
            {text: 'react官网', link: 'https://react.docschina.org/', icon: 'reco-bilibili'},
            {text: 'ant.design官网', link: 'https://ant.design/index-cn', icon: 'reco-bilibili'},
            {text: 'express官网', link: 'http://expressjs.com/zh-cn/', icon: 'reco-bilibili'},
            {text: 'Eggjs官网', link: 'https://eggjs.org/', icon: 'reco-bilibili'},
            {text: 'threejs官网', link: 'https://threejs.org/', icon: 'reco-bilibili'},
            {text: 'threejs官网', link: 'https://.org/', icon: 'reco-bilibili'},
            {text: 'TypeScript官网', link: 'https://www.tslang.cn/docs/home.html', icon: 'reco-bilibili'},
            {text: 'iconfont图标库', link: 'https://www.iconfont.cn/', icon: 'reco-bilibili'},
            {text: '在线ps工具', link: 'https://www.uupoop.com/#/', icon: 'reco-bilibili'}
            
           
        ]
    },/**/
    {
        text: '关于', link: '/guide/', icon: 'reco-eye'
    }
	// { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
]