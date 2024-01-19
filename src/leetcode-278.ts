/**
 * Problem 278: First Bad Version
 *
 * Constraints:
 *  1. 1 <= bad <= n <= 2^(31) - 1
 */

// TODO: Improve solution's time and space complexity.

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

function solution(isBadVersion: (v: number) => boolean) {
  /**
   * Imperative and Recursive Solution
   *
   * Complexity: O(log(n)) time and O(1) auxiliary space.
   */
  return function findBadVersion(n: number): number {
    let lowV = 1;
    let highV: number = n;
    while (lowV < highV) {
      if (isBadVersion(Math.floor((lowV + highV) / 2)))
        highV = Math.floor((lowV + highV) / 2);
      else if (!isBadVersion(Math.floor((lowV + highV) / 2)))
        lowV = Math.ceil((lowV + highV) / 2);
    }
    return highV;
  };
}
