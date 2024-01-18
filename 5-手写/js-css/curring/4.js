/*
第一次写不出来
2: 看了答案，尝试写，勉强能出来答案，但代码感觉很乱
3: 改了一下，看着清楚多了
4: 2024年1月18日复习
*/

function curry(fn, args = []) {
  let fnArgLength = fn.length
  let lastArgs = [...args]
  return function () {
    let newArgs = [...lastArgs, ...arguments]
    if (newArgs.length === fnArgLength) {
      return fn.apply(this, newArgs)
    } else {
      return curry(fn , newArgs)
    }
  }


 
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
