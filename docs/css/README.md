---
title: 深度选择器
date: 2021-11-05
tags:
- css
categories:
-  css
---
#### vue-load中深度选择器

- ##### 在scoped中有时直接更改样式没办法更改所以需要使用到深度选择器

  - ##### css中的深度选择器

    - ```css
      <style scoped>
      .a >>> .b { /* ... */ }
      </style>
      ```

  - ##### sass中的深度选择器

    - ```CSS
      ::deep .b {
          /**/
      }
      或者
      /deep/ .b{
          /**/
      }
      ```


#### 使用slot可以通过 this.$slots来查看是否使用了插槽，$slots.xxxx(这里是具名插槽，如果没有就是default)在标签中判断
