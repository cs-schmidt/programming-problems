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
 * <solution approach>
 *
 * <description>
 *
 * Complexity: <time complexity> and <space complexity>.
 */
function widthOfBinaryTree(root: TreeNode): number {
  var max = 0;
  var level = 0;
  var leftLevel = 0;
  var rightLevel = 0;
  var leftLevelNodeIter = nextLevelLeft(root);
  var rightLevelNodeIter = nextLevelRight(root);
  var leftLevelNode = leftLevelNodeIter.next().value;
  var rightLevelNode = rightLevelNodeIter.next().value;
  var leftLevelOmission = 0;
  var rightLevelOmission = 0;

  /**
   * Preforms in-order DF traversal. It goes as far left down the left subtree
   * as possible ….
   */
  function* nextLevelLeft(node: TreeNode) {
    if (leftLevel === level) yield node;
    if (node.left) {
      leftLevel += 1;
      leftLevelOmission *= 2;
      nextLevelLeft(node.left);
    }
    if (node.right) {
      leftLevel += 1;
      leftLevelOmission = 2 * leftLevelOmission + 1;
      nextLevelLeft(node.right);
    }
    leftLevel -= 1;
  }

  /**
   * Preforms reverse in-order traversal. It goes as far right down the right
   * subtree as possible ….
   */
  function* nextLevelRight(node: TreeNode) {
    if (rightLevel === level) yield node;
    if (node.right) {
      rightLevel += 1;
      rightLevelOmission *= 2;
      nextLevelRight(node.right);
    }
    if (node.left) {
      rightLevel += 1;
      rightLevelOmission = 2 * rightLevelOmission + 1;
      nextLevelRight(node.left);
    }
    rightLevel -= 1;
  }

  while (
    !(
      leftLevelNode === rightLevelNode &&
      !(leftLevelNode.left || leftLevelNode.right)
    )
  ) {
    leftLevelNode = leftLevelNodeIter.next().value;
    rightLevelNode = rightLevelNodeIter.next().value;
    if (2 ** level - leftLevelOmission - rightLevelOmission > max)
      max = 2 ** level - leftLevelOmission - rightLevelOmission;
    level += 1;
  }

  return max;
}
