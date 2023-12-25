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

var getLevelTree = (root) => {
  const queue = [root];
  let numArr = [];

  while (queue.length > 0) {
    let node = queue.shift();
    // 这里所有空的子节点，都是null，出现 [-1, 0, 3, -2, 4, null, null, 8, null, null, null, null, null]
    numArr.push(node ? node.val : null);
    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  // 删除后面的null： [-1, 0, 3, -2, 4, null, null, 8, null, null, null, null, null]
  while (numArr[numArr.length - 1] == null) {
    numArr.pop();
  }
  return numArr;
};

// console.log(getLevelTree(generateTree([-1, 0, 3, -2, 4, null, null, 8])));
// console.log(getLevelTree(generateTree([3, 1, 2, 3, 4, 5, 6, 7, 8])));

module.exports = {
  TreeNode,
  generateTree,
  getLevelTree
};