/**
 * Problem 2666: Allow One Function Call
 *
 * Constraints:
 *  1. calls is a valid JSON array
 *  2. 1 <= calls.length <= 10
 *  3. 1 <= calls[i].length <= 100
 *  4. 2 <= JSON.stringify(calls).length <= 1000
 */

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
}
