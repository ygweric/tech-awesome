/*
这是一个空框架，在下面会尝试填充实现proxy双向绑定
2: 边看边抄，算是成功了

*/

// 模拟数据更新
function update(val) {
  console.log("update view: ", val);
}
// proxy
function observe_proxy(data) {
  return new Proxy(data, {
    get(target, key, receiver) {
      if (typeof target[key] === "object") {
        // 这里需要将子节点的proxy返回，才能递归代理自己节点
        return observe_proxy(target[key]);
      }

      return Reflect.get(...arguments);
    },
    set() {
      update(arguments);
      return Reflect.set(...arguments); // 需要return
    },
  });
}
// 测试数据
const data = {
  name: "Yimwu",
  age: 1,
  myCars: ["Bugatti", "Koenigsegg"],
  information: {
    tel: "135xxxxx354",
    email: "15xxxxx@xx.com",
  },
};
//
const dataProxy = observe_proxy(data);
// dataProxy.name = 'YI_new' // YI
// dataProxy.age = { num: 222221 }; //(监听成功)输出 --> 数据更新
// dataProxy.information.tel = '13456xxx234_new' // 13456xxx234
// dataProxy.age.num = 1111111110 // 1111111110
dataProxy.myCars.push("AE86_new"); // (监听成功)输出 --> 数据更新

console.log(JSON.stringify(dataProxy, null, 2));
