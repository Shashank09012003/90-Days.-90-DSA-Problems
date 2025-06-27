// 23.Count Inversions

// Given an array of integers arr[]. Find the Inversion Count in the array.
// Two elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.

// Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If the array is already sorted then the inversion count is 0.
// If an array is sorted in the reverse order then the inversion count is the maximum. 
class Solution {
  inversionCount(arr) {
    const temp = [...arr];
    return this.mergeSort(arr, temp, 0, arr.length - 1);
  }

  mergeSort(arr, temp, left, right) {
    let invCount = 0;

    if (left < right) {
      const mid = Math.floor((left + right) / 2);

      invCount += this.mergeSort(arr, temp, left, mid);
      invCount += this.mergeSort(arr, temp, mid + 1, right);

      invCount += this.merge(arr, temp, left, mid, right);
    }

    return invCount;
  }

  merge(arr, temp, left, mid, right) {
    let i = left;
    let j = mid + 1;
    let k = left;
    let invCount = 0;

    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        temp[k++] = arr[i++];
      } else {
        temp[k++] = arr[j++];
        invCount += mid - i + 1;
      }
    }

    while (i <= mid) {
      temp[k++] = arr[i++];
    }

    while (j <= right) {
      temp[k++] = arr[j++];
    }

    for (let idx = left; idx <= right; idx++) {
      arr[idx] = temp[idx];
    }

    return invCount;
  }
}
