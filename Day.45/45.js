// 45.Intersection of Two arrays with Duplicate Elements
// Given two integer arrays a[] and b[], you have to find the intersection of the two arrays. Intersection of two arrays is said to be elements that are common in both arrays. The intersection should not have duplicate elements and the result should contain items in any order.
// Note: The driver code will sort the resulting array in increasing order before printing.

class Solution {
  intersectionWithDuplicates(a, b) {
    const setA = new Set(a);
    const result = new Set();

    for (let num of b) {
      if (setA.has(num)) {
        result.add(num);
      }
    }

    return Array.from(result);
  }
}
