// 31.Peak element
// Given an array arr[] where no two adjacent elements are same, find the index of a peak element. An element is considered to be a peak if it is greater than its adjacent elements (if they exist). If there are multiple peak elements, return index of any one of them. The output will be "true" if the index returned by your function is correct; otherwise, it will be "false".
class Solution {
  peakElement(arr) {
    if (arr.length === 1) {
      return 0;
    }
    if (arr[0] > arr[1]) {
      return 0;
    }
    if (arr[arr.length - 1] > arr[arr.length - 2]) {
      return arr.length - 1;
    }
    let left = 1;
    let right = arr.length - 2;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
        return mid;
      }

      if (arr[mid] < arr[mid + 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return 0;
  }
}
