/**
 * Problem 439: Ternary Expression Parser
 *
 * Constraints:
 *
 *  1. 5 <= expression.length <= 10^4
 *  2. expression consists of single digits (0 through 9), 'T', 'F', '?', and
 *     ':'.
 *  3. It is guaranteed that expression is a valid ternary expression.
 */

function parseTernary(expr: string): string {
  // To solve this problem I'm implementing an iterative strategy. The idea here
  // is to keep track of the left edge (`lEdge`) and right edge (`rEdge`) of the
  // "current" ternary expression. Initially this is `expr` in its entirity, but
  // after we consider the current expressions "?" character, find the index of
  // it's matching colon ":", and evalute the boolean in the condition spot;
  // we'll restrict the `lEdge` and `rEdge` to reflect the next ternary
  // expression we have to evaluate, deeper within.
  let lEdge: number = 0;
  let rEdge: number = expr.length - 1;
  while (rEdge - lEdge + 1 >= 5) {
    // Inside this loop we know that `lEdge` and `rEdge` cover a ternary
    // expression since a ternary expression in this case is at least 5
    // characters long. Now we want to find the index `idx` where there is a
    // colon that matches the ternary expression's question mark.
    let qCount: number = 1;
    let cCount: number = 0;
    let idx: number = lEdge + 1; // initialized to the first position "?" exists.
    while (qCount > cCount) {
      idx += 1;
      if (expr[idx] === '?') qCount += 1;
      else if (expr[idx] === ':') cCount += 1;
    }

    // Now we check the value in the condition slot of the ternary expression.
    // This will help us restrict `lEdge` and `rEdge` to the next ternary
    // expression we'll evaluate in the next tick of the loop.
    if (expr[lEdge] === 'T') {
      lEdge += 2;
      rEdge = idx - 1;
    } else lEdge = idx + 1;
  }

  // At this point `lEdge` should be equal to `rEdge`, so we just return the
  // value at that index in `expr`.
  return expr[lEdge];
}
