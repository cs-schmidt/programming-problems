/**
 * Problem 104: Maximum Depth of Binary Tree
 *
 * Constraints
 *  1. The number of nodes in the tree is in the range [0, 10^4].
 *  2. -100 <= Node.val <= 100
 */

/** Definition of a binary tree node. */
class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(
    val = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Recursive Approach.
 *
 * This solution is adapted from a recursive depth-first search (DFS) algorithm.
 * We define an internal procedure `recursivePostTraversal()` and a variable
 * `traversalDepth`, then we use the `recursivePostTraversal()` to do a DFS
 * which adjusts `traversalDepth`. The value of `traversalDepth` then compared
 * with the greatest `result` found so far and updated. At the end of things
 * `result` is returned.
 *
 * Complexity: O(nodes) time and O(height) + O(1) auxiliary space.
 */
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let result = 0;
  let traversalDepth = 0;
  recursivePostTraversal(root);

  return result;

  // Internal Procedures
  // =================================================================
  function recursivePostTraversal(node: TreeNode | null) {
    traversalDepth += 1;
    if (node.left) recursivePostTraversal(node.left);
    if (node.right) recursivePostTraversal(node.right);
    if (traversalDepth > result) result = traversalDepth;
    traversalDepth -= 1;
  }
}
