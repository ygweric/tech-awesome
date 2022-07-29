
/**

:在子类型构造函数中通过`call/apply`调用父类型构造函数

只能继承父类的属性和方法，不能继承父类**原型**的属性和方法

# 特点：
* 解决了原型链继承中子类实例共享父类引用属性的问题
* 创建子类实例时，可以向父类传递参数
* 可以实现多继承(call多个父类对象)

# 缺点：
* 实例并不是父类的实例，只是子类的实例
* 只能继承父类的实例属性和方法，不能继承原型属性和方法
* 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

 */

function Person(name, age) {
  console.log('Person constructor');
  this.name = name
  this.age = age
  this.setName = function () { }
}

Person.prototype.setAge = function () { }

function Student(name, age, price) {
  console.log('Student constructor');

  // Person.call(this, name, age)  // 相当于: this.Person(name, age)
  Person.apply(this, [name, age])
  this.price = price
}
var s1 = new Student('Tom', 20, 15000)
console.log('s1: ', s1);

// 只能继承父类的属性和方法，不能继承父类原型的属性和方法
// s1.setAge()//s1.setAge is not a function



/**
 输出:

 s1:  Student {
   name: 'Tom',
   age: 20,
   setName: [Function (anonymous)],
   price: 15000
 }
 */