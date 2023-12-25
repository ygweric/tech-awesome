/*

https://leetcode.cn/problems/unique-paths/description/?envType=list&envId=6q66ue5


一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？
 */

/*

   dp公式：  dp(i, j) = dp(i-1, j) + dp(i, j-1) 

    1. 很简单，但因为加了缓存，所以时间复杂度高了
        执行用时分布,64,ms,击败,51.02%,使用 JavaScript 的用户,
        消耗内存分布,42.75,MB,击败,7.89%,使用 JavaScript 的用户

*/
var uniquePaths = function (m_, n_) {
  let cacheResults = {};
  let dp = (m, n) => {
    const key = `${m}-${n}`;
    if (cacheResults[key] != null) {
      return cacheResults[key];
    }

    // console.log(`m: ${m}, n: ${n}`);
    if (m == 0 || n == 0) {
      return 0;
    }
    if (m == 1 || n == 1) {
      return 1;
    }
    let result = dp(m - 1, n) + dp(m, n - 1);
    cacheResults[key] = result;
    // console.log(`addKey  ${key}`);
    return result;
  };

//   console.log(cacheResults);

 return dp(m_, n_);
};

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(7, 3)); // 28
console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(3, 3)); // 6
console.log(uniquePaths(5, 9)); // 495
