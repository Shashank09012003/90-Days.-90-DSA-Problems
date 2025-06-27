// 63.Largest subarray of 0's and 1's
// Given an array arr of 0s and 1s. Find and return the length of the longest subarray with equal number of 0s and 1s.

class Solution {
  maxLen(arr) {
    const map = new Map();
    let sum = 0;
    let maxLength = 0;

    map.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i] === 0 ? -1 : 1;

      if (map.has(sum)) {
        maxLength = Math.max(maxLength, i - map.get(sum));
      } else {
        map.set(sum, i);
      }
    }
    return maxLength;
  }
}
