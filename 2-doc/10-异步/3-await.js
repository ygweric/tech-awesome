

function* generator(asyncFunc) {
  yield asyncFunc()
}

const generatorFuncs = []
function myAwait(asyncFunc) {
  if (!generatorFuncs[0]) {
    generatorFuncs.push(generator(asyncFunc))
  }
  return generatorFuncs[0].next().value
}


function getNameASync(params) {
  // return new Promise(function (resolve, reject) { setTimeout(() => { resolve('bob') }, 500); })
  return Promise.resolve('bob')
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let getNameSync = myAwait(getNameASync)
console.log('name: ', getNameSync);
console.log('name: ', getNameSync);
console.log('name: ', getNameSync);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// setTimeout(async () => {
//   let name = myAwait(getNameASync())
//   // let name = await getNameASync()
//   console.log('name: ', name);
// });



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// function* generator(i) {
//   yield i;
//   yield i + 10;
// }

// const gen = generator(10);

// console.log(gen.next().value);
// // expected output: 10

// console.log(gen.next().value);
// // expected output: 20

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let iterator = generator(getNameASync)
// console.log(iterator.next());

// function* generator2() {
//   yield getNameASync()
// }
// let iterator = generator2()
// console.log(iterator.next());