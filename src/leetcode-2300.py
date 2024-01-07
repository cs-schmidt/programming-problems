"""
Problem 2300: Successful Pairs of Spells and Potions

Constraints:
 1. n == spells.length
 2. m == potions.length
 3. 1 <= n, m <= 10^5
 4. 1 <= spells[i], potions[i] <= 10^5
 5. 1 <= success <= 10^10
"""

from math import floor, ceil


class Solution:
    def successfulPairs(
        self, spells: list[int], potions: list[int], success: int
    ) -> list[int]:
        """
        Imperative and Iterative Solution

        Complexity:
         Time  - O(max(potions*log(potions),spells*log(potions))) time.
         Space - O(spells) auxiliary space.
        """
        result: list[int] = []
        potions.sort()
        print(f'potions: {potions}\n')
        for spell in spells:
            successful_pairs = 0
            min_strength = ceil(success / spell)
            min_potion = self.least_geq(potions, min_strength)
            if min_potion != None:
                successful_pairs = len(potions) - min_potion
            result.append(successful_pairs)
            print('Iter: ')
            print('=' * 30)
            print(f'min_strength: {min_strength}')
            print(f'min_potion: {min_potion or None}')
            print(f'succesful_pairs: {successful_pairs}')
            print('\n')
        return result

    def least_geq(self, arr: list[int], target: int) -> int:
        """
        Returns the index of the smallest x in 'arr', such that 'x >= target'.
        If such a value doesn't exist, then 'None' is returned instead.
        """
        if not (target <= arr[len(arr) - 1]): return None

        high, low = len(arr) - 1, 0
        result = high
        while low <= high:
            mid = floor((high + low) / 2)
            if arr[mid] == target:
                result = mid
                high = mid - 1
            elif arr[mid] < target:
                low = mid + 1
            else:
                if arr[mid] <= arr[result]:
                    result = mid
                high = mid - 1

        return result