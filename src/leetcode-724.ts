/**
 * Problem 724: Find Pivot Index
 *
 * Constraints:
 *  1. 1 <= nums.length <= 10^4
 *  2. -1000 <= nums[i] <= 1000
 */

function pivotIndex(nums: number[]): number {
  let lSum = 0;
  let rSum = 0;

  for (let i = nums.length - 1; i > 0; i--) rSum += nums[i];

  for (let i = 0; i < nums.length; i++) {
    if (lSum == rSum) return i;
    lSum += nums[i];
    rSum -= nums[i + 1] ?? 0;
  }

  return -1;
}
