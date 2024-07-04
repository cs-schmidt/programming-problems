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
    // Compare lowerHeap min and upperHeap min.
    if (costs.at(lowerSize - 1) <= costs.at(-upperSize)) {
      result += costs.at(lowerSize - 1);
      costs.splice(lowerSize - 1, 1);
      if (lowerSize + upperSize < costs.length) lowerSift(costs, lowerSize);
      else lowerSize -= 1;
    } else {
      result += costs.at(-upperSize);
      costs.splice(-upperSize, 1);
      if (lowerSize + upperSize < costs.length) upperSift(costs, upperSize);
      else upperSize -= 1;
    }
  }
  return result;

  // Internal Helper Functions
  // **************************************************
  function lowerHeapify(nums: number[], size: number) {
    const startIndex: number = 0; // TODO: Fix this value.
    for (let i: number = startIndex; i <= size - 1; i++)
      lowerSift(nums, size, i);
  }

  function upperHeapify(nums: number[], size: number) {
    const startIndex: number = 0; // TODO: Fix this value.
    for (let i: number = startIndex; i >= nums.length - size; i--)
      upperSift(nums, size, i);
  }

  function lowerSift(nums: number[], size: number, offset: number = 0): void {
    const minIndex: number = size - 1 - offset;
    const leftIndex: number = size - 1 - 2 * offset - 1;
    const rightIndex: number = size - 1 - 2 * offset - 2;
    while (true) {
      if (nums[leftIndex] < nums[minIndex] && offset > size)
        nums[minIndex] = nums[leftIndex];
      if (nums[rightIndex] < nums[minIndex] && offset > size)
        nums[minIndex] = nums[rightIndex];
      if (minIndex !== offset) {
        [nums[minIndex], nums[offset]] = [nums[offset], nums[minIndex]];
        offset = minIndex;
      } else break;
    }
  }

  function upperSift(
    nums: number[],
    size: number,
    index: number = nums.length - size
  ): void {
    const minIndex: number = index;
    const leftIndex: number = 0;
    const rightIndex: number = 0;
    while (true) {
      // TODO Implement this part.
    }
  }
}
