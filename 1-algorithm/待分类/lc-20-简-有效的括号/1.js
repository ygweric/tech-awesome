/*
https://leetcode.cn/problems/valid-parentheses/
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
*/

var isValid = function (s) {
  let pairs = {
    // "(": ")",
    ")": "(",
    // "[": "]",
    "]": "[",
    // "{": "}",
    "}": "{",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (!pairs[s[i]] || stack[stack.length - 1] !== pairs[s[i]]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}")); // true
console.log(isValid("()")); // true
console.log(isValid("(]")); // false
console.log(isValid("(){}}{")); // false
