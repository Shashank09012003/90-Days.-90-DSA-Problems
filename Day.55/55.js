// 55.Count the number of possible triangles
// Given an integer array arr[]. Find the number of triangles that can be formed with three different array elements as lengths of three sides of the triangle. 
// A triangle with three given sides is only possible if sum of any two sides is always greater than the third side.

class Solution {
  countTriangles(arr) {
    const n = arr.length;

    if (n < 3) return 0;

    arr.sort((a, b) => a - b);

    let count = 0;

    for (let k = n - 1; k >= 2; k--) {
      let left = 0;
      let right = k - 1;

      while (left < right) {
        if (arr[left] + arr[right] > arr[k]) {
          count += right - left;
          right--;
        } else {
          left++;
        }
      }
    }

    return count;
  }
}
