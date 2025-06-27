// 42.Two Sum - Pair with Given Sum
// Given an array arr[] of positive integers and another integer target. Determine if there exist two distinct indices such that the sum of their elements is equal to the target.
class Solution {
  twoSum(arr, target) {
    if (!arr || arr.length < 2) {
      return false;
    }

    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];

      if (seen.has(complement)) {
        return true;
      }

      seen.add(arr[i]);
    }

    return false;
  }
}
