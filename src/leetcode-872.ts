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
  const iter = 0;

  while (
    !(
      (tree1Node !== null && tree1History.length !== 0) ||
      (tree2Node !== null && tree2History.length !== 0)
    )
  ) {
    // Preform In-order DF traversal on left tree until a leaf is reached.
    while ((tree1Node !== null || tree1History.length !== 0) && !tree1LeafVal) {
      // Traverse as far left as possible until `null` is reached.
      while (tree1Node !== null) {
        tree1History.push(tree1Node);
        tree1Node = tree1Node.left;
      }
      // We know that `tree1Node` is `null` now. And, The most recent node in
      // `leftTreeHistory` will either have a non-null right child, or it won't.
      if (tree1History.at(-1).right) tree1Node = tree1History.pop().right;
      else {
        // We know the top of `tree1History` is a leaf node.
        tree1LeafVal = tree1History.at(-1).val;
        tree1Node = tree1History.pop().right;
      }
    }

    // Preform In-order DF traversal on right tree until a leaf is reached.
    while ((tree2Node !== null || tree2History.length !== 0) && !tree2LeafVal) {
      // Traverse as far left as possible until `null` is reached.
      while (tree2Node !== null) {
        tree2History.push(tree2Node);
        tree2Node = tree2Node.left;
      }
      // We know that `tree2Node` is `null` now. And, The most recent node in
      // `rightTreeHistory` will either have a non-null right child, or it
      // won't.
      if (tree2History.at(-1).right) tree2Node = tree2History.pop().right;
      else {
        // We know the top of `tree2History` is a leaf node.
        tree2LeafVal = tree2History.at(-1).val;
        tree2Node = tree2History.pop().right;
      }
    }

    // Compare the left tree and right tree leaf node values.
    if (tree1LeafVal !== tree2LeafVal) return false;

    tree1LeafVal = null;
    tree2LeafVal = null;
  }

  // Returns true if a failure condition wasn't achieved.
  return true;
}
