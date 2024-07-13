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
        def max_neighbor_gap(gaps: list[int], neighbor_spaces: int):
            slice_size: int = len(gaps) - (neighbor_spaces - 1)
            slice_sum: int = sum(islice(gaps, slice_size))
            result: int = slice_sum
            for i in range(len(gaps) - slice_size):
                slice_sum += gaps[slice_size + i] - gaps[i]
                result = max(result, slice_sum)
            return result

        def last_index(arr: list) -> int:
            return len(arr) - 1 if arr else 0

        # Main Logic
        # ************************************************************
        result = 0
        position.sort()
        gaps = [position[i + 1] - position[i] for i in range(len(position) - 1)]
        min_gap_size = min(gaps)
        max_gap_size = max_neighbor_gap(gaps, m - 1)
        while min_gap_size < max_gap_size:
            # Find the firsts slice on `gaps` whose sum is closest to the
            # midpoint between `min_gap_size` and `max_gap_size`.
            mid_gap_size = (min_gap_size + max_gap_size) // 2
            slice_sum = gaps[0]
            slice_head = 0
            slice_tail = 0
            nearest_slice_sum = 0
            nearest_slice_head = 0
            nearest_slice_tail = 0
            while slice_sum != mid_gap_size and slice_head < last_index(gaps):
                # TODO: Implement this part.
                a
            # Check if `nearest_slice_sum` is a possible solution.
            rear_gaps = 0  # TODO: Initalize this.
            front_gaps = 0  # List of <gap_tail, gap_size> pairs.
            while (
                rear_gaps + front_gaps + 1 < m - 1
                and nearest_slice_head < last_index(gaps)
            ):
                # TODO: Implement this part.
                a
            if rear_gaps + front_gaps + 1 == m - 1:
                min_gap_size = nearest_slice_sum + 1
                result = nearest_slice_sum
        return result
