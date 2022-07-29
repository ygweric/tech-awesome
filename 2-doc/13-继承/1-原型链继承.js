/**
  原型链继承
  Student.prototype = new Person()
  
  https://segmentfault.com/a/1190000016708006
  
  但这种方式实现的本质是通过将子类的原型指向了父类的实例，所以子类的实例就可以通过__proto__访问到 Student.prototype 也就是Person的实例，
  这样就可以访问到父类的私有方法，然后再通过__proto__指向父类的prototype就可以获得到父类原型上的方法。
  于是做到了将父类的私有、公有方法和属性都当做子类的公有属性

  子类继承父类的属性和方法是将父类的私有属性和公有方法都作为自己的公有属性和方法，
  我们都知道在操作基本数据类型的时候操作的是值，在操作引用数据类型的时候操作的是地址，
  如果说父类的私有属性中有引用类型的属性，那它被子类继承的时候会作为公有属性，这样子类1操作这个属性的时候，就会影响到子类2。

  # 特点：
  * 父类新增原型方法/原型属性，子类都能访问到
  * 简单，易于实现


  # 缺点：
  * 无法实现多继承
  * 来自原型对象的所有属性被所有实例共享
  * 创建子类实例时，无法向父类构造函数传参
  * 要想为子类新增属性和方法，必须要在Student.prototype = new Person() 之后执行，不能放到构造器中

 * 
 */
function Person(age) {
  this.age = age
  this.setName = function (name_) {
    this.name = name_
  }
}

Person.prototype.setAge = function (age_) {
  this.age = age_
}
console.log('Person.prototype: ', Person.prototype)

//子类型
function Student(price) {
  this.price = price
}


// >>>>>>>>>>>>>>>>>>>>> begin 
// section-1 和 section-2 本质一样  

/** section-1:  */
Student.prototype = new Person()
Student.prototype.gender = 'gril'

/* section-2 */
// const p = new Person()
// p.gender = 'gril'
// Student.prototype = p
// <<<<<<<<<<<<<<<<<<<<<< end 


var s1 = new Student(15000)
// s1.__proto__ = Person.prototype

console.log('s1: ', s1)
s1.setName('bob')
s1.setAge(18)
console.log('s1: ', s1)
console.log('s1.__proto__ === Student.prototype: ', s1.__proto__ === Student.prototype)
console.log('s1.__proto__: ', s1.__proto__)

/** 输出：
s1:  Person { price: 15000 }
s1:  Person { price: 15000, name: 'bob', age: 18 }
s1.__proto__ === Student.prototype:  true
s1.__proto__:  Person {
  age: undefined,
  setName: [Function (anonymous)],
  gender: 'gril'
}
 */