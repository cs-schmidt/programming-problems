"""
Problem 437: Path Sum III

Constraints:
 1. The number of nodes in the tree is in the range [0, 1000].
 2. -10^9 <= Node.val <= 10^9
 3. -1000 <= targetSum <= 1000
"""

from typing import Optional


class TreeNode:
    """Represents a binary tree node."""

    def __init__(
        self,
        val: int = 0,
        left: Optional["TreeNode"] = None,
        right: Optional["TreeNode"] = None,
    ):
        self.val = val
        self.left = left
        self.right = right

# NOTE: Strategy doesn't work because of double counting.

class Solution:
    def pathSum(self, root: Optional["TreeNode"], targetSum: int) -> int:
        """
        Iterative and Imperative Solution

        Complexity: O(nodes) time and O(height) auxiliary space.
        """
        result: int = 0
        node: TreeNode = root
        path: list[TreeNode] = []

        while node or len(path):
            # Preform preorder depth-first traversal to get 'path' from 'root'
            # to the next leaf node.
            while node:
                path.append(node)
                node = node.left if node.left else node.right
            print(f"Full Path: {[node.val for node in path]}")

            # Find the number of subbarrays which sum to 'targetSum' in 'path'.
            for i in range(len(path)):
                    sums: int = 0
                    for j in range(i, len(path)):
                        sums += path[j].val
                        print(sums)
                        if sums == targetSum: result += 1

            # Traverse backwards through the 'path' to find the last node with
            # an unexplored right child.
            while len(path) > 0:
                node = path.pop()
                if len(path) and path[-1].right and path[-1].right is not node:
                    node = path[-1].right
                    break
            if not len(path):
                break

        return result
