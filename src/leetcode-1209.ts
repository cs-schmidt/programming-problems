/**
 * Problem 1209: Remove All Adjacent Duplicates in String II
 *
 * Constraints:
 *  1. 1 <= s.length <= 10^5
 *  2. 2 <= k <= 10^4
 *  3. s only contains lowercase English letters.
 */

// TODO: Enhance this solution.
function removeDuplicates(s: string, k: number): string {
  // My approach will be iterative, traversing `s` from left to right.
  let result: string = s;
  let i: number = 0;
  let j: number;

  while (i <= result.length - k) {
    // Loop that checks over a sequence of duplicates.
    j = i;
    while (result[j] === result[j + 1] && j + 1 < result.length) {
      j += 1;
      if (j - i + 1 === k)
        result = result.substring(0, i) + result.substring(j + 1);
    }

    // It's possible that the loop above (i.e., within this scope).
    if (i === j) i += 1;
    else if (j - i + 1 === k && i > 0) i -= 1;
    else i = j + 1;
  }

  return result === s ? result : removeDuplicates(result, k);
}
