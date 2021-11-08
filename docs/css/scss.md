---
title: Scss预处理
date: 2021-11-05
tags:
- Scss
categories:
-  Scss
---

- ##### scss变量
  - ```scss
    $top-color: #faa; // 定义变量 颜色
    $highlight-color: blue !default; // 定义默认 颜色
    $highlight-color: #F90;
    $border-style: 1px solid #b61111; // 定义 边框
    ```

- ##### scss`@mixin`混入

  - ##### 什么时候使用mixin

    - ##### 利用混合器，可以很容易地在样式表的不同地方共享样式。如果你发现自己在不停地重复一段样式，那就应该把这段样式构造成优良的混合器，尤其是这段样式本身就是一个逻辑单元，比如说是一组放在一起有意义的属性。

  - ```scss
    @mixin all-style {
      color: #fca;
      width: 100px;
      height: 100px;
      background: #20a0ff;
    }
    // 使用
    .top {
      color: $top-color;
      border: $border-style;
      @include all-style; // 在这
      li.a {
        color: $highlight-color;
      }
    }
    ```

- scss`@mixin`带参数的

  - ```scss
    @mixin link-colors($normal, $decoration, $hover) {
      color: $normal;
      text-decoration: $decoration;
      &:hover { color: $hover; }
    }
    // 也可以存在默认值的情况
    @mixin link-colors(
        $normal,
        $hover: $normal,
        $visited: $normal
      )
    {
      color: $normal;
      &:hover { color: $hover; }
      &:visited { color: $visited; }
    }
    
    // 使用
    a {
      @include link-colors(blue, none, red)
    }
    // 也可以这样
    a {
        @include link-colors(
          $normal: blue,
          $visited: green,
          $hover: red
      );
    }
    ```

- ##### scss`@entend`继承

  - ```scss
    .st {
      color: red;
      background: #20a0ff;
    }
    a {
      @extend .st;
    }
    ```

    

