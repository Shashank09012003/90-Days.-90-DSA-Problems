// 9. Given an array arr[] denoting heights of N towers and a positive integer K.

// For each tower, you must perform exactly one of the following operations exactly once.

// Increase the height of the tower by K
// Decrease the height of the tower by K
// Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

// You can find a slight modification of the problem here.
// Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.

class Solution {
  getMinDiff(arr, k) {
    if (arr.length === 1) return 0;

    arr.sort((a, b) => a - b);
    const n = arr.length;

    let result = arr[n - 1] - arr[0];

    let smallest, largest;

    for (let i = 1; i < n; i++) {
      if (arr[i] - k < 0) continue;

      smallest = Math.min(arr[0] + k, arr[i] - k);

      largest = Math.max(arr[i - 1] + k, arr[n - 1] - k);

      result = Math.min(result, largest - smallest);
    }

    return result;
  }
}
