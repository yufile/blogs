---
title: VuePress-configure
date: 2021-11-02
tags:
- VuePress-configure
categories:
-  VuePress-configure
---
# 配置VuePress

### 首先在docs目录

- README.md写入

&ensp;&ensp;&ensp;&ensp;- 这里的内容作为首页展示的

```JavaScript
---
home: true
heroImage: /logo.jpg
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
  footer: MIT Licensed | Copyright © 2018-present Evan You
---


```


### 其次创建目录.vuepress

1. 创建config.js

&ensp;&ensp;&ensp;&ensp;1. 其中 导航和侧边栏抽出来了

```JavaScript
module.exports = {
  title: '羽', // 首页标题
  description: 'yuCode-Ui', // 详情
  dest: './dist', // 打包文件位置
  port: '7777',
  head: [ // 首页图片
    ['link', {rel: 'icon', href: '/logo.jpg'}]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: require('./nav'), // 导航
    sidebar: require('./sidebar'), // 侧边栏
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  }
}

```


2. 创建抽出来的文件nav.js

&ensp;&ensp;&ensp;&ensp;1. 这些是导航内容，标题、名称、链接（链接有两种方式一种是内部链接，一种是外部链接）

```JavaScript
module.exports = [
  {
    text: '懵逼指南', link: '/guide/'
  },
  {
    text: '面试宝典', link: '/baodian/',
    items: [
      {text: '初级开发篇', link: '/baodian/zero/'},
      {text: '中高进阶篇', link: '/baodian/high/'},
    ]
  },
  {
    text: '工具箱',
    items: [
      {
        text: '在线编辑',
        items: [
          {text: '图片压缩', link: 'https://tinypng.com/'}
        ]
      },
      {
        text: '在线服务',
        items: [
          {text: '阿里云', link: 'https://www.aliyun.com/'},
          {text: '腾讯云', link: 'https://cloud.tencent.com/'}
        ]
      },
      {
        text: '博客指南',
        items: [
          {text: '掘金', link: 'https://juejin.im/'},
          {text: 'CSDN', link: 'https://blog.csdn.net/'}
        ]
      }
    ]
  }
]

```


3. 创建抽出来的侧边栏

&ensp;&ensp;&ensp;&ensp;1. 通过路由来确定侧边栏内容位置

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1. 比如'/guide/' 定位的后面路由需要在上级目录中找到guide目录下的sidebar.js文件

```JavaScript
module.exports = {
  '/guide/': require('../guide/sidebar'),
  '/baodian/zero': require('../baodian/zero/sidebar'),
  '/baodian/high': require('../baodian/high/sidebar'),
}
```


&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1. 找到这个目录之后这个guide目录是需要创建的，在这个目录下创建sidebar.js文件，并且创建一个README.md文件(这个文件用来点击当前导航跳转过去暂时展示的内容)

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2. sidebar.js文件内容

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1. 这里的children是直接定位到展示文件的，所以需要在当前目录下创建notes目录并且创建one.md文件

```JavaScript
module.exports = [
  {
    title: '新手指南', // 侧边栏导航名称
    collapsable: true, // 可折叠
    children: [ // 路由位置
      '/guide/notes/one',
    ]
  },
  {
    title: '知码学院',
    collapsable: true,
    children: [
      '/guide/notes/two',
    ]
  }
]

```


4. 两种写页面的方式第一种只在一个文件里面写，第二种是在多个页面中写

&ensp;&ensp;&ensp;&ensp;1. 一个页面中写，vuepress默认访问的是README.md文件所以要是只在一个页面中写只需要创建一个REDAMD.md文件就行

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1. 单一页面写

```JavaScript
module.exports = [
  {
    title: '高级前端',
    collapsable: true,
    children: [
      '/baodian/high/'
    ]
  }
]
```



&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1. 多页面写

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1. 

```JavaScript
module.exports = [
  {
    title: '默认',
    collapsable: true,
    children: [
      '/baodian/zero/',
    ]
  },
  {
    title: '初级前端',
    collapsable: true,
    children: [
      '/baodian/zero/primary',
    ]
  }
]

```


5. 引入静态图片

&ensp;&ensp;&ensp;&ensp;1. 需要在.vuepress文件中创建一个public文件用来存放css、img、js文件

&ensp;&ensp;&ensp;&ensp;2. 首页（README.md）要是需要使用就可以直接/img/css/xxx.png 默认图片根路径就是public

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1. 


&ensp;&ensp;&ensp;&ensp;3. 使用css

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1. 字css目录下创建style.css

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;2. 



&ensp;&ensp;&ensp;&ensp;4. 引入js

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1. 




