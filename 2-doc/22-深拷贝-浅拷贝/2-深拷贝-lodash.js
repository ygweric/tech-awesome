
import _ from 'lodash'

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
const newObj = _.cloneDeep(oldObj)
console.log('newObj', newObj);

// const beginDate = Date.now()
// console.log('begin loop');

// for (let i = 0; i < 1000000; i++) {
//   _.cloneDeep(oldObj)
// }

// console.log(`end loop, cost ${(Date.now() - beginDate) / 1000} seconds`); // 3.192

