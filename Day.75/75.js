// 75.Permutations of a String
// Given a string s, which may contain duplicate characters, your task is to generate and return an array of all unique permutations of the string. You can return your answer in any order.

class Solution {
  findPermutation(s) {
    const chars = s.split("").sort();
    const result = [];
    const used = new Array(chars.length).fill(false);
    const current = [];

    const backtrack = () => {
      if (current.length === chars.length) {
        result.push(current.join(""));
        return;
      }

      for (let i = 0; i < chars.length; i++) {
        if (used[i]) continue;

        if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) continue;

        used[i] = true;
        current.push(chars[i]);

        backtrack();

        used[i] = false;
        current.pop();
      }
    };

    backtrack();
    return result;
  }
}
