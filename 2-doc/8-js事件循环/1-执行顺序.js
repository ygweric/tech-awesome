console.log('event start 1')
setTimeout(function () {
  console.log('setTimeout 5'); // 遇到 setTimeout, 回调进入到宏任务队列上
});

new Promise(function (resolve, reject) {
  console.log('promise start 2')// 遇到 Promise, 立即执行, then 函数进入到微任务队列
  resolve()
}).then(function () {
  console.log('promise end 4') // 同步代码执行结束, 主线程检查是否存在微任务, 发现 then, 执行
})
console.log('event end 3')