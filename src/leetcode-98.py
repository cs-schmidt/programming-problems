"""
Problem 98: Validate Binary Search Tree

Constraints:

 1. The number of nodes in the tree is in the range [1, 10^4].
 2. -2^31 <= Node.val <= 2^31 - 1
"""

from typing import Optional
import math


# Definition of a binary tree node.
class TreeNode:
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
    def isValidBST(self, root: TreeNode) -> bool:
        """
        Recursive Solution.

        A recursive depth-first traversal approach. We define an internal
        function `isValidSubtree()` which checks the left subtree and right
        subtree of each node recursively.

        Complexity: O(nodes) time and O(height + 1) + O(1) auxiliary space.
        """

        def isValidSubtree(root: TreeNode, lower: int, upper: int) -> bool:
            # Base Case:
            if root == None:
                return True
            # Recursive Case:
            if root.val > lower and root.val < upper:
                return (
                    # Validate left subtree.
                    isValidSubtree(root.left, lower, root.val)
                    and
                    # Validate right subtree.
                    isValidSubtree(root.right, root.val, upper)
                )
            return False

        return (
            # Validate left subtree.
            isValidSubtree(root.left, -math.inf, root.val)
            and
            # Validate right subtree.
            isValidSubtree(root.right, root.val, math.inf)
        )
