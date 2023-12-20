/*
https://leetcode.cn/problems/longest-word-in-dictionary-through-deleting/description/

524. 通过删除字母匹配到字典里最长单词
给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。

 */

/*
以为有神奇的银弹呢，其实还是O(n^2)
优化：“如果答案不止一个，返回长度最长且字母序最小的字符串”， 这个条件没处理，补充一下

搞不定，一塌糊涂，一直在打补丁，看题解，没几行代码。。。放弃了，学习

补充：找相同长度最小的字符串，直接比较就行了，我还在研究各种算法。。晕，基础不行呀！！！！
最后的5层if可以再优化下


*/

const getLogResultFn = require('../../utils/logResult')

var findLongestWord = function (s, dictionary) {
  let matchDic = '';
  for (const dic of dictionary) {
    let dicleft = 0;
    let left = 0;
    while (left <= s.length - 1 && dicleft <= dic.length - 1) {
      if (s[left] === dic[dicleft]) {
        if (dicleft === dic.length - 1 ) {
          // last one char
          if (matchDic) {
            if (matchDic.length < dic.length) {
              matchDic  = dic
            }else if(matchDic.length === dic.length){
              matchDic = (matchDic > dic) ? dic: matchDic
            }
          }else{
            matchDic = dic
          }
          break;
        }

        left++;
        dicleft++;
      } else {
        left++;
      }
    }
  }
  return matchDic;
};

const logResult = getLogResultFn(findLongestWord);

logResult("abpcplea", ["ale", "apple", "monkey", "plea"]); // "apple"
logResult("abpcplea", ["a", "b", "c"]); // "a"
logResult("abce", ["abe", "abc"]); // "abc"
logResult("aaa",["aaa","aa","a"]); // "aaa"

