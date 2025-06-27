// 15.Add Binary Strings
// Given two binary strings s1 and s2 consisting of only 0s and 1s. Find the resultant string after adding the two Binary Strings.
// Note: The input strings may contain leading zeros but the output string should not have any leading zeros.
class Solution {
  addBinary(s1, s2) {
    let result = "";
    let carry = 0;

    let i = s1.length - 1;
    let j = s2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
      let digit1 = i >= 0 ? parseInt(s1[i]) : 0;
      let digit2 = j >= 0 ? parseInt(s2[j]) : 0;

      let sum = digit1 + digit2 + carry;
      let currentDigit = sum % 2;
      carry = Math.floor(sum / 2);

      result = currentDigit + result;

      i--;
      j--;
    }

    return result.replace(/^0+/, "") || "0";
  }
}
