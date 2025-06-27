// 60.Container With Most Water
// Given an array arr[] of non-negative integers, where each element arr[i] represents the height of the vertical lines, find the maximum amount of water that can be contained between any two lines, together with the x-axis.
// Note: In the case of a single vertical line it will not be able to hold water.

class Solution {
  maxWater(arr) {
    const n = arr.length;
    if (n < 2) return 0;

    let left = 0,
      right = n - 1;
    let maxArea = 0;

    while (left < right) {
      const width = right - left;
      const height = Math.min(arr[left], arr[right]);
      const currentArea = width * height;

      maxArea = Math.max(maxArea, currentArea);

      if (arr[left] < arr[right]) {
        left++;
      } else {
        right--;
      }
    }

    return maxArea;
  }
}
