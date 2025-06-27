// N-Queen Problem
// The n-queens puzzle is the problem of placing n queens on a (n × n) chessboard such that no two queens can attack each other. Note that two queens attack each other if they are placed on the same row, the same column, or the same diagonal.

// Given an integer n, find all distinct solutions to the n-queens puzzle.
// You can return your answer in any order but each solution should represent a distinct board configuration of the queen placements, where the solutions are represented as permutations of [1, 2, 3, ..., n]. In this representation, the number in the ith position denotes the row in which the queen is placed in the ith column.
// For eg. below figure represents a chessboard [3 1 4 2].


class Solution {
  nQueen(n) {
    const result = [];
    const board = new Array(n).fill(0);
    const rows = new Set();
    const diag1 = new Set();
    const diag2 = new Set();

    const backtrack = (col) => {
      if (col === n) {
        result.push([...board]);
        return;
      }

      for (let row = 1; row <= n; row++) {
        const d1 = row - col;
        const d2 = row + col;

        if (rows.has(row) || diag1.has(d1) || diag2.has(d2)) {
          continue;
        }

        board[col] = row;
        rows.add(row);
        diag1.add(d1);
        diag2.add(d2);

        backtrack(col + 1);

        rows.delete(row);
        diag1.delete(d1);
        diag2.delete(d2);
      }
    };

    backtrack(0);
    return result;
  }
}
