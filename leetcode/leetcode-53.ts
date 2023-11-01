// Problem 53: Maximum Subarray

/**
 * Constraints:
 *
 * 1) 1 <= nums.length <= 10^5
 * 2) -10^4 <= nums[i] <= 10^4
 */

function maxSubArray(nums: number[]): number {
  // Initialize two variables, the `result` and `index`. The former will be
  // simply that, the result that is returned, and the latter will be the
  // current index in `nums` as we iterate from left to right.
  let result = nums[0];
  let index = 0;

  // We start by checking from the start the longest sequence of negative
  // integers in `nums`.
  while (nums[index] < 0 && index < nums.length) {
    if (nums[index] > result) result = nums[index];
    index += 1;
  }

  // Now we've landed upon a non-negative number assuming `index` is less than
  // `nums.length`.
  if (index < nums.length) {
    // Initialize result to the current value: a non-negative number.
    result = nums[index];
    let partitionMSum = 0;
    let partitionCSum = 0;
    index += 1;

    while (index < nums.length) {
      while (nums[index] < 0 && index < nums.length) {
        partitionCSum += nums[index];
        index += 1;
      }

      while (nums[index] >= 0 && index < nums.length) {
        partitionMSum += nums[index];
        index += 1;
      }

      if (
        result + partitionCSum + partitionMSum >
        Math.max(result, partitionMSum)
      ) {
        result += partitionCSum + partitionMSum;
        partitionMSum = 0;
        partitionCSum = 0;
      } else if (result < partitionMSum) {
        result = partitionMSum;
        partitionMSum = 0;
        partitionCSum = 0;
      } else {
        partitionCSum += partitionMSum;
        partitionMSum = 0;
      }
    }
  }

  return result;
}
