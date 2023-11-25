// Problem 2390: Remove Stars From a String

/**
 * Constraints
 *
 * 1) 1 <= s.length <= 10^5
 * 2) s consists of lowercase English letters and stars *.
 * 3) The operation described in the problem can be performed on s.
 */

function removeStars(s: string): string {
  let currentIndex = 1;

  while (currentIndex < s.length) {
    if (s[currentIndex] == '*') {
      let i = currentIndex - 1;
      const currentLength = s.length;

      while (i >= 0 && s.length == currentLength) {
        if (s[i] != '*') {
          s =
            s.substring(0, i) +
            s.substring(i + 1, currentIndex) +
            s.substring(currentIndex + 1);
          currentIndex -= 2;
        } else i -= 1;
      }
    }
    currentIndex += 1;
  }

  return s;
}
