
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var generateTree = function (nums) {
  let nodeArr = [];
  nums.forEach((_) => {
    nodeArr.push(new TreeNode(0, null, null));
  });

  for (let i = nums.length - 1; i > 0; i--) {
    let val = nums[i];
    let curNode = nodeArr[i];
    let isLeft = i % 2 !== 0;
    let parentNode = nodeArr[Math.floor((i - 0.1) / 2)];

    curNode.val = val;
    if (isLeft) {
      parentNode.left = curNode;
    } else {
      parentNode.right = curNode;
    }
  }

  return nodeArr[0];
};



/*
https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/
236. 二叉树的最近公共祖先
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”


题解： https://www.bilibili.com/video/BV1Qu4y1P7kg?p=10&vd_source=80df5fba01fe79535a6107a33a26594c
 */


/*
   做不出来呀，说是腾讯的题，还是看题解吧
*/
var lowestCommonAncestor = function (root, p, q) {
  // find p's all ancestor
  // find q's all ancestor
  // find the latest same parent of p and q

  let pathNodes = []
  let dps = (root, val) => {
    if (!root) {
      return
    }
    if (root.val === val) {
      return
    }


    dps(root.left)
    dps(root.right)


  };

  return dps(root, q);
};

console.log(
  lowestCommonAncestor(
    generateTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),
    5,
    1
  )
); // 3
// console.log(lowestCommonAncestor(generateTree[3,5,1,6,2,0,8,null,null,7,4]), 5,  4); // 5
// console.log(lowestCommonAncestor(generateTree[1,2]), 1,2); // 1


// let pathNodes = [root];

// let iteratorNodes = []

// while (pathNodes.length > 0) {
//   console.log(pathNodes.length);


//   // let curNode = pathNodes[pathNodes.length - 1];

//   // if (curNode.isdone) {
//   //   pathNodes.pop()
//   // }

//   curNode.isdone = true
//   if (curNode.val === val) {
//     return pathNodes;
//   }

//   if (curNode.left) {
//     pathNodes.push(curNode.left);
//   } else if (curNode.right) {
//     pathNodes.push(curNode.right);
//   } else {
//     pathNodes.pop();
//   }
// }