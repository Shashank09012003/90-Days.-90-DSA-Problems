// 6 You are given an array of integer arr[] where each number represents a vote to a candidate. Return the candidates that have votes greater than one-third of the total votes, If there's not a majority vote, return an empty array. 
class Solution {
  findMajority(arr) {
    const n = arr.length;

    const threshold = Math.floor(n / 3);

    const countMap = new Map();

    for (let i = 0; i < n; i++) {
      const num = arr[i];
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    const result = [];

    for (const [num, count] of countMap.entries()) {
      if (count > threshold) {
        result.push(num);
      }
    }

    result.sort((a, b) => a - b);

    return result;
  }
}
