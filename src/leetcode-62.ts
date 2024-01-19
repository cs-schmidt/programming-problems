/**
 * Problem 62: Unique Paths
 *
 * Constraints:
 *  1. 1 <= m, n <= 100
 */

// TODO: Implement a solution that uses dynamic programming and memoization.

/**
 * Imperative and Linearly Recursive Solution
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
    factorial(rows + cols - 2) / (factorial(rows - 1) * factorial(cols - 1))
  );
}
// Utilities
// =================================================================
/**
 * Computes the factorial of a positive integer num. This process is a linear
 * recursion: it uses O(n) time and O(n) space.
 * @param {number} num - A positive integer.
 * @returns {number}
 */
function factorial(num: number): number {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
