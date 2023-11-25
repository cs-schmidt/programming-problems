// Problem 1431: Kids With the Greatest Number of Candies

/**
 * Constraints:
 *
 * 1) 2 <= n <= 100
 * 2) 1 <= candies[i] <= 100
 * 3) 1 <= extraCandies <= 50
 */

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxVal: number = Math.max(...candies);
  return candies.map((quantity) => quantity + extraCandies >= maxVal);
}
