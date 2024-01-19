/**
 * Problem 142: Linked List Cycle II
 *
 * Constraints:
 *  1. Don't modify the linked list passed.
 *  2. The number of the nodes in the list is in the range [0, 10^4].
 *  3. -10^5 <= Node.val <= 10^5.
 *  4. pos is -1 or a valid index in the linked-list.
 */

// TODO: Complete this problem's "follow up" portion.

/** Definition for singly-linked list. */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(nodes) time and auxiliary space.
 */
function detectCycle(head: ListNode | null): ListNode | null {
  let node: ListNode | null = head;
  const nodes: Set<ListNode | null> = new Set();
  while (node && !nodes.has(node)) {
    nodes.add(node);
    node = node?.next;
  }
  return node || null;
}
