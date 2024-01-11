/*
https://zhuanlan.zhihu.com/p/377231783

有N件物品和一个最多能背重量为W的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。每件物品都有无限个（也就是可以放入背包多次），求解将哪些物品装入背包里物品价值总和最大。

完全背包和01背包问题唯一不同的地方就是，每种物品有无限件。

*/

/*
  dp(i, j) : 
      i: 前(i-1)个物品， 1 ~ i-1, i最小为1
      j: 包容量 j
      dp(i, j)：前i个物品的总价值

  dp(i, j) =  max(
                  dp(i-1, j), // 不包含第i个
                  dp(i-1, j- weight[i] ) + value[i] // 包含第i个
              )

  j=0：dp(i, 0) = 0 // 背包容量为0， 无论多少个数，价值都是0 
  i=1: dp(1, j) = 0 // 物品个数为1，无论背包容量多少，价值都是 min(weight[i], size)
*/


/*
  1. 看了文章，算是一把搞定，主要算是有之前滚动数组的基础吧
 */
let getMaxBagValue = (weights, values, size) => {

  let dpArr = new Array(size + 1); // 0 ~ size
  for (let i = 0; i <= size; i++) {
    dpArr[i] = Math.min( weights[0], i); // size和第一个物品选最小的，免得物品装不进size为1的背包，初始化要正确
  }
  console.log("dpArr-1: ", JSON.stringify(dpArr));

  for (let i = 2; i <= weights.length; i++) {
    for (let j = 1; j <= size; j++) {
      if (j > weights[i]) {
        dpArr[j] = Math.max(dpArr[j], dpArr[j - weights[i]] + values[i]);
      } else {
        // do nothing
      }

      //   dpArr[j] = Math.max(dpArr[j], dpArr[j - weights[i]] + values[i]);
      console.log("dpArr-2  weights[i]: ", weights[i]);
      console.log("dpArr-2  dpArr[j-weights[i]]: ", dpArr[j - weights[i]]);
      console.log("dpArr-2: ", JSON.stringify(dpArr));
    }
  }

  return dpArr[size];

  //
};

console.log(
  getMaxBagValue(
    [5, 1, 2, 3, 4, 5], // weights
    [6, 2, 4, 4, 5, 6], // values
    6 // size
  )
); // 10
