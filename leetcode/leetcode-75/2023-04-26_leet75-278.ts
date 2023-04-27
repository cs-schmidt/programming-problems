// Problem 278: First Bad Version
// NOTE: Popular question.

/**
 * Constraints:
 *
 * 1) 1 <= bad <= n <= 2^(31) - 1
 *
 */

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

/*  =========================================================================
    Solutions:
    ========================================================================= */

/*
    Solution 1:
    ========================================================================= */
/**
 * A linear iterative process:
 *  - Runs with O(log(n)) time.
 *  - Runs with O(1) memory.
 */
function solution(isBadVersion: (v: number) => boolean) {
  return function findBadVersion(n: number): number {
    // We're using binary search to find the first bad version. We'll preform
    // iterative process, and with each iteration we're looking for the middle
    // version in a partition of the versions from 1 to `n`. Here `lowV`
    // represents the start of the partition we're searching at each iteration,
    // and `highV` represents the end of the partition we're searching at each
    // iteration.
    let lowV: number = 1;
    let highV: number = n;

    // Start the binary search iterations process.
    while (lowV < highV) {
      // When the mid version between `lowV` and `highV` is a bad version, then
      // look for an earlier bad version between `lowV` and  the mid version.
      if (isBadVersion(Math.floor((lowV + highV) / 2)))
        highV = Math.floor((lowV + highV) / 2);
      // When the mid version between `lowV` and `highV` is not a bad version,
      // then look for a later bad version between mid version and `highV`.
      else if (!isBadVersion(Math.floor((lowV + highV) / 2)))
        lowV = Math.ceil((lowV + highV) / 2);
    }

    // The result should be the last bad version we find in our binary search.
    return highV;
  };
}
