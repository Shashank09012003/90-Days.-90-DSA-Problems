//26. Non-overlapping Intervals
// Difficulty: MediumAccuracy: 51.92%Submissions: 36K+Points: 4Average Time: 30m
// Given a 2D array intervals[][] of representing intervals where intervals [i] = [starti, endi ]. Return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

class Solution {
  minRemoval(intervals) {
    if (intervals.length <= 1) return 0;

    intervals.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < prevEnd) {
        count++;
      } else {
        prevEnd = intervals[i][1];
      }
    }

    return count;
  }
}
