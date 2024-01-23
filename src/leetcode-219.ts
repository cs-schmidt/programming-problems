/**
 * Problem 219: Contains Duplicate II
 *
 * Constraints:
 *  1. 1 <= nums.length <= 10^5
 *  2. -10^9 <= nums[i] <= 10^9
 *  3. 0 <= k <= 10^5
 */

// TODO: Improve solution's time and space complexity.

/**
 * Imperative and Iterative Solution
 *
 * Compexlity: O(n) time and auxiliary space.
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (k === 0) return false;
  const prevIndexOf: Record<string, number> = {};
  for (let index: number = 0; index < nums.length; index++) {
    const value = nums[index];
    if (prevIndexOf[value] == null || Math.abs(prevIndexOf[value] - index) > k)
      prevIndexOf[value] = index;
    else return true;
  }
  return false;
}
