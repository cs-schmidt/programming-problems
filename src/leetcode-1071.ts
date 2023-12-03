/**
 * Problem 1071: Greatest Common Divisor of Strings
 *
 * Constraints:
 *  1. 1 <= `str1.length`, `str2.length` <= 1000
 *  2. `str1` and `str2` consist of English uppercase letters.
 */

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 == str2 + str1) {
    while (str1 != str2) {
      if (str1.length > str2.length)
        str1 = str1.slice(str2.length, str1.length);
      else str2 = str2.slice(str1.length, str2.length);
    }
    return str1;
  }
  return '';
}
