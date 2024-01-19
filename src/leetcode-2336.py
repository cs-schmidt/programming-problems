"""
Problem 2336: Smallest Number in Infinite Set

Constraints:
 1. 1 <= num <= 1000
 2. At most 1000 calls will be made in total to popSmallest and addBack.
"""

# TODO: Improve solution's time and space complexity

import heapq


class SmallestInfiniteSet:
    """Represents the set of all positive integers."""

    def __init__(self):
        self.numsQueue: list[int] = [n for n in range(1, 1001)]  # O(n) space
        self.uniqueNums: set[int] = set(self.numsQueue)  # O(n) space
        heapq.heapify(self.numsQueue)  # O(n) time & space

    def popSmallest(self) -> int:
        """Removes and returns the smallest integer remaining in the infinite set."""
        result = heapq.heappop(self.numsQueue)  # O(1) time
        self.uniqueNums.remove(result)  # O(1) time
        return result

    def addBack(self, num: int) -> None:
        """
        Adds a positive integer `num` back into the infinite set, if it is not
        already in the infinite set.
        """
        if not num in self.uniqueNums:  # O(1) time
            heapq.heappush(self.numsQueue, num)  # O(log(n)) time
            self.uniqueNums.add(num)  # O(1) time
