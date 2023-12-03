/**
 * Problem 1428: Leftmost Column with at Least a One
 *
 * Constraints:
 *  1. rows == mat.length
 *  2. cols == mat[i].length
 *  3. 1 <= rows, cols <= 100
 *  4. mat[i][j] is either 0 or 1
 *  5. mat[i] is sorted in non-decreasing order
 *  6. BinaryMatrix.get can only be called 1000 times or less
 *  7. You can only access the binary matrix through it's interface
 */

// Below is the BinaryMatrix's API interface. You should not implement it, or
// speculate about its implementation.
interface BinaryMatrix {
  get(row: number, col: number): number;
  dimensions(): number[];
}

function leftMostColumnWithOne(binaryMatrix: BinaryMatrix): number {
  // My approach here will be to iterate through each of the rows in
  // `binaryMatrix` and preform a modified binary search within each of them,
  // ceasing once I know that there's no further left-most column containing a
  // 1.
  const [rows, cols] = binaryMatrix.dimensions();
  let currRow: number = 0;
  let maxCol: number = cols - 1;
  let found: boolean = false;

  // Iterate through the rows of `binaryMatrix`.
  while (currRow < rows && maxCol !== 0) {
    // Preform the modified binary search within the current row (`currRow`).
    // This version of binary search will cease when we find the left-most 1 in
    // the current row or when we determine that we found a more left-ward 1 in
    // a previously searched row.
    let lowIdx: number = 0;
    let highIdx: number = maxCol;
    while (lowIdx < highIdx) {
      const midIdx: number = Math.floor((highIdx + lowIdx) / 2);
      if (binaryMatrix.get(currRow, midIdx) === 1) highIdx = midIdx;
      else lowIdx = midIdx + 1;
    }

    // After the loop above we check if we found a new left-most column.
    if (lowIdx <= maxCol && binaryMatrix.get(currRow, lowIdx) === 1) {
      maxCol = lowIdx;
      if (!found) found = true;
    }
    currRow += 1;
  }

  return found ? maxCol : -1;
}
