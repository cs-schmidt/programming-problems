// Problem 649: Dota2 Senate

/**
 * Constraints
 *
 * 1) 1 <= senate.length <= 10^4
 * 2) senate[i] is either 'R' or 'D'.
 */

/**
 * The input string `senate` is composed of senators belonging to one of two
 * parties, the Radiant and the Dire, distinguished by the letters 'R' and 'D'
 * respectively. Within each round senators in `senate` in the order of first to
 * last have their votes taken. A senator can strip an opposing party members
 * vote in all subsequent rounds, or declare victory for their party when they
 * know only their party members will have voting rights in the end. Voting
 * rounds repeat until one of the two parties is victorious.It's assumed that
 * each party member will vote in such a way that serves their party best.
 *
 * I believe the most optimal vote for any individual senator to vote will
 * mean that they ensure as many of their collegues will retain voting rights by
 * the end of any given round.
 */
function predictPartyVictory(senate: string): string {
  let activeRadiants = 0;
  let activeDires = 0;

  // Conduct the first round of voting.
  let i = 0;
  let j = i + 1;
  while (i != senate.length - 1) {
    // Count the current voting member as active.
    if (senate[i] == 'R') activeRadiants += 1;
    else activeDires += 1;

    // Cast the current members vote.
    while (senate[j] == senate[i]) {
      if (senate[i] == 'R') activeRadiants += 1;
      else activeDires += 1;
      j += 1;
    }
    // Strip the opposing member from `senate`.
    senate = senate.substring(0, j) + senate.substring(j + 1);

    // Go to the next member in `senate` that will vote.
    i += 1;
    console.log(`${senate} ${i} ${j}`);
  }
  console.log(senate);

  // Were at the last voting member in `senate` which is the last element in
  // `senate` because of our deletion. So we prepare to take their vote.
  j = 0;
  while (senate[j] == senate[i]) {
    if (senate[i] == 'R') activeRadiants += 1;
    else activeDires += 1;
    j += 1;
  }
  // Strip the opposing member from `senate`.
  senate = senate.substring(0, j) + senate.substring(j + 1);
  // Go to the next member in `senate` that will vote.
  i = 0;
  console.log(senate);

  return senate;
}
