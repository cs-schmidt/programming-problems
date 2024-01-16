/**
 * Problem 2627: Debounce
 *
 * Constraints:
 *  1. 0 <= t <= 1000
 *  2. 1 <= calls.length <= 10
 *  3. 0 <= calls[i].t <= 1000
 *  4. 0 <= calls[i].inputs.length <= 10
 */

/**
 * Declarative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function debounce(fn, t) {
  let timerId;
  return function debouncedFn(...args) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(fn, t, ...args);
  };
}
