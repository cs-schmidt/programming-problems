/**
 * Problem 1372: Longest ZigZag Path in a Binary Tree
 *
 * Constraints:
 *  1. The number of nodes in the tree is in the range [1, 5 * 10^4].
 *  2. 1 <= Node.val <= 100
 */

// TODO: Improve solution's time and space complexity.

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
 * Imperative and Iterative Solution
 *
 * Complexity: O(nodes) time and O(nodes) auxiliary space.
 */
function longestZigZag(root: TreeNode): number {
  let result = 0;
  const orders: [TreeNode, -1 | 1][] = [
    [root, -1],
    [root, 1]
  ];
  while (orders.length) {
    let [node, direction] = orders.shift();
    const zigzag: TreeNode[] = [];
    zigzag.push(node);
    if (direction === -1) node = node.left;
    else node = node.right;
    direction *= -1;
    while (node) {
      zigzag.push(node);
      if (direction === -1) {
        if (node.right) orders.push([node, 1]);
        node = node.left;
      } else {
        if (node.left) orders.push([node, -1]);
        node = node.right;
      }
      direction *= -1;
    }
    if (zigzag.length - 1 > result) result = zigzag.length - 1;
  }
  return result;
}
