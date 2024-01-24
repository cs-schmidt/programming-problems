"""
Problem 129: Sum Root to Leaf Numbers

Constraints:
 1. The number of nodes in the tree is in the range [1, 1000].
 2. 0 <= Node.val <= 9
 3. The depth of the tree will not exceed 10.
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
    def sumNumbers(self, root: TreeNode) -> int:
        """
        Imperative and Iterative Solution

        Complexity: O(nodes) time and O(height) auxiliary space.
        """
        result = 0
        return result
