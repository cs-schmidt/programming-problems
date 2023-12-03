/**
 * Problem 1480: Running Sum of 1D Array
 *
 * Constraints:
 *  1. 1 <= nums.length <= 1000
 *  2. -10^6 <= nums[i] <= 10^6
 */

function runningSum(nums: number[]): number[] {
  const result: number[] = [];
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    result.push((currentSum += nums[i]));
  }
  return result;
}
