// Longest Consecutive Subsequence
// Given an array arr[] of non-negative integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.
class Solution {
  longestConsecutive(arr) {
    if (!arr || arr.length === 0) {
      return 0;
    }

    const numSet = new Set(arr);
    let maxLength = 0;

    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentLength = 1;

        while (numSet.has(currentNum + 1)) {
          currentNum++;
          currentLength++;
        }

        maxLength = Math.max(maxLength, currentLength);
      }
    }

    return maxLength;
  }
}
