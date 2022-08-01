# js中new的本质

1. `var obj = new Object();` 创建一个新对象
2. `obj.__proto__ = fn.prototype;`将创建新对象中的__proto__（隐式原型）指向原函数中的prototype（显示原型）,
3. `fn.call(obj);` 将原函数中的`this`，指向创建好的这个新对象
4. 判断原函数是否主动返回对象，如果没有那么new出来的就是这个新对象（1,2,3步骤创建的）

**`new` 一个对象**
```js
 function fn() { }
  var obj = new fn();
```

**替换实现`new`**
```js
  function fn() { }
  var obj = new Object();
  obj.__proto__ = fn.prototype;
  fn.call(obj);
```

以上代码在浏览器中运行如下

![image](https://user-images.githubusercontent.com/2714474/182086898-9907060a-543f-46bf-ad23-70f045b7d370.png)

