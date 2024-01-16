/**
 * Problem 2620: Counter
 *
 * Constraints:
 *  1. -1000 <= n <= 1000
 *  2. 0 <= calls.length <= 1000
 *  3. calls[i] === "call"
 */

/**
 * Declarative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {number} n
 * @return {Function}
 */
function createCounter(n) {
  return () => n++;
}
