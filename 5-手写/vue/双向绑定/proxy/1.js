
/*
这是一个空框架，在下面会尝试填充实现proxy双向绑定

*/

// 模拟数据更新
function update(){
  console.log('update view')
}
// proxy
function observe_proxy(data){
  
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
dataProxy.name = 'YI_new' // YI
dataProxy.age = { num: 222221 }; //(监听成功)输出 --> 数据更新
dataProxy.information.tel = '13456xxx234_new' // 13456xxx234
dataProxy.age.num = 1111111110 // 1111111110
dataProxy.myCars.push('AE86_new') // (监听成功)输出 --> 数据更新

console.log(JSON.stringify(dataProxy, null, 2));