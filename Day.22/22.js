// 22.Find H-Index
// Difficulty: MediumAccuracy: 53.4%Submissions: 36K+Points: 4
// Given an integer array citations[], where citations[i] is the number of citations a researcher received for the ith paper. The task is to find the H-index.
// H-Index is the largest value such that the researcher has at least H papers that have been cited at least H times.
class Solution {
  hIndex(citations) {
    const n = citations.length;

    const counts = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
      counts[Math.min(citations[i], n)]++;
    }

    let papers = 0;
    for (let i = n; i >= 0; i--) {
      papers += counts[i];

      if (papers >= i) {
        return i;
      }
    }

    return 0;
  }
}
