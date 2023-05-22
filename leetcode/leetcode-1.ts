// Problem 1: Two Sum
// TODO: Complete the follow up for this problem

/**
 * Constraints:
 *
 * 1) 2 <= nums.length <= 104
 * 2) -10^9 <= nums[i] <= 10^9
 * 3) -10^9 <= target <= 10^9
 * 4) Only one valid answer exists.
 */

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
  return [];
}
