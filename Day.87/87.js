// 87.Maximum path sum from any node
// Given a binary tree, the task is to find the maximum path sum. The path may start and end at any node in the tree.

class Solution {
  findMaxSum(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;

    const dfs = (node) => {
      if (!node) return 0;

      const left = dfs(node.left);
      const right = dfs(node.right);

      const leftMax = Math.max(0, left);
      const rightMax = Math.max(0, right);

      maxSum = Math.max(maxSum, node.data + leftMax + rightMax);

      return node.data + Math.max(leftMax, rightMax);
    };

    dfs(root);

    return maxSum;
  }
}
