"""
Problem 1552: Magnetic Force Between Two Balls

Constraints:
 1. 2 <= m <= |position| <= 10^5
 2. 1 <= position[i] <= 10^9
 3. position[i] != position[j] for all i,j where i != j.
"""

# TODO: Improve solution performance.

from math import ceil


class Solution:
    def maxDistance(self, position: list[int], m: int) -> int:
        """
        Imperative, Iterative, and Impure Solution

        Time complexity: O(|position|*log(|position|).
        Space complexity: O(1) auxiliary space.
        """

        # Internal Helpers
        # ************************************************************
        def find_min_gap(line_coords: list[int]) -> int:
            result: int = line_coords[1] - line_coords[0]
            for i in range(2, len(line_coords)):
                result = min(result, line_coords[i] - line_coords[i - 1])
            return result

        def find_max_gap(line_coords: list[int], selections: int) -> int:
            result: int = 0
            gap: int = 0
            gap_points: int = len(line_coords) - selections + 2
            for i in range(1, gap_points):
                gap += line_coords[i] - line_coords[i - 1]
            result = gap
            for i in range(gap_points, len(line_coords)):
                gap -= line_coords[i - gap_points + 1] - line_coords[i - gap_points]
                gap += line_coords[i] - line_coords[i - 1]
                result = max(result, gap)
            return result

        def gaps_fit(line_coords: list[int], target_gap: int, amount: int) -> bool:
            gap_count: int = 0
            current_gap: int = 0
            for i in range(len(line_coords) - 1):
                current_gap += line_coords[i + 1] - line_coords[i]
                if current_gap >= target_gap:
                    gap_count += 1
                    current_gap = 0
                    if gap_count == amount:
                        return True
            return False

        # Main Logic
        # ************************************************************
        position.sort()
        min_gap: int = find_min_gap(position)
        max_gap: int = find_max_gap(position, m)
        while min_gap < max_gap:
            mid_gap: int = ceil((min_gap + max_gap) / 2)
            if gaps_fit(position, mid_gap, m - 1):
                min_gap = mid_gap
            else:
                max_gap = mid_gap - 1
        return min_gap
