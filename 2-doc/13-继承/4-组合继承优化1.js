/**
这种方式通过父类原型和子类原型指向同一对象，子类可以继承到父类的公有方法当做自己的公有方法，
而且不会初始化两次实例方法/属性，避免的组合继承的缺点。

**但这种方式没办法辨别是对象是子类还是父类实例化**

# 优点：
* 不会初始化两次实例方法/属性，避免的组合继承的缺点

# 缺点：
* 没办法辨别是实例是子类还是父类创造的，子类和父类的构造函数指向是同一个。

 */
function Person(name, age) {
  this.name = name
  this.age = age
  this.setAge = function () { }
}
Person.prototype.getAge = function () {
  console.log("111")
}
function Student(name, age, price) {
  Person.call(this, name, age)
  this.price = price
  this.setScore = function () { }
}
Student.prototype = Person.prototype
Student.prototype.sayHello = function () { }
var s1 = new Student('Tom', 20, 15000)
console.log(s1)

console.log(s1 instanceof Student, s1 instanceof Person)//true true
console.log(s1.constructor)//Person







