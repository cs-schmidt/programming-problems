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

class Solution:
    def findCircleNum(self, isConnected: list[list[int]]) -> int:
        """
        Iterative and Imperative Solution

        Complexity: <time complexity> and <space complexity>.
        """
        # Description
        # ================================================================= 
        # We want to find the amount of disjoint sets of (directly or
        # indirectly) connected cities: that's the number of provinces. And, the
        # information for which cities interconnect is encoded within the matrix
        # 'isConnected'.

        # The matrix 'isConnected' must be symmetric. 

        result = 0

        return result