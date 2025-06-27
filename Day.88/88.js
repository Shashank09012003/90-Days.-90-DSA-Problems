// 88.K Sum Paths
// Difficulty: MediumAccuracy: 44.73%Submissions: 128K+Points: 4
// Given a binary tree and an integer k, determine the number of downward-only paths where the sum of the node values in the path equals k. A path can start and end at any node within the tree but must always move downward (from parent to child).

class Solution {
    sumK(root, K) {
        const map = new Map();
        map.set(0, 1);
        let count = 0;

        const dfs = (node, currentSum) => {
            if (!node) return;
            currentSum += node.data;
            if (map.has(currentSum - K)) {
                count += map.get(currentSum - K);
            }
            map.set(currentSum, (map.get(currentSum) || 0) + 1);
            dfs(node.left, currentSum);
            dfs(node.right, currentSum);
            map.set(currentSum, map.get(currentSum) - 1);
            if (map.get(currentSum) === 0) {
                map.delete(currentSum);
            }
        };

        dfs(root, 0);
        return count;
    }
}