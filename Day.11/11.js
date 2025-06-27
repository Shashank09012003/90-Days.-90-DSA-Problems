// 11.Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].

// Note: It is guaranteed that the output fits in a 32-bit integer.

class Solution {
  maxProduct(arr) {
    if (!arr || arr.length === 0) return 0;

    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    let minEndingHere = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < 0) {
        [maxEndingHere, minEndingHere] = [minEndingHere, maxEndingHere];
      }

      maxEndingHere = Math.max(arr[i], maxEndingHere * arr[i]);
      minEndingHere = Math.min(arr[i], minEndingHere * arr[i]);

      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
  }
}
