/**
 * Problem 394: Decode String
 *
 * Constraints:
 *  1. 1 <= s.length <= 30
 *  2. s consists of lowercase English letters, digits, and square brackets '[]'.
 *  3. s is guaranteed to be a valid input.
 *  4. All the integers in s are in the range [1, 300].
 */

/**
 * Iterative and Imperative Solution
 *
 * Complexity: O(n) time and O(n) auxiliary space.
 */
function decodeString(s: string): string {
  const multipliers: number[] = [1];
  const innerStrings: string[] = [''];

  let charIdx = 0;
  while (charIdx < s.length) {
    if (/[a-z]/.test(s[charIdx]))
      innerStrings.push(innerStrings.pop() + s[charIdx]);
    else if (/\d/.test(s[charIdx])) {
      let digitString = '';
      while (/\d/.test(s[charIdx])) {
        digitString += s[charIdx];
        charIdx += 1;
      }
      multipliers.push(Number(digitString));
      innerStrings.push('');
    } else {
      while (s[charIdx] === ']') {
        const temp = innerStrings.pop().repeat(multipliers.pop());
        innerStrings.push(innerStrings.pop() + temp);
        charIdx += 1;
      }
      continue;
    }

    charIdx += 1;
  }

  return innerStrings[0];
}
