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
 * Complexity: <time complexity> and <space complexity>.
 */
function longestZigZag(root: TreeNode): number {
  let maxZigzag = 0;
  let currZigzag = 0;
  let node: TreeNode | null = root;
  const path: TreeNode[] = [];
  const branches: TreeNode[] = [];
  let direction: 'left' | 'right' = 'left';

  while (node || branches.length) {
    // Move as far down a zigzag as possible.
    while (node) {
      path.push(node);
      if (direction === 'left') {
        node = node.left;
        direction = 'right';
        if (node.right) branches.push(node.right);
      } else {
        node = node.right;
        direction = 'left';
        if (node.left) branches.push(node.left);
      }
      currZigzag += 1;
    }

    // Update 'maxZigzag' in case we found a bigger one.
    if (currZigzag > maxZigzag) maxZigzag = currZigzag;

    //
    node = branches.pop();
    currZigzag = 1;
  }

  return maxZigzag;
}
