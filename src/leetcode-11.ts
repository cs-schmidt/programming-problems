/**
 * Problem 11: Container With Most Water
 *
 * Constraints:
 *  1. n == height.length
 *  2. 2 <= n <= 10^5
 *  3. 0 <= height[i] <= 10^4
 */

// TODO: Improve solution's time and space complexity.
// TODO: Improve code cleanliness.

/**
 * Imperative and Iterative Solution
 *
 * Complexity: <time> and <space> auxiliary complexity.
 */
function maxArea(height: number[]): number {
  let leftEdge: number = height.findIndex((num) => num !== 0);
  let rightEdge: number = height.length - 1;
  while (height[rightEdge] == 0) rightEdge -= 1;
  let currentMaxArea: number = getArea(leftEdge, rightEdge);
  while (leftEdge !== rightEdge) {
    if (height[leftEdge] > height[rightEdge]) {
      const rightEdgeHeight = height[rightEdge];
      while (rightEdge !== leftEdge && height[rightEdge] <= rightEdgeHeight)
        rightEdge -= 1;
    } else if (height[leftEdge] < height[rightEdge]) {
      const leftEdgeHeight = height[leftEdge];
      while (leftEdge !== rightEdge && height[leftEdge] <= leftEdgeHeight)
        leftEdge += 1;
    } else {
      const leftEdgeHeight = height[leftEdge];
      const rightEdgeHeight = height[rightEdge];
      while (leftEdge !== rightEdge && height[leftEdge] <= leftEdgeHeight)
        leftEdge += 1;
      while (rightEdge !== leftEdge && height[rightEdge] <= rightEdgeHeight)
        rightEdge -= 1;
    }
    if (getArea(leftEdge, rightEdge) > currentMaxArea)
      currentMaxArea = getArea(leftEdge, rightEdge);
  }
  return currentMaxArea;
  // Internal Procedures
  // =================================================================
  function getArea(idx1: number, idx2: number): number {
    return Math.abs(idx1 - idx2) * Math.min(height[idx1], height[idx2]);
  }
}
