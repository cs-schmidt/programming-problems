/**
 * Problem 2704: Return Length of Arguments Passed
 *
 * Constraints:
 *  1. args is a valid JSON array
 *  2. 0 <= args.length <= 100
 */

/**
 * Declarative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
function argumentsLength(...args) {
  return args.length;
}
