/**
 * Problem 121: Best Time to Buy and Sell a Stock
 *
 * Constraints:
 *  1. 1 <= prices.length <= 10^5
 *  2. 0 <= prices[i] <= 10^4
 */

function maxProfit(prices: number[]): number {
  // Initialize two variables `minEntry` and `profit`, where the former tracks
  // the minimum entry price encountered as we traverse `prices`, and the latter
  // tracks the maximum profit.
  let minEntry: number = prices[0]; // set `minEntry` to the first price in `prices`.
  let profit = 0; // set `profit` to 0 (handles case where `prices.length == 1`).

  // Starting from the second index in `prices`, traverse the array and
  // update the `minEntry` and `profit` variables.
  for (let i = 1; i < prices.length; i++) {
    // When the `minEntry` is less than the current price being observed, then
    // update it to that price.
    if (minEntry > prices[i]) minEntry = prices[i];
    // When `minEntry` is less than or equal to the current price, check if the
    // difference between the current price and `minEntry` is a new max profit.
    else if (prices[i] - minEntry > profit) profit = prices[i] - minEntry;
  }

  return profit;
}
