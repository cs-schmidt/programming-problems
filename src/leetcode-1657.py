"""
Problem 1657: Determine if Two Strings Are Close

Constraints:
 1. 1 <= word1.length, word2.length <= 10^5
 2. word1 and word2 contain only lowercase English letters.
"""


class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        """
        <solution type>

        Complexity: <time complexity> and <space complexity>.
        """

        # We can preform only two operations on a string:
        #
        #  1. swapChars(i,j): Swap the position of characters.
        #  2. swapCharGroups(a,b): Transform every occurrence of one character
        #     into another character, and do the same with the other character.
        #     For example, doing this will "a" and "b" across a string will swap
        #     all a's with b's and b's with a's.
        #
        # We return `True` if these operations alone can make the strings
        # identical and `False` otherwise.

        return True
