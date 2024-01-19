/**
 * Problem 2626: Array Reduce Transformation
 *
 * Constraints:
 *  1. 0 <= nums.length <= 1000
 *  2. 0 <= nums[i] <= 1000
 *  3. 0 <= init <= 1000
 */

/**
 * Declarative and Linearly Iterative Solution
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @param {number} init
 * @return {number[]}
 */
function reduce(arr, fn, init) {
  arr.forEach((val) => (init = fn(init, val)));
  return init;
}
