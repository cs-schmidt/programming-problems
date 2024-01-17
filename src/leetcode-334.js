/**
 * Problem 334: Increasing Triplet Subsequence
 *
 * Constraints:
 *  1. 1 <= nums.length <= 5 * 10^5
 *  2. -2^31 <= nums[i] <= 2^31 - 1
 */

// TODO: Complete this problem.

/**
 * Imperative and Iterative Solution
 *
 * Applies a "limited dynamic programming" approach in a manner similar to the
 * Longest Increasing Subsequence Problem, going bottom-up.
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingTriplet(nums) {
  if (nums.length < 3) return false;
  const sequence = [nums.at(0)];
  let index = 0;
  while (index < nums.length && nums.at(index) <= sequence.at(-1)) {
    sequence[sequence.length - 1] = nums.at(index);
    index += 1;
  }
  if (index < nums.length) {
    sequence[sequence.length - 1] = nums.at(index);
    index += 1;
  }
  while (index < nums.length && nums.length < 3) {
    if (nums.at(index) < nums.at(0)) {
      //
    } else if (
      sequence.at(0) < nums.at(index) &&
      nums.at(index) < sequence.at(-1)
    ) {
      sequence.length -= 1;
      sequence.push(nums.at(index));
    } else if (nums.at(index) > sequence.at(-1)) {
      sequence.push(nums.at(index));
    }
    index += 1;
  }
  return sequence.length >= 3;
}
