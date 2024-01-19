"""
Problem 1732: Find the Highest Altitude

Constraints:
 1. n == gain.length
 2. 1 <= n <= 100
 3. -100 <= gain[i] <= 100
"""

# TODO: Improve solution's time and space complexity.

class Solution:
    def largestAltitude(self, gain: list[int]) -> int:
        """
        Imperative and Linearly Iterative Solution

        Complexity: O(n) time and O(1) space.
        """
        maxAltitude = 0
        currentAltitude = 0
        for netGain in gain:
            currentAltitude += netGain
            if currentAltitude > maxAltitude:
                maxAltitude = currentAltitude
        return maxAltitude
