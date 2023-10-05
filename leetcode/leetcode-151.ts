// Problem 151: Reverse Words in a String

/**
 * Constraints:
 *
 * 1) 1 <= s.length <= 10^4
 * 2) s contains English letters (upper-case and lower-case), digits, and
 *    spaces.
 * 3) There is at least one word in s.
 */

function reverseWords(str: string): string {
  return str.trim().split(/\s+/).reverse().join(' ');
}
