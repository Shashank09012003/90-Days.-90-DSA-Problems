// 80.Level order traversal
// Given a root of a binary tree with n nodes, the task is to find its level oorder traversal. Level order traversal of a tree is breadth-first traversal for the tree.

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
   * @returns {number[][]}
   */
  levelOrder(root) {
    if (!root) {
      return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        currentLevel.push(node.data);

        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
      }

      result.push(currentLevel);
    }

    return result;
  }
}
