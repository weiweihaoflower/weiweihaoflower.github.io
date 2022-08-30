module.exports = [
    {
        text: '首页', link: '/', icon: 'reco-eye'
    },
    {
        text: '前端技术分类', link: '/技术文章/', icon: 'reco-api',
        items: [
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

        ]
    },
    {
        text: '关于', link: '/guide/', icon: 'reco-eye'
    },
    {
        text: '工具', link: '/工具/', icon: 'reco-faq',
        items: [
			{text: '生活分享', link: '/生活分享/life'},
        ]
    },
    {
        text: '我的站外博客', icon: 'reco-blog',
        items: [
            {text: '掘金', link: 'https://juejin.cn/user/2542518622493949', icon: 'reco-blog'},
			{text: 'CSDN', link: 'https://blog.csdn.net/weixin_50379372?spm=1010.2135.3001.5343', icon: 'reco-bilibili'}
        ]
    },/**/
	{ text: '时间轴', link: '/timeline/', icon: 'reco-date' }
]