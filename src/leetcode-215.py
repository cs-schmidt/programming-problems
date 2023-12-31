"""
Problem 215: Kth Largest Element in an Array

Constraints:
 1. 1 <= k <= nums.length <= 10^5
 2. -10^4 <= nums[i] <= 10^4
"""

# NOTE: There may be a method with a modified version of the randomized-select
#       algorithm.

import heapq

class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        """
        Iterative and Imperative Solution

        Complexity: <time complexity> and O(n) auxiliary space.
        """
        heap = nums.copy()
        heapq.heapify(heap)

        for _ in range(len(heap) - k): heapq.heappop(heap) 

        return heapq.heappop(heap)