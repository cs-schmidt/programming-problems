/**
 * Problem 876: Middle of Linked List
 *
 * Constraints:
 * 1. The number of nodes in the list is in the range [1, 100].
 * 2. 1 <= Node.val <= 100.
 */

// TODO: Improve solution's time and space complexity.
// TODO: Improve code cleanliness.

/** Represents a singly-linked list node. */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = val === undefined ? null : next;
  }
}

/**
 * Imperative and Iterative Solution
 *
 * Complexity: <time> time and <space> auxiliary space.
 */
function middleNode(head: ListNode | null): ListNode | null {
  // We start by initializing key variables. Here `mNode` and `mIndex` are used
  // to track the current middle node and middle index respectively. Variables
  // `endNode` and `endIndex` are our means to look ahead in the linked list
  // and calculate the next middle node.
  let mNode: ListNode | null = head;
  let endNode: ListNode | null = head;
  let mIndex = 0;
  let endIndex = 0;
  // We continue finding the next middle and updating `mNode` while there's
  // another element in the linked list.
  while (endNode?.next) {
    endNode = endNode.next;
    endIndex += 1;
    // Move `mNode` to the next middle index.
    while (mIndex < Math.ceil(endIndex / 2)) {
      mNode = mNode.next;
      mIndex += 1;
    }
  }
  return mNode;
}
