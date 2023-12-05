/*
  手写一个快排，热热身
  new Array(20).fill(0).map(()=> Math.floor(Math.random()*10))
*/

/*
第一次竟然没做出来。。手生了，理清思路再来一次
在2里面又没有做出来，debug了，有思路，再试试
3： 这次勉强算成功了，但好勉强，调试半天
4: 看完题解，再试试：优化了一部分，直接修改源数组，没有重新创建数组
*/

function quickSort(nums, left_ = 0, right_ = nums.length - 1) {
  if (!nums || nums.length <= 1 || left_ >= right_) return nums;

  let left = left_;
  let right = right_;

  while (left <= right) {
    if (nums[left + 1] < nums[left]) {
      let tmp = nums[left + 1];
      nums[left + 1] = nums[left];
      nums[left] = tmp;
      left++;
    } else {
      if (left !== right) {
        let tmp = nums[left + 1];
        nums[left + 1] = nums[right];
        nums[right] = tmp;
        right--;
      } else {
        right--;
      }
    }
  }

  quickSort(nums, left_, left-1);
  quickSort(nums, left + 1, right_);
  return nums;
}

console.log(quickSort([4,6,5,1,7,2,8,3,9,]));
console.log(
  quickSort([33, 25, 42, 22, 63, 89, 98, 12, 84, 55, 73, 13, 16, 21, 45, 59, 72, 83, 48, 49])
);
console.log(quickSort([3, 4, 5, 1, 2]));
console.log(quickSort([3,2,3,1,2,4,5,5,6]));
console.log(quickSort([3,2,1,5,6,4]));
