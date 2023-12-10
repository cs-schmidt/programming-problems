/**
 * Problem 216: Combination Sum III
 *
 * Constraints:
 *  1. 2 <= k <= 9
 *  2. 1 <= n <= 60
 */

/**
 * Iterative and Imperative Solution
 *
 * Complexity: <time complexity> and <space complexity>.
 */
function combinationSum3(k: number, n: number): number[][] {
  if (k > n || k < minSelections(n)) return [];
  const partitions: number[][] = [];
  let nextMax = n <= 9 ? n : 9;
  let remainder = n;
  let selections = k;
  const combination: number[] = [];
  while (true /* something */) {
    remainder -= nextMax;
    if (remainder > 0) {
      combination.push(nextMax);
      selections -= 1;
    }
    nextMax -= 1;
  }
  return partitions;

  // Internal Procedures
  // =================================================================
  /**
   * Computes the sum of positive integers up to the input.
   * @param {number} num - A natural number (a positive integer).
   * @returns {number} The sum of positive integers up to the input or NaN if it
   *   can't be computed.
   */
  function naturalSum(num: number) {
    if (num <= 0 || !Number.isInteger(num)) return NaN;
    return (num * (num + 1)) / 2;
  }

  /**
   * Computes the minimum number of selections from {1, 2, ..., 9} who's sum can
   * represent the input.
   * @param {number} num - A positive integer.
   * @returns {number} The minimum number of selections.
   */
  function minSelections(num: number): number {
    if (num <= 0 || num > 45 || !Number.isInteger(num)) return NaN;
    if (num === 45) return 9;
    if (num >= 43 && num <= 44) return 8;
    if (num >= 40 && num <= 42) return 7;
    if (num >= 36 && num <= 39) return 6;
    if (num >= 31 && num <= 35) return 5;
    if (num >= 25 && num <= 30) return 4;
    if (num >= 18 && num <= 24) return 3;
    if (num >= 10 && num <= 17) return 2;
    return 1;
  }
}
