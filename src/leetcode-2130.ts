/**
 * Problem 2130: Maximum Twin Sum of a Linked List
 *
 * Constraints:
 *  1. The number of nodes in the list is an even integer in the range [2, 10^5].
 *  2. 1 <= Node.val <= 105
 */

/** Represents a node in a singly-linked list. */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(n) time and O(n) auxiliary space.
 */
function pairSum(head: ListNode): number {
  let result = 0;
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  while (values.length > 1)
    result = Math.max(values.shift() + values.pop(), result);
  return result;
}
