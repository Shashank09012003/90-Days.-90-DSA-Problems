//44. Find All Triplets with Zero Sum
// Given an array arr[], find all possible triplets i, j, k in the arr[] whose sum of elements is equals to zero. 
// Returned triplet should also be internally sorted i.e. i<j<k.

class Solution {
  /**
   * @param {number[]} arr
   * @return {number[][]}
   */
  findTriplets(arr) {
    if (!arr || arr.length < 3) {
      return [];
    }

    const result = [];
    const n = arr.length;

    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
          if (arr[i] + arr[j] + arr[k] === 0) {
            result.push([i, j, k]);
          }
        }
      }
    }

    return result;
  }
}
