"""
Problem 1552: Magnetic Force Between Two Balls

Constraints:
 1. 2 <= m <= |position| <= 10^5
 2. 1 <= position[i] <= 10^9
 3. position[i] != position[j] for all i,j where i != j.
"""

# TODO: Complete solution.

from itertools import islice


class Solution:
    def maxDistance(self, position: list[int], m: int) -> int:
        """
        Imperative, Iterative, and Impure Solution

        Time complexity: O(|position|*log(|position|).
        Space complexity: O(|position|) auxiliary space.
        """

        # Internal Helpers
        # ************************************************************
        def max_neighbor_gap_size(gaps: list[int], neighbor_gap_count: int):
            """
            Finds the maximum gap possible between two neighbors given the
            available `gaps` the number of spaces there must be between
            neighbors.
            """
            slice_size: int = len(gaps) - (neighbor_gap_count - 1)
            slice_sum: int = sum(islice(gaps, slice_size))
            result: int = slice_sum
            for i in range(len(gaps) - slice_size):
                slice_sum += gaps[slice_size + i] - gaps[i]
                result = max(result, slice_sum)
            return result

        def gaps_fit(size: int, count: int, gaps: list[int]) -> bool:
            """
            Confirms if `gaps` contains at least `gap_count` or more slices of
            size `gap_size` or more.
            """
            counted_gaps = 0
            current_gap_size = 0
            for i in range(len(gaps)):
                current_gap_size += gaps[i]
                if current_gap_size >= size:
                    counted_gaps += 1
                    current_gap_size = 0
                    if counted_gaps == count:
                        return True
            return False

        # Main Logic
        # ************************************************************
        position.sort()
        gaps = [position[i + 1] - position[i] for i in range(len(position) - 1)]
        min_gap_size = min(gaps)
        max_gap_size = max_neighbor_gap_size(gaps, m - 1)
        while min_gap_size < max_gap_size:
            mid_gap_size = (min_gap_size + max_gap_size) // 2
            if gaps_fit(mid_gap_size, m - 1, gaps):
                min_gap_size = mid_gap_size
            else:
                max_gap_size = mid_gap_size - 1
        return min_gap_size
