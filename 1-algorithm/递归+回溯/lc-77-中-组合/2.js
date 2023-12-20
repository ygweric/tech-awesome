/**
 https://leetcode.cn/problems/combinations/description/

给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。


 */


// ---------------------------------------------------
/**
  这是时间复杂度是 n²
  改进：用tmp来节省空间复杂度

 */
var combine = function(n, k) {
  let results = []
  let backtrackCount = 0
  let tmp = []

  // curLeft 已经被使用过
  let getAllCombine =(curLeft, curCount)=>{
    backtrackCount++
    if (curCount === k) {
      results.push([...tmp])
      return
    }
    if (curLeft  >n) {
     return
    }

    tmp.push(curLeft)
    getAllCombine(curLeft+1, curCount+1 )// 包括当前
    tmp.pop()
    getAllCombine(curLeft+1, curCount )// 不包括当前

  }
  getAllCombine(1, 0, tmp)
  console.log(`backtrackCount: ${backtrackCount}`);
  return results
};



// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
console.log(combine(4, 2)); 
console.log(combine(1, 1));  // [[1]]