/**
 * Problem 216: Combination Sum III
 *
 * Constraints:
 *  1. 2 <= k <= 9
 *  2. 1 <= n <= 60
 */

/**
 * Iterative and Imperative Solution
 *
 * Complexity: O([n choose k]) time and O([n choose k]) auxiliary space.
 */
function combinationSum3(k: number, n: number): number[][] {
  return generateCombinations(k).filter(
    (nums) => nums.reduce((acc, v) => acc + v, 0) === n
  );
}

// Additional Procedures
// =================================================================
/**
 * Finds all the k-length combinations of the numbers {9, 8, ..., 1}, in
 * descending order of each combinations summed value.
 * @param {number} k - The length of combination.
 * @return {number[][]}
 */
// TODO: Revisit this problem, try to understand the selection algorithm.
function generateCombinations(k: number): number[][] {
  const result: number[][] = [];

  function generateCombinationHelper(
    currentCombination: number[],
    start: number
  ): void {
    if (currentCombination.length === k) {
      result.push([...currentCombination.reverse()]);
      currentCombination.reverse();
      return;
    }

    for (let i = 9; i >= start; i--) {
      currentCombination.push(i);
      generateCombinationHelper(currentCombination, i + 1);
      currentCombination.pop();
    }
  }

  generateCombinationHelper([], 1);

  return result;
}

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
