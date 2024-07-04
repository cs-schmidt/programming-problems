/**
 * Problem 2462: Total Cost to Hire K Workers
 *
 * Constraints:
 *  1. 1 <= costs.length <= 10^5
 *  2. 1 <= costs[i] <= 10^5
 *  3. 1 <= k, candidates <= costs.length
 */

// TODO: Complete solution.

/**
 * Imperative, Iterative, and Impure Solution
 *
 * Time complexity: O(k * log(min{candidates + k - 1, |costs|})).
 * Space complexity: O(1).
 */
function totalCost(costs: number[], k: number, candidates: number): number {
  let result: number = 0;
  let leftSize: number = Math.min(candidates + k - 1, costs.length);
  let rightSize: number = Math.min(costs.length - leftSize, candidates + k - 1);

  console.log(`Left size: ${leftSize}`);
  console.log(`Right size: ${rightSize}`);

  buildLeftHeap(costs, leftSize);
  buildRightHeap(costs, rightSize);

  console.log(costs);

  while (k) {
    console.log(`Iteration ${k}:`);
    if (costs.at(0) <= costs.at(-1)) {
      result += costs.shift();
      leftSize -= 1;
    } else {
      result += costs.pop();
      rightSize -= 1;
    }

    siftDownLeft(costs, leftSize);
    siftDownRight(costs, rightSize);

    k -= 1;
  }

  return result;

  // Internal Helper Functions
  // **************************************************
  function buildLeftHeap(nums: number[], size: number) {
    const startIdx: number = Math.floor(size - 1 / 2) - 1;
    for (let i: number = startIdx; i >= 0; i--) siftDownLeft(nums, size, i);
  }

  function buildRightHeap(nums: number[], size: number) {
    const endIdx: number = -Math.floor(size / 2);
    for (let i: number = endIdx; i <= -1; i++) siftDownRight(nums, size, i);
  }

  function siftDownLeft(nums: number[], size: number, idx: number = 0): void {
    let minIdx: number = idx;
    let leftIdx: number = 2 * idx + 1;
    let rightIdx: number = 2 * idx + 2;

    while (true) {
      if (nums[leftIdx] < nums[minIdx] && leftIdx < size) minIdx = leftIdx;
      if (nums[rightIdx] < nums[minIdx] && rightIdx < size) minIdx = rightIdx;
      if (minIdx !== idx) {
        [nums[minIdx], nums[idx]] = [nums[idx], nums[minIdx]];
        idx = minIdx;
        leftIdx = 2 * idx + 1;
        rightIdx = 2 * idx + 2;
      } else break;
    }
  }

  function siftDownRight(nums: number[], size: number, idx: number = -1): void {
    let minIdx: number = idx;
    let leftIdx: number = 2 * idx;
    let rightIdx: number = 2 * idx - 1;

    while (true) {
      if (nums.at(leftIdx) < nums.at(minIdx) && leftIdx >= -size)
        minIdx = leftIdx;
      if (nums.at(rightIdx) < nums.at(minIdx) && rightIdx >= -size)
        minIdx = rightIdx;
      if (minIdx !== idx) {
        const len: number = nums.length;
        [nums[len + minIdx], nums[len + idx]] = [
          nums[len + idx],
          nums[len + minIdx]
        ];
        idx = minIdx;
        leftIdx = 2 * idx;
        rightIdx = 2 * idx - 1;
      } else break;
    }
  }
}
