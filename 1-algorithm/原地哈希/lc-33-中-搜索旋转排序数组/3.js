/*
https://leetcode.cn/problems/search-in-rotated-sorted-array/
整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，
使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
*/

/*
  1. 之前看了几眼题解，开始写
    但是思路不对，其实需要左右都dfs的，
    这里写着写着就开始对一侧dfs了，
    复杂了，再来一次

  2. 能运行，但时间复杂度搞，没有用到旋转的特性
    执行用时分布,68,ms,击败,30.43%,使用 JavaScript 的用户,
    消耗内存分布,40.58,MB,击败,99.74%,使用 JavaScript 的用户

  3. 基于2进行优化，设法利用旋转有序的特性
    执行用时分布,60,ms,击败,74.74%,使用 JavaScript 的用户,
    消耗内存分布,42.99,MB,击败,5.04%,使用 JavaScript 的用户

    内存消耗大，怎么也搞不出来
*/

const getLogResultFn = require("../../utils/logResult");
const memoryTime = require("../../utils/memoryTime");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums_, target_) {
  /**
   * @param {*} nums
   * @param {*} target
   * @param {*} leftIndex include
   * @param {*} rightIndex  include
   * @returns
   */
  let dfs = (nums, target, leftIndex, rightIndex) => {
    let centerIndex = Math.floor((rightIndex + leftIndex) / 2);
    // console.log(
    //   `dfs begin nums: ${nums}, target:${target}, leftIndex: ${leftIndex}, rightIndex: ${rightIndex}, centerIndex: ${centerIndex}`
    // );
    if (rightIndex - leftIndex < 0) {
      return -1;
    }
    if (rightIndex - leftIndex === 0) {
      //  rightIndex == leftIndex means arrar.length===0
      return nums[leftIndex] === target ? leftIndex : -1;
    }

    let centerNum = nums[centerIndex];
    if (centerNum === target) {
      return centerIndex;
    }

    let leftFn =()=> dfs(nums, target, leftIndex, centerIndex - 1)
    let rightFn =()=>  dfs(nums, target, centerIndex + 1, rightIndex)


    let fns = null


    // 先左边或者先右边
    if (centerNum > target) {
      fns = [leftFn, rightFn]
    }else{
      fns = [ rightFn, leftFn]
    }

    let dfsResult1 = fns[0]()
    if (dfsResult1 >= 0) {
      return dfsResult1;
    }else{
      return dfsResult1 = fns[1]()
    }
  };

  return dfs(nums_, target_, 0, nums_.length - 1);
};

const logResult = getLogResultFn(search);


memoryTime.load()
logResult([4, 5, 6, 7, 0, 1, 2], 0); // 4
logResult([4, 5, 6, 7, 0, 1, 2], 3); // -1
logResult([1], 0); // -1
logResult([5, 1, 3], 5); // 0
logResult([3, 4, 5, 6, 1, 2], 2); // 5
memoryTime.log() // time : 4.3625 ms, memory: 4150.66 kb