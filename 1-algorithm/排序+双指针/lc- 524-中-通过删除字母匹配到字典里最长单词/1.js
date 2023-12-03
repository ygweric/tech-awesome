/*
https://leetcode.cn/problems/longest-word-in-dictionary-through-deleting/description/

524. 通过删除字母匹配到字典里最长单词
给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。

 */

/*
以为有神奇的银弹呢，其实还是O(n^2)
*/

var findLongestWord = function (s, dictionary) {
  let matchDic = null;
  for (const dic of dictionary) {
    let dicleft = 0;
    let left = 0;
    while (left <= s.length - 1 && dicleft <= dic.length - 1) {
      if (s[left] === dic[dicleft]) {
        if (dicleft === dic.length - 1) {
          // last one char
          matchDic = (!matchDic || dic.length > matchDic.length) ? dic : matchDic;
          break
        }

        left++;
        dicleft++;
      } else {
        left++;
      }
    }
  }
  return matchDic
};

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])); // "apple"
console.log(findLongestWord("abpcplea", ["a", "b", "c"])); // "a"

// let dicleft =0
// let dicright = dic.length
// let left =0
// let right = s.length -1
// while (left < right && dicleft < dicright) {
//     if (condition) {

//     } else {

//     }
// }
