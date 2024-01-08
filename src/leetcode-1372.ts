/**
 * Problem 1372: Longest ZigZag Path in a Binary Tree
 *
 * Constraints:
 *  1. The number of nodes in the tree is in the range [1, 5 * 10^4].
 *  2. 1 <= Node.val <= 100
 */

/** Represents a binary tree node. */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val: number = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * <solution type>
 *
 * Complexity: <time complexity> and <space complexity>
 */
function longestZigZag(root: TreeNode): number {
  const result = 0;

  return 0;
}
