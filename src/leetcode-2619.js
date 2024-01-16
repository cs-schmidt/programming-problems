/**
 * Problem 2619: Array Prototype Last
 *
 * Constraints:
 *  1. arr is a valid JSON array
 *  2. 0 <= arr.length <= 1000
 */

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
Array.prototype.last = function () {
  if (this.length !== 0) return this.at(-1);
  return -1;
};
