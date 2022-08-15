

// let throttleLastFireTimes = []
// function throttle(delay = 500, func) {
//   return (function (index) {
//     return function () {
//       let now = Date.now()
//       if (!throttleLastFireTimes[index] || (now - throttleLastFireTimes[index] > delay)) {
//         throttleLastFireTimes[index] = now
//         func && func()
//       }
//     }
//   })(throttleLastFireTimes.length)
// }

// let throttleRender = throttle(500, render)



let memorizedData = []
var index
function useState(initValue) {
  index++
  let val = memorizedData[index] || initValue
  let setVal = (newVal) => {
    memorizedData[index] = newVal
    // throttleRender()
    render()
  }
  return [val, setVal]
}


function render() {
  index = 0

  const [age, setAge] = useState(18)
  const [price, setPrice] = useState(100)

  console.log(`age: ${age}, price: ${price}`);
  setTimeout(() => {
    setAge(age + 1)
    setPrice(price + 1)
  }, 1000);
}



render()


