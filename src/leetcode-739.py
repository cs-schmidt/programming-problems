"""
Problem 739: Daily Temperatures

Constraints:
 1. 1 <= temperatures.length <= 10^5
 2. 30 <= temperatures[i] <= 100
"""


class Solution:
    def dailyTemperatures(self, temperatures: list[int]) -> list[int]:
        """
        Imperative and Iterative Solution

        Complexity: O(n) time and O(n) auxiliary space.
        """
        result: list[int] = []
        daysToBeat: list[int] = []
        for currentDay in range(len(temperatures)):
            while (
                daysToBeat and temperatures[daysToBeat[-1]] < temperatures[currentDay]
            ):
                result[daysToBeat[-1]] = currentDay - daysToBeat[-1]
                daysToBeat.pop()
            result.append(0)
            daysToBeat.append(currentDay)
        return result
