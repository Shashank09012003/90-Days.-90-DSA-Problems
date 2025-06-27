// 89.Check for BST
// Difficulty: EasyAccuracy: 25.37%Submissions: 577K+Points: 2Average Time: 30m
// Given the root of a binary tree. Check whether it is a BST or not.
// Note: We are considering that BSTs can not contain duplicate Nodes.
// A BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
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
    // Function to check whether a Binary Tree is BST or not.
    isBST(root) {
        function isBSTUtil(node, min, max) {
            if (!node) return true;
            if (node.data <= min || node.data >= max) {
                return false;
            }
            return isBSTUtil(node.left, min, node.data) &&
                   isBSTUtil(node.right, node.data, max);
        }
        return isBSTUtil(root, -Number.MAX_VALUE, Number.MAX_VALUE);
    }
}