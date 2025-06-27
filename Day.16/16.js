// Anagram
// Difficulty: EasyAccuracy: 44.93%Submissions: 392K+Points: 2Average Time: 20m
// Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, "act" and "tac" are an anagram of each other. Strings s1 and s2 can only contain lowercase alphabets.

// Note: You can assume both the strings s1 & s2 are non-empty.
class Solution {
  areAnagrams(s1, s2) {
    if (s1.length !== s2.length) {
      return false;
    }

    const charCount = {};

    for (let i = 0; i < s1.length; i++) {
      charCount[s1[i]] = (charCount[s1[i]] || 0) + 1;
    }

    for (let i = 0; i < s2.length; i++) {
      if (!charCount[s2[i]]) {
        return false;
      }
      charCount[s2[i]]--;
    }

    for (let char in charCount) {
      if (charCount[char] !== 0) {
        return false;
      }
    }

    return true;
  }
}
