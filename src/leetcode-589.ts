/**
 * Problem 589: N-ary Preorder Traversal
 *
 * Constraints:
 *  1. The number of nodes in the tree is in the range [0, 10^4].
 *  2. 0 <= Node.val <= 10^4
 *  3. The height of the n-ary tree is less than or equal to 1000
 */

// TODO: Improve solution's time and space complexity.
// TODO: Complete this problem's "follow up" portion.

/** Represents a node in an n-ary tree. */
class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

/**
 * Declarative and Recursive Solution
 *
 * Complexity: <time> and <space> auxiliary complexity.
 */
function preorder(root: Node | null): number[] {
  if (!root) return [];
  return [root.val].concat(
    ...root.children.map((node: Node) => preorder(node))
  );
}
