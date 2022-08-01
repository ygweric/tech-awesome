// es5 构造函数
function NewClass() {
  this.name = "es5-Class";
}

var obj = new NewClass();
console.log(obj.name);// 输出newClass

// es6+ 类定义
class Es6Class {
  constructor() {
    this.name = "es6-Class";
  }
}

let obj2 = new Es6Class();
console.log(obj2.name);// 输出es6Class
