"""
Problem 1137: N-th Tribonacci Number

Constraints:
 1. 0 <= n <= 37
 2. The answer is guaranteed to fit within a 32-bit integer (i.e. answer <= 2^31 - 1).
"""


class Solution:
    def tribonacci(self, n: int) -> int:
        """
        Iterative and Imperative Solution

        Complexity: O(n) time and O(1) auxiliary space.
        """
        # Contains the components that sum to the current tribonacci number.
        tribNumParts: list[int] = [0, 1, 1]

        if n < 3:
            return tribNumParts[n]

        for _ in range(n - 2):
            nextTribNum = sum(tribNumParts)
            tribNumParts[0] = tribNumParts[1]
            tribNumParts[1] = tribNumParts[2]
            tribNumParts[2] = nextTribNum

        return tribNumParts[-1]
