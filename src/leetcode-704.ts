/**
 * Problem 704: Binary Search
 *
 * Constraints:
 *  1. 1 <= nums.length <= 10^4.
 *  2. -10^4 < nums[i], target < 10^4
 *  3. All the integers in nums are unique.
 *  4. nums is sorted in ascending order.
 */

function search(nums: number[], target: number): number {
  let start = 0;
  let end: number = nums.length - 1;

  while (start <= end) {
    if (start === end && nums[start] !== target) return -1;
    if (nums[Math.floor((start + end) / 2)] < target)
      start = Math.ceil((start + end) / 2);
    else if (nums[Math.floor((start + end) / 2)] > target)
      end = Math.floor((start + end) / 2);
    else if (nums[Math.floor((start + end) / 2)] === target)
      return Math.floor((start + end) / 2);
  }
}
