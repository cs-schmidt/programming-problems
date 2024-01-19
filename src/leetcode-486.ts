/**
 * Problem 486: Predict the Winner
 *
 * Constraints:
 *  1. 1 <= nums.length <= 20.
 *  2. 0 <= nums[i] <= 10^7.
 */

// TODO: Improve solution's time complexity.
// TODO: Implement a solution that uses dynamic programming and memoization.

/**
 * Dynamic Programming Solution.
 *
 * Complexity: <time> and <space> auxiliary complexity.
 */
function predictTheWinner(nums: number[]): boolean {
  const sums: number[] = [];
  for (const num of nums) sums.push(num + (sums.at(-1) || 0));
  return (
    turnMax(0, nums.length - 1) >= sums.at(-1) - turnMax(0, nums.length - 1)
  );
  // Internal Procedures
  // =================================================================
  function turnMax(start: number, end: number): number {
    if (start === end) return nums[start];
    if (end - start === 1) return Math.max(nums[start], nums[end]);
    return Math.max(
      nums[start] +
        sums[end] -
        sums[start + 1] +
        nums[start + 1] -
        turnMax(start + 1, end),
      nums[end] +
        sums[end - 1] -
        sums[start] +
        nums[start] -
        turnMax(start, end - 1)
    );
  }
}
