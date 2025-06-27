// 27.Merge Without Extra Space
// Given two sorted arrays a[] and b[] of size n and m respectively, the task is to merge them in sorted order without using any extra space. Modify a[] so that it contains the first n elements and modify b[] so that it contains the last m elements.
class Solution {
  mergeArrays(a, b) {
    const n = a.length;
    const m = b.length;

    let gap = Math.ceil((n + m) / 2);

    while (gap > 0) {
      let i = 0,
        j = gap;

      while (j < n + m) {
        let aVal = i < n ? a[i] : b[i - n];
        let bVal = j < n ? a[j] : b[j - n];

        if (aVal > bVal) {
          if (i < n && j < n) {
            [a[i], a[j]] = [a[j], a[i]];
          } else if (i < n && j >= n) {
            [a[i], b[j - n]] = [b[j - n], a[i]];
          } else {
            [b[i - n], b[j - n]] = [b[j - n], b[i - n]];
          }
        }

        i++;
        j++;
      }

      gap = gap <= 1 ? 0 : Math.ceil(gap / 2);
    }
  }
}
