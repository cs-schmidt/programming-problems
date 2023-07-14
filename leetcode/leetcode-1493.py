# 1493. Longest Subarray of 1's After Deleting One Element


"""
Constraints:

1) 1 <= nums.length <= 10^5
2) nums[i] is either 0 or 1

"""

# TODO: Finish this problem.
class Solution:
    def longestSubarray(self, bit_array: list[int]) -> int:
        # This procedure takes an iterative approach. The idea of each iteration is
        # to complete the following steps:
        #
        #  1. The `right_index` points to the current 0 and the `left_index`
        #     points to the last left-ward 0 from the `right_index`.
        #  2. Calculate the lower partition and set `left_index` to
        #     `right_index`.
        #  3. Move `right_index` to the next right-ward 0.
        #  4. Calculate the upper partition.
        #  5. Take the sum of the lower and upper partitions and see if it's
        #     bigger than the largest result found so far.

        # (1) Initialize variables.
        result: int = 0                       # Tracks the largest subarray found over each iteration.
        left_index: int = -1                  # The index of the lower 0 at the current iteration.
        right_index: int = -1                 # The index of the upper 0 at the current iteration.
        last_index: int = len(bit_array) - 1  # The index of the last element in `bit_array`.
        partition: int = 0                    # Used to store the lower and upper partition in each iteration.
        potential_value: int = last_index     # The max subarray that "might" exist in the current iteration.

        # Begin iterations to determine `result`.
        right_index += 1
        while right_index < len(bit_array) and bit_array[right_index] != 0: right_index += 1
        partition += right_index - left_index - 2 if left_index == -1 and right_index >= len(bit_array) else right_index - left_index - 1
        if partition > result: result = partition

        while result < potential_value:
            # (2) Calculate `lower_partition` and update `left_index`.
            partition = right_index - left_index - 1 if right_index != -1 else 0
            left_index = right_index
            potential_value = partition + (last_index - right_index)

            # (3) Move `right_index` to the next right-ward 0.
            right_index += 1
            while right_index < len(bit_array) and bit_array[right_index] != 0: right_index += 1

            # (4) Calcuate `upper_partition`.
            partition += right_index - left_index - 1

            # (5) Check if `result` needs to be updated.
            if partition > result: result = partition

        return result
