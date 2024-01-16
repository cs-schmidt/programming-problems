/**
 * Problem 2629: Function Composition
 *
 * Constraints:
 *  1. -1000 <= x <= 1000
 *  2. 0 <= functions.length <= 1000
 *  3. all functions accept and return a single integer
 */

/**
 * Declarative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {Function[]} functions
 * @return {Function}
 */
function compose(functions) {
  return (val) => functions.reduceRight((result, fn) => fn(result), val);
}
