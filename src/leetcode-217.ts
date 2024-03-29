/**
 * Problem 217: Contains Duplicates
 *
 * Constraints:
 *  1. 1 <= nums.length <= 10^5
 *  2. -10^9 <= nums[i] <= 10^9
 */

// TODO: Improve solution's time and space complexity.

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(n) time and auxiliary space.
 */
function containsDuplicate(nums: number[]): boolean {
  const encounteredNums = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (!encounteredNums.has(nums[i])) encounteredNums.add(nums[i]);
    else return true;
  }
  return false;
}
