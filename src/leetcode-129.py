"""
Problem 129: Sum Root to Leaf Numbers

Constraints:
 1. The number of nodes in the tree is in the range [1, 1000].
 2. 0 <= Node.val <= 9
 3. The depth of the tree will not exceed 10.
"""

from typing import Optional, Union
from math import log10, floor


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
        result: int = 0
        node: Optional[TreeNode] = root
        level: int = 0
        unvisited: [(TreeNode, int)] = []
        pathValue: int = 0
        while node:
            while node:
                print([node.val, level])
                pathValue = append_digit(pathValue, node.val)
                level += 1
                if node.left and node.right:
                    unvisited.append((node.right, level))
                    node = node.left
                elif node.left:
                    node = node.left
                else:
                    node = node.right
            print(pathValue)
            print(bool(unvisited))
            result += pathValue
            if unvisited:
                node, level = unvisited.pop()
                pathValue = truncate_num(pathValue, level - 1)
        return result


# Utilities
# =================================================================
def truncate_num(num: Union[int, float], digitIndex: int = 0) -> int:
    """Returns 'num' truncated to 'digitIndex'."""
    return floor(num / (10 ** (floor(log10(num)) - digitIndex)))


def append_digit(base: int, digit: int) -> int:
    """Returns 'base' with 'digit' appended to the end."""
    return 10 * base + digit
