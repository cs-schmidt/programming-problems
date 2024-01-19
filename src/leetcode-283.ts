/**
 * Problem 283: Move Zeros
 *
 * Constraints:
 *  1. 1 <= nums.length <= 10^4
 *  2. -2^31 <= nums[i] <= 2^31 - 1
 *  3. Must modify `nums` in-place without making a copy of it.
 *  4. The sortition must be stable.
 */

// TODO: Improve solution's space complexity.
// TODO: Complete this problem's "follow up" portion.
// TODO: Double check your complexity analysis.

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
function moveZeroes(nums: number[]): void {
  let zeroIdx = nums.indexOf(0);
  let nonZeroIdx = zeroIdx;
  while (nums[nonZeroIdx] === 0 && nonZeroIdx < nums.length) nonZeroIdx += 1;
  if (zeroIdx === -1 || nonZeroIdx === nums.length) return;
  while (nonZeroIdx < nums.length) {
    nums[zeroIdx] = nums[nonZeroIdx];
    nums[nonZeroIdx] = 0;
    while (nums[zeroIdx] !== 0 && zeroIdx < nums.length) zeroIdx += 1;
    while (nums[nonZeroIdx] === 0 && nonZeroIdx < nums.length) nonZeroIdx += 1;
  }
}
