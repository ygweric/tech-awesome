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
*/

const getLogResultFn = require("../../utils/logResult");

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
    console.log(
      `dfs begin nums: ${nums}, target:${target}, leftIndex: ${leftIndex}, rightIndex: ${rightIndex}, centerIndex: ${centerIndex}`
    );
    if (rightIndex - leftIndex < 0) {
      return -1;
    }
    if (rightIndex - leftIndex === 0) {
      //  rightIndex == leftIndex means arrar.length===0
      return nums[leftIndex] === target ? leftIndex : -1;
    }

    let centerNum = nums[centerIndex];
    let leftNearestNum =
      leftIndex <= centerIndex - 1 ? nums[centerIndex - 1] : null; // 左右边缘判断
    let rightNearestNum =
      rightIndex >= centerIndex - 1 ? nums[centerIndex + 1] : null; // 左右边缘判断

    if (centerNum === target) {
      return centerIndex;
    }

    // 先判断比较复杂的 旋转点
    if (
      (centerNum > leftNearestNum && centerNum > rightNearestNum) ||
      (centerNum < leftNearestNum && centerNum < rightNearestNum)
    ) {
      let leftDfsResult = dfs(nums, target, leftIndex, centerIndex - 1);
      if (leftDfsResult >= 0) {
        return leftDfsResult;
      }
      let rightDfsResult = dfs(nums, target, centerIndex + 1, rightIndex);
      return rightDfsResult;
    }

    if (centerNum > target) {
      if (leftNearestNum == null) {
        return -1;
      } else {
        if (leftNearestNum < centerNum) {
          // dfs left part
          return dfs(nums, target, leftIndex, centerIndex - 1);
        } else {
          // center为旋转点
          return -1;
        }
      }
    } else {
      // centerNum < target
      if (rightNearestNum == null) {
        return -1;
      } else {
        if (rightNearestNum > centerNum) {
          // dfs right part
          return  dfs(nums, target, centerIndex + 1, rightIndex);
        } else {
          // center为旋转点
          return -1;
        }
      }
    }
  };

  return dfs(nums_, target_, 0, nums_.length - 1);
};

const logResult = getLogResultFn(search);

// logResult([4, 5, 6, 7, 0, 1, 2], 0); // 4
// logResult([4, 5, 6, 7, 0, 1, 2], 3); // -1
// logResult([1], 0); // -1
// logResult([5,1,3], 5); // 0
logResult([3,4,5,6,1,2], 2); // 5
