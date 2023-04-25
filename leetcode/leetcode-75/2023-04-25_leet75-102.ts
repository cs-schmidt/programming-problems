// Problem 102: Binary Tree Order Traversal
// NOTE: Popular question
// TODO: Produce further optimized version.

/**
 * Constraints:
 *
 * 1) The number of nodes in the tree is in the range [0, 2000].
 * 2) -1000 <= Node.val <= 1000.
 *
 */

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/*
   Solutions:
   ========================================================================== */

// Solution 1: recursive algorithm
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  appendData(root, 0);
  return result;

  // *******************************************************

  function appendData(node: TreeNode | null, level: number) {
    if (!node) return;
    if (!(result[level] instanceof Array)) result[level] = [];
    result[level].push(node.val);
    if (node?.left) appendData(node.left, level + 1);
    if (node?.right) appendData(node.right, level + 1);
  }
}
