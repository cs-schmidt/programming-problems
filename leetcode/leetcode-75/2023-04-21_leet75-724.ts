// Problem 724: Find Pivot Index
// NOTE: Popular question.

/**
 * Constraints:
 *
 * 1) 1 <= nums.length <= 10^4
 * 2) -1000 <= nums[i] <= 1000
 *
 */

function pivotIndex(nums: number[]): number {
	// When there is only 1 element in `nums` we're done.
	if (nums.length === 1) return 0;

	// There's more than 1 element in `nums`. Start the pivot index on the second
	// element, and initialize variables to keep track of the sum to the left and
	// right of the pivot.
	let pivot: number = 0;
	let lSum: number = 0;
	let rSum: number = 0;

	// Initialize the right-hand sum of the pivot.
	for (let i: number = pivot + 1; i < nums.length; i++) rSum += nums[i];

	// Iteratively compare `lSum` and `rSum`, and adjust their value at the next 
  // pivot.
	while (lSum !== rSum && pivot < nums.length) {
		lSum += nums[pivot];
		rSum -= nums[pivot += 1];
	}

	// Check if the pivot went beyond the allowable range and return the result.
	if (pivot > nums.length - 1) return -1;
	return pivot;
}
