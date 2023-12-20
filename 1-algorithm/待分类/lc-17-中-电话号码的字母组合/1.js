/*
https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
*/

const getLogResultFn = require('../../utils/logResult')

var letterCombinations = function (digits) {};

const logResult = getLogResultFn(letterCombinations);

logResult("23"); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
logResult(""); // []
logResult("2"); // ["a","b","c"]
