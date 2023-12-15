/**
 * Problem 216: Combination Sum III
 *
 * Constraints:
 *  1. 2 <= k <= 9
 *  2. 1 <= n <= 60
 */

// TODO: Complete this problem.

/**
 * Iterative and Imperative Solution
 *
 * Complexity: <time complexity> and <space complexity>.
 */
function combinationSum3(k: number, n: number): number[][] {
  let max = 9;
  const partition: number[] = [];
  const result: number[][] = [];

  // XXX: Does it stop when partition is full?
  while (naturalSum(k) <= n && n >= k * max - naturalSum(k - 1)) {
    partition.push(max);
    max -= 1;
    k -= 1;
  }

  return result;
}

// Additional Procedures
// =================================================================
/**
 * Computes the sum of positive integers up to and including the input.
 * @param {number} num - A positive integer (i.e., a natural number).
 * @return {number} A positive integer or NaN if the sum can't be computed.
 */
function naturalSum(num: number): number {
  return !Number.isInteger(num) ||
    num < 1 ||
    Math.abs(num) > Number.MAX_SAFE_INTEGER
    ? NaN
    : (num * (num / 2)) / 2;
}

// function combinationSum3(k: number, n: number): number[][] {
//   const result: number[][] = [];
//   let partition: number[] = [];
//   let max = 9;
//   let c = k;

//   // Condition indicates if a selection of `k` distinct integers between 1 and
//   // `max` can sum together and equate to `n`.
//   while (naturalSum(c) <= n && n <= c * max + naturalSum(c - 1)) {
//     partition.push(max);
//     n -= max;
//     c -= 1;
//     max -= 1;
//   }

//   if (partition.length === k) {
//     result.push(partition);
//     partition = [];
//   }
//   // Otherwise.
//   else {
//     //
//   }

//   return result;

//   // Internal Procedures
//   // =================================================================
//   /**
//    * Computes the sum of positive integers up to the input.
//    * @param {number} num - A natural number (a positive integer).
//    * @return {number} The sum of positive integers up to the input, or NaN if it
//    *   can't be computed for the given input.
//    */
//   function naturalSum(num: number) {
//     if (num <= 0 || !Number.isInteger(num)) return NaN;
//     return (num * (num + 1)) / 2;
//   }
// }
