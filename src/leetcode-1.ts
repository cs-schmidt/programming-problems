/**
 * Problem 1: Two Sum
 *
 * Constraints:
 *  1. 2 <= nums.length <= 104
 *  2. -10^9 <= nums[i] <= 10^9
 *  3. -10^9 <= target <= 10^9
 *  4. Only one valid answer exists.
 */

// TODO: Improve solution's time and space complexity.

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(n^2) time and O(1) auxiliary space.
 */
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}
