// 38.Search in a Row-Column sorted matrix
// Given a 2D integer matrix mat[][] of size n x m, where every row and column is sorted in increasing order and a number x, the task is to find whether element x is present in the matrix.

class Solution {
  matSearch(mat, x) {
    if (!mat || mat.length === 0 || mat[0].length === 0) {
      return false;
    }

    const n = mat.length; // Number of rows
    const m = mat[0].length; // Number of columns

    // Start from top right corner
    let row = 0;
    let col = m - 1;

    while (row < n && col >= 0) {
      if (mat[row][col] === x) {
        return true;
      } else if (mat[row][col] > x) {
        // The current value is greater, so move left
        col--;
      } else {
        // The current value is smaller, so move down
        row++;
      }
    }

    // Element not found
    return false;
  }
}
