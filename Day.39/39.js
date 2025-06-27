//39. Search in a row-wise sorted matrix
// Given a row-wise sorted 2D matrix mat[][] of size n x m and an integer x, find whether element x is present in the matrix.
// Note: In a row-wise sorted matrix, each row is sorted in itself, i.e. for any i, j within bounds, mat[i][j] <= mat[i][j+1].
class Solution {
  searchRowMatrix(mat, x) {
    if (!mat || mat.length === 0 || mat[0].length === 0) {
      return false;
    }

    const n = mat.length;
    const m = mat[0].length;

    for (let i = 0; i < n; i++) {
      if (x >= mat[i][0] && x <= mat[i][m - 1]) {
        let left = 0;
        let right = m - 1;

        while (left <= right) {
          const mid = Math.floor((left + right) / 2);

          if (mat[i][mid] === x) {
            return true;
          } else if (mat[i][mid] < x) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
      }
    }

    return false;
  }
}
