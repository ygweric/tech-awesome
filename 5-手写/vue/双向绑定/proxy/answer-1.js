// 模拟数据更新
function update(val){
  console.log('update view: ', val)
}
// proxy
function observe_proxy(data){
  const res = new Proxy(data, {
    get(target, key, receiver){
      // 若修改的为嵌套对象，如 obj.a.b = 2，则 obj.a 触发 get，
      // 返回嵌套代理对象，完成嵌套对象代理
      if(typeof target[key] === 'object'){
        return observe_proxy(target[key])
      }
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver){
      update(...arguments)
      return Reflect.set(target, key, value, receiver)
    }
  })
  return res
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
const dataProxy = observe_proxy(data)
// dataProxy.name = 'YI_new' // YI
// dataProxy.age = { num: 222221 }; //(监听成功)输出 --> 数据更新
// dataProxy.information.tel = '13456xxx234_new' // 13456xxx234
// dataProxy.age.num = 1111111110 // 1111111110
dataProxy.myCars.push('AE86_new') // (监听成功)输出 --> 数据更新

console.log(JSON.stringify(dataProxy, null, 2));