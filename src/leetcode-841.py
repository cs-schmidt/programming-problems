"""
Problem 841: Keys and Rooms

Constraints:
 1. n == rooms.length
 2. 2 <= n <= 1000
 3. 0 <= rooms[i].length <= 1000
 4. 1 <= sum(rooms[i].length) <= 3000
 5. 0 <= rooms[i][j] < n
 6. All the values of rooms[i] are unique.
"""


class Solution:
    def canVisitAllRooms(self, rooms: list[list[int]]) -> bool:
        """
        Iterative and Imperative Solution

        Complexity: O(n) time and O(height) auxiliary space.
        """
        # Perform DF traversal until a depth of `rooms.length` is acheived.
        visitedRooms: set[int] = set()
        maxDepth: int = 0
        traversalDepth: int = 0

        return True
