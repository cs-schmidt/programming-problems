/**
 * Problem 1431: Kids With the Greatest Number of Candies
 *
 * Constraints:
 *  1. 2 <= n <= 100
 *  2. 1 <= candies[i] <= 100
 *  3. 1 <= extraCandies <= 50
 */

/**
 * Declarative and Linearly Iterative Solution
 *
 * Complexity: O(n) time and auxiliary space.
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxVal: number = Math.max(...candies);
  return candies.map((quantity) => quantity + extraCandies >= maxVal);
}
