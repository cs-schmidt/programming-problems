/**
 * Problem 53: Maximum Subarray
 *
 * Constraints:
 *  1. 1 <= nums.length <= 10^5
 *  2. -10^4 <= nums[i] <= 10^4
 */

// TODO: Write a solution with the divide-and-conquer approach.

/**
 * Iterative Solution.
 *
 * This is an implementation of Kadane's algorithm. The process is a linear
 * iteration where we go over each value in `nums` and assesses two variables:
 * `maxThusFound` and `maxOnCurrVal`. The former tracks the greatest sum of a
 * sequence at or before the current value in nums, and the latter tracks the
 * greatest sum of a sequence that would end on the current value (from left to
 * right). Whenever `maxOnCurrVal` goes below 0 it resets (we set it back to 0),
 * this gets rid of the 'negative contributing' subsequence before the next
 * iterations current value. The final return value at the end of iteration is
 * `maxThusFound`.
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
function maxSubArray(nums: number[]): number {
  let maxThusFound = nums[0];
  let maxOnCurrVal = 0;

  for (const val of nums) {
    maxOnCurrVal += val;

    if (maxOnCurrVal > maxThusFound) maxThusFound = maxOnCurrVal;
    if (maxOnCurrVal < 0) maxOnCurrVal = 0;
  }

  return maxThusFound;
}
