/**
 * Problem 2621: Sleep
 *
 * Constraints:
 *  1. 1 <= millis <= 1000
 */

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {number} millis
 * @return {Promise}
 */
function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}
