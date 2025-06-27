//36.Spirally traversing a matrix
// You are given a rectangular matrix mat[][] of size n x m, and your task is to return an array while traversing the matrix in spiral form.
class Solution {
  spirallyTraverse(mat) {
    if (!mat || mat.length === 0) return [];
    const result = [];
    const n = mat.length;
    const m = mat[0].length;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = m - 1;
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) {
        result.push(mat[top][i]);
      }
      top++;
      for (let i = top; i <= bottom; i++) {
        result.push(mat[i][right]);
      }
      right--;
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(mat[bottom][i]);
        }
        bottom--;
      }
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(mat[i][left]);
        }
        left++;
      }
    }
    return result;
  }
}
