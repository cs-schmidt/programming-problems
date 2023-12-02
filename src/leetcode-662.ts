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
function widthOfBinaryTree(root: TreeNode) {
  var max = 1;
  var level = 1;
  var leftNodes: TreeNode[] = [root];
  var rightNodes: TreeNode[] = [root];
  var leftOmission = 0;
  var rightOmission = 0;

  while (
    !(
      // Leftmost and rightmost are not the same with no children.
      (
        isEndpoint() ||
        // Leftmost and rightmost share the same parent and both have no
        // children.
        (leftNodes.at(-2) === rightNodes.at(-2) &&
          !hasChildren(leftNodes.at(-1)) &&
          !hasChildren(rightNodes.at(-1)))
      )
    )
  ) {
    leftOmission *= 2;
    rightOmission *= 2;

    // Find the leftmost node to the next `level`: use in-order depth-first
    // traversal.
    do {
      if (leftNodes.at(-1).left) leftNodes.push(leftNodes.at(-1).left);
      else if (leftNodes.at(-1).right) leftNodes.push(leftNodes.at(-1).right);
      else if (leftNodes.length - 1 < level && !isEndpoint()) {
        leftOmission += 2 ** (level - leftNodes.length + 1);
        console.log(`on node: ${leftNodes.at(-1).val}`);
        console.log(`leftOmission: ${leftOmission}`);
        let topNode: TreeNode = leftNodes.pop();
        while (
          (topNode === leftNodes.at(-1).left && !leftNodes.at(-1).right) ||
          topNode === leftNodes.at(-1).right
        ) {
          if (!leftNodes.at(-1).right)
            leftOmission += 2 ** (level - leftNodes.length);
          console.log(`on node: ${leftNodes.at(-1).val}`);
          console.log(`leftOmission: ${leftOmission}`);
          topNode = leftNodes.pop();
        }
        leftNodes.push(leftNodes.at(-1).right);
      }
    } while (leftNodes.length - 1 < level && !isEndpoint());

    // Find the rightmost node to the next `level`: use reverse in-order
    // depth-first traversal.
    do {
      if (rightNodes.at(-1).right) rightNodes.push(rightNodes.at(-1).right);
      else if (rightNodes.at(-1).left) rightNodes.push(rightNodes.at(-1).left);
      else if (rightNodes.length - 1 < level && !isEndpoint()) {
        rightOmission += 2 ** (level - rightNodes.length + 1);
        console.log(`on node: ${rightNodes.at(-1).val}`);
        console.log(`righttOmission: ${rightOmission}`);
        let topNode: TreeNode = rightNodes.pop();
        while (
          (topNode === rightNodes.at(-1).right && !rightNodes.at(-1).left) ||
          topNode === rightNodes.at(-1).left
        ) {
          if (!rightNodes.at(-1).left)
            rightOmission += 2 ** (level - rightNodes.length);
          console.log(`on node: ${rightNodes.at(-1).val}`);
          console.log(`righttOmission: ${rightOmission}`);
          topNode = rightNodes.pop();
        }
        rightNodes.push(rightNodes.at(-1).left);
      }
    } while (rightNodes.length - 1 < level && !isEndpoint());

    console.log(`rightOmission: ${rightOmission}`);

    // Update max here.
    if (2 ** level - leftOmission - rightOmission > max)
      max = 2 ** level - leftOmission - rightOmission;

    level += 1;
  }

  return max;

  // Internal Procedures
  // =================================================================
  // <insert internal procedures here>
  function hasChildren(node: TreeNode): boolean {
    return Boolean(node.left || node.right);
  }

  function isEndpoint(): boolean {
    return (
      leftNodes.at(-1) === rightNodes.at(-1) && !hasChildren(leftNodes.at(-1))
    );
  }
}

// [1,3,2,5,3,null,9]
var testTree = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(5), new TreeNode(3)),
  new TreeNode(2, new TreeNode(9), null)
);

console.log(widthOfBinaryTree(testTree));
