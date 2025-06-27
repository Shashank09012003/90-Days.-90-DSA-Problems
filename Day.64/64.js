// 64.Product array puzzle
// Given an array, arr[] construct a product array, res[] where each element in res[i] is the product of all elements in arr[] except arr[i]. Return this resultant array, res[].
// Note: Each element is res[] lies inside the 32-bit integer range.

class Solution {
  productExceptSelf(arr) {
    const n = arr.length;
    const result = new Array(n);

    let zeroCount = 0;
    let productWithoutZeros = 1;

    for (let i = 0; i < n; i++) {
      if (arr[i] === 0) {
        zeroCount++;
      } else {
        productWithoutZeros *= arr[i];
      }
    }

    for (let i = 0; i < n; i++) {
      if (zeroCount > 1) {
        result[i] = 0;
      } else if (zeroCount === 1) {
        result[i] = arr[i] === 0 ? productWithoutZeros : 0;
      } else {
        result[i] = productWithoutZeros / arr[i];
      }
    }

    return result;
  }
}
