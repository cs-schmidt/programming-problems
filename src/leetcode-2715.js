/**
 * Problem 2715: Timeout Cancellation
 *
 * Constraints:
 *  1. fn is a function
 *  2. args is a valid JSON array
 *  3. 1 <= args.length <= 10
 *  4. 20 <= t <= 1000
 *  5. 10 <= cancelTimeMs <= 1000
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
  const callTime = Date.now();
  const timerId = setTimeout(fn, t, ...args);
  return function cancelTrigger() {
    if (Date.now() - callTime < t) clearTimeout(timerId);
  };
}
