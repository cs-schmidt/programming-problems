"""
Problem 2064: Minimized Maximum of Products Distributed to Any Store

Constraints:
 1. 1 <= |quantities| <= n <= 10^5
 2. 1 <= quantities[i] <= 10^5
"""

from math import ceil, floor


class Solution:

    def minimizedMaximum(self, n: int, quantities: list[int]) -> int:
        """
        Imperative, Iterative, and Impure Solution

        Time complexity: O(log(max(quantities))*|quantities|).
        Space complexity: O(1) auxiliary space.
        """

        # Internal Functions
        # ************************************************************
        def is_distributable(x: int) -> bool:
            """
            Checks if `x` is a "potential solution".

            Time complexity: O(|quantities|)
            Space complexity:  O(1) auxiliary space.
            """
            x_partitions: int = 0
            for num in quantities:
                quotient_remainder_pair: list[int] = divmod(num, x)
                x_partitions += quotient_remainder_pair[0]
                if quotient_remainder_pair[1] > 0:
                    x_partitions += 1
            return x_partitions <= n

        # Function Logic
        # ************************************************************
        high: int = max(quantities)
        low: int = ceil(sum(quantities) / n)
        while high != low:
            mid: int = floor((low + high) / 2)
            if is_distributable(mid):
                high = mid
            else:
                low = mid + 1
        return high
