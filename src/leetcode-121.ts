/**
 * Problem 121: Best Time to Buy and Sell a Stock
 *
 * Constraints:
 *  1. 1 <= prices.length <= 10^5
 *  2. 0 <= prices[i] <= 10^4
 */

// TODO: Improve solution's time and space complexity.
// TODO: Implement a solution that uses dynamic programming and memoization.

/**
 * Imperative and Linearly Iterative Solution
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
function maxProfit(prices: number[]): number {
  let minEntry: number = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (minEntry > prices[i]) minEntry = prices[i];
    else if (prices[i] - minEntry > profit) profit = prices[i] - minEntry;
  }
  return profit;
}
