// 18.Search Pattern (KMP-Algorithm)
// Given two strings, one is a text string txt and the other is a pattern string pat. The task is to print the indexes of all the occurrences of the pattern string in the text string. Use 0-based indexing while returning the indices. 
// Note: Return an empty list in case of no occurrences of pattern.

class Solution {
  search(pat, txt) {
    const result = [];
    const M = pat.length;
    const N = txt.length;
    if (M === 0 || N === 0 || M > N) {
      return result;
    }
    const lps = new Array(M).fill(0);
    this.computeLPSArray(pat, M, lps);
    let i = 0;
    let j = 0;
    while (N - i >= M - j) {
      if (pat[j] === txt[i]) {
        j++;
        i++;
      }
      if (j === M) {
        result.push(i - j);
        j = lps[j - 1];
      } else if (i < N && pat[j] !== txt[i]) {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
    }
    return result;
  }
  computeLPSArray(pat, M, lps) {
    let len = 0;
    lps[0] = 0;
    let i = 1;
    while (i < M) {
      if (pat[i] === pat[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len !== 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
  }
}
