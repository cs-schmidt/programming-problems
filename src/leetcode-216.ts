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
  if (n > 45 || k > n) return [];

  // Each "unique partition" of `n` can only contain the numbers 1 to 9.
  const uniquePartitions: number[][] = [];

  // DO: Populate `uniquePartitions`.

  return uniquePartitions;
}
