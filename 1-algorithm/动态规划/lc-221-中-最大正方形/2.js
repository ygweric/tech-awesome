/*
https://leetcode.cn/problems/maximal-square
在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

*/

const printMatrix = require("../../utils/array2d");
/*

1. 思路是动态规划应该没问题，但具体小思路上有问题，搞得边缘条件越来越复杂，再来一次

2. 看了好几遍题解，才面前搞明白，
    在1的方案中，我逐个对比dp[i-1][j-1]左侧和下侧的是否为1， 来确定dp[i][j]是否包括dp[i-1][j-1].
    但如果dp[i-1][j-1]左侧和下侧的有一个为0，并不代表dp[i][j]需要从1开始计数，
    比如dp[i-1][j-1]的边长是10，有可能第一个是0，但剩下的9个还是可以用的，所以dp[i][j]应该是9+1
    怎么找到这个dp[i-1][j-1]左侧、下册的长边长呢
    可以用 dp[i-1][j]、 dp[i][j-1] 来代替挨个循环左侧、下侧的值
    最终结果为 dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])

  通过了，就是有点慢，下一节优化
    执行用时分布,104,ms,击败,38.83%,使用 JavaScript 的用户,
    消耗内存分布,52.05,MB,击败,10.09%,使用 JavaScript 的用户

*/
var maximalSquare = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }
  let m = matrix.length;
  let n = matrix[0].length;
  let maxArea = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // console.log(`>>>>>> i: ${i}, j: ${j}`);
      // console.log(`maxArea: ${maxArea}`);
      // console.log(matrix);
      if (i === 0 || j === 0) {
        // console.log('---> ',matrix);
        matrix[i][j] = parseInt(matrix[i][j]);
        if (maxArea === 0 && matrix[i][j] > 0) {
          maxArea = 1; // 先设为保底的 1
        }
        continue;
      }

      if (matrix[i - 1][j - 1] === "0") {
        // matrix[i][j] 不变
        matrix[i][j] = parseInt(matrix[i][j]);
      } else {
        // last is not 0
        if (matrix[i][j] === "0") {
          matrix[i][j] = 0;
        } else {
          // add new node
          if (matrix[i - 1][j - 1] > 0) {
            let minArea =   Math.min(
              matrix[i - 1][j - 1],
              matrix[i][j - 1],
              matrix[i - 1][j]
            )
            let lastWidth = Math.sqrt(minArea);  
              
              matrix[i][j] =  minArea + lastWidth * 2 + 1;
          } else {
            //自己是1，则最少是1，不管前面的邻居设么情况
            matrix[i][j] = 1;
          }
        }
      }
      maxArea = Math.max(maxArea, matrix[i][j]);
    }
  }
  // console.log(matrix);
  return maxArea;
};

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
); // 4

console.log(
  maximalSquare([
    ["0", "1"],
    ["1", "0"],
  ])
); // 1
console.log(maximalSquare([["0"]])); // 0
console.log(
  maximalSquare([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["0", "0", "1", "1", "1"],
  ])
); // 16
console.log(
  maximalSquare([
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "1"],
    ["0", "0", "0", "0", "0"],
  ])
); // 1
console.log(
  maximalSquare([
    ["0", "0", "0", "1"],
    ["1", "1", "0", "1"],
    ["1", "1", "1", "1"],
    ["0", "1", "1", "1"],
    ["0", "1", "1", "1"],
  ])
); // 9
