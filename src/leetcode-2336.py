"""
Problem 2336: Smallest Number in Infinite Set

Constraints:
 1. 1 <= num <= 1000
 2. At most 1000 calls will be made in total to popSmallest and addBack.
"""

import math


class MinIntervalHeap:
    """A minheap data structure composed of positive integer intervals.

    Complexity:
     - O(log(n)) insertion.
     - O(log(n)) deletion of min/max.
    """

    def __init__(self):
        self.heap: list[list[int]] = []
        self.size: int = 0

    def insert(self, value: int) -> None:
        self.heap.append(value)
        self._sift_up(self.size, self.heap)
        self.size += 1

    def _sift_up(self, child_index: int, arr: list[int]) -> None:
        """move a node up in the tree, as long as needed; used to restore heap
        condition after insertion.
        """
        parent_index: int = self._get_parent_index(child_index)
        while (
            self._is_valid_index(parent_index) and arr[parent_index] > arr[child_index]
        ):
            self._swap_elements(child_index, parent_index, arr)
            child_index = parent_index
            parent_index = self._get_parent_index(child_index)

    def _sift_down(self, parent_index: int, arr: list[int]) -> None:
        """move a node down in the tree, similar to sift-up; used to restore
        heap condition after deletion or replacement."""
        left_child_index = self._get_left_child(parent_index)
        is_left_valid = self._is_valid_index(left_child_index)
        while is_left_valid:
            smaller_child_index = left_child_index
            right_child_index = self._get_right_child(parent_index)
            is_right_valid = self._is_valid_index(right_child_index)
            if is_right_valid and arr[right_child_index] < arr[left_child_index]:
                smaller_child_index = right_child_index
            if arr[smaller_child_index] < arr[parent_index]:
                self._swap_elements(smaller_child_index, parent_index, arr)
                parent_index = smaller_child_index
                left_child_index = self._get_left_child(parent_index)
                is_left_valid = self._is_valid_index(left_child_index)
            else:
                break

    def _get_parent_index(self, child_index: int) -> int:
        """<description here>"""
        return math.floor((child_index - 1) / 2)

    def _get_left_child(parent_index: int) -> int:
        """<description here>"""
        return (2 * parent_index) + 1

    def _get_right_child(parent_index: int) -> int:
        """<description here>"""
        return (2 * parent_index) + 2

    def _is_valid_index(self, index: int) -> bool:
        """<description here>"""
        return index >= 0 and index < self.size

    def _is_empty(self) -> bool:
        """<description here>"""
        return self.size == 0

    def _swap_elements(self, index_a: int, index_b: int, arr: list[int]) -> None:
        """<description here>"""
        arr[index_a], arr[index_b] = arr[index_b], arr[index_a]


class SmallestInfiniteSet:
    def __init__(self):
        self.removedNumbers: MinIntervalHeap = MinIntervalHeap()

    def popSmallest(self) -> int:
        return self.removedNumbers.popleft()

    def addBack(self, num: int) -> None:
        return self.removedNumbers.insert(num)
