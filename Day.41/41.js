// 41.Set Matrix Zeroes
// You are given a 2D matrix mat[][] of size n×m. The task is to modify the matrix such that if mat[i][j] is 0, all the elements in the i-th row and j-th column are set to 0 and do it in constant space complexity.
class Solution {
  setMatrixZeroes(mat) {
    if (!mat || mat.length === 0 || mat[0].length === 0) {
      return;
    }

    const n = mat.length;
    const m = mat[0].length;

    let firstRowHasZero = false;
    let firstColHasZero = false;

    for (let j = 0; j < m; j++) {
      if (mat[0][j] === 0) {
        firstRowHasZero = true;
        break;
      }
    }

    for (let i = 0; i < n; i++) {
      if (mat[i][0] === 0) {
        firstColHasZero = true;
        break;
      }
    }

    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        if (mat[i][j] === 0) {
          mat[i][0] = 0;
          mat[0][j] = 0;
        }
      }
    }

    for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
        if (mat[i][0] === 0 || mat[0][j] === 0) {
          mat[i][j] = 0;
        }
      }
    }

    if (firstRowHasZero) {
      for (let j = 0; j < m; j++) {
        mat[0][j] = 0;
      }
    }

    if (firstColHasZero) {
      for (let i = 0; i < n; i++) {
        mat[i][0] = 0;
      }
    }
  }
}
