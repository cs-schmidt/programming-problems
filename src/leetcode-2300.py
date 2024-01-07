"""
Problem 2300: Successful Pairs of Spells and Potions

Constraints:
 1. n == spells.length
 2. m == potions.length
 3. 1 <= n, m <= 10^5
 4. 1 <= spells[i], potions[i] <= 10^5
 5. 1 <= success <= 10^10
"""


class Solution:
    def successfulPairs(
        self, spells: list[int], potions: list[int], success: int
    ) -> list[int]:
        """
        Imperative and Iterative Solution

        Complexity: O(spells * potions) and O(spells) auxiliary space.
        """
        result: list[int] = []

        for spell in spells:
            pairs = 0
            for potion in potions:
                if spell * potion >= success: pairs += 1
            result.append(pairs)

        return result
