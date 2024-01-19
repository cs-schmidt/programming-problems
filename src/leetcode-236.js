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

// TODO: Improve solution's time and space complexity.
// TODO: Improve code cleanliness.

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
 * Complexity: O(nodes) time and O(height) auxiliary space.
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  // Build left path with preorder DF traversal.
  let lNode = root;
  const lPath = [];
  while (![p, q].includes(lPath.at(-1))) {
    while (lNode && ![p, q].includes(lNode)) {
      lPath.push(lNode);
      lNode = lNode.left || lNode.right;
    }
    if ([p, q].includes(lNode)) {
      lPath.push(lNode);
      break;
    }
    // Finds the last point where you could've gone right.
    while (lPath.length && lPath.at(-1).right === lNode) lNode = lPath.pop();
    lNode = lPath.at(-1).right;
  }
  // Build right path with preorder DF traversal.
  let rNode = lNode;
  const rPath = lPath.slice(0, -1);
  const target = p === lNode ? q : p;
  while (rPath.at(-1) !== target) {
    while (rNode && rNode !== target) {
      rPath.push(rNode);
      rNode = rNode.left || rNode.right;
    }
    if (rNode === target) {
      rPath.push(rNode);
      break;
    }
    // Finds the last point where you could've gone right.
    while (rPath.length && rPath.at(-1).right === rNode) rNode = rPath.pop();
    rNode = rPath.at(-1).right;
  }
  // Compare 'leftPath' and 'rightPath' to find LCA.
  let lcaIndex = Math.min(lPath.length, rPath.length) - 1;
  while (lPath[lcaIndex] !== rPath[lcaIndex]) {
    lcaIndex -= 1;
  }
  return lPath[lcaIndex];
}
