/**
 * Problem 151: Reverse Words in a String
 *
 * Constraints:
 *  1. 1 <= s.length <= 10^4
 *  2. s contains English letters (uppercase and lowercase), digits, and spaces.
 *  3. There is at least one word in s.
 */

/**
 * Declarative and Linearly Iterative Solution
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
function reverseWords(str: string): string {
  return str.trim().split(/\s+/).reverse().join(' ');
}
