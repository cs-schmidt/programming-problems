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

from collections import deque


class Solution:
    def canVisitAllRooms(self, rooms: list[list[int]]) -> bool:
        """
        Iterative and Imperative Solution

        Complexity: O(n) time and O(width) + O(1) auxiliary space.
        """
        level: int = 0
        roomQueue: deque[list[int]] = deque([rooms[0]])
        visitedRooms: set[int] = set([0])

        while roomQueue and len(visitedRooms) < len(rooms):
            for i in range(len(roomQueue)):
                currentRoom: list[int] = roomQueue.popleft()
                for roomKey in currentRoom:
                    if roomKey not in visitedRooms:
                        roomQueue.append(rooms[roomKey])
                        visitedRooms.add(roomKey)
            if len(roomQueue) > 0: level += 1

        return len(visitedRooms) == len(rooms)
