// 84.Construct Tree from Inorder & Preorder
// Given two arrays representing the inorder and preorder traversals of a binary tree, construct the tree and return the root node of the constructed tree.
// Note: The output is written in postorder traversal.

class Solution {
    buildTree(inorder, preorder) {
        let preIndex = 0;

        function construct(inStart, inEnd) {
            if (inStart > inEnd) {
                return null;
            }

            let rootVal = preorder[preIndex++];
            let root = new Node(rootVal);

            if (inStart === inEnd) {
                return root;
            }

            let inIndex = inStart;
            while (inIndex <= inEnd && inorder[inIndex] !== rootVal) {
                inIndex++;
            }

            root.left = construct(inStart, inIndex - 1);
            root.right = construct(inIndex + 1, inEnd);

            return root;
        }

        return construct(0, inorder.length - 1);
    }
}