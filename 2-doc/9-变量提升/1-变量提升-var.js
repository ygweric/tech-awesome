/**
1、在js语言中，没有类似于c语言这样的块级作用域。

2、js作用域链变量访问规则：
  （1）、当前作用域内存在要访问的变量时，则使用当前作用域中的变量。
  （2）、当前作用域中不存在要访问的变量时，则会到上一层作用域中寻找，直到全局作用域。

3、执行顺序：　　
  （1）代码的检查装载阶段（预编译阶段），此阶段进行变量和函数的声明，但是不对变量进行赋值，变量的默认值为undefined。
  （2）代码的执行阶段，此阶段对变量进行赋值和函数的声明。

4、看上面的代码：第一个a输出undefined。原因：js作用域链的访问规则，当前作用域内存在要访问的变量a，
  所以使用当前作用域中的变量。再根据js代码的执行顺序，此时的a只是声明了而并未被赋值，默认为undefined，
  所以输出undefined。而第二个a，输出1，正是因为此时的a已经被声明且被赋值，所以a输出1。

在当前作用域内存在要访问的变量a，则就会使用当前作用域的变量a，
  只要当前作用域存在该变量即是对该变量进行了声明（即不会再用作用域外的值），
  直到var a=2;才是对该变量进行赋值。在代码中先是执行了console.log(a);在执行var a=2;
  所以此时a在该作用域内只是进行了声明还未进行赋值，所以就会输出undefined.
 */
setTimeout(() => {//1
  console.log('>>>>>>>>>>>>>>>>>>>>>>> 1');
  var a = 1;
  function func() {
    console.log(a); // undefined 
    var a = 2;
    console.log(a);
  }
  func();
  console.log('<<<<<<<<<<<<<<<<<<<<<<<');
}, 0);

// 输出:
// undefined
// 2

setTimeout(() => {// 2
  console.log('>>>>>>>>>>>>>>>>>>>>>>> 2');
  var hello = function () {
    console.log('hello,zhangsan');
  }
  hello();
  var hello = function () {
    console.log('hello,lisi');
  }
  hello();

  console.log('<<<<<<<<<<<<<<<<<<<<<<<');

  // output:
  // hello,zhangsan
  // hello,lisi
}, 0);


/**
 * 定义式的函数语句会被提取出来优先执行。函数定义执行完后，才会按顺序执行其他代码。
 */
setTimeout(() => {// 3
  console.log('>>>>>>>>>>>>>>>>>>>>>>> 3');
  function hello() {
    console.log('hello,zhangsan');
  }
  hello();
  function hello() {
    console.log('hello,lisi');
  }
  hello();
  console.log('<<<<<<<<<<<<<<<<<<<<<<<');

  // output:
  // hello,lisi
  // hello,lisi
}, 0);