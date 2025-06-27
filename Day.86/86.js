// 86.Tree Boundary Traversal
// Given a Binary Tree, find its Boundary Traversal. The traversal should be in the following order:
// Left Boundary: This includes all the nodes on the path from the root to the leftmost leaf node. You must prefer the left child over the right child when traversing. Do not include leaf nodes in this section.
// Leaf Nodes: All leaf nodes, in left-to-right order, that are not part of the left or right boundary.
// Reverse Right Boundary: This includes all the nodes on the path from the rightmost leaf node to the root, traversed in reverse order. You must prefer the right child over the left child when traversing. Do not include the root in this section if it was already included in the left boundary.
// Note: If the root doesn't have a left subtree or right subtree, then the root itself is the left or right boundary.

class Solution {
  boundaryTraversal(root) {
    if (!root) return [];
    let result = [];

    if (!this.isLeaf(root)) {
      result.push(root.data);
    }
    let current = root.left;
    while (current && !this.isLeaf(current)) {
      result.push(current.data);
      current = current.left ? current.left : current.right;
    }
    this.addLeaves(root, result);

    let stack = [];
    current = root.right;
    while (current && !this.isLeaf(current)) {
      stack.push(current.data);
      current = current.right ? current.right : current.left;
    }
    while (stack.length > 0) {
      result.push(stack.pop());
    }
    return result;
  }
  isLeaf(node) {
    return node && !node.left && !node.right;
  }
  addLeaves(node, result) {
    if (!node) return;
    if (this.isLeaf(node)) {
      result.push(node.data);
      return;
    }
    this.addLeaves(node.left, result);
    this.addLeaves(node.right, result);
  }
}
