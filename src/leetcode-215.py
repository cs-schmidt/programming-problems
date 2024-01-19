"""
Problem 215: Kth Largest Element in an Array

Constraints:
 1. 1 <= k <= nums.length <= 10^5
 2. -10^4 <= nums[i] <= 10^4
"""

import heapq


class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        """
        Iterative and Imperative Solution

        Complexity: O(n) time and O(1) auxiliary space.
        """
        heapq.heapify(nums)
        for _ in range(len(nums) - k):  heapq.heappop(nums)
        return nums[0]
