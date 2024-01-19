/**
 * Problem 1207: Unique Number of Occurences
 *
 * Constraints:
 *  1. 1 <= arr.length <= 1000
 *  2. -1000 <= arr[i] <= 1000
 */

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(n) time and O(n) auxiliary space.
 */
function uniqueOccurrences(arr: number[]): boolean {
  const elementFrequencies: Map<number, number> = new Map();
  const distictFrequencies: Set<number> = new Set();
  for (const element of arr)
    elementFrequencies.set(element, elementFrequencies.get(element) + 1 || 1);
  for (const frequency of elementFrequencies.values())
    distictFrequencies.add(frequency);
  return elementFrequencies.size === distictFrequencies.size;
}
