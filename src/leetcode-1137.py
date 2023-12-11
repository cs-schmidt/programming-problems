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

        Complexity: O(n) time and O(n) auxiliary space.
        """
        # Maps indexes to their associated tribonnaci number.
        tribonnaciNums: List[int] = [0, 1, 1]

        if n < 3:
            return tribonnaciNums[n]

        # Populates tribonnaciNums up to the nth tribonnaci number. 
        while len(tribonnaciNums) < n + 1:
            tribonnaciNums.append(
                tribonnaciNums[len(tribonnaciNums) - 1]
                + tribonnaciNums[len(tribonnaciNums) - 2]
                + tribonnaciNums[len(tribonnaciNums) - 3]
            )

        return tribonnaciNums[n]
