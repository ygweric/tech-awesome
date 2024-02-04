/*
https://leetcode.cn/problems/count-square-submatrices-with-all-ones
给你一个 m * n 的矩阵，矩阵中的元素不是 0 就是 1，请你统计并返回其中完全由 1 组成的 正方形 子矩阵的个数。

和 "lc-221-中-最大正方形" 有关联
*/

var countSquares = function (matrix) {
  /*
  1. 这里想错了，还需要   dp(i-1, j-1), dp(i-1, j), 之间重叠的问题，在想想方法

  let preCount = min( 
        dp(i-1, j-1),
        dp(i-1, j),
        dp(i, j-1),
      )
    if(preCount>0 && num(i, j)===1) {
      dp(i, j) = preCount +1
    } else {
        dp(i, j) =0
    }

   */

  // let dpArr = Array.from({length: matrix.length}, (_, i)=>Array.from({length: matrix[0].length}, (_, j)=> matrix[i][j])) // 这个相当于拷贝了。。可以不用这个

  // 第一行和第一列都是0

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      let preCount = Math.min(matrix[i][j], matrix[i - 1][j], matrix[i][j - j]);
      if (preCount > 0 && matrix[i][j] === 1) {
        matrix[i][j] = preCount + 1;
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix[matrix.length-1][matrix[0].length-1]
};

console.log(
  countSquares([
    [1, ],
  ])
); // 1
console.log(
  countSquares([
    [1, 1],
    [1, 1],
  ])
); // 1
// console.log(
//   countSquares([
//     [0, 1, 1, 1],
//     [1, 1, 1, 1],
//     [0, 1, 1, 1],
//   ])
// ); // 15
// console.log(
//   countSquares([
//     [1, 0, 1],
//     [1, 1, 0],
//     [1, 1, 0],
//   ])
// ); // 7
