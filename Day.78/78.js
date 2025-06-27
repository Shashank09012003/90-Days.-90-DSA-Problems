// 78.Solve the Sudoku
// Given an incomplete Sudoku configuration in terms of a 9x9  2-D interger square matrix, mat[][], the task is to solve the Sudoku. It is guaranteed that the input Sudoku will have exactly one solution.
class Solution {
  solveSudoku(mat) {
    // your code here
    const rowMask = new Array(9).fill(0);
    const colMask = new Array(9).fill(0);
    const boxMask = new Array(9).fill(0);

    const getBoxIndex = (row, col) =>
      Math.floor(row / 3) * 3 + Math.floor(col / 3);

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const num = mat[row][col];
        if (num != 0) {
          const mask = 1 << (num - 1);
          rowMask[row] |= mask;
          colMask[col] |= mask;
          boxMask[getBoxIndex(row, col)] |= mask;
        }
      }
    }
    const backtrack = (row, col) => {
      if (row === 9) {
        return true;
      }
      if (col === 9) {
        return backtrack(row + 1, 0);
      }
      if (mat[row][col] !== 0) {
        return backtrack(row, col + 1);
      }
      const boxIndex = getBoxIndex(row, col);
      for (let num = 1; num <= 9; num++) {
        const mask = 1 << (num - 1);

        if (
          (rowMask[row] & mask) === 0 &&
          (colMask[col] & mask) === 0 &&
          (boxMask[boxIndex] & mask) === 0
        ) {
          mat[row][col] = num;
          rowMask[row] |= mask;
          colMask[col] |= mask;
          boxMask[boxIndex] |= mask;

          if (backtrack(row, col + 1)) {
            return true;
          }

          mat[row][col] = 0;
          rowMask[row] &= ~mask;
          colMask[col] &= ~mask;
          boxMask[boxIndex] &= ~mask;
        }
      }
      return false;
    };
    backtrack(0, 0);
  }
}
