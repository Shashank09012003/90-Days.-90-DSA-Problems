//58. Longest substring with distinct characters
// Given a string s, find the length of the longest substring with all distinct characters. 

class Solution {
  longestUniqueSubstr(s) {
    const n = s.length;
    if (n === 0) return 0;

    const lastIndex = {};
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < n; end++) {
      const char = s[end];

      if (lastIndex[char] !== undefined && lastIndex[char] >= start) {
        start = lastIndex[char] + 1;
      }

      lastIndex[char] = end;

      maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
  }
}
