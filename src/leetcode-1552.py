"""
Problem 1552: Magnetic Force Between Two Balls

Constraints:
 1. 2 <= m <= |position| <= 10^5
 2. 1 <= position[i] <= 10^9
 3. position[i] != position[j] for any i,j.
"""

# TODO: Complete solution.

from math import ceil


class Solution:
    def maxDistance(self, position: list[int], m: int) -> int:
        """
        Imperative, Iterative, and Impure Solution

        Time complexity: len(position)*log(len(position)).
        Space complexity: O(1) auxiliary space.
        """
        position.sort()
        gaps: list[int] = [
            position[i + 1] - position[i] for i in range(len(position) - 2)
        ]

        # gap_num = len(position) - 1 / m - 1
        # gap_max = ceil(gap_num)
        # We solve the following system of linear equations:
        #  (1): gap_num(x) + gap_max(y) = sum(position)
        #  (2):         x  +         y  = m - 1
