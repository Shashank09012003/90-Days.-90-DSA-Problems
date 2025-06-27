// 51.Count all triplets with given sum in sorted array
// Given a sorted array arr[] and a target value, the task is to count triplets (i, j, k) of valid indices, such that arr[i] + arr[j] + arr[k] = target and i < j < k.

class Solution {
  countTriplets(arr, target) {
    const n = arr.length;
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;

      while (left < right) {
        const sum = arr[i] + arr[left] + arr[right];

        if (sum === target) {
          if (arr[left] === arr[right]) {
            const count_between = right - left + 1;

            count += (count_between * (count_between - 1)) / 2;
            break;
          }

          let count_left = 1;
          let temp_left = left;
          while (
            temp_left + 1 < right &&
            arr[temp_left] === arr[temp_left + 1]
          ) {
            count_left++;
            temp_left++;
          }

          let count_right = 1;
          let temp_right = right;
          while (
            temp_right - 1 > left &&
            arr[temp_right] === arr[temp_right - 1]
          ) {
            count_right++;
            temp_right--;
          }

          count += count_left * count_right;

          left += count_left;
          right -= count_right;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }

    return count;
  }
}
