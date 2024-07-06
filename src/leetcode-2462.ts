/**
 * Problem 2462: Total Cost to Hire K Workers
 *
 * Constraints:
 *  1. 1 <= costs.length, costs[i] <= 10^5
 *  2. 1 <= k, candidates <= costs.length
 */

/**
 * Imperative, Iterative, and Pure Solution.
 *
 * Time complexity: O(k * log(candidates)).
 * Space complexity: O(candidates) auxiliary space.
 */
function totalCost(costs: number[], k: number, candidates: number): number {
  let result: number = 0;
  let middleHead: number = candidates;
  let middleTail: number =
    costs.length - Math.min(candidates, costs.length - candidates) - 1;
  const lowerCosts: number[] = costs.slice(0, middleHead);
  const upperCosts: number[] = costs.slice(middleTail + 1);
  heapify(lowerCosts);
  heapify(upperCosts);
  while (k--) {
    if (lowerCosts[0] <= (upperCosts[0] ?? Infinity)) {
      if (middleHead <= middleTail) {
        result += lowerCosts[0];
        lowerCosts[0] = costs[middleHead++];
      } else {
        swapEnds(lowerCosts);
        result += lowerCosts.pop();
      }
      siftDown(lowerCosts);
    } else {
      if (middleHead <= middleTail) {
        result += upperCosts[0];
        upperCosts[0] = costs[middleTail--];
      } else {
        swapEnds(upperCosts);
        result += upperCosts.pop();
      }
      siftDown(upperCosts);
    }
  }
  return result;

  // Internal Helper Functions
  // **************************************************
  /** Swaps the first and last elements in an array. */
  function swapEnds(nums: number[]): void {
    if (nums.length)
      [nums[0], nums[nums.length - 1]] = [nums[nums.length - 1], nums[0]];
  }

  /** Transforms a number array into a min-heap. */
  function heapify(nums: number[]): void {
    let index: number = Math.floor((nums.length - 1) / 2);
    while (index >= 0) siftDown(nums, index--);
  }

  /** Does a Sifts down on a number array starting at `i`. */
  function siftDown(nums: number[], i: number = 0): void {
    let min: number = i;
    let left: number = 2 * i + 1;
    let right: number = 2 * i + 2;
    while (true) {
      if (left >= 0 && nums[left] < nums[min]) min = left;
      if (right >= 0 && nums[right] < nums[min]) min = right;
      if (min !== i) {
        [nums[min], nums[i]] = [nums[i], nums[min]];
        i = min;
        left = 2 * i + 1;
        right = 2 * i + 2;
      } else break;
    }
  }
}
