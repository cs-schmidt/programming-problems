/**
 * Problem 2724: Sort By
 *
 * Constraints:
 *  1. arr is a valid JSON array
 *  2. fn is a function that returns a number
 *  3. 1 <= arr.length <= 5 * 10^5
 */

/**
 * Declarative and Iterative Solution
 *
 * Complexity: O(n * log(n)) time and O(1) auxiliary space.
 */
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
function sortBy(arr, fn) {
  return arr.sort((val1, val2) => {
    const val1Order = fn(val1);
    const val2Order = fn(val2);
    if (val1Order < val2Order) return -1;
    if (val1Order > val2Order) return 1;
    return 0;
  });
}
