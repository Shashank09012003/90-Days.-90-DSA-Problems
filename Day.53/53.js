// 53.Sum Pair closest to target
// Given an array arr[] and a number target, find a pair of elements (a, b) in arr[], where a<=b whose sum is closest to target.
// Note: Return the pair in sorted order and if there are multiple such pairs return the pair with maximum absolute difference. If no such pair exists return an empty array.
class Solution {
  sumClosest(arr, target) {
    if (arr.length < 2) {
      return [];
    }
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    let closestDiff = Infinity;
    let closestPair = [];
    let maxAbsDiff = -1;
    while (left < right) {
      const sum = arr[left] + arr[right];
      const diff = Math.abs(sum - target);
      if (diff < closestDiff) {
        closestDiff = diff;
        closestPair = [arr[left], arr[right]];
        maxAbsDiff = Math.abs(arr[right] - arr[left]);
      } else if (diff === closestDiff) {
        const absDiff = Math.abs(arr[right] - arr[left]);
        if (absDiff > maxAbsDiff) {
          closestPair = [arr[left], arr[right]];
          maxAbsDiff = absDiff;
        }
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return closestPair;
  }
}
