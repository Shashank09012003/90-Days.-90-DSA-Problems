// Given an integer array arr[]. You need to find the maximum sum of a subarray.
class Solution {
  maxSubarraySum(arr) {
    if (!arr || arr.length === 0) {
      return 0;
    }

    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];

    for (let i = 1; i < arr.length; i++) {
      maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);

      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
  }
}
