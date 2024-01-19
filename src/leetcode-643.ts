/**
 * Problem 643: Maximum Average Subarray I
 *
 * Constraints:
 *  1. n == nums.length
 *  2. 1 <= k <= n <= 10^5
 *  3. -10^4 <= nums[i] <= 10^4
 */

/**
 * Imperative and Linearly Iterative Solution
 *
 * The procedure works by finding the maximum sum amongst contiguous `k`-sized
 * subarrays of `nums`. Then we return the result divided by `k`.
 *
 * Complexity: O(nums.length - k) + O(k) time and O(1) auxiliary space.
 */
function findMaxAverage(nums: number[], k: number): number {
  let maxSum = 0;
  let stepSum = 0;
  let stepEnd = k - 1;
  // Initialize `stepSum` and `maxSum`.
  for (let i = 0; i <= stepEnd; i++) stepSum += nums[i];
  maxSum = stepSum;
  while (stepEnd < nums.length - 1) {
    stepEnd += 1;
    stepSum += nums[stepEnd] - nums[stepEnd - k];
    if (stepSum > maxSum) maxSum = stepSum;
  }
  return maxSum / k;
}
