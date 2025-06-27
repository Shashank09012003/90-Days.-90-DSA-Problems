// Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.

// Note: Consider the array as circular.

class Solution {
  // Function to rotate an array by d elements in counter-clockwise direction.
  rotateArr(arr, d) {
    // Handle case when d is larger than array length
    const n = arr.length;
    d = d % n;

    if (d === 0 || n <= 1) {
      return; // No rotation needed
    }

    // Using the reversal algorithm for in-place rotation:
    // 1. Reverse the first d elements
    this.reverse(arr, 0, d - 1);
    // 2. Reverse the remaining elements
    this.reverse(arr, d, n - 1);
    // 3. Reverse the entire array
    this.reverse(arr, 0, n - 1);
  }

  // Helper function to reverse a portion of the array
  reverse(arr, start, end) {
    while (start < end) {
      // Swap elements
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      start++;
      end--;
    }
  }
}
