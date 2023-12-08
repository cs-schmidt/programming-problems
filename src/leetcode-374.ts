/**
 * Problem 374: Guess Number Higher or Lower
 *
 * Constraints:
 *  1. 1 <= n <= 2^31 - 1
 *  2. 1 <= pick <= n
 */

/**
 * Forward declaration of guess API.
 * @param {number} num - Your guess.
 * @return -1 if num is higher than the picked number, 1 if num is lower than
 *         the picked number; otherwise return 0.
 * function guess(num: number): number {}
 */

/**
 * Divide-and-Conquer Solution
 *
 * Complexity: O(log(n)) time and O(log(n)) + O(1) space.
 */
function guessNumber(n: number): number {
  return findInRange(1, n);

  // Internal Procedures:
  // =================================================================
  /** Attempts the find the guess number `k` between `low` and `high`. */
  function findInRange(low: number, high: number): number {
    // Base Case 1: There's no middle number between the bounds of the range.
    if (high < low) return 0;

    const mid = Math.floor((high + low) / 2);

    // Base Case 2: The middle number in the range is the correct guess.
    if (guess(mid) === 0) return mid;

    // When `mid` is above the correct number, check middle guesses in half
    // ranges between `low` and `mid`.
    if (guess(mid) === -1) {
      return (
        findInRange(low, Math.floor((low + mid - 1) / 2)) ||
        findInRange(Math.floor((low + mid - 1) / 2) + 1, mid - 1)
      );
    }

    // Otherwise, we know `mid` is below the correct number, so check middle
    // guesses in half ranges between `mid` and `high`.
    return (
      findInRange(mid + 1, Math.floor((mid + high + 1) / 2)) ||
      findInRange(Math.floor((mid + high + 1) / 2) + 1, high)
    );
  }
}
