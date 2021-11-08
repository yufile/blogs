---
title: call、apply、bind不同
date: 2021-11-05
tags:
- js
categories:
-  js
---

### call 和 applay 作用差不多传递的第二个参数不同

- call() 方法分别接受参数。

- apply() 方法接受数组形式的参数。

- A.call( B,x,y )：就是把A的函数放到B中运行，x 和 y 是A方法的参数。

- 将minus指向改为了add

- ```
  // 将指向 minus1 的指向改为 add1 将代码在add1中执行
  ```

- ```js
  function add (x, y) 
  { 
      console.log (x + y);
  } 
  function minus (x, y) 
  { 
      console.log (x - y); 
  } 
  add.call (minus , 1, 1); // 2
  ```

- 将this的指向改为myfunc1

```js
function myfunc1(){
    this.name = 'Lee';
    this.myTxt = function(txt) {
        console.log( 'i am',txt );
    }
}
 
function myfunc2(){
    myfunc1.call(this);
}
 
var myfunc3 = new myfunc2();
myfunc3.myTxt('Geing'); // i am Geing
console.log (myfunc3.name);	// Lee
```

- bind改变函数作用域的方式和call和apply的不同点在于，call和apply是改变作用域的同时也会执行函数。而bind改变作用域会生成一个新函数，是否执行可以根据具体需求设置。

- ### 总的来说这三个函数都是A.bind(B,1,1,1)将A放到B中执行

```js
// bind	
var obj = {
		color: 'green'
	}
	function demo () {
		console.log(arguments)
		console.log(this.color)
	}
	var newFn = demo.bind(obj,1,1,1)
	newFn(2,2,2)
```
