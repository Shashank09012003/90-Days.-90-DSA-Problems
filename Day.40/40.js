//40. Search in a sorted Matrix
// Given a strictly sorted 2D matrix mat[][] of size n x m and a number x. Find whether the number x is present in the matrix or not.
// Note: In a strictly sorted matrix, each row is sorted in strictly increasing order, and the first element of the ith row (i!=0) is greater than the last element of the (i-1)th row.

class Solution {
  searchMatrix(mat, x) {
    if (!mat || mat.length === 0 || mat[0].length === 0) {
      return false;
    }

    const n = mat.length;
    const m = mat[0].length;

    let left = 0;
    let right = n * m - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      const row = Math.floor(mid / m);
      const col = mid % m;

      if (mat[row][col] === x) {
        return true;
      } else if (mat[row][col] < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return false;
  }
}
