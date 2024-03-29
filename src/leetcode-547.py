"""
Problem 547: Number of Provinces

Constraints:
 1. 1 <= n <= 200
 2. n == isConnected.length
 3. n == isConnected[i].length
 4. isConnected[i][j] is 1 or 0.
 5. isConnected[i][i] == 1
 6. isConnected[i][j] == isConnected[j][i]
"""

# TODO: Improve solution's time and space complexity.

class Solution:
    def findCircleNum(self, isConnected: list[list[int]]) -> int:
        """
        Imperative and Iterative Solution

        Complexity: O(n^2) time and O(n) auxiliary space.
        """
        result: int = 0
        totalCities: int = len(isConnected)
        citiesToVisit: list[int] = [0]
        citiesVisited: set[int] = set()
        while len(citiesVisited) < totalCities:
            while citiesToVisit:
                city: int = citiesToVisit.pop()
                citiesVisited.add(city)
                connections: list[int] = isConnected[city]
                for i in range(len(connections)):
                    if connections[i] == 1 and i not in citiesVisited:
                        citiesToVisit.append(i)
            if len(citiesVisited) < totalCities:
                citiesLeft: set[int] = set(
                    [i for i in range(0, totalCities)]
                ).difference(citiesVisited)
                citiesToVisit.append(citiesLeft.pop())
            result += 1
        return result
