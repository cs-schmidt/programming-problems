/**
 * Problem 63: Unique Paths
 *
 * Constraints:
 *  1. 1 <= m, n <= 100
 */

/**
 * Dynamic Programming Soltuion
 *
 * Complexity: <time complexity> and <space complexity>.
 */
function uniquePaths(rows: number, cols: number): number {
  return (
    factorial(rows + cols - 2) / (factorial(rows - 1) * factorial(cols - 1))
  );
}

function factorial(num: number): number {
  if (num === 0) return 1;
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// - Given points <i,j> and <0,0> on a 2D grid, any path from <0,0> to <i,j>
//   must consist of an i number of moves down and a j number of moves to the
//   right.
// - The number of paths from <0,0> to <i,j> on a 2D grid is equal to all the
//   unique orderings of i down moves and j right moves.
