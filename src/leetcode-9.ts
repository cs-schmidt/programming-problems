/**
 * Problem 9: Palindrome Number
 *
 * Constraints:
 *  1. -2^31 <= x <= 2^31 - 1
 */

// TODO: Complete this problem's "follow up" portion.

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(log_10(x)) time and O(log_10(x)) auxiliary space.
 */
function isPalindrome(x: number): boolean {
  const stringNum = x.toString();
  for (let i = 0; i <= Math.floor((stringNum.length - 1) / 2); i++) {
    if (stringNum.at(i) !== stringNum.at(-i - 1)) return false;
  }
  return true;
}
