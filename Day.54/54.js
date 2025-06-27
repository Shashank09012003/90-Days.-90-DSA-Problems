// 54.Pair with given sum in a sorted array
// You are given an integer target and an array arr[]. You have to find number of pairs in arr[] which sums up to target. It is given that the elements of the arr[] are in sorted order.
// Note: pairs should have elements of distinct indexes. 
class Solution {
  countPairs(arr, target) {
    const n = arr.length;
    let count = 0;
    let left = 0;
    let right = n - 1;
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) {
        if (arr[left] === arr[right]) {
          const elementsCount = right - left + 1;
          count += (elementsCount * (elementsCount - 1)) / 2;
          break;
        } else {
          let countLeft = 1;
          while (left + 1 < right && arr[left] === arr[left + 1]) {
            countLeft++;
            left++;
          }
          let countRight = 1;
          while (right - 1 > left && arr[right] === arr[right - 1]) {
            countRight++;
            right--;
          }
          count += countLeft * countRight;
          left++;
          right--;
        }
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return count;
  }
}
