// Problem 98: Validate Binary Search Tree
// NOTE: Popular question.

/**
 * Constraints:
 *
 * 1) The number of nodes in the tree is in the range [1, 10^4].
 * 2) -2^31 <= Node.val <= 2^31 - 1
 *
 */

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/*  =========================================================================
    Solutions:
    ========================================================================= */

/*  
    Solution 1:
    ========================================================================= */
function isValidBST(root: TreeNode | null): boolean {
  function checkChildren(
    node: TreeNode | null,
    left: boolean,
    gpNode: TreeNode | null
  ) {
    if (!node) return true;
    if (left) {
      console.log(
        `side: ${left ? 'left' : 'right'}, node: ${node.left?.val}, gpNode: ${
          gpNode?.val
        }`
      );
      if (node.left?.val > node.val) return false;
      if (node.right?.val < node.val || node.right?.val > gpNode?.val)
        return false;
      if (!node.left && !node.right) return true;
    } else {
      console.log(
        `side: ${left ? 'left' : 'right'}, node: ${node.right?.val}, gpNode: ${
          gpNode?.val
        }`
      );
      if (node.right?.val < node.val) return false;
      if (node.left?.val > node.val || node.left?.val < gpNode?.val)
        return false;
      if (!node.left && !node.right) return true;
    }
    checkChildren(node.left, true, node);
    checkChildren(node.right, false, node);
    return true;
  }

  return checkChildren(root, true, null) && checkChildren(root, false, null);
}
