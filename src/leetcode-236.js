/**
 * Problem 236: Lowest Common Ancestor of a Binary Tree
 *
 * Constraints:
 *  1. The number of nodes in the tree is in the range [2, 10^5].
 *  2. -10^9 <= Node.val <= 10^9
 *  3. All Node.val are unique.
 *  4. p != q
 *  5. p and q will exist in the tree.
 */

/** Represents a binary tree node. */
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Imperative and Iterative Solution
 *
 * <description>
 *
 * Complexity: O(nodes) time and O(height) auxiliary space.
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  const result = root;
  const node = root;
  const pHistory = [];
  const qHistory = [];

  // 1. Preform DF search until 'p' or 'q' is found, and save the stack.
  // 2. Preform DF search until the other value is found ('p' or 'q' depending
  //    on what we found in step 1) and save the stack.
  // 3. Find the LCA of 'p' and 'q' by comparing the stacks.

  return result;
}
