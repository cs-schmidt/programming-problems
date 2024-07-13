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
            """
            Finds the maximum gap possible between two neighbors given the
            available `gaps` the number of spaces there must be between
            neighbors.
            """
            slice_size: int = len(gaps) - (neighbor_spaces - 1)
            slice_sum: int = sum(islice(gaps, slice_size))
            result: int = slice_sum
            for i in range(len(gaps) - slice_size):
                slice_sum += gaps[slice_size + i] - gaps[i]
                result = max(result, slice_sum)
            return result

        def find_nearset_slice(nums: list[int], val: int) -> tuple[int, int, int]:
            """Returns the leftmost slice in `nums` whose sum is closest to `val`."""
            slice_sum = nums[0]
            slice_tail = 0
            slice_head = 0
            # TODO: Implement this portion.
            return (slice_sum, slice_tail, slice_head)

        def count_rear_spaces(target: int, nums: list[int], end: int) -> int:
            """
            Returns the number of non-overlapping slices from the start of
            `nums` up to (but excluding) index `end` that sum to a value x >=
            `target`.
            """
            # TODO: Implement this portion.
            return 0

        def count_forward_spaces(target: int, nums: list[int], start: int) -> int:
            """
            Returns the number of non-overlapping slices from beginning from
            index `start + 1` in `nums` up to (but excluding) index `end` that
            sum to a value x >= `target`.
            """
            # TODO: Implement this portion.
            return 0

        # Main Logic
        # ************************************************************
        result = 0
        position.sort()
        gaps = [position[i + 1] - position[i] for i in range(len(position) - 1)]
        min_gap_size = min(gaps)
        max_gap_size = max_neighbor_gap(gaps, m - 1)
        while min_gap_size < max_gap_size:
            mid_gap_size = (min_gap_size + max_gap_size) // 2
            slice_sum, slice_tail, slice_head = find_nearset_slice(gaps, mid_gap_size)
        return result
