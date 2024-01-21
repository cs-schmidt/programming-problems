"""
Problem 189: Rotate Array

Constraints:
 1. 1 <= nums.length <= 105
 2. -2^31 <= nums[i] <= 2^31 - 1
 3. 0 <= k <= 10^5
"""

# TODO: Improve solution's time and space complexity.

class Solution:
    def rotate(self, arr: list[int], k: int) -> list[int]:
        """
        Imperative and Linearly Iterative Solution

        Constraints: O(k mod len(arr)) time and O(1) auxiliary space
        """
        for _ in range(k % len(arr)):
            arr.insert(0, arr.pop())
        return arr
