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
*/

var findLongestWord = function (s, dictionary) {
  let matchDics = [];
  for (const dic of dictionary) {
    let dicleft = 0;
    let left = 0;
    while (left <= s.length - 1 && dicleft <= dic.length - 1) {
      if (s[left] === dic[dicleft]) {
        if (dicleft === dic.length - 1) {
          // last one char
          matchDics.push(dic);
          // matchDic = (!matchDic || dic.length > matchDic.length) ? dic : matchDic;
          break;
        }

        left++;
        dicleft++;
      } else {
        left++;
      }
    }
  }

  if (matchDics.length === 1) {
    return matchDics[0];
  }
  // 二维数组，找最小的

  console.log(matchDics);

let minSum =  Number.MAX_SAFE_INTEGER
let minDic = null

  for (let i = 0; i < matchDics.length; i++) {
    const dic = matchDics[i];

    let sum =0
    let length = matchDics[i].length
    for (let j = 0; j < length; j++) {
      const char = matchDics[i][j];
      sum += char*(length-j)*10
    }

    if (sum < minSum) {
      minSum = sum
      minDic = dic
    }


    
    // const sum = dic.split('').reduce((cur, total)=> {
    //   return total + cur
    // }, 0)

  }


  
  return minDic;
};

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])); // "apple"
console.log(findLongestWord("abpcplea", ["a", "b", "c"])); // "a"
console.log(findLongestWord("abce", ["abe", "abc"])); // "abc"

// let ignoreSet = new Set();
// for (let i = 0; i < matchDics[0].length; i++) {
//   let foundMax = false;
//   let lastMinChar = matchDics[0][0];
//   let lastMinCharIndex = 0;

//   for (let j = 1; j < matchDics.length; j++) {
//     if (matchDics.length - ignoreSet.length ===1) {
//       return 
//     }
//     const dic = matchDics[j];
//     if (dic[j] > lastMinChar) {
//       ignoreSet.add(j);
//     } else if (dic[j] < lastChar) {
//       ignoreSet.add(j);
//       lastMinCharIndex = j;
//       lastChar = dic[j];
//     }
//   }

//   const element = array[i];
// }





// let dicleft =0
// let dicright = dic.length
// let left =0
// let right = s.length -1
// while (left < right && dicleft < dicright) {
//     if (condition) {

//     } else {

//     }
// }
