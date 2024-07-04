/**
 * Problem 2462: Total Cost to Hire K Workers
 *
 * Constraints:
 *  1. 1 <= costs.length, costs[i] <= 10^5
 *  2. 1 <= k, candidates <= costs.length
 */

// TODO: Complete solution.

/**
 * Imperative, Iterative, and Impure Solution
 *
 * Time complexity: O(min{k*log(candidates), candidates}).
 * Space complexity: O(1) auxiliary space.
 */
function totalCost(costs: number[], k: number, candidates: number): number {
  let result: number = 0;
  let lowerSize: number = candidates;
  let upperSize: number = Math.min(costs.length - candidates, candidates);
  lowerHeapify(costs, lowerSize);
  upperHeapify(costs, upperSize);
  while (k--) {
    if (costs.at(lowerSize - 1) <= costs.at(-upperSize)) {
      result += costs.at(lowerSize - 1);
      costs.splice(lowerSize - 1, 1);
      if (lowerSize + upperSize > costs.length) lowerSize -= 1;
      lowerSift(costs, lowerSize);
    } else {
      result += costs.at(-upperSize);
      costs.splice(-upperSize, 1);
      if (lowerSize + upperSize > costs.length) upperSize -= 1;
      upperSift(costs, upperSize);
    }
  }
  return result;

  // Internal Helper Functions
  // **************************************************
  /** Transform `nums` into a min-heap down from index `size - 1` to 0. */
  function lowerHeapify(nums: number[], size: number): void {
    let offset: number = -Math.floor(size / 2);
    while (offset <= -1) lowerSift(nums, size, offset++);
  }

  /** Transform `nums` into a min-heap from index `-size` to the last index. */
  function upperHeapify(nums: number[], size: number): void {
    let offset: number = Math.floor((size - 1) / 2);
    while (offset >= 0) upperSift(nums, size, offset--);
  }

  /**
   * Preforms a siftDown operation for a heap who's rightmost member is the top.
   */
  function lowerSift(nums: number[], size: number, offset: number = -1): void {
    let minIdx: number = size + offset;
    let leftIdx: number = size + 2 * offset;
    let rightIdx: number = size + 2 * offset - 1;
    while (true) {
      if (leftIdx >= 0 && nums[leftIdx] < nums[minIdx]) minIdx = leftIdx;
      if (rightIdx >= 0 && nums[rightIdx] < nums[minIdx]) minIdx = rightIdx;
      if (minIdx !== size + offset) {
        [nums[minIdx], nums[size + offset]] = [
          nums[size + offset],
          nums[minIdx]
        ];
        offset = minIdx - size;
        leftIdx = size + 2 * offset;
        rightIdx = size + 2 * offset - 1;
      } else break;
    }
  }

  /**
   * Preforms a siftDown operation for a heap who's leftmost member is the top.
   */
  function upperSift(nums: number[], size: number, offset: number = 0): void {
    let minIdx: number = nums.length - size + offset;
    let leftIdx: number = nums.length - size + 2 * offset + 1;
    let rightIdx: number = nums.length - size + 2 * offset + 2;
    while (true) {
      if (leftIdx < nums.length && nums[leftIdx] < nums[minIdx])
        minIdx = leftIdx;
      if (rightIdx < nums.length && nums[rightIdx] < nums[minIdx])
        minIdx = rightIdx;
      if (minIdx !== nums.length - size + offset) {
        [nums[minIdx], nums[nums.length - size + offset]] = [
          nums[nums.length - size + offset],
          nums[minIdx]
        ];
        offset = minIdx - (nums.length - size);
        leftIdx = nums.length - size + 2 * offset + 1;
        rightIdx = nums.length - size + 2 * offset + 2;
      } else break;
    }
  }
}
