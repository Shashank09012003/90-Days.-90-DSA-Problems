// 48.Print Anagrams Together
// Given an array of strings, return all groups of strings that are anagrams. 
// The strings in each group must be arranged in the order of their appearance in the original array. Refer to the sample case for clarification.

class Solution {
  anagrams(arr) {
    const anagramGroups = new Map();

    for (const str of arr) {
      const sortedStr = str.split("").sort().join("");

      if (anagramGroups.has(sortedStr)) {
        anagramGroups.get(sortedStr).push(str);
      } else {
        anagramGroups.set(sortedStr, [str]);
      }
    }

    return Array.from(anagramGroups.values());
  }
}
