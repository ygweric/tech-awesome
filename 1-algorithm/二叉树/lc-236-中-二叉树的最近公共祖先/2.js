function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var generateTree = function (nums) {
  let nodeArr = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    let val = nums[i];
    if (val != null) {
      if (!nodeArr[i]) {
        nodeArr[i] = new TreeNode(val, null, null); // 第一次被初始化
      } else {
        nodeArr[i].val = val; // 在下面给 parentNode 设置左右孩子时候，已经 new 过了
      }
    }

    let curNode = nodeArr[i];
    let isLeft = i % 2 !== 0;
    if (i !== 0) {
      let parentNodeIndex = Math.floor((i - 0.1) / 2);
      if (!nodeArr[parentNodeIndex]) nodeArr[parentNodeIndex] = new TreeNode();

      let parentNode = nodeArr[parentNodeIndex];

      if (isLeft) {
        parentNode.left = curNode;
      } else {
        parentNode.right = curNode;
      }
    }
  }

  // console.log(JSON.stringify(nodeArr[0], null, 2));
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
   优化：看完题解，懂了50%把，手写一次，看行不行
*/

/**
 * 这个函数具体做啥的，还是没想太清楚~
 * 递归到叶子节点，所以是反向查找递归
 *
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 返回最近的公共祖先
 * 1. 如果p和q分别在左右子节点，返回当前根节点
 * 2. 如果p和q在一侧树
 *  2.1 如果根节点为p或者q，则当前节点是最近祖先
 *  2.2 如果根节点不是q和p，则表示当前节点不是最近祖先，需要向下找
 * 
 * 
 * 返回值的意思：
 * lson 和 rson 表示在左右子树中，找到 p “或者” q 的值，可以是自己，或者儿子，或者孙子，只要子树中能找到，就算
 * lson 和 rson 同时存在，表示在左右子树分别找到对应p和q，因此返回root
 * lson 和 rson 存在一个，表示在当前节点的左或者右子树中，找到了一个，就算成功
 * lson 和 rson 都是null，说明该节点下面不存在目标节点，一个都不存在
 * 
 */
var lowestCommonAncestor = function (root, p, q) {
  // console.log('root:', JSON.stringify(root, null, 2));
  let getSameAnster = (root, p, q) => {
    // 找到了叶子节点
    if (!root) return null;
    if (root.val === p.val || root.val === q.val) return root;

    let lson = getSameAnster(root.left, p, q);
    let rson = getSameAnster(root.right, p, q);

    // 在左右子树
    if (lson && rson) return root;

    // 在左子树
    // if (lson && !rson && (lson.val === p.val || lson.val === q.val)) return lson;
    if (lson && !rson ) return lson;

    // 在右子树
    // if (!lson && rson && (rson.val === p.val || rson.val === q.val)) return rson;
    if (!lson && rson) return rson;

    return null;
  };
  let result = getSameAnster(root, p, q)
  if (!result) {
    return {}
  }
  return result
};

console.log(lowestCommonAncestor(generateTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),new TreeNode(5),new TreeNode(1)).val); // 3
console.log(lowestCommonAncestor(generateTree([3,5,1,6,2,0,8,null,null,7,4]), new TreeNode(5),  new TreeNode(4)).val); // 5
console.log(lowestCommonAncestor(generateTree([1,2]), new TreeNode(1),new TreeNode(2)).val); // 1
console.log(lowestCommonAncestor(generateTree([-1,0,3,-2,4,null,null,8]), new TreeNode(8),new TreeNode(4)).val); // 0
