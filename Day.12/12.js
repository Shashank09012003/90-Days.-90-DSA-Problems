// 12.Max Circular Subarray Sum
// Difficulty: HardAccuracy: 29.37%Submissions: 150K+Points: 8Average Time: 25m
// Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum that we can get if we assume the array to be circular.
class Solution {
  circularSubarraySum(arr) {
    if (arr.length === 0) return 0;
    const maxSubarraySum = this.kadane(arr);
    let totalSum = 0;
    const invertedArr = [];
    for (let i = 0; i < arr.length; i++) {
      totalSum += arr[i];
      invertedArr.push(-arr[i]);
    }
    const minSubarraySum = -this.kadane(invertedArr);
    if (totalSum === minSubarraySum) {
      return maxSubarraySum;
    }
    return Math.max(maxSubarraySum, totalSum - minSubarraySum);
  }
  kadane(arr) {
    let currentMax = arr[0];
    let globalMax = arr[0];
    for (let i = 1; i < arr.length; i++) {
      currentMax = Math.max(arr[i], currentMax + arr[i]);
      globalMax = Math.max(globalMax, currentMax);
    }
    return globalMax;
  }
}
