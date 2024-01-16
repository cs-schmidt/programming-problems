/**
 * Problem 2635: Apply Transform Over Each Element in Array
 *
 * Constraints:
 *  1. 0 <= arr.length <= 1000
 *  2. -10^9 <= arr[i] <= 10^9
 *  3. fn returns a number
 */

/**
 * Declarative and Iterative Solution
 *
 * Complexity: O(n) time and O(n) auxiliary space.
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function map(arr, fn) {
  const result = [];
  arr.forEach((num, i) => result.push(fn(num, i)));
  return result;
}
