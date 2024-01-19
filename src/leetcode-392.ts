/**
 * Problem 392: Is Subsequence
 *
 * Constraints:
 *  1. 0 <= s.length <= 100
 *  2. 0 <= t.length <= 10^4
 *  3. s and t consist only of lowercase English letters.
 */

// TODO: Improve solution's time and space complexity.
// TODO: Complete this problem's "follow up" portion.
// TODO: Double check you complexity analysis.

/**
 * Imperative and Linearly Iterative Solution
 *
 * Complexity: O(|s| + |t|) time and O(1) auxiliary space.
 */
function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) return true;
  let sIndex = 0;
  let tIndex = 0;
  while (!(tIndex === t.length || t.length - tIndex < s.length - sIndex)) {
    if (s[sIndex] === t[tIndex]) sIndex += 1;
    tIndex += 1;
  }
  if (sIndex === s.length) return true;
  return false;
}
