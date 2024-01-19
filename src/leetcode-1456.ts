/**
 * Problem 1456: Maximum Number of Vowels in a Substring of Given Length
 *
 * Constraints:
 *  1. 1 <= s.length <= 10^5
 *  2. s consists of lowercase English letters.
 *  3. 1 <= k <= s.length
 */

/**
 * Imperative and Linearly Iterative Solution
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
function maxVowels(s: string, k: number): number {
  const vowelRegex = /^[aeiou]$/;
  let maxSubStrCount = 0;
  let currSubStrCount = 0;
  // Initialize `maxSubStrCount` and `currSubStrCount`.
  for (let i = 0; i <= k - 1; i++) {
    if (vowelRegex.test(s[i])) maxSubStrCount += 1;
  }
  currSubStrCount = maxSubStrCount;
  // Iteratively slide the substring window, determine the amount of vowels in
  // that substring, and update `maxSubStrCount` if it's greater.
  for (let step = k; step < s.length; step++) {
    if (maxSubStrCount === k) return maxSubStrCount;
    if (vowelRegex.test(s[step - k])) currSubStrCount -= 1;
    if (vowelRegex.test(s[step])) currSubStrCount += 1;
    if (currSubStrCount > maxSubStrCount) maxSubStrCount = currSubStrCount;
  }
  return maxSubStrCount;
}
