# Problem 1493: Longest Subarray of 1's After Deleting One Element

"""
Constraints

1) 1 <= nums.length <= 10^5
2) nums[i] is either 0 or 1

"""

class Solution:
    def longestSubarray(self, bit_array: list[int]) -> int:
        # The strategy is an iterative approach where we find the next 0 in
        # `bit_array`, consider the sum of the lower partition and (if it
        # exists) the higher partition of 1's, and keep track of the largest
        # value we find.
        result: int = 0       # Represents the largest subarray found so far
        left_index: int = -1   # Represents the left-most 0 at each iteration
        right_index: int = -1  # Represents the right-most 0 at each iteration
        lower_partition: int = 0
        upper_partition: int = 0

        while right_index < len(bit_array):
            # Find `lower_partition` for the current iteration.
            if right_index - left_index > 0:
                lower_partition = (right_index - left_index) - 1
            left_index = right_index

            # Find the next right-most 0. Once found we can use it to calculate
            # the upper partition for the current iteration.
            right_index += 1
            while right_index < len(bit_array) and bit_array[right_index] != 0:
                right_index += 1
            if left_index != -1:
                upper_partition = (right_index - left_index) - 1
            else:
                upper_partition = (right_index - left_index) - 2

            # Get current partition size and update `result` in needed.
            if lower_partition + upper_partition > result:
                result = lower_partition + upper_partition

        return result
