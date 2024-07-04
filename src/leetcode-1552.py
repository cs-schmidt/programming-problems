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
        # I see the following strategies (which may be used in tandem) for this
        # problem:
        # 
        #  - Binary Search
        #  - Greedy Search
        #  - Sliding Window 