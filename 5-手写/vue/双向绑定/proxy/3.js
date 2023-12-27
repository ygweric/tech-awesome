/*
这是一个空框架，在下面会尝试填充实现proxy双向绑定
2: 边看边抄，算是成功了
3: 2023年12月27日 温故而知新
   一把成功！！！
   难点1：初始化时候，怎么代理所有的子属性
      题解：在get里面返回代理 ，这个非常简洁！！！！！
      我的方法：初始化时候循环
   难点2：我没有用"Reflect"也成功了，到底有没有用？？？

   过几天再做一次吧
*/

// 模拟数据更新
function update(val) {
  console.log("update view: ", val);
}

// proxy
function observe_proxy(data) {
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      if (typeof data[key] === "object") {
        data[key] = observe_proxy(data[key]);
      } 
      // data[key] = observe_proxy(data[key]);
    }
  }

  return new Proxy(data, {
    get: (target, key) => {
      return target[key];
    },
    set: (target, key, newVal) => {
      update(newVal)
      if (typeof newVal !== "object") {
        target[key] = newVal;
      } else {
        let proxyVal = observe_proxy(newVal);
        target[key] = proxyVal;
      }
      return true;
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
dataProxy.name = "YI_new"; // YI
dataProxy.age = { num: 222221 }; //(监听成功)输出 --> 数据更新
dataProxy.information.tel = "13456xxx234_new"; // 13456xxx234
dataProxy.age.num = 1111111110; // 1111111110
dataProxy.myCars.push("AE86_new"); // (监听成功)输出 --> 数据更新

console.log(JSON.stringify(dataProxy, null, 2));
