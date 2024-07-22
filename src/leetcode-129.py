"""
Problem 129: Sum Root to Leaf Numbers

Constraints:
 1. The size of the tree is in the range [1, 1000]
 2. 0 <= Node.val <= 9
 3. The depth of the tree will not exceed 10.
"""

# TODO: Complete solution.

from typing import Optional
from math import ceil, log10


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
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        """
        Imperative and Iterative Solution

        Time Complexity: O(nodes).
        Space Complexity: O(height) auxiliary space.
        """
        # Internal Helpers
        # ************************************************************
        def digit_count(val: int) -> int:
            return ceil(log10(abs(val))) or 1
        
        def concatenate_nums(num_1: int, num_2: int) -> int:
            return 0

        # Main Logic
        # ************************************************************  
        result: int = 0
        node_stack: list[tuple[TreeNode, int]] = [(root, 1)]
        path_value: int = 0
        while len(node_stack):
            node, path_count = node_stack.pop()
            path_value = concatenate_nums(path_value, node.val)
            if node.right: node_stack.append((node.right, path_value + 1))
            if node.left: node_stack.append((node.left, path_value + 1))
            if not (node.left and node.right):
                result += path_value
                if path_count < digit_count(path_value): path_value = 0
        return result
