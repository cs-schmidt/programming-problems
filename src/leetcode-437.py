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


class Solution:
    def pathSum(self, root: TreeNode, targetSum: int) -> int:
        """
        Iterative and Imperative Solution

        Complexity: <time complexity> and <space complexity>.
        """
        # Within the tree defined by 'root' and all it's descendants, every path
        # from  from 'root' to one of its leaf nodes (going only from parent to
        # child) can be represented by an array of nodes. I have to get the
        # number of contiguous sequences of elements in every array which sums
        # to 'targetSum'.
        # - Probably using a depth-first traversal strategy.

        path_history: list[TreeNode] = []
        node: TreeNode = root

        # Preform a depth-first traversal which retains the path from 'root' to
        # its leaf nodes in 'path_history'.

        # TODO: Write some code which finds the number of contiguous sequences
        #       that sum to produce 'targetSum'.

        return 0
