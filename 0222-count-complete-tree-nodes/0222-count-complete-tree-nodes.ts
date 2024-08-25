/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function countNodes(root: TreeNode | null): number {
    if(!root) return 0;
    
    // calculate the depth of the leftmost, rightmost paths
    const leftDepth = (node) => {
        let depth = 0;
        while(node){
            depth++;
            node = node.left;
        }
        return depth;
    };
    const rightDepth = (node) => {
        let depth = 0;
        while(node){
            depth++;
            node = node.right;
        }
        return depth;
    };

    let left = leftDepth(root);
    let right = rightDepth(root);

    // check for highest complete level in binary tree
    if(left === right) {
        return (2 ** left) - 1;
    };

    // recursively Count Nodes in Subtrees
    return 1 + countNodes(root.left) + countNodes(root.right);
};