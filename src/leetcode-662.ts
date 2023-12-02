/**
 * Problem 662: Maximum Width of Binary Tree
 *
 * Constraints:
 *  1. The number of nodes in the tree is in the range [1, 3000].
 *  2. -100 <= Node.val <= 100.
 */

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
 * Iterative and Imperative Solution.
 *
 * <description>
 *
 * Complexity: O(nodes) time and O(height + 1) + O(1) auxiliary space.
 */
function widthOfBinaryTree(root: TreeNode) {
  var max = 1;
  var level = 0;
  var leftNodes: TreeNode[] = [root];
  var rightNodes: TreeNode[] = [root];
  var leftOmission = 0;
  var rightOmission = 0;

  while (!atEndpoint()) {
    level += 1;
    leftOmission *= 2;
    rightOmission *= 2;

    // Find leftmost node of `level` (in-order DF traversal).
    do {
      if (leftNodes.at(-1).left) leftNodes.push(leftNodes.at(-1).left);
      else if (leftNodes.at(-1).right) {
        // NOTE: Condition required here.
        // Contribute left subtree's omission from `leftNode.at(-1)`.
        leftOmission += 2 ** (level - leftNodes.length);
        leftNodes.push(leftNodes.at(-1).right);
      } else if (leftNodes.length - 1 < level && !atEndpoint()) {
        // Contribute left and right subtree omissions from `leftNode.at(-1)`.
        leftOmission += 2 ** (level - leftNodes.length + 1);
        let topNode: TreeNode = leftNodes.pop();
        while (
          (topNode === leftNodes.at(-1).left && !leftNodes.at(-1).right) ||
          topNode === leftNodes.at(-1).right
        ) {
          // NOTE: Condition required here.
          // Contribute right subtree's omission from `leftNode.at(-1)`.
          leftOmission += 2 ** (level - leftNodes.length);
          topNode = leftNodes.pop();
        }
        leftNodes.push(leftNodes.at(-1).right);
      }
    } while (leftNodes.length - 1 < level && !atEndpoint());

    // Find rightmost node of `level` (reverse in-order DF traversal).
    do {
      if (rightNodes.at(-1).right) rightNodes.push(rightNodes.at(-1).right);
      else if (rightNodes.at(-1).left) {
        // Contribute right subtree's omission from `rightNode.at(-1)`.
        rightOmission += 2 ** (level - rightNodes.length);
        rightNodes.push(rightNodes.at(-1).left);
      } else if (rightNodes.length - 1 < level && !atEndpoint()) {
        // Contribute left and right subtree omissions from `rightNodes.at(-1)`.
        rightOmission += 2 ** (level - rightNodes.length + 1);
        let topNode: TreeNode = rightNodes.pop();
        while (
          (topNode === rightNodes.at(-1).right && !rightNodes.at(-1).left) ||
          topNode === rightNodes.at(-1).left
        ) {
          // Contribute left subtree's omission from `rightNode.at(-1)`.
          if (!rightNodes.at(-1).right)
            rightOmission += 2 ** (level - rightNodes.length);
          topNode = rightNodes.pop();
        }
        rightNodes.push(rightNodes.at(-1).left);
      }
    } while (rightNodes.length - 1 < level && !atEndpoint());

    console.log('*'.repeat(30));
    console.log(`Iteration for level ${level}`);
    console.log(leftOmission);
    console.log(rightOmission);
    console.log(`left node: ${leftNodes.at(-1).val}`);
    console.log(`right node: ${rightNodes.at(-1).val}`);

    if (levelWidth() > max) max = levelWidth();
  }

  return max;

  // Internal Procedures
  // =================================================================
  /**  */
  function atEndpoint(): boolean {
    return (
      leftNodes.at(-1) === rightNodes.at(-1) && !hasChildren(leftNodes.at(-1))
    );
  }

  /** Checks if `node` has children. */
  function hasChildren(node: TreeNode): boolean {
    return Boolean(node.left || node.right);
  }

  /** Calculates the width of the current `level`. */
  function levelWidth(): number {
    return 2 ** level - leftOmission - rightOmission;
  }
}
