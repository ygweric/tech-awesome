// 重新定义数组原型，加入触发更新的机制
const oldArrayProperty = Array.prototype;
// 创建新对象，原型指向oldArrayProperty
// 这里实际是浅拷贝prototype
const arrProperty = Object.create(oldArrayProperty);
// 重写原型上的方法（可以所有都重写，这里只进行少量举例）
// arrProperty.push = function(){}
// arrProperty.pop = function(){}
// 优化写法
const methods = ["push", "pop", "shift", "unshift", "splice"];
methods.forEach((method) => {
  arrProperty[method] = function () {
    Array.prototype[method].call(this, ...arguments);
    updateView(this);
  };
});

// 验证更新是否触发
function updateView(newVal) {
  console.log("视图更新", newVal);
}

// 重新定义属性，监听起来
function defineReactive(target, key, value) {
  observe(value);
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newVal) {
      // value 一直在闭包中，此处设置完成后，下次get能够获取最新设置的值
      // 这里有个小优化，若相同则不触发更新
      if (newVal !== value) {
        value = newVal;
        observe(value);
        // 触发更新
        updateView(newVal);
      }
    },
  });
}

// 监听对象属性
function observe(target) {
  if (typeof target !== "object" || target === null) {
    // 不是数组或对象不适合监听
    return;
  }
  if (Array.isArray(target)) {
    target.__proto__ = arrProperty;
    return;
  }
  // 将对象的属性用 defineProperty 重新定义
  for (let key in target) {
    defineReactive(target, key, target[key]);
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