"""
Problem 2064: Minimized Maximum of Products Distributed to Any Store

Constraints:
 1. 1 <= |quantities| <= n <= 10^5
 2. 1 <= quantities[i] <= 10^5
"""

from math import ceil


class Solution:

    def minimizedMaximum(self, n: int, quantities: list[int]) -> int:
        """
        Imperative, Iterative, and Pure Solution

        Time complexity: O(log(max(quantities))*|quantities|).
        Space complexity: O(1) auxiliary space.
        """

        # Internal Functions
        # ************************************************** 
        def is_distributable(x: int) -> bool:
            """
            Checks if `x` is a "potential solution".

            Time complexity: O(|quantities|)
            Space complexity:  O(1) auxiliary space.
            """
            quotient_ceiling_sum: int = 0
            for q in quantities: 
                quotient_ceiling_sum += ceil(q / x)
            return quotient_ceiling_sum <= n

        # Main Logic
        # ************************************************** 
        high: int = max(quantities)
        low: int = ceil(sum(quantities) / n)
        while high != low:
            mid: int = (low + high) // 2
            if is_distributable(mid):
                high = mid
            else:
                low = mid + 1
        return high
