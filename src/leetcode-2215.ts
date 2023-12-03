/**
 * Problem 2215: Find the Difference of Two Arrays
 *
 * Constraints:
 *  1. 1 <= nums1.length, nums2.length <= 1000
 *  2. -1000 <= nums1[i], nums2[i] <= 1000
 */

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const distinctNums1 = new Set(nums1);
  const distinctNums2 = new Set(nums2);
  const result: number[][] = [[], []];

  for (const num of distinctNums1) {
    if (!distinctNums2.has(num)) result[0].push(num);
    else distinctNums2.delete(num);
  }
  result[1] = Array.from(distinctNums2);

  return result;
}
