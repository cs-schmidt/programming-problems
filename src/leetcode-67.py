"""
Problem 67: Add Binary

Constraints:
 1. 1 <= a.length, b.length <= 10^4
 2. a and b consist only of '0' or '1' characters.
 3. Each string does not contain leading zeros except for the zero itself.
"""

# TODO: Improve solution's time and space complexity.

import math


class Solution:
    def addBinary(self, a: str, b: str) -> str:
        """
        Imperative and Linearly Iterative Solution

        Complexity: O(max(|a|,|b|)) time and O(1) auxiliary space.
        """
        result: str = ""
        bit_place: int = -1
        bit_carry: int = 0
        while abs(bit_place) <= min(len(a), len(b)):
            bit_sum = int(a[bit_place]) + int(b[bit_place]) + bit_carry
            result = str(bit_sum % 2) + result
            bit_carry = math.floor(bit_sum / 2)
            bit_place -= 1
        if len(a) > len(b):
            while abs(bit_place) <= len(a):
                bit_sum = int(a[bit_place]) + bit_carry
                result = str(bit_sum % 2) + result
                bit_carry = math.floor(bit_sum / 2)
                bit_place -= 1
        else:
            while abs(bit_place) <= len(b):
                bit_sum = int(b[bit_place]) + bit_carry
                result = str(bit_sum % 2) + result
                bit_carry = math.floor(bit_sum / 2)
                bit_place -= 1
        if bit_carry:
            result = str(bit_carry) + result
        return result
