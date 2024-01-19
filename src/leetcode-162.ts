/**
 * Problem 162: Find Peak Element
 *
 * Constraints:
 *  1. 1 <= nums.length <= 1000
 *  2. -2^31 <= nums[i] <= 2^31 - 1
 *  3. nums[i] != nums[i + 1] for all valid i.
 */

// TODO: Improve solution's time and space complexity.

/**
 * Imperative and Divide-and-Conquer Solution
 *
 * The algorithms works by recursively checking partitions of the input array,
 * dividing those partitions in half until one of the base cases is reached. We
 * check each partition for its peak value's index, then we compare the values
 * across these indexes and return the index with the largest peak value.
 *
 * Complexity: O(log(n)) time and <space> auxiliary space.
 */
function findPeakElement(nums: number[]): number {
  return getPeakIndex(0, nums.length - 1);
  // Internal Procedures
  // =================================================================
  function getPeakIndex(low: number, high: number): number {
    // Base Case 1: The partition of `nums` has 3 elements.
    if (high - low === 2) {
      if (nums[low + 1] > Math.max(nums[low], nums[high])) return low + 1;
      if (nums[low] >= Math.max(nums[low + 1], nums[high])) return low;
      return high;
    }
    // Base Case 2: The partition of `nums` has 2 elements.
    if (high - low < 2) return nums[low] > nums[high] ? low : high;
    // Recursive Case:
    // -----------------------------------------------------------------
    // Finds the peak indexes in the lower and upper partitions, then we compare
    // their associated values in `nums` to return one of the two indexes.
    const mid = low + Math.floor((high - low) / 2);
    const lowerPeakIndex = getPeakIndex(low, mid);
    const upperPeakIndex = getPeakIndex(mid + 1, high);
    return nums[upperPeakIndex] >= nums[lowerPeakIndex]
      ? upperPeakIndex
      : lowerPeakIndex;
  }
}
