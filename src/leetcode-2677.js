/**
 * Problem 2677: Chunk Array
 *
 * Constraints:
 *  1. arr is a valid JSON array
 *  2. 2 <= JSON.stringify(arr).length <= 10^5
 *  3. 1 <= size <= arr.length + 1
 */

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(1) time and O(1) auxiliary space.
 */
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
function chunk(arr, size) {
  const result = [];
  let sliceStart = 0;
  let sliceEnd = size;
  while (sliceStart < arr.length) {
    result.push(arr.slice(sliceStart, sliceEnd));
    sliceStart = sliceEnd;
    sliceEnd += size;
  }
  return result;
}
