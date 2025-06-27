// 20.Strings Rotations of Each Other
// You are given two strings of equal lengths, s1 and s2. The task is to check if s2 is a rotated version of the string s1.
// Note: The characters in the strings are in lowercase.

class Solution {
  areRotations(s1, s2) {
    if (s1.length !== s2.length) {
      return false;
    }

    const doubleS1 = s1 + s1;
    const foundIndex = doubleS1.indexOf(s2);

    return foundIndex !== -1;
  }
}
