
let memorizedData = []
var index
function useState(initValue) {
  index++
  let val = memorizedData[index] || initValue
  let setVal = (newVal) => {
    memorizedData[index] = newVal
    render()
  }
  return [val, setVal]
}


function render() {
  index = 0
  const [age, setAge] = useState(18)
  console.log(`age: ${age}`);
  setTimeout(() => {
    setAge(age + 1)
  }, 500);
}



render()







