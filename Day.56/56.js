// 56.Indexes of Subarray Sum
// Given an array arr[] containing only non-negative integers, your task is to find a continuous subarray (a contiguous sequence of elements) whose sum equals a specified value target. You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. You need to find the first subarray whose sum is equal to the target.
// Note: If no such array is possible then, return [-1].
class Solution {
  subarraySum(arr, target) {
    const n = arr.length;

    if (target === 0) {
      for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
          return [i + 1, i + 1];
        }
      }
      return [-1];
    }

    let left = 0;
    let currentSum = 0;

    for (let right = 0; right < n; right++) {
      currentSum += arr[right];

      while (currentSum > target && left <= right) {
        currentSum -= arr[left];
        left++;
      }

      if (currentSum === target) {
        return [left + 1, right + 1];
      }
    }

    return [-1];
  }
}
