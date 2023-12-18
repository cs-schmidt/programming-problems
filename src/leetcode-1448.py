"""
Problem 1448: Count Good Nodes in Binary Tree

Constraints:
 1. The number of nodes in the binary tree is in the range [1, 10^5].
 2. Each node's value is between [-10^4, 10^4].
"""


class TreeNode:
    """
    Represents a binary tree node.
    """

    def __init__(self, val=0, left=None, right=None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        """
        <solution type>

        <description>

        Complexity: <time complexity> and <space complexity>.
        """
        result: int = 0
        pathHistory: list[TreeNode] = []
        node: TreeNode = root
        pathMax = root.val

        if node.val >= pathMax: result += 1

        while node != None or len(pathHistory) > 0:
            while node != None:
                pathHistory.append(node)
                node = node.left
            node = node.pop().right

        return result
