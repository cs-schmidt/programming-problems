"""
Problem 1137: N-th Tribonacci Number

Constraints:
 1. 0 <= n <= 37
 2. The answer is guaranteed to fit within a 32-bit integer (i.e. answer <= 2^31 - 1).
"""


class Solution:
    def tribonacci(self, n: int) -> int:
        """
        Tree Recursion Solution

        Complexity: <time complexity> and <space complexity>.
        """

        # Base Cases:
        if n == 0:
            return 0
        if n == 1:
            return 1
        if n == 2:
            return 1

        # Recursive Case:
        return (self.tribonacci(n - 1) + 
                self.tribonacci(n - 2) + 
                self.tribonacci(n - 3))
