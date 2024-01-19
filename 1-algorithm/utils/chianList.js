function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var generateChain = function (nums) {
  let preNode = null;
  let curNode = null;
  for (let i = nums.length - 1; i >= 0; i--) {
    let val = nums[i];

    curNode = new ListNode(val, null);
    if (preNode) {
      curNode.next = preNode;
    }
    preNode = curNode;
  }
  return curNode;
};

let getChainArray = (node) => {
  if (!node) {
    return null;
  }
  let arr = [];
  let curNode = node;
  arr.push(curNode.val);
  while (curNode.next) {
    curNode = curNode.next;
    arr.push(curNode.val);
  }

  return arr;
};

module.exports = {
  ListNode,
  generateChain,
  getChainArray,
};
