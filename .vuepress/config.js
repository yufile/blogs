module.exports = {
  "base": '/',
  "title": "羽",
  "description": "",
  "dest": "public",
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang', {
        theme: [
          'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
        ],
        clean: false,
        messages: {
          welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。'
        },
        messageStyle: {right: '68px', bottom: '290px'},
        width: 250,
        height: 320
      }
    ],
    ["@vuepress-reco/vuepress-plugin-bgm-player", {
      audios: [
        // 网络文件示例
        {
          name: 'MOM',
          artist: '未知',
          url: '',
          cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
        },
        {
          name: '不如',
          artist: '未知',
          url: '',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        },
        {
          name: '关山酒',
          artist: '未知',
          url: '',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        }
      ]
    }],
    [
      'cursor-effects',
      {
        size: 2, // size of the particle, default: 2
        shape: ['star'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
    [
      'dynamic-title',
      {
        showIcon: '/img/logo.jpg',
        showText: '(/≧▽≦/)咦！又好了！',
        hideIcon: '/failure.ico',
        hideText: '(●—●)喔哟，崩溃啦！',
        recoverTime: 2000,
      },
    ],
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }]
  ],
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": require('./nav'),
    "sidebar": require('./sidebar'),
    "type": "blog",
    "sidebarDepth": 3,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    valineConfig: {
      appId: '',// your appId
      appKey: '', // your appKey
    },
    "logo": "/img/logo.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "羽",
    "authorAvatar": "/img/logo.jpg",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}
