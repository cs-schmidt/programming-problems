# Problem 605: Can Place Flowers

"""
Constraints:

1) 1 <= flowerbed.length <= 2 * 10^4
2) flowerbed[i] is 0 or 1
3) There are no two adjacent flowers in flowerbed
4) 0 <= n <= flowerbed.length

"""

import math

class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        # The approach is to traverse `flowerbed` and sequentially consider each
        # gap (i.e., empty sequence) we come across, then we can keep track of
        # how many valid spaces for flowers we've discovered so far. The number
        # of valid spaces uncovered from any gap is calculated in one of 3 ways:
        #
        #  1. Total gap: Here `flowerbed` is empty, with size m, the valid
        #     spaces provided is the integer ceiling of m.
        #
        #  2. Edge gap: a gap on the left-most edge or the right-most edge with
        #     size m, provides valid spaces equal to the integer ceiling of
        #     m - 1.
        #
        #  3. Inner gap: a gap inbetween two "flowers" with size m, provides
        #     valid spaces equal to the integer ceiling of m - 2.
        if n == 0: return True  # checks the vacuous case first.
        spaces_found: int = 0
        i: int = 0
        j: int = 0

        # Given `n != 0`, continue while the potential valid spaces left in
        # `flowerbed` is greater than or equal to how many more spaces we need
        # to check before making a conclusion.
        while math.ceil((len(flowerbed) - i) / 2) >= n - spaces_found:
            # Handles assessment of the inital left-most edge of `flowerbed`.
            if i == 0:
                # Starts by checking the initial gap (if it exists). Returning
                # `True` if the amount of valid spaces found is sufficient.
                while i < len(flowerbed) and flowerbed[i] == 0:
                    # Check if the amount of valid spaces in the current gap is
                    # sufficient (presuming it's an edge gap).
                    if math.ceil(i / 2) >= n: return True
                    i += 1
                if not i < len(flowerbed): return math.ceil(i + 1 / 2) >= n

                # Making it to this line implies that (1) we didn't have enough
                # information in the above assessment to make a conclusion, (2)
                # flowerbed[i] == 1` and (3) `i < len(flowerbed)`. Add on the
                # valid spaces discovered and proceed.
                spaces_found += math.floor(i / 2)

            # Handles assessment of any inner gaps and the remaining right-most
            # edge gap.
            j = i + 1
            while j < len(flowerbed) and flowerbed[j] == 0:
                # Check if the amount of valid spaces in the current gap is
                # sufficient (presuming it's an inner gap).

                if math.ceil((j - i - 2) / 2) >= n - spaces_found: return True
                j += 1
            if not j < len(flowerbed):
                # Return the correct assessment depending on if the gap we're in
                # is an inner gap or right edge gap.
                if flowerbed[j - 1] == 0: return math.floor((j - i - 1) / 2) >= n - spaces_found
                return math.floor((j - i - 2) / 2) >= n - spaces_found

            # Making it to this line implies that (1) we didn't have enough
            # information in the above assessment to make a conclusion, (2)
            # `flowerbed[j] == 1`, and (3) `j < len(flowerbed)`. Add on the
            # valid spaces discovered (assuming we're in an inner gap) and
            # update `i`.
            spaces_found += math.floor((j - i - 2) / 2)
            i = j

        # Making it to this line implies that the number of spaces left in
        # `flowerbed` is insuffcient to produce enough valid spaces, so we
        # return `False`.
        return False
