// Problem 205: Isomorphic Strings
// NOTE: Popular question.

function isIsomorphic(s: string, t: string): boolean {
	// If strings `s` and `t` are isomorphic, then they must have the same length.
	if (s.length !== t.length) return false;

  // Initialize two data structures: an object of character mappings from `s` to 
  // `t`, and the set of unique characters in `t` that have already been mapped.
	const charMappings: Object = {};
	const mappedChars: Set<String> = new Set();

  // Iterate over each index shared by the strings.
	for (let i: number = 0; i < s.length; i++) {
		// When both `s[i]` and `t[i]` haven't been mapped.
		if (!charMappings[s[i]] && !mappedChars.has(t[i])) {
			// Store the mapping of `s[i]` to `t[i]` in `charMappings`, and the fact 
      // that `t[i]` has been mapped in `mappedChars`.
			charMappings[s[i]] = t[i];
			mappedChars.add(t[i]);
		}
		// When `s[i]` hasn't been mapped, but `t[i]` has been mapped, then we know
    // that `s` and `t` are not isomorphic.
		else if (!charMappings[s[i]] && mappedChars.has(t[i])) return false;
		// When `s[i]` has been mapped, but `t[i]` hasn't been mapped, then we know
    // that `s` and `t` are not isomorphic.
		else if (charMappings[s[i]] && !mappedChars.has(t[i])) return false;
		// When `s[i]` is already been mapped and `t[i]` is already mapped, but not
		// to each other.
		else if (charMappings[s[i]] !== t[i]) return false;
    // When none of the above conditions hold, we know `s[i]` and `t[i]` are 
    // already mapped to one another. Thus we continue to the next iteration.
	}

	return true;
}
