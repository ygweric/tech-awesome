/*
  手写一个快排，热热身
  new Array(20).fill(0).map(()=> Math.floor(Math.random()*10))
*/

/*
第一次竟然没做出来。。手生了，理清思路再来一次
在2里面又没有做出来，debug了，有思路，再试试
3： 这次勉强算成功了，但好勉强，调试半天
*/

function quickSort(nums) {
  if (!nums || nums.length <= 1) return nums;

  // let baseIndex = Math.round(nums.length / 2);
  let left = 0;
  let right = nums.length - 1;
  // let base = nums[left];

  while (left <= right) {
    if (nums[left + 1] < nums[left]) {
      let tmp = nums[left + 1];
      nums[left + 1] = nums[left];
      nums[left] = tmp;
      left++
    } else {
      if (left !== right) {
        let tmp = nums[left + 1];
        nums[left + 1] = nums[right];
        nums[right] = tmp;
        right--;
      } else {
        right--
      }
    }
  }
  // console.log('>>>>>>>>>>>>>');
  // console.log(nums[left]);
  // console.log(nums.slice(0, left));
  // console.log(nums.slice(left+1, nums.length));
  // console.log('<<<<<<<<<<<<<');
  return [
    ...quickSort(nums.slice(0, left)),
    nums[left],
    ...quickSort(nums.slice(left+1, nums.length)),
  ];
}

console.log(quickSort([4,6,5,1,7,2,8,3,9,]));
console.log(
  quickSort([33, 25, 42, 22, 63, 89, 98, 12, 84, 55, 73, 13, 16, 21, 45, 59, 72, 83, 48, 49])
);
console.log(quickSort([3, 4, 5, 1, 2]));
