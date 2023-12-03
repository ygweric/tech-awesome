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

var getLevelTree = (root) => {
  const queue = [root];
  let numArr = [];

  while (queue.length > 0) {
    let node = queue.shift();
    numArr.push(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return numArr
};

console.log(getLevelTree(generateTree([0, 1, 2, 3, 4, 5, 6, 7, 8])));