// 5. Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges the numbers into the lexicographically next greater permutation. If no such permutation exists, rearrange the numbers into the lowest possible order (i.e., sorted in ascending order). 

class Solution {
  nextPermutation(arr) {
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
      i--;
    }

    if (i < 0) {
      let left = 0;
      let right = arr.length - 1;
      while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
      return arr;
    }

    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
      j--;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];

    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }

    return arr;
  }
}
