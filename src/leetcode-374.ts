/**
 * Problem 374: Guess Number Higher or Lower
 *
 * Constraints:
 *  1. 1 <= n <= 2^31 - 1
 *  2. 1 <= pick <= n
 */

// TODO: Improve solution's time and space complexity.

/**
 * Forward declaration of guess API.
 * @param {number} num - Your guess.
 * @return -1 if num is higher than the picked number, 1 if num is lower than
 *         the picked number; otherwise return 0.
 * function guess(num: number): number {}
 */

/* eslint-disable @typescript-eslint/no-unsafe-call */
/**
 * Declarative and Divide-and-Conquer Solution
 *
 * Complexity: O(log(n)) time and O(log(n)) + O(1) space.
 */
function guessNumber(n: number): number {
  let mid = 0; // save space by caching `mid` variable used by `findInRange()`.
  return findInRange(1, n);
  // Internal Procedures:
  // =================================================================
  /** Attempts the find the guess number `k` between `low` and `high`. */
  function findInRange(low: number, high: number): number {
    mid = Math.floor((high + low) / 2);
    // Base Case: The middle number in the range is the correct guess.
    if (guess(mid) === 0) return mid;
    // If `mid` is greater than the correct number.
    if (guess(mid) === -1) return findInRange(low, mid - 1);
    // Otherwise, `mid` is less than the correct number.
    return findInRange(mid + 1, high);
  }
}
