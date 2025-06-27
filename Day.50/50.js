// 50.Count Subarrays with given XOR
// Given an array of integers arr[] and a number k, count the number of subarrays having XOR of their elements as k.

class Solution {
  subarrayXor(arr, k) {
    const prefixXOR = new Map();

    let currentXOR = 0;
    let count = 0;

    prefixXOR.set(0, 1);

    for (let i = 0; i < arr.length; i++) {
      currentXOR ^= arr[i];

      const xorNeeded = currentXOR ^ k;

      if (prefixXOR.has(xorNeeded)) {
        count += prefixXOR.get(xorNeeded);
      }

      prefixXOR.set(currentXOR, (prefixXOR.get(currentXOR) || 0) + 1);
    }

    return count;
  }
}
