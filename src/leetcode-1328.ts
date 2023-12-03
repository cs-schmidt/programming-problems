/**
 * Problem 1328: Break a Palindrome
 *
 * Constraints:
 *  1. 1 <= palindrome.length <= 1000
 *  2. palindrome consists of only lowercase English letters.
 */

function breakPalindrome(palindrome: string): string {
  // Given `palindrome` is just that, a palindrome, we want to start by checking
  // from it's beginning to it's "middle", looking for the first character
  // that's not the letter a, replace it with a, and return the result. The
  // location of the "middle" depends on whether the string length is even or
  // odd.
  if (palindrome.length % 2 === 0) {
    for (let i = 0; i <= Math.floor((palindrome.length - 1) / 2); i++) {
      if (palindrome[i] !== 'a')
        return `${palindrome.slice(0, i)}a${palindrome.slice(i + 1)}`;
    }
  } else {
    for (let i = 0; i < Math.floor((palindrome.length - 1) / 2); i++) {
      if (palindrome[i] !== 'a')
        return `${palindrome.slice(0, i)}a${palindrome.slice(i + 1)}`;
    }
  }

  // If we didn't return a result by now, then we didn't find any character that
  // wasn't the letter a. Therefore, we have to replace the last character with
  // the letter b, this produces the lowest lexographical result. We only do
  // this if the length of `palindrome` is greater than or equal to 1. Otherwise,
  // we just return an empty string.
  if (palindrome.length > 1) {
    if (palindrome.at(-1) === 'a') return `${palindrome.slice(0, -1)}b`;
    return `${palindrome.slice(0, -1)}a`;
  }
  return '';
}
