/**
 * Problem 2665: Counter II
 *
 * Constraints:
 *  1. -1000 <= init <= 1000
 *  2. 0 <= calls.length <= 1000
 *  3. calls[i] is one of "increment", "decrement" and "reset"
 */

/**
 * Declarative and Iterative Solution.
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {number} init
 * @return {{increment: Function, decrement: Function, reset: Function}}
 */
function createCounter(init) {
  let value = init;
  return {
    increment: () => ++value,
    decrement: () => --value,
    reset: () => (value = init)
  };
}
