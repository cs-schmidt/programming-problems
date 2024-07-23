"""
Problem 129: Sum Root to Leaf Numbers

Constraints:
 1. The size of the tree is in the range [1, 1000]
 2. 0 <= Node.val <= 9
 3. The depth of the tree will not exceed 10.
"""

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
        def append_digit(num: int, digit: int) -> int:
            return 10 * num + digit
        
        def drop_digits(val: int, drop_count: int) -> int:
            digit_count = ceil(log10(val)) if val > 0 else 1
            return val // 10**drop_count if drop_count < digit_count else 0

        # Main Logic
        # ************************************************************  
        result: int = 0
        path_value: int = 0
        point_stack: list[tuple[TreeNode, int]] = [(root, 1)]
        while point_stack:
            node, path_count = point_stack.pop()
            path_value = append_digit(path_value, node.val)
            if node.right: point_stack.append((node.right, path_count + 1))
            if node.left: point_stack.append((node.left, path_count + 1))
            if not node.left and not node.right:
                result += path_value
                drop_count = path_count - (point_stack[-1][1] - 1 if point_stack else path_count)
                path_value = drop_digits(path_value, drop_count)                   
        return result
