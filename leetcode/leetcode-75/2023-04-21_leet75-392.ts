// Problem 392: Is Subsequence
// NOTE: Popular questions.

/**
 * Constraints:
 *
 * 1) 0 <= s.length <= 100
 * 2) 0 <= t.length <= 10^4
 * 3) s and t consist only of lowercase English letters.
 *
 */

function isSubsequence(s: string, t: string): boolean {
	// We want to know if a subsequence of `t` matches `s`. This could only be the
	// case when the length of `s` is less than or equal to the length of `t`.
	if (s.length > t.length) return false;

	// We check both `s` and `t` going left to right, while the remaining
	// characters of `s` are less than that of the remaining characters of`t`.
	let sIdx: number = 0;
	let tIdx: number = 0;
	while (charsLeft(s, sIdx) <= charsLeft(t, tIdx) && charsLeft(s, sIdx) !== 0) {
		if (s[sIdx] === t[tIdx]) sIdx++;
		tIdx++;
	}

	// Either the characters left in `s` was greater than that of the characters
	// left in `t`, or there are no more characters left in `s`.
	if (charsLeft(s, sIdx) > charsLeft(t, tIdx)) return false;
	else if (s[sIdx - 1] === t[tIdx - 1]) return true;
	else return false;

	// ******************************

	/**
	 * Computes the number of characters remaining in a string starting from an
	 * index.
	 */
	function charsLeft(str: string, i: number) {
		if (i < 0) throw RangeError();
		else if (str.length - 1 < i) return 0;
		return str.length - i;
	}
}
