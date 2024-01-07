/**
 * Problem 328: Odd Even Linked List
 *
 * Constraints:
 *  1. The number of nodes in the linked list is in the range [0, 10^4].
 *  2. -10^6 <= Node.val <= 10^6
 */

/** Represents a node in a singly-linked list. */
class ListNode {
  /**
   * @param {number} val
   * @param {ListNode|null} next
   */
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
/**
 * @param {ListNode|null} head
 * @return {ListNode|null}
 */
function oddEvenList(head) {
  // TODO: Transform 'head' in-place.

  return head;
}
