// Problem 876: Middle of Linked List
// NOTE: Popular question.

/**
 * Constraints:
 *
 * 1) The number of nodes in the list is in the range [1, 100].
 * 2) 1 <= Node.val <= 100.
 *
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// *** First Submission ***
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
