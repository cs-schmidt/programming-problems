/**
 * Problem 2695: Array Wrapper
 *
 * Constraints:
 *  1. 0 <= nums.length <= 1000
 *  2. 0 <= nums[i] <= 1000
 *  3. Note: nums is the array passed to the constructor
 */

class ArrayWrapper {
  nums: number[] = [];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf(): number {
    return this.nums.reduce((result, num) => result + num, 0);
  }

  toString(): string {
    return `[${this.nums.toString()}]`;
  }
}
