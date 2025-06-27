//35. Kth Missing Positive Number in a Sorted Array
// Given a sorted array of distinct positive integers arr[], we need to find the kth positive number that is missing from arr[].  

class Solution {
  kthMissing(arr, k) {
    if (arr.length === 0 || k < arr[0]) {
      return k;
    }

    const n = arr.length;

    const missingBeforeLast = arr[n - 1] - n;
    if (k > missingBeforeLast) {
      return arr[n - 1] + (k - missingBeforeLast);
    }

    let left = 0;
    let right = n - 1;

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);

      const missing = arr[mid] - (mid + 1);

      if (missing < k) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return k + left;
  }
}
