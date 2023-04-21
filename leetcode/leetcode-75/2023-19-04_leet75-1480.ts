// Problem 1480: Running Sum of 1d Array

function runningSum(nums: number[]): number[] {
  const result: number[] = [];
  let currentSum: number = 0;
  for (let i: number = 0; i < nums.length; i++) {
    result.push(currentSum += nums[i]);
  }
  return result;
};