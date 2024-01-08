/*
https://leetcode.cn/problems/VvJkup/description/
给定一个不含重复数字的整数数组 nums ，返回其 所有可能的全排列 。可以 按任意顺序 返回答案。
*/

/*
 1. 2024年1月8日 复习，没做出来，看答案了
 */
var permute = function (nums) {
  let swap = (nums, l, r) => {
    let tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;
  };

  let results = [];

  let dfs = (l) => {
    console.log(`nums: ${JSON.stringify(nums)}, l: ${l}`);
    if (l === nums.length - 1) {
      results.push([...nums]);
    }
    // if (l >= nums.length) {
    //   return;
    // }

    for (let i = l; i < nums.length; i++) {
      swap(nums, i, l);
      dfs(l + 1);
      swap(nums, i, l);
    }
  };

  dfs(0);
  return results;
};

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
