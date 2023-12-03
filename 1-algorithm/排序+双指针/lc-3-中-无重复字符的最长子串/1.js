/*
https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

*/

/*
比较简单
双指针，用slice切割字符串

官方的解法其实比我的还要多计算几次
 */

var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }

  let left = 0;
  let right = 1;
  let maxLength = 1;

  while (right < s.length) {
    let duplicatedIndex = s.slice(left, right).indexOf(s[right])+left;
    if (duplicatedIndex >= left && duplicatedIndex < right) {
      //在中间有重复的
      left = duplicatedIndex + 1;
      right++;
    } else {
      maxLength = Math.max(right - left + 1, maxLength);
      right++;
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("nfpdmpi")); // 5
console.log(lengthOfLongestSubstring("abcdcd")); // 4
