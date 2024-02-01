/*
https://leetcode.cn/problems/count-square-submatrices-with-all-ones
给你一个 m * n 的矩阵，矩阵中的元素不是 0 就是 1，请你统计并返回其中完全由 1 组成的 正方形 子矩阵的个数。
*/

var countSquares = function(matrix) {
  /*
  
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

  dp(i, j) = 
   */


//  todo
};



console.log(countSquares([
    [0,1,1,1],
    [1,1,1,1],
    [0,1,1,1]
  ])); // 15
console.log(countSquares([
    [1,0,1],
    [1,1,0],
    [1,1,0]
  ])); // 7




