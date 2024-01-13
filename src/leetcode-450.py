"""
Problem 450: Delete Node in a BST

Constraints:
 1. The number of nodes in the tree is in the range [0, 10^4].
 2. -10^5 <= Node.val <= 10^5
 3. Each node has a unique value.
 4. root is a valid binary search tree.
 5. -10^5 <= key <= 10^5
"""

from typing import Optional


class TreeNode:
    """Represents a node in a binary tree."""

    def __init__(
        self,
        val: int = 0,
        left: Optional["TreeNode"] = None,
        right: Optional["TreeNode"] = None,
    ) -> None:
        self.val, self.left, self.right = val, left, right


class Solution:
    """
    <solution type>

    Complexity: <time complexity> and <space complexity>.
    """

    def deleteNode(self, root: TreeNode, key: int) -> TreeNode:
        result = root

        return result
