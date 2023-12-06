/*
 defineProperty 效果空模板

*/

const methods = ["push", "pop", "shift", "unshift", "splice"];
methods.forEach((method) => {
 
});

// 验证更新是否触发
function updateView(newVal) {
  console.log("视图更新", newVal);
}

// 重新定义属性，监听起来
function defineReactive(target, key, value) {

}

// 监听对象属性
function observe(target) {

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
data.name = 'YI' // YI
data.age = { num: 21 }; //(监听成功)输出 --> 数据更新
data.information.tel = '13456xxx234' // 13456xxx234
data.age.num = 110 // 110
data.myCars.push('AE86') // (监听成功)输出 --> 数据更新
