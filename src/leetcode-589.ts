/**
 * Problem 589: N-ary Preorder Traversal
 *
 * Constraints:
 *  1. The number of nodes in the tree is in the range [0, 10^4].
 *  2. 0 <= Node.val <= 10^4
 *  3. The height of the n-ary tree is less than or equal to 1000
 */

/** Definition for node. */
class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function preorder(root: Node | null): number[] {
  if (!root) return [];
  return [root.val].concat(
    ...root.children.map((node: Node) => preorder(node))
  );
}
