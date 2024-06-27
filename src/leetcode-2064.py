'''
Problem 2064: Minimized Maximum of Products Distributed to Any Store

Constraints:
 1. 1 <= |quantities| <= n <= 10^5
 2. 1 <= quantities[i] <= 10^5
'''

from math import floor

class Solution:
    """
    Iterative and Imperative Solution

    Complexity:
    - Time complexity: O(n).
    - Space complexity: O(1) auxiliary space. 
    """
    def minimizedMaximum(self, n: int, quantities: list[int]) -> int:
        distribution_floor_mean = floor(sum(quantities) / n)
        if distribution_floor_mean <= 1: return 1;
        quantities.sort()
        result = distribution_floor_mean
        # ...
        return result
