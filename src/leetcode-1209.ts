/**
 * Problem 1209: Remove All Adjacent Duplicates in String II
 *
 * Constraints:
 *  1. 1 <= s.length <= 10^5
 *  2. 2 <= k <= 10^4
 *  3. s only contains lowercase English letters.
 */

// TODO: Improve solution's time and space complexity.

/**
 * Imperative and Recursive Algorithm
 *
 * Complexity: <time> time and <space> auxilary space.
 */
function removeDuplicates(s: string, k: number): string {
  let result: string = s;
  let i = 0;
  let j: number;
  while (i <= result.length - k) {
    j = i;
    while (result[j] === result[j + 1] && j + 1 < result.length) {
      j += 1;
      if (j - i + 1 === k)
        result = result.substring(0, i) + result.substring(j + 1);
    }
    if (i === j) i += 1;
    else if (j - i + 1 === k && i > 0) i -= 1;
    else i = j + 1;
  }
  return result === s ? result : removeDuplicates(result, k);
}
