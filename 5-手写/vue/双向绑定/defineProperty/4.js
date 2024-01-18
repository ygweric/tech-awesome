/*
 defineProperty 效果空模板

 2：开始尝试写一下，看自己记住没有
 2：看着标准答案来了一遍，算是有更深一步的了解
 3: 温故而知新 2023年12月27日
    难点： 
    1. defineProperty 里面，用"闭包"来存储值
 4. 2024年1月18日复习，一把搞定，还不错
*/

// 验证更新是否触发
function updateView(newVal) {
  // console.log("视图更新", newVal, JSON.stringify(newVal));
  console.log("视图更新", newVal);
  // console.log("视图更新");
}

let cloneArrayPrototype = Object.create(Array.prototype);
const methods = ["push"];
methods.forEach((methodName) => {
  cloneArrayPrototype[methodName] = function () {
    updateView(arguments);
    Array.prototype[methodName].call(this, arguments);
  };
});

// 监听对象属性
function observe(target) {
  if (typeof target !== "object") {
    return;
  }

  if (Array.isArray(target)) {
    target.__proto__ = cloneArrayPrototype;
    return;
  }

  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
      let value = target[key];
      Object.defineProperty(target, key, {
        get() {
          observe(value);
          return value;
        },
        set(newVal) {
          if (newVal !== value) {
            updateView(newVal);
            value = newVal;
          }
        },
      });
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
data.name = "YI_new"; // YI
data.age = { num: 222221 }; //(监听成功)输出 --> 数据更新
data.information.tel = "13456xxx234_new"; // 13456xxx234
data.age.num = 1111111110; // 1111111110
data.myCars.push("AE86_new"); // (监听成功)输出 --> 数据更新
console.log(JSON.stringify(data, null, 2));
