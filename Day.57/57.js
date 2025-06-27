// 57.Count distinct elements in every window
// Given an integer array arr[] and a number k. Find the count of distinct elements in every window of size k in the array.
class Solution {
  countDistinct(arr, k) {
    const n = arr.length;
    const result = [];
    const freq = {};
    let distinctCount = 0;

    for (let i = 0; i < k; i++) {
      if (!freq[arr[i]]) {
        freq[arr[i]] = 0;
        distinctCount++;
      }
      freq[arr[i]]++;
    }
    result.push(distinctCount);
    for (let i = k; i < n; i++) {
      const left = arr[i - k];
      freq[left]--;
      if (freq[left] === 0) {
        distinctCount--;
      }
      const right = arr[i];
      if (!freq[right] || freq[right] === 0) {
        distinctCount++;
      }
      if (!freq[right]) freq[right] = 0;
      freq[right]++;

      result.push(distinctCount);
    }
    return result;
  }
}
