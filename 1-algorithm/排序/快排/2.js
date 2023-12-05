/*
  手写一个快排，热热身
  new Array(20).fill(0).map(()=> Math.floor(Math.random()*10))
*/

/*
第一次竟然没做出来。。手生了，理清思路再来一次
*/

function quickSort(nums) {
  if (!nums || nums.length <= 1) return nums;

  let baseIndex = Math.round(nums.length / 2);
  let base = nums[baseIndex];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] < base) {
      left++;
    } else {
      if (left !== right) {
        let tmp = nums[left];
        nums[left] = nums[right];
        nums[right] = tmp;
        right--;
      }else{
        break
      }
    }
  }
  // last one： left = right
  // if (nums[left] < base) {
  //   // no nothing
  //   left ++
  // }else{
  //   // left--
  // }
  console.log(base);
  console.log(nums.slice(0, left ));
  console.log(nums.slice(left, nums.length));
  return [
    ...quickSort(nums.slice(0, left )),
    ...quickSort(nums.slice(left, nums.length)),
  ];
}

console.log(quickSort([8, 0, 0, 1, 1, 9, 0, 0, 5, 2]));
// console.log(
//   quickSort([3, 5, 2, 2, 3, 9, 8, 1, 8, 5, 3, 3, 6, 1, 5, 9, 2, 3, 8, 9])
// );
// console.log(quickSort([3, 4, 5, 1, 2]));
