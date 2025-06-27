// 82.Diameter of a Binary Tree
// Given a binary tree, the diameter (also known as the width) is defined as the number of edges on the longest path between two leaf nodes in the tree. This path may or may not pass through the root. Your task is to find the diameter of the tree.

/*
class Node{
  constructor(data){
      this.data = data;
      this.left = null;
      this.right = null;
  }
}
*/

class Solution {
  /**
   * @param {Node} root
   * @returns {number}
   */
  diameter(root) {
    if (!root) return 0;

    let maxDiameter = 0;

    const height = (node) => {
      if (!node) return -1;

      const leftHeight = height(node.left);
      const rightHeight = height(node.right);

      maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight + 2);

      return Math.max(leftHeight, rightHeight) + 1;
    };

    height(root);

    return maxDiameter;
  }
}
