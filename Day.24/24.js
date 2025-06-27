// 23.Overlapping Intervals
// Given an array of Intervals arr[][], where arr[i] = [starti, endi]. The task is to merge all of the overlapping Intervals.
class Solution {
  mergeOverlap(arr) {
    if (!arr || arr.length <= 1) {
      return arr;
    }

    arr.sort((a, b) => a[0] - b[0]);

    const result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
      const lastInterval = result[result.length - 1];
      const currentInterval = arr[i];

      if (currentInterval[0] <= lastInterval[1]) {
        lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
      } else {
        result.push(currentInterval);
      }
    }

    return result;
  }
}
