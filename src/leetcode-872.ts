/**
 * Problem 872: Leaf-Similar Trees
 *
 * Constraints:
 *  1. The number of nodes in each tree will be in the range [1, 200].
 *  2. Both of the given trees will have values in the range [0, 200].
 */

/** Definition of a binary tree node. */
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
 * Iterative and Imperative Solution
 *
 * <description>
 *
 * Complexity: <time complexity> and <space complexity>.
 */
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const tree1History: TreeNode[] = [];
  const tree2History: TreeNode[] = [];
  let tree1Node: TreeNode | null = root1;
  let tree2Node: TreeNode | null = root2;
  let tree1LeafVal: number | null = null;
  let tree2LeafVal: number | null = null;

  do {
    // Preform in-order DF traversal on tree 1 until a leaf value is found.
    while ((tree1Node !== null || tree1History.length > 0) && !tree1LeafVal) {
      // Traverse down the leftwards path of nodes.
      while (tree1Node !== null) {
        tree1History.push(tree1Node);
        tree1Node = tree1Node.left;
      }
      // Now `tree1Node` is null and the top of `tree1History` will either have
      // a right child node, or will itself be a leaf node.
      if (!tree1History.at(-1).left && !tree1History.at(-1).right)
        tree1LeafVal = tree1History.at(-1).val;
      tree1Node = tree1History.pop().right;
    }

    // Preform in-order DF traversal on tree 2 until a leaf value is found.
    while ((tree2Node !== null || tree2History.length > 0) && !tree2LeafVal) {
      // Traverse down the leftwards path of nodes.
      while (tree2Node !== null) {
        tree2History.push(tree2Node);
        tree2Node = tree2Node.left;
      }
      // Now `tree2Node` is null and the top of `tree2History` will either have
      // a right child node, or will itself be a leaf node.
      if (!tree2History.at(-1).left && !tree2History.at(-1).right)
        tree2LeafVal = tree2History.at(-1).val;
      tree2Node = tree2History.pop().right;
    }

    // Compare leaf node values from both trees.
    if (tree1LeafVal !== tree2LeafVal) return false;

    // Reset leaf node values.
    tree1LeafVal = null;
    tree2LeafVal = null;
  } while (tree1History.length > 0 || tree2History.length > 0);

  // Returns true if a failure condition wasn't achieved.
  return true;
}
