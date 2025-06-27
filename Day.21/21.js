// 21.Sort 0s, 1s and 2s
// Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.
// You need to solve this problem without utilizing the built-in sort function.
class Solution {
  sort012(arr) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) count0++;
      else if (arr[i] === 1) count1++;
      else count2++;
    }

    let i = 0;

    while (count0 > 0) {
      arr[i++] = 0;
      count0--;
    }

    while (count1 > 0) {
      arr[i++] = 1;
      count1--;
    }

    while (count2 > 0) {
      arr[i++] = 2;
      count2--;
    }

    return arr;
  }
}
