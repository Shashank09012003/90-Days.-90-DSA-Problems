// 43.Count pairs with given sum
// Difficulty: EasyAccuracy: 50.11%Submissions: 44K+Points: 2Average Time: 15m
// Given an array arr[] and an integer target. You have to find numbers of pairs in array arr[] which sums up to given target.

class Solution {
  countPairs(arr, target) {
    // Edge case: empty array or single element array
    if (!arr || arr.length < 2) {
      return 0;
    }

    // Use a Map to store frequency of each element
    const frequency = new Map();
    let count = 0;

    // Count frequency of each element
    for (let i = 0; i < arr.length; i++) {
      // Calculate the complement we need to find
      const complement = target - arr[i];

      // If complement exists in our map, add its frequency to count
      if (frequency.has(complement)) {
        count += frequency.get(complement);
      }

      // Increment frequency of current element
      frequency.set(arr[i], (frequency.get(arr[i]) || 0) + 1);
    }

    return count;
  }
}
