/**
 * Problem 2634: Filter Elements From Array
 *
 * Constriants:
 *  1. 0 <= arr.length <= 1000
 *  2. -10^9 <= arr[i] <= 10^9
 */

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(n) time and O(n) auxiliary space.
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr, fn) {
  const result = [];
  arr.forEach((num, i) => {
    if (fn(num, i)) result.push(num);
  });
  return result;
}
