// Problem 104: Maximum Depth of Binary Tree

/**
 * Constraints
 *
 * 1) The number of nodes in the tree is in the range [0, 10^4].
 * 2) -100 <= Node.val <= 100
 */

// Definition for a binary tree node.
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function maxDepth(root: TreeNode | null): number {
  const path: TreeNode[] = root ? [root] : [];
  const markedAncestors: Set<TreeNode> = new Set();
  let result: number = path.length;

  const iterations = 6;
  let count = 1;

  while (path.length != 0 && count < iterations) {
    // Continually go down the left children and add them to `path`.
    while (path.at(-1).left) path.push(path.at(-1).left);

    // The current node (the last element of `path`) has no left child, so we
    // check for a right child.
    if (path.at(-1).right) {
      markedAncestors.add(path.at(-1));
      path.push(path.at(-1).right);
    }
    // There's no left or right child, so were at a leaf node.
    else {
      if (path.length > result) result = path.length;
      path.pop();
      while (markedAncestors.has(path.at(-1))) {
        markedAncestors.delete(path.at(-1));
        path.pop();
      }
    }

    count += 1;
  }

  return result;
}
