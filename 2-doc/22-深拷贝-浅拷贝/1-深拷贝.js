
function cloneDeep(obj) {
  if (['string', 'number', 'boolean', 'symbol'].includes(typeof obj) // 基础类型
    || !obj) {// null, undefine
    return obj
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags)
  }
  if (Array.isArray(obj)) {
    return obj.map(item => cloneDeep(item))
  }
  if (obj.__proto__ === Object.prototype) {
    let newObj = Object.create(obj.__proto__)
    return newObj
  }

  let newObj = new Object()
  let keys = Reflect.ownKeys(obj)
  for (const key of keys) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      newObj[key] = cloneDeep(value)
    }
  }
  return newObj
}

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  name
  age
  getName() {

  }
}

const oldObj = {
  a1: {
    b1: ['1,2,3,4'],
  },
  a2: false,
  a3: 3,
  a4: /123/ig,
  a5: new Person('rrr', 19),
  a6: Symbol('abc'),
  a7: new Object(),
  a8: Object.create(null),
  a9: {}
}

console.log('oldObj', oldObj);
const newObj = cloneDeep(oldObj)
console.log('newObj', newObj);

