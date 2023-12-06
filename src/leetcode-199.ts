/**
 * Problem 199: Binary Tree Right Side View
 *
 * Constraints:
 *  1. The number of nodes in the tree is in the range [0, 100].
 *  2. -100 <= Node.val <= 100
 */

/** Definition of a binary tree node. */
class TreeNode {
  val: number;
  left: TreeNode | number;
  right: TreeNode | number;

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
 * Iterative and Imperative Solution
 *
 * Utilizes breadth-first traversal to store the rightmost value at every level
 * in the binary tree. The resulting array of these values is returned.
 *
 * Constraints: O(n) time and O(treeWidth) + O(1) auxiliary space.
 */
function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  const rightSideValues: number[] = [];
  const nodesAtLevel: TreeNode[] = [root];
  let nodeCountAtLevel = 1;

  while (nodeCountAtLevel) {
    const node: TreeNode = nodesAtLevel.shift();

    nodeCountAtLevel -= 1;
    if (node.left) nodesAtLevel.push(node.left);
    if (node.right) nodesAtLevel.push(node.right);
    if (nodeCountAtLevel === 0) {
      rightSideValues.push(node.val);
      nodeCountAtLevel = nodesAtLevel.length;
    }
  }

  return rightSideValues;
}
