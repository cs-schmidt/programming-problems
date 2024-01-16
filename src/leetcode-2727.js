/**
 * Problem 2727: Is Object Empty
 *
 * Constraints:
 *  1. obj is a valid JSON object or array
 *  2. 2 <= JSON.stringify(obj).length <= 105
 */

/**
 * Declarative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
function isEmpty(obj) {
  return obj instanceof Array
    ? obj.length === 0
    : Object.keys(obj).length === 0;
}
