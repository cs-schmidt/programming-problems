"""
Problem 136: Single Number

Constraints:
 1. 1 <= nums.length <= 3 * 10^4
 2. -3 * 10^4 <= nums[i] <= 3 * 10^4
 3. Each element in the array appears twice except for one element which appears
    only once.
"""

class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        """
        <solution type>

        <description>

        Complexity: O(n) time and O(1) auxiliary space.
        """
        sumOfDoubles = 0
        sum = 0

        return sumOfDoubles - sum