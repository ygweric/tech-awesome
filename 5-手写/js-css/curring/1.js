/*
第一次写不出来
*/

function curry(fn) {
  let realArgsCount = fn.length;

  let currentArgs = [];

  if (currentArgs.length < realArgsCount) {
    // continue

    return function () {
      return curry(fn, [...arguments, ...currentArgs])
    }

  } else {
    fn.apply(this, currentArgs);
  }
}

//需要被柯里化的函数
function multiFn(a, b, c) {
  return a * b * c;
}

//multi是柯里化之后的函数
var multi = curry(multiFn);
// multi(2)
// multi(2)(3)
// multi(2)(3)(4)
console.log(multi(2)(3)(4));
// console.log(multi(2, 3, 4));
// console.log(multi(2)(3, 4));
// console.log(multi(2, 3)(4));
