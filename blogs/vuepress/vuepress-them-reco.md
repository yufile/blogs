---
title: vuepress-theme-reco
date: 2021-11-02
tags:
- vuepress-theme-reco-user
categories:
-  vuepress-theme-reco-user
---

# 使用vuepress-theme-reco

1. 地址

[https://vuepress-theme-reco.recoluan.com/](https://vuepress-theme-reco.recoluan.com/)

1. 首先

&ensp;&ensp;&ensp;&ensp;1. 

```JavaScript
# 安装脚手架工具
npm install @vuepress-reco/theme-cli -g

# 创建项目
theme-cli init my-blog  #my-blog可替换成自己需要的项目名称
```


2. 这里是分类的位置

&ensp;&ensp;&ensp;&ensp;1. 

![](image/QQ%E6%88%AA%E5%9B%BE20211101160827.png)

3. 这里是配置作者信息的

&ensp;&ensp;&ensp;&ensp;1. 

```JavaScript
 "logo": "/logo.png", // 顶部导航左边logo
 "search": true,  // 是否启用搜索
 "searchMaxSuggestions": 10, // 搜索展示最多内容
 "lastUpdated": "Last Updated",
 "author": "羽", // 作者名字
 "authorAvatar": "/avatar.png", // 作者头像
 "record": "xxxx",
 "startYear": "2017"
```


![](image/QQ%E6%88%AA%E5%9B%BE20211101161017.png)

4. 顶部导航和侧边栏使用方式差不多

&ensp;&ensp;&ensp;&ensp;1. 顶部导航内容

![](image/QQ%E6%88%AA%E5%9B%BE20211101190341.png)

&ensp;&ensp;&ensp;&ensp;2. 侧边栏

![](image/QQ%E6%88%AA%E5%9B%BE20211101190405.png)

&ensp;&ensp;&ensp;&ensp;3. 使用位置在config.js中

&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;1. 

![](image/QQ%E6%88%AA%E5%9B%BE20211101190521.png)

![](image/QQ%E6%88%AA%E5%9B%BE20211101190251.png)


