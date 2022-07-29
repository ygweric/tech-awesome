/**

借助原型可以基于已有的对象来创建对象，var B = Object.create(A)以A对象为原型，生成了B对象。B继承了A的所有属性和方法。

**同样的，Student继承了所有的Person原型对象的属性和方法。目前来说，最完美的继承方法**


 */

function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.getAge = function () {
  console.log("111")
}
function Student(name, age, price) {
  Person.call(this, name, age)
  this.price = price
  this.setScore = function () { }
}
Student.prototype = Object.create(Person.prototype)//核心代码
Student.prototype.constructor = Student//核心代码
var s1 = new Student('Tom', 20, 15000)
console.log(s1)
console.log(s1 instanceof Student, s1 instanceof Person) // true true
console.log(s1.constructor) //Student

