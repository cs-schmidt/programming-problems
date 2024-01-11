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
 * Imperative and Iterative Solution
 *
 * Complexity: O(nodes) time and O(height) auxiliary space.
 */
function longestZigZag(root: TreeNode): number {
  let result = 0;
  let direction: -1 | 1 = -1;
  let node: TreeNode | null = root;
  const zigzag: TreeNode[] = [];
  const points: TreeNode[] = [];

  while (node || points.length) {
    console.log('Zigzag Start');
    console.log('='.repeat(30));
    console.log(`direction: ${direction}`);

    // Builds 'zigzag' starting from a given 'node'.
    while (node) {
      zigzag.push(node);
      if (direction === -1) {
        if (node.right) points.push(node.right);
        node = node.left;
      } else {
        if (node.left) points.push(node.left);
        node = node.right;
      }
      direction *= -1;
    }

    console.log(`zigzag: ${zigzag.map((n) => n.val).toString()}`);
    console.log(`points: ${points.map((n) => n.val).toString()}`);

    // Check if the 'zigzag' we just built is the biggest so far.
    if (zigzag.at(0) !== root && zigzag.length + 1 > result)
      result = zigzag.length + 1;
    else if (zigzag.length > result)
      if (
        ((zigzag.length + 1) % 2 === 0 && direction === 1) ||
        ((zigzag.length + 1) % 2 !== 0 && direction === -1)
      ) {
        // Checks if the starting direction of 'zigzag' was left or right.
        // Reset at the right to left zigzag.
        node = zigzag.at(0) ?? null;
        direction = 1;
      } else {
        // Check from the next starting point.
        node = points.pop();
        direction = -1;
      }
    zigzag.length = 0;
  }

  return result;
}
