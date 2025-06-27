// 85.Inorder Traversal
// Given a Binary Tree, your task is to return its In-Order Traversal.
// An inorder traversal first visits the left child (including its entire subtree), then visits the node, and finally visits the right child (including its entire subtree).
// Follow Up: Try solving this with O(1) auxiliary space.

class Solution {
  inOrder(root) {
    const result = [];
    let current = root;

    while (current) {
      if (!current.left) {
        result.push(current.data);
        current = current.right;
      } else {
        let predecessor = current.left;
        while (predecessor.right && predecessor.right !== current) {
          predecessor = predecessor.right;
        }

        if (!predecessor.right) {
          predecessor.right = current;
          current = current.left;
        } else {
          predecessor.right = null;
          result.push(current.data);
          current = current.right;
        }
      }
    }

    return result;
  }
}
