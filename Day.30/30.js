// 30.Search in Rotated Sorted Array
// Given a sorted and rotated array arr[] of distinct elements, the task is to find the index of a target key. Return -1 if the key is not found.
class Solution {
  search(arr, key) {
    // code here
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === key) {
        return mid;
      }
      if (arr[left] <= arr[mid]) {
        if (arr[left] <= key && key < arr[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (arr[mid] < key && key <= arr[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return -1;
  }
}
