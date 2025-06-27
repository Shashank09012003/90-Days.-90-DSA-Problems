// 17.Non Repeating Character
// Given a string s consisting of lowercase English Letters. Return the first non-repeating character in s.
// If there is no non-repeating character, return '$'.
// Note: When you return '$' driver code will output -1.
class Solution {
  nonRepeatingChar(s) {
    const charFrequency = new Map();

    for (let char of s) {
      charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    for (let char of s) {
      if (charFrequency.get(char) === 1) {
        return char;
      }
    }

    return "$";
  }
}
