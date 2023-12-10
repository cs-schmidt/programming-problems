/**
 * Problem 283: Move Zeros
 *
 * Constraints:
 *  1. 1 <= nums.length <= 10^4
 *  2. -2^31 <= nums[i] <= 2^31 - 1
 *  3. Must modify `nums` in-place without making a copy of it.
 *  4. The sortition must be stable.
 */

/**
 * Iterative and Imperative Solution.
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
function moveZeroes(nums: number[]): void {
  let zeroIndex = nums.indexOf(0);
  let nonZeroIndex = zeroIndex + 1;

  while (nums[nonZeroIndex] === 0 && nonZeroIndex < nums.length)
    nonZeroIndex += 1;

  if (zeroIndex === -1 || nonZeroIndex === nums.length) return;

  while (nums[zeroIndex] === 0 && nonZeroIndex < nums.length) {
    const nonZeroVal = nums[nonZeroIndex];

    nums[nonZeroIndex] = 0;
    nums[zeroIndex] = nonZeroVal;

    while (nums[zeroIndex] !== 0 && zeroIndex < nums.length) zeroIndex += 1;

    nonZeroIndex = zeroIndex + 1;

    while (nums[nonZeroIndex] === 0 && nonZeroIndex < nums.length)
      nonZeroIndex += 1;
  }
}
