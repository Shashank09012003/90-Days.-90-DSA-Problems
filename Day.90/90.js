// 90.k-th Smallest in BST
// Given a BST and an integer k, the task is to find the kth smallest element in the BST. If there is no kth smallest element present then return -1.

class Solution {
  kthSmallest(root, k) {
    let stack = [];
    let current = root;
    let count = 0;

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      count++;

      if (count === k) {
        return current.data;
      }

      current = current.right;
    }

    return -1;
  }
}
