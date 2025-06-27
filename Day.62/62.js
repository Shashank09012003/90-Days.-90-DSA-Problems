// 62.Longest Subarray with Sum K
// Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. If there is no subarray with sum equal to k, return 0.

class Solution {
  longestSubarray(arr, k) {
    const map = new Map();
    let sum = 0;
    let maxLen = 0;

    map.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];

      if (map.has(sum - k)) {
        maxLen = Math.max(maxLen, i - map.get(sum - k));
      }

      if (!map.has(sum)) {
        map.set(sum, i);
      }
    }

    return maxLen;
  }
}
