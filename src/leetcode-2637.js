/**
 * Problem 2637: Promise Time Limit
 *
 * Constraints:
 *  1. 0 <= inputs.length <= 10
 *  2. 0 <= t <= 1000
 *  3. fn returns a promise
 */

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function timeLimit(fn, t) {
  return async function (...args) {
    const callTime = Date.now();
    return Promise.race([
      (async () => {
        const result = await fn(...args);
        if (Date.now() - callTime >= t) throw 'Time Limit Exceeded';
        return result;
      })(),
      new Promise((_, reject) => {
        setTimeout(reject, t, 'Time Limit Exceeded');
      })
    ]);
  };
}
