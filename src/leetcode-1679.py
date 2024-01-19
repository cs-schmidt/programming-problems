"""
Problem 1679: Max Number of K-Sum Pairs

Constraints:
 1. 1 <= nums.length <= 10^5
 2. 1 <= nums[i] <= 10^9
 3. 1 <= k <= 10
"""

# TODO: Improve solution's time and space complexity.

import math


class Solution:
    def maxOperations(self, nums: list[int], k: int) -> int:
        """
        Imperative and Iterative Solution

        Complexity: O(n) time and O(n) auxiliary space.
        """
        # Internal Procedures
        # ================================================================= 
        def generate_frequencies(nums: list[int]) -> dict[int]:
            num_frequencies = {}
            for num in nums:
                if str(num) in num_frequencies:
                    num_frequencies[str(num)] += 1
                else:
                    num_frequencies[str(num)] = 1
            return dict(
                filter(
                    lambda pair: str(k - int(pair[0])) in num_frequencies,
                    num_frequencies.items(),
                )
            )
        # Main Code
        # ================================================================= 
        result = 0
        frequencies = generate_frequencies(nums)
        while len(frequencies):
            key, freq = frequencies.popitem()
            target = str(k - int(key))
            if key != target:
                result += min(freq, frequencies[target])
                del frequencies[target]
            else:
                if not (freq % 2 == 0):
                    result += math.floor((freq - 1) / 2)
                else:
                    result += math.floor(freq / 2)
        return result
