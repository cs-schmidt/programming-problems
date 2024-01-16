/**
 * Problem 2725: Interval Cancellation
 *
 * Constraints:
 *  1. fn is a function
 *  2. args is a valid JSON array
 *  3. 1 <= args.length <= 10
 *  4. 30 <= t <= 100
 *  5. 10 <= cancelTimeMs <= 500
 */

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
  fn(...args);
  const timerId = setInterval(fn, t, ...args);
  return function cancelTrigger() {
    clearTimeout(timerId);
  };
}
