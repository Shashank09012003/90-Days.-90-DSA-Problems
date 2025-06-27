// 79.Word Search
// You are given a two-dimensional mat[][] of size n*m containing English alphabets and a string word. Check if the word exists on the mat. The word can be constructed by using letters from adjacent cells, either horizontally or vertically. The same cell cannot be used more than once.

class Solution {
  isWordExist(mat, word) {
    const n = mat.length;
    const m = mat[0].length;
    const visited = Array(n)
      .fill()
      .map(() => Array(m).fill(false));
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    const search = (row, col, index) => {
      if (index === word.length) {
        return true;
      }

      if (row < 0 || row >= n || col < 0 || col >= m) {
        return false;
      }

      if (visited[row][col] || mat[row][col] !== word[index]) {
        return false;
      }

      visited[row][col] = true;

      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
        if (search(newRow, newCol, index + 1)) {
          return true;
        }
      }

      visited[row][col] = false;
      return false;
    };

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (mat[i][j] === word[0] && search(i, j, 0)) {
          return true;
        }
      }
    }

    return false;
  }
}
