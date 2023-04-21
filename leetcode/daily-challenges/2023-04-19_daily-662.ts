// Problem 662: Maximum Width of Binary Tree

// TODO: Complete this challenge.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class OrderedTriple {
	constructor(x: any, y: any, z: any) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	public x: any = null;
	public y: any = null;
	public z: any = null;
}

/** The maximum width at a level if the btree were complete.  */
function maxWidthOfLevel(level: number): number {
	if (!Number.isInteger(level) || level < 1)
		throw RangeError(
			`Variable \`level\` must be a positive integer, got ${level} instead.`
		);
	return Math.pow(2, level - 1);
}

function widthOfBinaryTree(root: TreeNode | null): number {
	let level: number = 1; // deepest level reached thus far
	let lNode: TreeNode | null = root.left;
	let rNode: TreeNode | null = root.right;
	let lExcludedNodes: number = 0;
	let rExcludedNodes: number = 0;
	const lParents: OrderedTriple[] = [new OrderedTriple(root, level, 0)];
	const rParents: OrderedTriple[] = [new OrderedTriple(root, level, 0)];
	let maxWidth: number = 1; // greatest width thus seen down to the deepest level reached so far

	// When the root has no children.
	if (!root.left && !root.right) return maxWidth;

	// Start by finding the level with it's end-nodes maximally spread apart, and
	// get the max width for that level.
	while (lNode?.left && rNode?.right) {
		level += 1;
		if (lNode.right) lParents.push(new OrderedTriple(lNode, level, 0));
		if (rNode.left) rParents.push(new OrderedTriple(rNode, level, 0));
		lNode = lNode.left;
		rNode = rNode.right;
	}

	maxWidth = Math.max(
		maxWidth,
		maxWidthOfLevel((level += 1)) - (lExcludedNodes + rExcludedNodes)
	);
	let lNodeLevel: number = lParents[lParents.length - 1][1];
	let rNodeLevel: number = rParents[rParents.length - 1][1];

	// While `lNode` and `rNode` don't share their most recent ancestor with more
	// than one child, find the max width of `level += 1`:

	while (!(lNode === rNode && !lNode.left && !lNode.right)) {
		// Find the left-most end-node at `level += 1` and calculate the number of
		// end-nodes that would have been to the left of this node (on its level);
		// `lExcludedNodes`.
		while (lNodeLevel < level + 1) {
			if (lNode.left && lNode.right) {
				// Current node has two children.
				lParents.push(new OrderedTriple(lNode, level, lExcludedNodes));
				lNode = lNode.left;
				lExcludedNodes *= 2;
			} else if (lNode.left) {
				// Current node has only left child.
				lNode = lNode.left;
				lExcludedNodes *= 2;
			} else if (lNode.right) {
				// Current node has only right child.
				lNode = lNode.right;
				lExcludedNodes = 2 * lExcludedNodes + 1;
			} else {
				// Backtrack to last ancestor node with children untraveresed and begin
				// left-biased traversal to find the next left-most node of `level += 1`.
				lNodeLevel = lParents[lParents.length - 1].y;
				lNode = lParents.pop().x.right;
				lExcludedNodes = 1;
			}
		}
		lExcludedNodes += 2 * lParents[lParents.length - 1].z;

		// Find the right-most end-node at `level += 1` and calculate the number of
		// end-nodes that would have been to the right of this node (on its level);
		// `rExcludedNodes`.
		while (rNodeLevel < level + 1) {
			if (rNode.right && rNode.left) {
				// Current node has two children.
				rParents.push(new OrderedTriple(lNode, level, rExcludedNodes));
				rNode = rNode.right;
				rExcludedNodes *= 2;
			} else if (rNode.right) {
				// Current node has only right child.
				rNode = rNode.right;
				rExcludedNodes *= 2;
			} else if (lNode.left) {
				// Current node has only left child.
				rNode = rNode.left;
				rExcludedNodes = 2 * rExcludedNodes + 1;
			} else {
				// Backtrack to last ancestor node with children untraveresed and begin
				// left-biased traversal to find the next left-most node of `level += 1`.
				rNodeLevel = rParents[rParents.length - 1].y;
				rNode = rParents.pop().x.right;
				rExcludedNodes = 1;
			}
		}
		rExcludedNodes += 2 * rParents[rParents.length - 1].z;

		// Assign next max width.
		maxWidth = Math.max(
			maxWidth,
			maxWidthOfLevel((level += 1)) - (lExcludedNodes + rExcludedNodes)
		);
	}
	return maxWidth;
}
