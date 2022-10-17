
/**
 * run cli
 * npx babel  23-babel/1-babel.js -d 23-babel/babel-lib
 */
// const arr = [1, 2, 3].map(n => n + 10);
// console.log(arr);
// console.log([...arr]);

// const arr2 = [1, 2, 3]
// function getname(a, b, c) {
//   return [a + 10, b, c]
// }
// console.log(getname(...arr2));


function* generator(asyncFunc) {
  yield asyncFunc()
}

// function getNameASync(params) {
//   return Promise.resolve('bob')
// }

// let iterator = generator(getNameASync)
// console.log(iterator.next().value);
