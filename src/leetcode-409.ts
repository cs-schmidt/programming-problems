/**
 * Problem 409: Longest Palindrome
 *
 * Constraints:
 *  1. 1 <= s.length <= 2000.
 *  2. s consists of lowercase and/or uppercase English letters only.
 *  3. analysis is case-sensitive; e.g., "Aa" is not considered a palindrome.
 *
 */

function longestPalindrome(s: string): number {
  let result = 0;
  const charFreqs: { [key: string]: number } = {};
  let maxOddFreqs = 0;

  for (const char of s) {
    if (char in charFreqs) charFreqs[char] += 1;
    else charFreqs[char] = 1;
  }

  for (const freq of Object.values(charFreqs)) {
    if (freq % 2 === 0) {
      result += freq;
    } else if (freq > maxOddFreqs && maxOddFreqs > 0) {
      result = result - 1 + freq;
      maxOddFreqs = freq;
    } else if (maxOddFreqs === 0) {
      result += freq;
      maxOddFreqs = freq;
    } else {
      result += freq - 1;
    }
  }

  return result;
}
