/**
 * Problem 169: Majority Element
 *
 * Constraints:
 *  1. n == nums.length
 *  2. 1 <= n <= 5 * 10^4
 *  3. -10^9 <= nums[i] <= 10^9
 */

// TODO: Improve solution's time and space complexity.
// TODO: Complete this problem's "follow up" portion.

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(n) time and auxiliary space.
 */
function majorityElement(nums: number[]): number {
  let index = 0;
  const frequencies: Record<string, number> = {};
  while (true) {
    const currentNum = nums[index];
    if (frequencies[currentNum]) frequencies[currentNum] += 1;
    else frequencies[currentNum] = 1;
    if (frequencies[currentNum] > Math.floor(nums.length / 2))
      return currentNum;
    index += 1;
  }
}
