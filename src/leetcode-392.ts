/**
 * Problem 392: Is Subsequence
 *
 * Constraints:
 *  1. 0 <= s.length <= 100
 *  2. 0 <= t.length <= 10^4
 *  3. s and t consist only of lowercase English letters.
 */

function isSubsequence(s: string, t: string): boolean {
  // When `s` is the empty string, then we return `true` immediately since the
  // empty string is a subsequence of any string `t`.
  if (s.length == 0) return true;

  // We know `s` is a subsequence of `t` when an ordered traversal over `t` is
  // able to "spell" `s`. We can keep track of the indexes we were able to spell
  //  up to in `s` as we traverse `t`: `sIndex` and `tIndex`.
  let sIndex: number = 0;
  let tIndex: number = 0;

  // We continue to traverse `t` while it we haven't reached the end or the
  // remaining characters to check in `t` are not less than the remaining
  // characters in `s` that we still have to spell up to.
  while (!(tIndex == t.length || t.length - tIndex < s.length - sIndex)) {
    if (s[sIndex] == t[tIndex]) sIndex += 1;
    tIndex += 1;
  }

  // If after looping process above, we got a spelling of `s`, then return true.
  // Otherwise, the result is false.
  if (sIndex == s.length) return true;
  return false;
}
