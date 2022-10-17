/**
 * async的实现
 * @author waldon
 * @param {*} generatorFn - 生成器函数
 */
function asyncWrapper(generatorFn) {
  return new Promise((resolve) => {
    const iterator = generatorFn()

    let generator = { done: false }
    let count = 100
    while (count--) {
      if (!generator.done) {
        iterator.next().then(res => {

        })
      } else {
        resolve(generator.value)
      }
    }

    iterator.next().value.then(res => {
      // console.log(res)
      iterator.next(res).value.then(res => {
        // console.log(res)
        console.log(iterator.next(res).value);
      })
    })

  })

}

// 测试

const getDate = () => new Promise((resolve) => setTimeout(() => resolve(Date.now()), 1000))

function* testG() {
  const date = yield getDate()
  console.log('date: ', date)
  const date2 = yield getDate()
  console.log('date2: ', date2)
  return 'success'
}

// const iterator = testG()
// iterator.next().value.then(res => {
//   // console.log(res)
//   iterator.next(res).value.then(res => {
//     // console.log(res)
//     console.log(iterator.next(res).value);
//   })
// })

asyncWrapper(testG).then((res) => {
  console.log(res)
})

// 期望顺序输出 date date2 success