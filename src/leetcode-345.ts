/**
 * Problem 345: Reverse Vowels of a String.
 *
 * Constraints:
 *  1. 1 <= s.length <= 3 * 10^5
 *  2. s consist of printable ASCII characters.
 */

/**
 * Iterative and Imperative Solution
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
function reverseVowels(s: string): string {
  let leftVowelIdx = 0;
  let rightVowelIdx = s.length - 1;
  const vowelRegex = /^[aeiou]$/i;

  while (leftVowelIdx < rightVowelIdx) {
    // Find the index of the next vowel to the left of `rightVowelIndex`.
    while (!vowelRegex.test(s[leftVowelIdx]) && leftVowelIdx < s.length)
      leftVowelIdx += 1;

    // Find the index of the next vowel to the right of `leftVowelIndex`.
    while (!vowelRegex.test(s[rightVowelIdx]) && rightVowelIdx >= 0)
      rightVowelIdx -= 1;

    if (leftVowelIdx < rightVowelIdx) {
      // Swap the vowels at `leftVowelIndex` and `rightVowelIndex`.
      const temp = s[leftVowelIdx];
      s =
        s.slice(0, leftVowelIdx) + s[rightVowelIdx] + s.slice(leftVowelIdx + 1);
      s = s.slice(0, rightVowelIdx) + temp + s.slice(rightVowelIdx + 1);

      // Prevent the enclosing loop from continuing infinitely.
      leftVowelIdx += 1;
      rightVowelIdx -= 1;
    }
  }

  return s;
}
