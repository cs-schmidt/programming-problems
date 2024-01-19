/**
 * Problem 1768: Merge Strings Alternately
 *
 * Constraints:
 *  1. 1 <= word1.length, word2.length <= 100
 *  2. word1 and word2 consist of lowercase English letters.
 *
 */

// TODO: Improve solution's time complexity.

/**
 * Imperative and Iterative Solution
 *
 * Complexity: <time> time and <space> auxiliary space.
 */
function mergeAlternately(str1: string, str2: string): string {
  let result = '';
  // Iterate through the strings up to the minimum length between them (i.e.,
  // the last index they share), weaving chars from each onto the `result`.
  const minLength: number = Math.min(str1.length, str2.length);
  for (let i = 0; i < minLength; i++) result += str1[i] + str2[i];
  // Pad the `result` with the remaining elements on the longer of the two
  // strings.
  if (str1.length < str2.length) result += str2.slice(minLength);
  else result += str1.slice(minLength);
  return result;
}
