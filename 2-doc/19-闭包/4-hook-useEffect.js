
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
  let age = 18
  useEffect(() => {
    console.log(`age: ${age}`);
  }, [age])
}


render()


