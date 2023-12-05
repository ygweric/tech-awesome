/*
  手写一个快排，热热身
  new Array(20).fill(0).map(()=> Math.floor(Math.random()*10))
*/

function swap(a, b) {
  let tmp = a;
  a = b;
  b = tmp;
}

function quickSort(nums) {
  if (!nums || nums.length <= 1) return nums;

  let base = nums[0];
  let left = 1;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] < base) {
      left++;
    } else {
      let tmp = nums[left]
      nums[left]=nums[right]
      nums[right] = tmp
      // swap(nums[left], nums[right]);
      right--;
    }
  }
  return [
    ...quickSort(nums.slice(1, left)),
    base,
    ...quickSort(nums.slice(left, nums.length)),
  ];
}

// console.log(
//   quickSort([3, 5, 2, 2, 3, 9, 8, 1, 8, 5, 3, 3, 6, 1, 5, 9, 2, 3, 8, 9])
// );
console.log(
  quickSort([3,4,5,1,2])
);
