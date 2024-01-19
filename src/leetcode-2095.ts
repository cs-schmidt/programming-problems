/**
 * Problem 2095: Delete the Middle Node of a Linked List
 *
 * Constraints:
 *  1. The number of nodes in the list is in the range [1, 10^5].
 *  2. 1 <= Node.val <= 10^5
 */

// TODO: Improve solution's time and space complexity.

/** Represents a linked list node. */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Imperative and Linearly Iterative Solution
 *
 * Complexity: O(n) time and O(1) auxiliary space.
 */
function deleteMiddle(head: ListNode): ListNode {
  const result: ListNode | null = head.next ? head : null;
  let size = 0;
  let node: ListNode = head;
  while (node?.val) {
    size += 1;
    node = node.next;
  }
  if (size) {
    let prevNode: ListNode | null = head;
    let midNode: ListNode | null = head;
    for (let i = 0; i < Math.floor(size / 2); i++) {
      prevNode = midNode;
      midNode = midNode.next;
    }
    prevNode.next = midNode.next;
  }
  return result;
}
