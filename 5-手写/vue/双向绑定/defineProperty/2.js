/*
 defineProperty 效果空模板

 2： 开始尝试写一下，看自己记住没有
 2： 看着标准答案来了一遍，算是有更深一步的了解
*/

// 验证更新是否触发
function updateView(newVal) {
  // console.log("视图更新", newVal, JSON.stringify(newVal));
  console.log("视图更新", newVal);
  // console.log("视图更新");
}


let arrayPrototype =  Array.prototype
// 浅拷贝一份，之所以浅拷贝，是因为如果不拷贝，直接在原来的prototype上修改，下面的“Array.prototype[method].call”会循环调用
let copyArrayPrototype = Object.create(arrayPrototype)
// const methods = ["push", "pop", "shift", "unshift", "splice"];
const methods = ["push"];
methods.forEach((method) => {
  // let realMethod = arrayPrototype[method]
  // copyArrayPrototype[method] = ()=>{
    // 这里不能用箭头函数，否则this和arguments是继承上一级作用于的值，不是当前数组的作用域
    copyArrayPrototype[method] = function () {
    // realMethod.call(this , ...arguments)
    Array.prototype[method].call(this , ...arguments)
    updateView(this)
 }
});


// 重新定义属性，监听起来
function defineReactive(target, key, value) {

}

// 监听对象属性
function observe(target) {

  if (target instanceof Array) {
    target.__proto__ = copyArrayPrototype
    // target.forEach(element => {
    //   observe(element)
    // });
  }

  if (!(target instanceof Array) &&  typeof target === 'object') {
    for (const key in target) {
      if (Object.hasOwnProperty.call(target, key)) {
        // 这个element是闭包，所以能长期保存值
        let element = target[key]; 
        observe(element)
        Object.defineProperty(target, key,{
          enumerable: true,
          set: (newVal)=>{
            if (newVal !==  target[key]) {
              observe(newVal)
              updateView(newVal)
              // target[key] = newVal
              element = newVal
            }
          },
          get: ()=>{
            // 这里不能 “return target[key]”，因为会无限循环调用get
            // return target[key]
            return element
          }
        })
      }
    }
  }



}

// 准备数据
const data = {
  name: "Yimwu",
  age: 1,
  myCars: ["Bugatti", "Koenigsegg"],
  information: {
    tel: "135xxxxx354",
    email: "15xxxxx@xx.com",
  },
};

// 监听数据
observe(data);

// 测试
data.name = 'YI_new' // YI
data.age = { num: 222221 }; //(监听成功)输出 --> 数据更新
data.information.tel = '13456xxx234_new' // 13456xxx234
data.age.num = 1111111110 // 1111111110
data.myCars.push('AE86_new') // (监听成功)输出 --> 数据更新


console.log(JSON.stringify(data, null, 2));