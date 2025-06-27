// 29.Sorted and Rotated Minimum
// A sorted array of distinct elements arr[] is rotated at some unknown point, the task is to find the minimum element in it. 
class Solution {
  findMin(arr) {
    let left = 0;
    let right = arr.length - 1;

    if (arr[left] < arr[right] || left === right) {
      return arr[left];
    }

    while (left <= right) {
      if (left === right) {
        return arr[left];
      }

      const mid = Math.floor((left + right) / 2);

      if (mid < right && arr[mid] > arr[mid + 1]) {
        return arr[mid + 1];
      }

      if (mid > left && arr[mid - 1] > arr[mid]) {
        return arr[mid];
      }

      if (arr[mid] < arr[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return arr[0];
  }
}
