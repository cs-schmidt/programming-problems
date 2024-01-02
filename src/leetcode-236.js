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
  let node = root;

  // Build 'leftHistory' with preorder traversal.
  const leftStack = [];
  while (node) {
    while (node && node !== p && node !== q) {
      leftStack.push(node);
      node = node.left ? node.left : node.right;
    }

    if (node === p || node === q) {
      leftStack.push(node);
      break;
    }

    while (leftStack.length && node === leftStack.at(-1).right)
      node = leftStack.pop();
    node = leftStack.at(-1).right;
  }

  // Build 'rightHistory' with reverse preorder traversal.
  const rightStack = leftStack.slice(0, -1);
  const target = node === p ? q : p;
  node = rightStack.length ? rightStack.at(-1).right : node;
  while (node !== target) {
    while (node && node !== target) {
      rightStack.push(node);
      node = node.right ? node.right : node.left;
    }

    if (node === target) {
      rightStack.push(node);
      break;
    }

    while (rightStack.length && node === rightStack.at(-1).left)
      node = rightStack.pop();
    node = rightStack.at(-1).left;
  }

  // Compare 'leftHistory' and 'rightHistory' to find LCA.
  let idx = 0;
  const maxIdx = Math.min(leftStack.length, rightStack.length);
  while (leftStack[idx] === rightStack[idx] && idx < maxIdx) idx += 1;

  // Reporting
  console.log('Left and right stacks:');
  console.log(leftStack.map((n) => n.val));
  console.log(rightStack.map((n) => n.val));
  console.log(`Answer: ${leftStack[idx - 1]}`);

  return leftStack[idx - 1];
}
