/*
https://leetcode.cn/problems/maximal-square
在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

*/

const printMatrix = require("../../utils/array2d");
/*

1. 思路是动态规划应该没问题，但具体小思路上有问题，搞得边缘条件越来越复杂，再来一次

2. 

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
      console.log(`>>>>>> i: ${i}, j: ${j}`);
      console.log(`maxArea: ${maxArea}`);
      console.log(matrix);
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
            let lastWidth = Math.sqrt(matrix[i - 1][j - 1]);

            let isFullWell = true;
            // 判断两侧的边长是否都是1，如果有0，则设为1
            for (let k = 0; k < lastWidth; k++) {
              if (
                parseInt(matrix[i][j - k - 1]) === 0 ||
                parseInt(matrix[i - k - 1][j]) === 0
              ) {
                isFullWell = false;
                break;
              }
            }
            if (isFullWell) {
              matrix[i][j] =
                matrix[i - 1][j - 1] + Math.sqrt(matrix[i - 1][j - 1]) * 2 + 1; // 上一个+边长*2+新定点
            } else {
              matrix[i][j] = 1;
            }
          } else {
            //自己是1，则最少是1，不管前面的邻居设么情况
            matrix[i][j] = 1;
          }
        }
      }
      maxArea = Math.max(maxArea, matrix[i][j]);
    }
  }
  return maxArea;
};

// console.log(
//   maximalSquare([
//     ["1", "0", "1", "0", "0"],
//     ["1", "0", "1", "1", "1"],
//     ["1", "1", "1", "1", "1"],
//     ["1", "0", "0", "1", "0"],
//   ])
// ); // 4

// console.log(
//   maximalSquare([
//     ["0", "1"],
//     ["1", "0"],
//   ])
// ); // 1
// console.log(maximalSquare([["0"]])); // 0
// console.log(
//   maximalSquare([
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "1", "1", "1"],
//     ["1", "1", "1", "1", "1"],
//     ["0", "0", "1", "1", "1"],
//   ])
// ); // 16
// console.log(
//   maximalSquare([
//     ["0", "0", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"],
//     ["0", "0", "0", "0", "1"],
//     ["0", "0", "0", "0", "0"],
//   ])
// ); // 1
console.log(
  maximalSquare([
    ["0", "0", "0", "1"],
    ["1", "1", "0", "1"],
    ["1", "1", "1", "1"],
    ["0", "1", "1", "1"],
    ["0", "1", "1", "1"],
  ])
); // 9
