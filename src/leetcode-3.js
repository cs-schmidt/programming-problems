/**
 * Problem 3: Longest Substring Without Repeating Characters
 *
 * Constraints:
 *  1. 0 <= s.length <= 5 * 10^4
 *  2. s consists of English letters, digits, symbols and spaces.
 */

// TODO: Improve solution's time and space complexity.

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(n) time and O(n) auxiliary space.
 */
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let result = 0;
  let windowStart = 0;
  let windowEnd = 0;
  const charIndexes = {};
  for (const char of s) {
    if (!Object.hasOwn(charIndexes, char) || charIndexes[char] < windowStart)
      charIndexes[char] = windowEnd;
    else {
      result = Math.max(result, windowEnd - windowStart);
      windowStart = charIndexes[char] + 1;
      charIndexes[char] = windowEnd;
    }
    windowEnd += 1;
  }
  result = Math.max(result, windowEnd - windowStart);
  return result;
}
