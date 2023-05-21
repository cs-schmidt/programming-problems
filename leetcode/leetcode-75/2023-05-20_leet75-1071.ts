// Problem 1071: Greatest Common Divisor of Strings
// TODO: Complete this challenge problem.

/**
 * Constraints:
 *
 * 1) 1 <= `str1.length`, `str2.length` <= 1000
 * 2) `str1` and `str2` consist of English uppercase letters.
 *
 */

function gcdOfStrings(str1: string, str2: string): string {
  // Start by computing the GCD between `str1.length` and `str2.length`. The
  // longest substring dividing both `str1` and `str2` can't be longer than
  // this value.
  var maxResultLen = gcd(str1.length, str2.length);

  // Now, we want to check for the longest repeating substring that occurs in
  // `str1` and `str2` up to `maxResultLen`.
  var maxSubStr: string = '';
  var subStrIdx: number = 0;
  var searchIdx: number = 0;
  while (searchIdx < Math.min(str1.length, str2.length)) {
    if (str1[searchIdx] != str2[searchIdx]) return '';
    while (
      maxSubStr[subStrIdx] == str1[searchIdx] &&
      subStrIdx != maxSubStr.length
    ) {
      subStrIdx += 1;
      searchIdx += 1;
    }
    if (subStrIdx < maxSubStr.length || maxSubStr.length == 0) {
      if (searchIdx + 1 > maxResultLen) return '';
      maxSubStr = str1.slice(0, searchIdx + 1);
    }
    if (subStrIdx != maxSubStr.length) searchIdx += 1;
    subStrIdx = 0;
  }

  // Now, we want to check the remainder of the longer string (either `str1` or
  // `str2`).
  var longerStr = str1.length > str2.length ? str1 : str2;
  searchIdx = Math.min(str1.length, str2.length);
  while (searchIdx < longerStr.length) {
    while (subStrIdx < maxSubStr.length) {
      if (maxSubStr[subStrIdx] != longerStr[searchIdx]) return '';
      subStrIdx += 1;
      searchIdx += 1;
    }
    if (subStrIdx != maxSubStr.length) searchIdx += 1;
    subStrIdx = 0;
  }

  return maxSubStr;
}

/**
 * Computes the greatest common divisor between two numbers.
 */
function gcd(num1: number, num2: number) {
  while (num1 != num2) {
    if (num1 > num2) num1 -= num2;
    else num2 -= num1;
  }
  return num1;
}
