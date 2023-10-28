// Problem 53: Maximum Subarray

/**
 * Constraints:
 *
 * 1) 1 <= nums.length <= 10^5
 * 2)  -10^4 <= nums[i] <= 10^4
 */

function maxSubArray(nums: number[]): number {
  let pivotIndex = 0;
  let result = nums[pivotIndex];

  while (pivotIndex < nums.length) {
    let sum = 0;
    for (let i = pivotIndex; i < nums.length; i++) {
      sum += nums[i];
      if (sum > result) result = sum;
    }
    pivotIndex += 1;
  }

  return result;
}
