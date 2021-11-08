---
title: VuePress-install
date: 2021-11-02
tags:
- VuePress-install
categories:
-  VuePress-install
---
# 安装Vuepress

1. 创建并进入一个新目录

```JavaScript
mkdir vuepress-starter && cd vuepress-starter
```


2. 使用你喜欢的包管理器进行初始化

```JavaScript
yarn init # npm init
```


3. 将 VuePress 安装为本地依赖

&ensp;&ensp;&ensp;&ensp;我们已经不再推荐全局安装 VuePress

```JavaScript
yarn add -D vuepress # npm install -D vuepress
```


&ensp;&ensp;&ensp;&ensp;注意

&ensp;&ensp;&ensp;&ensp;如果你的现有项目依赖了 webpack 3.x，我们推荐使用 [Yarn (opens new window)](https://classic.yarnpkg.com/zh-Hans/)而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。

4. 创建你的第一篇文档

```JavaScript
mkdir docs && echo '# Hello VuePress' > docs/README.md
```


5. 在 `package.json` 中添加一些 [scripts(opens new window)](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

&ensp;&ensp;&ensp;&ensp;这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。

```JavaScript
{
"scripts": {

  "docs:dev": "vuepress dev docs",

  "docs:build": "vuepress build docs"

}
```


6. 在本地启动服务器

```JavaScript
yarn docs:dev # npm run docs:dev
```


&ensp;&ensp;&ensp;&ensp;VuePress 会在 [http://localhost:8080 (opens new window)](http://localhost:8080/)启动一个热重载的开发服务器。


