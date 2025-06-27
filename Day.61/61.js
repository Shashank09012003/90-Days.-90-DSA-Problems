// 61.Equilibrium Point
// Given an array of integers arr[], the task is to find the first equilibrium point in the array.
// The equilibrium point in an array is an index (0-based indexing) such that the sum of all elements before that index is the same as the sum of elements after it. Return -1 if no such point exists. 

class Solution {
  findEquilibrium(arr) {
    const n = arr.length;

    let totalSum = 0;
    for (let i = 0; i < n; i++) {
      totalSum += arr[i];
    }

    let leftSum = 0;

    for (let i = 0; i < n; i++) {
      if (leftSum * 2 + arr[i] === totalSum) {
        return i;
      }

      leftSum += arr[i];
    }

    return -1;
  }
}
