// 19.Min Chars to Add for Palindrome
// Given a string s, the task is to find the minimum characters to be added at the front to make the string palindrome.
// Note: A palindrome string is a sequence of characters that reads the same forward and backward.
class Solution {
  minChar(s) {
    const originalStr = s;
    const reversedStr = s.split("").reverse().join("");
    const concatStr = originalStr + "$" + reversedStr;

    const lps = this.computeLPSArray(concatStr);

    const longestPalindromicPrefix = lps[concatStr.length - 1];

    return originalStr.length - longestPalindromicPrefix;
  }

  computeLPSArray(str) {
    const n = str.length;
    const lps = new Array(n).fill(0);

    let len = 0;
    let i = 1;

    while (i < n) {
      if (str[i] === str[len]) {
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
    return lps;
  }
}
