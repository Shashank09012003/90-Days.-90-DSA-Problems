// 28.Number of occurrence
// Given a sorted array, arr[] and a number target, you need to find the number of occurrences of target in arr[]. 

class Solution {
  countFreq(arr, target) {
    const firstOccurrence = this.findFirstOccurrence(arr, target);

    if (firstOccurrence === -1) {
      return 0;
    }

    const lastOccurrence = this.findLastOccurrence(arr, target);

    return lastOccurrence - firstOccurrence + 1;
  }

  findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  findLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        result = mid;
        left = mid + 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}
