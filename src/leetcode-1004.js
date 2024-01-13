/**
 * Problem 1004: Max Consecutive Ones III
 *
 * Constraints:
 *  1. 1 <= nums.length <= 10^5
 *  2. nums[i] is either 0 or 1.
 *  3. 0 <= k <= nums.length
 */

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
/**
 * @param {number[]} bits
 * @param {number} k
 * @return {number}
 */
function longestOnes(bits, k) {
  let result = 1;
  const chainStart = 0;
  let chainEnd = 0;
  let zerosInChain = bits.at(0) === 0 ? 1 : 0;
  const bitsEnd = bits.length - 1;

  // Initializes the sliding chain of ones. [O(n) time]
  while (zerosInChain !== k && chainEnd !== bitsEnd) {
    if (bits.at(chainEnd + 1) === 0) zerosInChain += 1;
    chainEnd += 1;
  }
  while (chainEnd !== bitsEnd && bits.at(chainEnd + 1) === 1) chainEnd += 1;
  result = Math.max(chainEnd - chainStart + 1, result);

  // TODO: Slides chain through bits, checking each chain of ones we can form.

  return result;
}
