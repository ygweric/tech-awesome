
/**
https://leetcode.cn/problems/3sum/description/


给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。



 这种实现方式没有去重，不知道咋做


 */

var threeSum = function(nums, target) {
  // 从小到大排序
  nums = nums.sort((a, b)=> a>b?1:-1)


  console.log(nums);
  let recursiveCount = 0
  let results = []

  // curLeft 已经被使用过
  let getThreeSum =(curLeft, curCount, curSum, values, indexes)=>{
    recursiveCount++
    if (curCount === 3 && curSum === 0 ) {
      results.push(values)
      return
    }
    if (curLeft  >=nums.length) {
      // 最后一个位置+，因为 虽然curLeft+1没了，淡sum还没有加上nums[curLeft]
      return
    }

    getThreeSum(curLeft+1, curCount, curSum, values , indexes) // 不包括当前
    getThreeSum(curLeft+1, curCount+1, curSum+nums[curLeft], [...values, nums[curLeft]] , [...indexes, curLeft])// 包括当前
  }
  getThreeSum(0, 0, 0, [], [])
  return results
};


console.log(threeSum([-1,0,1,2,-1,-4]));