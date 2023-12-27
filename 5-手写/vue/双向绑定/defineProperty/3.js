/*
 defineProperty 效果空模板

 2：开始尝试写一下，看自己记住没有
 2：看着标准答案来了一遍，算是有更深一步的了解
 3: 温故而知新 2023年12月27日
    难点： 
    1. defineProperty 里面，用"闭包"来存储值
*/

// 验证更新是否触发
function updateView(newVal) {
  // console.log("视图更新", newVal, JSON.stringify(newVal));
  console.log("视图更新", newVal);
  // console.log("视图更新");
}

const newProperty = Object.create(Array.prototype);

const methods = ["push"];
methods.forEach((methodName) => {
  newProperty[methodName] = function () {
    updateView(...arguments);
    Array.prototype[methodName].call(this, ...arguments);
  };
});

// 监听对象属性
function observe(target) {
  if (target instanceof Array) {
    target.__proto__ = newProperty;
  }

  // 只能监听对下，没法监听 数字 等基本类型
  if (typeof target !== "object") {
    return;
  }

  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
      let value = target[key]
      Object.defineProperty(target, key, {
        set: (newVal) => {
          value = newVal
          updateView(newVal);
          observe(newVal);
        },
        get: () => {
          return  value
        },
      });

      observe(target[key]);
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
