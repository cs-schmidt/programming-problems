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
    # TODO: Refactor solution to cleaner code.
    def deleteNode(self, root: Optional["TreeNode"], key: int) -> TreeNode:
        """
        Imperative and Iterative Solution

        Complexity: O(height) time and O(1) auxiliary space.
        """
        if not root: return None
        node: Optional["TreeNode"] = root
        parent_node: TreeNode = root
        while node and node.val != key:
            parent_node = node
            if node.val < key: node = node.right
            else: node = node.left
        if not node: return root
        if parent_node == node:
            if node.left and node.right:
                parent_node = node.right
                child_node: TreeNode = node.left
                node = parent_node
                while node.left: node = node.left
                node.left = child_node
                return parent_node
            elif node.left: return node.left
            elif node.right: return node.right
            else: return None
        else:
            if parent_node.left == node:
                if node.left and node.right:
                    child_node: TreeNode = node.left
                    node = node.right
                    parent_node.left = node
                    while node.left: node = node.left
                    node.left = child_node
                elif node.left: parent_node.left = node.left
                elif node.right: parent_node.left = node.right
                else: parent_node.left = None
            else:
                if node.left and node.right:
                    child_node: TreeNode = node.left
                    node = node.right
                    parent_node.right = node
                    while node.left: node = node.left
                    node.left = child_node
                elif node.left: parent_node.right = node.left
                elif node.right: parent_node.right = node.right
                else: parent_node.right = None
        return root