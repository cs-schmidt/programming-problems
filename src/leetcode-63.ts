/**
 * Problem 63: Unique Paths
 *
 * Constraints:
 *  1. 1 <= m, n <= 100
 */

/**
 * Iterative and Imperative Solution
 *
 * The solution exploits the fact that the number of unique paths from <0,0> to
 * <i,j> on a 2D grid, is equal to all the unique orderings of i down moves and
 * j right moves. It turns out that we can use the formula for the permutations
 * of a multiset to compute the answer. Thus, we return the result of this
 * formula where <rows,cols> is the endpoint.
 *
 * Complexity: O(rows + cols) time and O(max(rows, cols)) auxiliary space.
 */
function uniquePaths(rows: number, cols: number): number {
  return (
    factorial(rows - 1 + (cols - 1)) /
    (factorial(rows - 1) * factorial(cols - 1))
  );
}

/**
 * Computes the factorial of a positive integer num.
 *
 * - A linear recursion process.
 * - Complexity: O(n) time and O(n) space.
 *
 * @param {number} num - A positive integer.
 * @returns {number}
 */
function factorial(num: number): number {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
