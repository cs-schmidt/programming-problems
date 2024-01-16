/**
 * Problem 2631: Group By
 *
 * Constraints:
 *  1. 0 <= array.length <= 10^5
 *  2. fn returns a string
 */

/**
 * Declarative and Iterative Solution
 *
 * Complexity: O(n) time and O(n) auxiliary space.
 */
/**
 * @param {Function}
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((result, val) => {
    const key = fn(val);
    if (Object.hasOwn(result, key)) result[key].push(val);
    else result[key] = [val];
    return result;
  }, {});
};
