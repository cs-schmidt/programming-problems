"""
Problem 1657: Determine if Two Strings Are Close

Constraints:
 1. 1 <= word1.length, word2.length <= 10^5
 2. word1 and word2 contain only lowercase English letters.
"""


class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        """
        Iterative and Imperative Solution

        Complexity: O(word_length) time and O(word_length) auxilary space.
        """
        # We can preform only two operations on a string:
        #
        #  1. swapChars(i,j): Swap the position of two characters which *exist*
        #     in the string.
        #  2. swapCharGroups(a,b): Transform every occurrence of one *existing*
        #     character into another *existing* character, and do the same with
        #     the other character. For example, doing this will "a" and "b"
        #     across a string will swap all a's with b's and b's with a's.
        #
        # We return `True` if these operations alone can make the strings
        # identical and `False` otherwise.

        if len(word1) != len(word2): return False

        # Regardless of operation 1 and operation 2, a string will always
        # maintain the same number of distinct characters and multiplicities
        # across each: that's the invariant here.

        word1CharFrequencies: list[int] = []
        word2CharFrequencies: list[int] = []

        return word1CharFrequencies == word2CharFrequencies
