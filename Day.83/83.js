// 83.Mirror Tree
// Given a binary tree, convert the binary tree to its Mirror tree.
// Mirror of a Binary Tree T is another Binary Tree M(T) with left and right children of all non-leaf nodes interchanged.

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
     * @param {Node} node
     * @return {void}
     */
    // Function to convert a binary tree into its mirror tree.
    mirror(node) {
    if (!node) {
        return;
       }    
         let temp = node.left;
         node.left = node.right;
         node.right = temp;
         
         this.mirror(node.left);
         this.mirror(node.right);
    }
}