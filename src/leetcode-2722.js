/**
 * Problem 2722: Join Two Arrays by ID
 *
 * Constraints:
 *  1. arr1 and arr2 are valid JSON arrays
 *  2. Each object in arr1 and arr2 has a unique integer id key
 *  3. 2 <= JSON.stringify(arr1).length <= 10^6
 *  4. 2 <= JSON.stringify(arr2).length <= 10^6
 */

/**
 * Declarative and Iterative Solution
 *
 * Complexity: O(max(|arr1|, |arr2|)) time and O(|arr1 ⋃ arr2|) auxiliary space.
 */
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function join(arr1, arr2) {
  const retainedValues = {};
  arr1.forEach((value) => (retainedValues[value.id] = value));
  arr2.forEach((value) => {
    if (!retainedValues[value.id]) retainedValues[value.id] = value;
    else
      retainedValues[value.id] = Object.assign(retainedValues[value.id], value);
  });
  return Object.values(retainedValues).sort(({ id: a }, { id: b }) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}
