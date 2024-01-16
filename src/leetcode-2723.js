/**
 * Problem 2723: Add Two Promises
 *
 * Constraints:
 *  1. promise1 and promise2 are promises that resolve with a number
 */

/**
 * Declarative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
function addTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2]).then((values) =>
    values.reduce((sum, val) => sum + val)
  );
}
