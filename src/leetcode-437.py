"""
Problem 437: Path Sum III

Constraints:
 1. The number of nodes in the tree is in the range [0, 1000].
 2. -10^9 <= Node.val <= 10^9
 3. -1000 <= targetSum <= 1000
"""

# TODO: Improve solution's time and space complexity.
# TODO: Improve code cleanliness.

from typing import Optional
from functools import reduce


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


class Solution:
    def pathSum(self, root: Optional["TreeNode"], target_sum: int) -> int:
        """
        Iterative and Imperative Solution

        Complexity: <time complexity> and <space complexity>.
        """
        result: int = 0
        node: TreeNode = root
        path: list[TreeNode] = []
        backtrack_points: list[int] = []
        # Preforms DF traversal, going to each leaf node in left-to-right order.
        while node or backtrack_points:
            # Traverses to the ith leaf node (in left-to-right order).
            while node:
                path.append(node)
                if node.left and node.right:  backtrack_points.append(len(path))
                node = node.left if node.left else node.right
                path_val = reduce(lambda sum, node: sum + node.val, path, 0)
                if path_val == target_sum: result += 1
                for i in range(len(path) - 1):
                    path_val -= path[i].val
                    result = result + 1 if path_val == target_sum else result
            # Goes to the next possible downwards path to find the (i+1)th leaf
            # node in the next iteration.
            if len(backtrack_points) > 0:
                path = path[0 : backtrack_points.pop()]
                node = path[-1].right
        return result
