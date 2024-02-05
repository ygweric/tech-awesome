/*
https://leetcode.cn/problems/move-zeroes/description

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

 

示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
示例 2:

输入: nums = [0]
输出: [0]
 

提示:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

进阶：你能尽量减少完成的操作次数吗？
*/

/*
1. 放假状态不好，边界状态判断乱七八糟 2024年2月5日
*/

var moveZeroes = function (nums) {
  let swap = (nums, l, r) => {
    let tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;
  };

  if (nums.length === 1) {
    return nums;
  }

  let l = 0;
  let r = 1;
  while (l <= r && r < nums.length) {
    while (l < nums.length && nums[l] !== 0) {
      l++;
    }
    // l is 0
    while (r < nums.length && nums[r] === 0) {
      r++;
    }
    // r is 0

    if (r >= nums.length ) {
      // r is last one ,and don't have r+1
      break;
    }
    console.log(`l: ${l}, r: ${r} nums: ${JSON.stringify(nums)}`);

    swap(nums, l, r);
    // l is NOT 0 and r is 0
  }

  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([1])); // [1]
console.log(moveZeroes([1, 0])); // [0, 1]
console.log(moveZeroes([2,1])); // [2,1]
// console.log(moveZeroes(xxxx)); // xxxxxxxxx
// console.log(moveZeroes(xxxx)); // xxxxxxxxx
