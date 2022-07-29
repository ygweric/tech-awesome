
/**

原型链+借用构造函数的组合继承

通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用。
本质是 **方法1+方法2+constructor=方法3**

这种方式融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。不过也存在缺点就是无论在什么情况下，
都会调用两次构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数的内部，
子类型最终会包含父类型对象的全部实例属性，但我们不得不在调用子类构造函数时重写这些属性。

# 优点：
* 可以继承实例属性/方法，也可以继承原型属性/方法
* 不存在引用属性共享问题
* 可传参
* 函数可复用

# 缺点：
* 调用了两次父类构造函数，生成了两份实例

 */
function Person(name, age) {
  console.log('Person constructor');
  this.name = name
  this.age = age
  this.setAge = function () { }
}
Person.prototype.getName = function () {
  console.log("111")
}
function Student(name, age, price) {
  console.log('Student constructor');
  Person.call(this, name, age)
  this.price = price
  this.setScore = function () { }
}
Student.prototype = new Person()
Student.prototype.constructor = Student//组合继承也是需要修复构造函数指向的
Student.prototype.sayHello = function () { }
var s1 = new Student('Tom', 20, 15000)
var p1 = new Person('Jack', 22, 14000)
console.log('s1: ', s1)
console.log('s1.constructor: ', s1.constructor) //Student
console.log('p1.constructor: ', p1.constructor) //Person

/**
输出：


 */

