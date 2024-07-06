/**
 * Problem 2462: Total Cost to Hire K Workers
 *
 * Constraints:
 *  1. 1 <= costs.length, costs[i] <= 10^5
 *  2. 1 <= k, candidates <= costs.length
 */

// TODO: Improve time complexity.

/**
 * Imperative, Iterative, and Pure Solution.
 *
 * Time complexity: (?).
 * Space complexity: O(candidates) auxiliary space.
 */
function totalCost(costs: number[], k: number, candidates: number): number {
  let result: number = 0;
  let middleLow: number = candidates;
  let middleHigh: number = getMiddleHigh();
  const lowerCosts: number[] = costs.slice(0, middleLow);
  const upperCosts: number[] = costs.slice(middleHigh + 1);
  heapify(lowerCosts);
  heapify(upperCosts);
  while (k--) {
    if (lowerCosts[0] <= (upperCosts[0] ?? Infinity)) {
      result += lowerCosts.shift();
      if (middleLow <= middleHigh) lowerCosts.unshift(costs[middleLow++]);
      else if (lowerCosts.length) lowerCosts.unshift(lowerCosts.pop());
      siftDown(lowerCosts);
    } else {
      result += upperCosts.shift();
      if (middleLow <= middleHigh) upperCosts.unshift(costs[middleHigh--]);
      else if (upperCosts.length) upperCosts.unshift(upperCosts.pop());
      siftDown(upperCosts);
    }
  }
  return result;

  // Internal Helper Functions
  // **************************************************
  function getMiddleHigh() {
    return costs.length - Math.min(candidates, costs.length - candidates) - 1;
  }

  /** Transforms the array of numbers into a min-heap. */
  function heapify(nums: number[]): void {
    let index: number = Math.floor((nums.length - 1) / 2);
    while (index >= 0) siftDown(nums, index--);
  }

  /** Does a sift down operation on an array of numbers starting from `i`. */
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
