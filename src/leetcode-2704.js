/**
 * Problem 2704: To Be Or Not To Be
 */

/**
 * Declarative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {any} val
 * @return {Object}
 */
function expect(val) {
  return {
    toBe(v) {
      if (v === val) return true;
      throw Error('Not Equal');
    },
    notToBe(v) {
      if (v !== val) return true;
      throw Error('Equal');
    }
  };
}
