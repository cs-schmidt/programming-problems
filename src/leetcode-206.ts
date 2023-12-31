/**
 * Problem 206: Reverse Linked List
 *
 * Constraints:
 *  1. The number of nodes in the list is the range [0, 5000].
 *  2. -5000 <= Node.val <= 5000
 */

/** Definition for singly-linked list. */
class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let result: ListNode | null = null;
  let node: ListNode | null = head;
  while (typeof node?.val === 'number' || node?.next) {
    result = new ListNode(node.val, result);
    node = node?.next;
  }
  return result;
}
