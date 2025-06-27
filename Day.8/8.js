// 8. Stock Buy and Sell – Max one Transaction Allowed
// Difficulty: EasyAccuracy: 49.33%Submissions: 74K+Points: 2Average Time: 10m
// Given an array prices[] of length n, representing the prices of the stocks on different days. The task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell. If it is not possible to make a profit then return 0.

class Solution {
  maximumProfit(prices) {
    if (!prices || prices.length < 2) {
      return 0;
    }

    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
      minPrice = Math.min(minPrice, prices[i]);

      const currentProfit = prices[i] - minPrice;

      maxProfit = Math.max(maxProfit, currentProfit);
    }

    return maxProfit;
  }
}
