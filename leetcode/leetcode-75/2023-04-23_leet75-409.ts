// Problem 409: Longest Palindrome
// NOTE: Popular question.

/**
 * Constraints:
 *
 * 1) 1 <= s.length <= 2000.
 * 2) s consists of lowercase and/or uppercase English letters only.
 * 3) analysis is case-sensitive; e.g., "Aa" is not considered a palindrome.
 *
 */

function longestPalindrome(s: string): number {
	// Initialize variable `result` and `charFrequency`, the former represents the
	// result we're going to return, and the latter is an object mapping the
	// characters encountered in `s` and the number of times they occur.
	const charFrequency: { [key: string]: number } = {};
	let maxOddFrequency: number = 1;
	let result: number = 1;

	// Iterate through the string observing each character encountered.
	for (let char of s) {
		// When the character has been encountered before, add 1 to it's frequency.
		// Then check the resultant frequency to see if it is even or if it is odd
		// and greater than `maxOddFrequency`.
		if (charFrequency[char]) {
			charFrequency[char] += 1;
			// When the charcter frequency is even, then add 1 to `result`.
			if (charFrequency[char] % 2 === 0 && charFrequency[char] > maxOddFrequency) result = result - charFrequency[char] + 1;
      else if (charFrequency[char] % 2 === 0) result += charFrequency[char];
			// When the character frequency is odd and greater that `maxOddFrequency`,
			// then update the `maxOddFrequency` and add 1 to `result`.
			else if (charFrequency[char] > maxOddFrequency) {
				maxOddFrequency = charFrequency[char];
				result += 2;
			}
			// When the character frequency is odd and less than the
			// `maxOddFrequency`, then we have to decrement result by that frequency.
			else result -= charFrequency[char];
		}
		// When the character hasn't been encountered before add it to
		// `charFrequency` with a frequency of 1.
		else charFrequency[char] = 1;
	}

	return result;
}
