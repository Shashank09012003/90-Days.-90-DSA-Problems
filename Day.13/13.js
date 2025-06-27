//13. Smallest Positive Missing
// Difficulty: MediumAccuracy: 25.13%Submissions: 407K+Points: 4
// You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.
// Note: Positive number starts from 1. The array can have negative integers too.

class Solution {
  missingNumber(arr) {
    const numSet = new Set(arr);

    let smallestMissing = 1;

    while (numSet.has(smallestMissing)) {
      smallestMissing++;
    }

    return smallestMissing;
  }
}
