/**
ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），
然后再用子类的构造函数修改this。

# 优点：
* 语法简单易懂,操作更方便

# 缺点：
* 并不是所有的浏览器都支持class关键字

 */

class Person {
  //调用类的构造方法
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  //定义一般的方法
  showName() {
    console.log("调用父类的方法")
    console.log(this.name, this.age);
  }
}
let p1 = new Person('kobe', 39)
console.log(p1)
//定义一个子类
class Student extends Person {
  constructor(name, age, salary) {
    super(name, age)//通过super调用父类的构造方法
    this.salary = salary
  }
  showName() {//在子类自身定义方法
    console.log("调用子类的方法")
    console.log(this.name, this.age, this.salary);
  }
}
let s1 = new Student('wade', 38, 1000000000)
console.log(s1)
s1.showName()







