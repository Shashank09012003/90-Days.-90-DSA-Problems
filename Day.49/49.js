// 49.ubarrays with sum K
// Given an unsorted array of integers, find the number of subarrays having sum exactly equal to a given number k.
class Solution {
  countSubarrays(arr, k) {
    const prefixSumCount = new Map();

    prefixSumCount.set(0, 1);

    let count = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];

      if (prefixSumCount.has(currentSum - k)) {
        count += prefixSumCount.get(currentSum - k);
      }

      prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);
    }

    return count;
  }
}
