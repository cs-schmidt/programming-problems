// Problem 649: Dota2 Senate

// TODO: Improve solution

/**
 * Constraints
 *
 * 1) 1 <= senate.length <= 10^4
 * 2) senate[i] is either 'R' or 'D'.
 *
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
 * I believe the most optimal vote for any individual senator to vote will mean
 * that they ensure as many of their collegues will retain voting rights by the
 * end of any given round.
 */
function predictPartyVictory(senate: string): string {
  let activeP1Members = 0;
  let activeP2Members = 0;
  let p1RoundVotes = 0;
  let p2RoundVotes = 0;
  let votingMembers: Set<number> = new Set();

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] == 'R') {
      if (p2RoundVotes > 0) p2RoundVotes -= 1;
      else {
        votingMembers.add(i);
        p1RoundVotes += 1;
        activeP1Members += 1;
      }
    } else if (p1RoundVotes > 0) p1RoundVotes -= 1;
    else {
      votingMembers.add(i);
      p2RoundVotes += 1;
      activeP2Members += 1;
    }
  }

  while (
    !(activeP1Members - p2RoundVotes >= 2 * activeP2Members) &&
    !(activeP2Members - p1RoundVotes >= 2 * activeP1Members)
  ) {
    const retainedVoters: Set<number> = new Set();
    for (const member of votingMembers) {
      if (senate[member] == 'R') {
        if (p2RoundVotes > 0) p2RoundVotes -= 1;
        else {
          retainedVoters.add(member);
          p1RoundVotes += 1;
          activeP1Members += 1;
        }
      } else if (p1RoundVotes > 0) p1RoundVotes -= 1;
      else {
        retainedVoters.add(member);
        p2RoundVotes += 1;
        activeP2Members += 1;
      }
    }
    votingMembers = retainedVoters;
  }

  return activeP1Members - p2RoundVotes >= 2 * activeP2Members
    ? 'Radiant'
    : 'Dire';
}
