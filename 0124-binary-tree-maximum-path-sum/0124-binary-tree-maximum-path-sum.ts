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

function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity; // to ensure that negative sums are covered

    const dfs = (node) => {
        if(!node) return 0;

        const leftMax = Math.max(dfs(node.left), 0); // if the node is null, return 0
        const rightMax = Math.max(dfs(node.right), 0);

        const currentSum = node.val + leftMax + rightMax;
        maxSum = Math.max(maxSum, currentSum);

        // Math.max(leftMax, rightMax): selects the larger of the two path sums
        // return value: the maximum path sum that can be extended to the parent node
        return node.val + Math.max(leftMax, rightMax);
    } 

    dfs(root);
    return maxSum;
};