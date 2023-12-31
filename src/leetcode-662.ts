/**
 * Problem 662: Maximum Width of Binary Tree
 *
 * Constraints:
 *  1. The number of nodes in the tree is in the range [1, 3000].
 *  2. -100 <= Node.val <= 100.
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

/** An ordered pair containing a node and associated index number. */
type IndexedNode = [TreeNode, number];

/**
 * Iterative and Imperative Solution.
 *
 * The process works by conducting level-order traversal upon the elements of
 * the tree, but does so whilst maintaining the index of each node in the
 * traversal.
 *
 * Complexity: O(nodes) time and O(maxWidth) + O(1) auxiliary space.
 */
function widthOfBinaryTree(root: TreeNode) {
  let max = 1;
  const levelNodes: IndexedNode[] = [[root, 0]];

  while (levelNodes.length !== 0) {
    let levelSize = levelNodes.length;
    const leftmostLevelIndex = levelNodes[0][1];
    const rightmostLevelIndex = levelNodes.at(-1)[1];

    max = Math.max(max, rightmostLevelIndex - leftmostLevelIndex + 1);

    while (levelSize > 0) {
      const node: IndexedNode = levelNodes.shift();
      if (node[0].left) levelNodes.push([node[0].left, 2 * (node[1] - 1) + 1]);
      if (node[0].right)
        levelNodes.push([node[0].right, 2 * (node[1] - 1) + 2]);
      levelSize -= 1;
    }
  }

  return max;
}
