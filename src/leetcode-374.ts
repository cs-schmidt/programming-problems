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
 * - In this game the opponent picks a number `n`, such that `
 *   1 <= n <= 2^31 - 1`, and  a target number `k` where `1 <= k <= n`. Then, we
 *   must guess that number `k`.
 * - Initially the function `guessNumber()` is called on `n`.
 *   - Therefore, initially, the correct number `k` satisfies `1 <= k <= n`.
 */

/**
 * Divide-and-Conquer Solution
 * 
 * Complexity: O(log(n)) time and O(log(n)) + O(1) space.
 */
function guessNumber(n: number): number {
  return guessOnPartition(n);

  // Internal Procedures:
  // ================================================================= 
  function guessOnPartition(num: number, upper: number): number {
    if (guess(num) === 0) return num;
    if (guess(num) === 1) return guessOnPartition(Math.floor(num / 2));
    return guessOnPartition(n + Math.floor(n - num));
  }
};
