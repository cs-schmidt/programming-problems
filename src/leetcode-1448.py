"""
Problem 1448: Count Good Nodes in Binary Tree

Constraints:
 1. The number of nodes in the binary tree is in the range [1, 10^5].
 2. Each node's value is between [-10^4, 10^4].
"""

# TODO: Improve solution's time and space complexity.

class TreeNode:
    """Represents a binary tree node."""

    def __init__(self, val=0, left=None, right=None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        """
        Imperative and Iterative Solution

        Complexity: O(nodes) time and O(height) auxiliary space.
        """
        result: int = 0
        pathHistory: list[tuple[TreeNode, int]] = []
        node: TreeNode = root
        pathMax = node.val
        while node != None or len(pathHistory) > 0:
            while node != None:
                if node.val >= pathMax:
                    pathMax = node.val
                    result += 1
                pathHistory.append((node, pathMax))
                node = node.left
            pathMax = pathHistory[-1][1]
            node = pathHistory.pop()[0].right
        return result
