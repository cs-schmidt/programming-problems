/**
 * Problem 2625: Flatten Deeply Nested Array
 *
 * Constraints:
 *  1. 0 <= count of numbers in arr <= 10^5
 *  2. 0 <= count of subarrays in arr <= 10^5
 *  3. maxDepth <= 1000
 *  4. -1000 <= each number <= 1000
 *  5. 0 <= n <= 1000
 */

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

/** Declarative and Recursive Solution */
function flat(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  const result: MultiDimensionalArray = [];
  let depth = n;
  extractResult(arr);
  return result;
  // Internal Procedures
  // =================================================================
  function extractResult(currentArray: MultiDimensionalArray) {
    currentArray.forEach((value) => {
      if (value instanceof Array && depth > 0) {
        depth -= 1;
        extractResult(value);
      } else result.push(value);
    });
    depth += 1;
  }
}
