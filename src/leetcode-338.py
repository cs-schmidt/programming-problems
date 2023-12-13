"""
Problem 338: Counting Bits

Constraints:
 1. 0 <= n <= 10^5
"""

from math import ceil, floor


class Solution:
    def countBits(self, n: int) -> list[int]:
        """
        Iterative and Imperative Solution

        The solution exploits a pattern in binary numbers. Given two binary
        numbers `b` and `g`; if `b = 2 * g`, then `b` will have the same number
        of 1-bits as `g`. And, if `b = 2 * g + 1`, then `b` will have the same
        number of  1-bits as `g` plus an 1.

        Complexity: O(n) time and O(n + 1) auxiliary space.
        """
        oneBitsForIndexes: list[int] = [0]

        for i in range(1, n + 1):
            if i % 2 == 0:
                # The index `i` is even: the amount of 1-bits it has is equal to
                # the amount of 1-bits in a binary number half its size.
                oneBitsForIndexes.append(oneBitsForIndexes[ceil(i / 2)])
            else:
                # The index `i` is odd: the amount of 1-bits it has is equal to
                # the amount of 1-bits in a binary number half its size plus 1.
                oneBitsForIndexes.append(oneBitsForIndexes[floor(i / 2)] + 1)

        return oneBitsForIndexes
