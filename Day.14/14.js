// 14.Implement Atoi
// Given a string s, the objective is to convert it into integer format without utilizing any built-in functions. Refer the below steps to know about atoi() function.
// Cases for atoi() conversion:
// Skip any leading whitespaces.
// Check for a sign (‘+’ or ‘-‘), default to positive if no sign is present.
// Read the integer by ignoring leading zeros until a non-digit character is encountered or end of the string is reached. If no digits are present, return 0.
// If the integer is greater than 231 – 1, then return 231 – 1 and if the integer is smaller than -231, then return -231.

class Solution {
  myAtoi(s) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    let i = 0;
    let result = 0;
    let sign = 1;

    while (i < s.length && s[i] === " ") {
      i++;
    }

    if (i < s.length && (s[i] === "+" || s[i] === "-")) {
      sign = s[i] === "-" ? -1 : 1;
      i++;
    }

    let digitFound = false;
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
      digitFound = true;
      const digit = s[i].charCodeAt(0) - "0".charCodeAt(0);

      if (
        result > Math.floor(INT_MAX / 10) ||
        (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
      ) {
        return sign === 1 ? INT_MAX : INT_MIN;
      }

      result = result * 10 + digit;
      i++;
    }

    if (!digitFound) return 0;

    const finalResult = sign * result;
    return finalResult === 0 ? 0 : finalResult;
  }
}
