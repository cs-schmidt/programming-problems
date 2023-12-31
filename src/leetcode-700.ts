/**
 * Problem 700: Search in a Binary Search Tree
 *
 * Constraints:
 *  1. The number of nodes in the tree is in the range [1, 5000].
 *  2. 1 <= Node.val <= 10^7
 *  3. root is a binary search tree.
 *  4. 1 <= val <= 10^7.
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
 * Recursive and Declarative Solution
 *
 * Process preforms preorder depth-first traversal with recursion, returning
 * the node with a matching value, or null otherwise.
 *
 * Complexity: O(nodes) and O(treeHeight) auxiliary space.
 */
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;
  if (root.val === val) return root;
  return searchBST(root.left, val) || searchBST(root.right, val);
}
