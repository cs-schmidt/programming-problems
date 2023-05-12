// Problem 205: Isomorphic Strings

/**
 * Constraints:
 *
 * 1) 1 <= s.length <= 5 * 10^4
 * 2) t.length == s.length
 * 3) s and t consist of any valid ascii character.
 */

function isIsomorphic(s: string, t: string): boolean {
  /**
   * Given the constraints of the problem, we only have to determine if there's a
   * bijective mapping between the elements of `s` and `t`. We need to memorize
   * the mappings we've encountered in as we progress through the strings
   * comparing corresponding elements:
   *
   * 1) `mappings`: an object which stores the previous mappings encountered from
   *    `s` to `t`.
   * 2) `mappedTo`: a set of the elements from `t` that have already been mapped
   *    to.
   */
  const mappings: { [key: string]: string } = {};
  const mappedTo: Set<string> = new Set();

  // Progress through the strings comparing correspondng elements. We return
  // `false` as soon as we know a bijective mapping cannot exist.
  for (let i = 0; i < s.length; i++) {
    // Check the conditions for a bijective mapping to exist.
    if (mappings[s[i]] && mappings[s[i]] != t[i]) return false;
    if (mappedTo.has(t[i]) && mappings[s[i]] != t[i]) return false;

    // Log the mapping information.
    mappings[s[i]] = t[i];
    mappedTo.add(t[i]);
  }

  return true;
}
