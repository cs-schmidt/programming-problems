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

        Operations 1 and 2 cannot change the set of distinct characters that
        comprise a word, nor can they change the set of multiplicities for
        distinct characters in  a string: that's the invariant. So, we write an
        algorithm that checks two things: if the words are comprised of the same
        set of distinct characters, and if the multiplicities across their
        distinct characters aligns.

        Complexity: O(n * log(n)) time and O(n) auxiliary space; where n
                    represents the length of word1 and word2. Our analysis
                    assumes that the lengths are the same.
        """
        if len(word1) != len(word2): return False

        charFrequencies1: dict[int] = {}
        charFrequencies2: dict[int] = {}
        for char1, char2 in zip(word1, word2):
            charFrequencies1[char1] = charFrequencies1.get(char1, 0) + 1
            charFrequencies2[char2] = charFrequencies2.get(char2, 0) + 1
        
        if len(set(charFrequencies1.keys()).difference(set(charFrequencies2.keys()))): return False

        frequencies1: list[int] = list(charFrequencies1.values())
        frequencies2: list[int] = list(charFrequencies2.values())
        frequencies1.sort()
        frequencies2.sort()
        for freq1, freq2 in zip(frequencies1, frequencies2):
            if freq1 != freq2: return False

        return True
