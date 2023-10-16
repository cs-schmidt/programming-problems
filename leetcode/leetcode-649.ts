// Problem 649: Dota2 Senate

// TODO: Complete this problem.

/**
 * Constraints
 *
 * 1) 1 <= senate.length <= 10^4
 * 2) senate[i] is either 'R' or 'D'.
 *
 */

// Here the string `senate` is composed of senators belonging to one of two
// parties, distinguished by a value of 'R' or 'D'. Furthermore, the order in
// which they appear in `senate` represents the order in which votes will be
// taken within each round. Within each round a senator, assuming their voting
// rights haven't been stripped, may vote to strip an opposing party members
// rights in `senate` or they can declare victory once they know only members of
// their party still have voting rights in the end. Voting rounds are repeated
// until one party is the victor.
//
// It's assumed that when arriving at a party member in senate, if their voting
// rights remain, will vote in the optimal way to ensure their parties victory.
// I believe the most optimal vote from an individual senators perspective will
// be that which ensures as many of their collegues will retain voting rights in
// any given round.
// function predictPartyVictory(senate: string): string {

// };
