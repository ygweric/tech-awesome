

function curry(fn, args) {
 
}

//需要被柯里化的函数
function multiFn(a, b, c) {
  return a * b * c;
}

//multi是柯里化之后的函数
var multi = curry(multiFn);
console.log(multi(2)(3)(4));
// console.log(multi(2, 3, 4));
// console.log(multi(2)(3, 4));
// console.log(multi(2, 3)(4));
