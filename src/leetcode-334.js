/**
 * Problem 334: Increasing Triplet Subsequence
 *
 * Constraints:
 *  1. 1 <= nums.length <= 5 * 10^5
 *  2. -2^31 <= nums[i] <= 2^31 - 1
 */

// TODO: Improve solution's time and space complexity.
// TODO: Improve code cleanliness.

/**
 * Declarative and Iterative Solution
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingTriplet(nums) {
  let low = findFirstIncrease(0);
  if (Number.isNaN(low)) return false;
  let high = low + 1;
  while (true) {
    const nextLow = findFirstIncrease(high);
    if (Number.isNaN(nextLow)) return false;
    const nextHigh = nextLow + 1;
    if (nums[nextHigh] > nums[high] || nums[nextLow] > nums[low]) return true;
    if (nums[nextHigh] > nums[low]) {
      if (
        nums
          .slice(high + 1, nextLow)
          .find((n) => n > nums[low] && n < nums[high])
      )
        return true;
    }
    low = nums[low] <= nums[nextLow] ? low : nextLow;
    high = nextHigh;
  }
  // Internal Procedures
  // =================================================================
  /**
   * From 'start' find the first index on `nums` where the element at that index
   * is less than the element after it. Otherwise, we return -1 when there is no
   * such case.
   * @param {number|undefined} start - The place where the search begins.
   * @return {number}
   */
  function findFirstIncrease(start) {
    if (start === undefined) start = 0;
    else if (typeof start !== 'number') throw TypeError();
    if (start < 0 || start > nums.length - 2) return NaN;
    while (start <= nums.length - 2) {
      if (nums[start] < nums[start + 1]) return start;
      start += 1;
    }
    return NaN;
  }
}
