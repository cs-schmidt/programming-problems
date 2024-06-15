/**
 * Problem 945: Minimum Increment to Make Array Unique
 *
 * Constraints:
 *   1. 1 <= nums.length <= 10^5
 *   2. 0 <= nums[i] <= 10^5
 */

/**
 * Imperative Solution
 *
 * Complexity:
 * - Time complexity: O(n*log(n)).
 * - Space complexity: O(1).
 *
 * Note:
 * 1. The time complexity is based on the array sortition method used, this will
 *    depend on the JS environment: Node.js, Firefox, etc. For my purposes I'll
 *    assume it's some variaton of Quicksort like Introsort.
 * 2. The space complexity is only constant because I'm sorting the input array
 *    instead of a copy. The question doesn't prevent this, but you wouldn't
 *    want to do this in most scenarios.
 *
 * @param {number[]} nums
 * @returns {number}
 */
function minIncrementForUnique(nums) {
  if (nums.length <= 1) return 0;
  let result = 0;
  nums.sort((num1, num2) => {
    if (num1 < num2) return -1;
    if (num2 > num1) return 1;
    return 0;
  });
  let maxNumSoFar = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= maxNumSoFar) {
      result += maxNumSoFar - nums[i] + 1;
      maxNumSoFar += 1;
    } else maxNumSoFar = nums[i];
  }
  return result;
}
