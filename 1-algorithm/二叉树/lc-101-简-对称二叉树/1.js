/*
https://leetcode.cn/problems/symmetric-tree

给你一个二叉树的根节点 root ， 检查它是否轴对称。
*/

const getLogResultFn = require("../../utils/logResult");
const { TreeNode, generateTree } = require("../../utils/arr2tree");
const memoryTime = require("../../utils/memoryTime");

/*
  递归用loop来实现，就可以实现对比了，一会试试

  1. 一把搞定，但内存有点多，估计和递归有关系
    执行用时分布,68,ms,击败,66.47%,使用 JavaScript 的用户,
    消耗内存分布,50.18,MB,击败,5.07%,使用 JavaScript 的用户

*/
var isSymmetric = function (root) {

  let isSameTree = (lt, rt) => {
    if (!lt && !rt) {
      return true;
    }
    if ((!lt && rt) || (lt && !rt) || lt.val !== rt.val) {
      return false;
    }

    let leftResult = isSameTree(lt.left, rt.right);
    if (!leftResult) {
      return false;
    } else {
      return isSameTree(lt.right, rt.left);
    }
  };

  return isSameTree(root.left, root.right);
};

const logResult = getLogResultFn(function () {
  return isSymmetric(generateTree(...arguments));
});

memoryTime.load();
logResult([1, 2, 2, 3, 4, 4, 3]); //  true
logResult([1, 2, 2, null, 3, null, 3]); // false
// logResult( xxxxxxx); //
memoryTime.log(); //

// let getTreeValue = (base, stack)=> {
//   stack.push(base?.val)
//   if (!base) {
//     return
//   }
//   let left = getTreeValue( base.left, stack)
//   if (left) {

//   }
// }

// let isSameTree = (lt, rt) => {

// };

// let dfs = (node, stack) => {
//   dfs(node.left);
//   dfs(node.right);
// };

// dfs(root.left);
// dfs(root.right);
