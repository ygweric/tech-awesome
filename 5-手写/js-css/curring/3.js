/*
第一次写不出来
2: 看了答案，尝试写，勉强能出来答案，但代码感觉很乱
3: 改了一下，看着清楚多了
*/

function curry(fn, args = []) {
  return function () {
    let newArgs = [...args, ...arguments];
    if (newArgs.length < fn.length) {
      return curry.call(this, fn, newArgs);
    } else {
      return fn.apply(this, newArgs);
    }
  };
}

//需要被柯里化的函数
function multiFn(a, b, c) {
  return a * b * c;
}

//multi是柯里化之后的函数
var multi = curry(multiFn);
console.log(multi(2)(3)(4));
console.log(multi(2, 3, 4));
console.log(multi(2)(3, 4));
console.log(multi(2, 3)(4));
