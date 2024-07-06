"""
Problem 1552: Magnetic Force Between Two Balls

Constraints:
 1. 2 <= m <= |position| <= 10^5
 2. 1 <= position[i] <= 10^9
 3. position[i] != position[j] for any i,j.
"""

# TODO: Complete solution.


class Solution:
    def maxDistance(self, position: list[int], m: int) -> int:
        """
        Imperative, Iterative, and Pure Solution

        Time complexity: O(|position|*log(|position|).
        Space complexity: O(1) auxiliary space.
        """
        # I see these as the strategies for this problem:
        #  - Binary Search
        #  - Greedy Search
        #  - Sliding Window

        # Internal Helper Functions
        # ************************************************************
        def findContiguousMax(nums: list[int], size: int):
            """
            Finds the maximum sum amongst all subarrays of the given `size` in
            `nums`.
            """
            if size < 0 or size > len(nums):
                raise ValueError(f"{size} is outside of the allowable range.")
            result = 0
            for i in range(size):
                result += nums[i]
            runningSum = result
            for i in range(size, len(nums)):
                runningSum += nums[i]
                runningSum -= nums[i - size]
                if runningSum > result:
                    result = runningSum
            return result

        # Main Logic
        # ************************************************************
        result = 0
        position.sort()
        gaps = [position[i + 1] - position[i] for i in range(len(position) - 1)]
        min_gap_size = min(gaps)
        max_gap_size = findContiguousMax(gaps, len(gaps) - m + 1)
        while min_gap_size < max_gap_size:
            gap_size = (max_gap_size + min_gap_size) // 2
            # Check if a distribution for `gap_size` can be found.
            distribution_found = False
            if distribution_found:
                result = gap_size
                min_gap_size = gap_size + 1
                continue
            else:
                max_gap_size = gap_size - 1
                continue
        return result
