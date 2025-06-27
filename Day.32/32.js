// 32.K-th element of two Arrays
// Given two sorted arrays a[] and b[] and an element k, the task is to find the element that would be at the kth position of the combined sorted array.
class Solution {
  kthElement(a, b, k) {
    if (a.length > b.length) {
      return this.kthElement(b, a, k);
    }

    let left = Math.max(0, k - b.length);
    let right = Math.min(k, a.length);

    while (left <= right) {
      const midA = Math.floor((left + right) / 2);

      const midB = k - midA;

      const maxLeftA = midA === 0 ? -Infinity : a[midA - 1];
      const minRightA = midA === a.length ? Infinity : a[midA];

      const maxLeftB = midB === 0 ? -Infinity : b[midB - 1];
      const minRightB = midB === b.length ? Infinity : b[midB];

      if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
        return Math.max(maxLeftA, maxLeftB);
      } else if (maxLeftA > minRightB) {
        right = midA - 1;
      } else {
        left = midA + 1;
      }
    }

    return -1;
  }
}
