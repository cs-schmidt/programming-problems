"""
Problem 746: Min Cost Climbing Stairs

Constraints:
 1. 2 <= cost.length <= 1000
 2. 0 <= cost[i] <= 999
"""


class Solution:
    def minCostClimbingStairs(self, stepCosts: list[int]) -> int:
        """
        Imperative and Dynamic Programming Solution

        Complexity: O(n) time and O(1) auxiliary space.
        """
        costParts: list[int] = [stepCosts[-2], stepCosts[-1]]
        for i in range(len(stepCosts) - 3, -1, -1):
            stepMin = stepCosts[i] + min(costParts)
            costParts[1] = costParts[0]
            costParts[0] = stepMin
        return min(costParts)
