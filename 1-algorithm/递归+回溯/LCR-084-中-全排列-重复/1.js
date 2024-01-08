/*
https://leetcode.cn/problems/7p8L0Z/description/
给定一个可包含重复数字的整数集合 nums ，按任意顺序 返回它所有不重复的全排列。

*/
/*
  1. 下面是官方题解，学习一下
     太烧脑了，回头复习
*/

var permuteUnique = function (nums) {
  const ans = [];
  const vis = new Array(nums.length).fill(false);
  const backtrack = (idx, perm) => {
    console.log(
      `backtrack -- perm: ${JSON.stringify(perm)}, vis: ${JSON.stringify(vis)}`
    );
    if (idx === nums.length) {
      ans.push(perm.slice());
      console.log("done ----------");
      return;
    }
    for (let i = 0; i < nums.length; ++i) {
      // if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
      //   continue;
      // }
      if (vis[i]) {
        console.log(`i: ${i}-${nums[i]} used and continue`);
        continue;
      }
      // 这里由于 for-i 是从左向右的，所以约定相同 元素，必须先试用右侧的
      //   如果左侧没使用，直接先用右侧，在用左侧，结果就是 [rightSame， leftSame],
      // 这样子会和 [leftSame, rightSame] 重复
      // 所以我们去重的策略就是，有限使用左侧的，左侧没用，就认为不合法，右侧也不用，继续循环
      if (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1]) {
        console.log(
          `i: ${i}-${nums[i]} is same with last one, and last one is NOT used, we should use last one first, so continue`
        );
        continue;
      }
      //   if (vis[i]) {
      //     console.log(`i: ${i}-${nums[i]} used and continue`);
      //     continue;
      //   }
      console.log(`i: ${i}-${nums[i]} not used and go on`);
      perm.push(nums[i]);
      vis[i] = true;
      backtrack(idx + 1, perm);
      vis[i] = false;
      perm.pop();
    }
  };
  nums.sort((x, y) => x - y);
  backtrack(0, []);
  return ans;
};

// console.log(permuteUnique([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// console.log(permuteUnique([1, 1, 2])); // [[1,1,2],[1,2,1],[2,1,1]]
console.log(permuteUnique(["a", "a", "b"])); // [[1,1,2],[1,2,1],[2,1,1]]
