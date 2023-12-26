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

        Complexity: O(n*log(n)) time and O(n) auxilary space (where n is equal
                    to `len(word1)` and `len(word2)`).
        """
        # Regardless of operation 1 and operation 2, a string will always
        # maintain the same number of distinct characters and multiplicities
        # across each: that's the invariant here.

        if len(word1) != len(word2):
            return False

        word1CharFrequencies: dict = {}
        word2CharFrequencies: dict = {}
        for i in range(len(word1)):
            word1CharFrequencies[word1[i]] = word1CharFrequencies.get(word1[i], 0) + 1
            word2CharFrequencies[word2[i]] = word2CharFrequencies.get(word2[i], 0) + 1

        frequencies1: list[int] = list(word1CharFrequencies.values())
        frequencies2: list[int] = list(word2CharFrequencies.values())
        frequencies1.sort()
        frequencies2.sort()

        for freq1, freq2 in zip(frequencies1, frequencies2):
            if freq1 != freq2:
                return False
        return True
