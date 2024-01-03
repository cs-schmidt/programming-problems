/**
 * Problem 1318: Minimum Flips to Make a OR b Equal to c
 *
 * Constraints:
 *  1. 1 <= a <= 10^9
 *  2. 1 <= b <= 10^9
 *  3. 1 <= c <= 10^9
 */

/**
 * Iterative and Imperative Solution
 *
 * Complexity: O(32) time and O(1) auxiliary space.
 */
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function minFlips(a, b, c) {
  let result = 0;
  for (let i = 31; i >= 0; i--) {
    const bit1 = (a >> i) & 1;
    const bit2 = (b >> i) & 1;
    const bit3 = (c >> i) & 1;

    if ((bit1 || bit2) && !bit3) result += bit1 && bit2 ? 2 : 1;
    else if (!(bit1 || bit2) && bit3) result += 1;
  }

  return result;
}
