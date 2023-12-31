/**
 * Problem 142: Linked List Cycle II
 *
 * Constraints:
 *  1. Don't modify the linked list passed.
 *  2. The number of the nodes in the list is in the range [0, 10^4].
 *  3. -10^5 <= Node.val <= 10^5.
 *  4. pos is -1 or a valid index in the linked-list.
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

function detectCycle(head: ListNode | null): ListNode | null {
  // Initialize variables `node` and `nodes`. The former represents the current
  // node we are looking at in the linked list, and the latter is a set of nodes
  // we've already encountered.
  let node: ListNode | null = head;
  const nodes: Set<ListNode | null> = new Set();

  // While `node` is not an empty value and `nodes` doesn't already have `node`,
  // we add `node` to `nodes` and set `node` to the next element in the linked
  // list.
  while (node && !nodes.has(node)) {
    nodes.add(node);
    node = node?.next;
  }

  // At this point the while loop above broke because either `node` was an
  // empty value or `nodes` already contained `node`. If the former is true,
  // then we reached the end of the list so there is no cycle node. And, if the
  // latter is true, then we found the cycle node and we return it.
  return node || null;
}
