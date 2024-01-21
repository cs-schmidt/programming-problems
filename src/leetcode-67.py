"""
Problem 67: Add Binary

Constraints:
 1. 1 <= a.length, b.length <= 10^4
 2. a and b consist only of '0' or '1' characters.
 3. Each string does not contain leading zeros except for the zero itself.
"""

# TDOO: Complete solution.
# TODO: Improve solution's time and space complexity.


class Solution:
    def addBinary(self, a: str, b: str) -> str:
        """
        Imperative and Linearly Iterative Solution

        Complexity: O(max(|a|,|b|)) time and O(1) auxiliary space.
        """
        if len(a) < len(b):
            a = ("0" * (len(b) - len(a))) + a
        else:
            b = ("0" * (len(a) - len(b))) + b
        result = "0"
        index = 0
        while index < len(a):
            if int(a[index]) + int(b[index]) == 2:
                result[-1] = "1"
                result.append("0")
            elif int(a[index]) + int(b[index]) == 1:
                result[-1] = "1"
            else:
                result[-1] = "0"
        return result
