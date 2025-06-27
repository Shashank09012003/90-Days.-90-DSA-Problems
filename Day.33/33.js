// 33.Aggressive Cows
// You are given an array with unique elements of stalls[], which denote the position of a stall. You are also given an integer k which denotes the number of aggressive cows. Your task is to assign stalls to k cows such that the minimum distance between any two of them is the maximum possible.
class Solution {
  aggressiveCows(stalls, k) {
    stalls.sort((a, b) => a - b);
    let left = 1;
    let right = stalls[stalls.length - 1] - stalls[0];
    let result = 0;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.canPlaceCows(stalls, k, mid)) {
        result = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }
  canPlaceCows(stalls, k, minDist) {
    let count = 1;
    let lastPosition = stalls[0];
    for (let i = 1; i < stalls.length; i++) {
      if (stalls[i] - lastPosition >= minDist) {
        count++;
        lastPosition = stalls[i];

        if (count >= k) {
          return true;
        }
      }
    }

    return false;
  }
}
