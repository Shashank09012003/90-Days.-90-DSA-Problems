//37. Rotate by 90 degree
// Given a square matrix mat[][] of size n x n. The task is to rotate it by 90 degrees in an anti-clockwise direction without using any extra space.

class Solution {
  rotateby90(mat) {
    const n = mat.length;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      }
    }

    for (let j = 0; j < n; j++) {
      for (let i = 0; i < Math.floor(n / 2); i++) {
        [mat[i][j], mat[n - 1 - i][j]] = [mat[n - 1 - i][j], mat[i][j]];
      }
    }
  }
}
