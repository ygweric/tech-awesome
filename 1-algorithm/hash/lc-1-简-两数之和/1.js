
/*

https://leetcode.cn/problems/two-sum/description/
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

研究滑动指针上瘾了，这个上来就排序+滑动指针，发现原来的索引找不到了

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let newNums = nums.sort((a, b) => a - b)

  let left = 0;
  let right = newNums.length - 1
  while (left < right) {
      let sum = newNums[left] + newNums[right]
      if (sum === target) {
          return [nums.indexOf(newNums[left]), nums.indexOf(newNums[right])]
      } else if (sum > target) {
          right--
      } else {
          left++
      }
  }
  return []


};


// console.log(twoSum([2,7,11,15], 9)); //  [0,1]
console.log(twoSum([3,2,4], 6)); //  [1,2]