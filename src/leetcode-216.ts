/**
 * Problem 216: Combination Sum III
 *
 * Constraints:
 *  1. 2 <= k <= 9
 *  2. 1 <= n <= 60
 */

// TODO: Try to understand the selection algorithm.
// TODO: Improve solution's space complexity.

/**
 * Declarative and Recursive Solution
 *
 * Complexity: O([n choose k]) time and O([n choose k]) auxiliary space.
 */
function combinationSum3(k: number, n: number): number[][] {
  return generateCombinations(k).filter(
    (nums) => nums.reduce((acc, v) => acc + v, 0) === n
  );
}

// Utilities
// =================================================================
/**
 * Finds all the k-length combinations of the numbers {9, 8, ..., 1}, in
 * descending order of each combinations summed value.
 * @param {number} k - The length of combination.
 * @return {number[][]}
 */
function generateCombinations(k: number): number[][] {
  const result: number[][] = [];
  generateCombinationHelper([], 1);
  return result;
  // Internal Procedures
  // =================================================================
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
}
