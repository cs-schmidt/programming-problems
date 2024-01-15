/**
 * Problem 334: Increasing Triplet Subsequence
 *
 * Constraints:
 *  1. 1 <= nums.length <= 5 * 10^5
 *  2. -2^31 <= nums[i] <= 2^31 - 1
 */

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
  var size = 1;
  var index = 0;
  var minHead = nums.at(0);
  while (index < nums.length && size < 3) {
    while (index < nums.length && nums.at(index) <= minHead) {
      minHead = nums.at(index);
      index += 1;
    }
    if (index < nums.length) {
      size += 1;
      minHead = nums.at(index);
    }
  }
  return size === 3;
}
