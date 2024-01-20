/**
 * Problem 2: Add Two Numbers
 *
 * Constraints:
 *  1. The number of nodes in each linked list is in the range [1, 100].
 *  2. 0 <= Node.val <= 9
 *  3. It is guaranteed that the list represents a number that does not have
 *     leading zeros.
 */

// TODO: Improve solution's time and space complexity.
// TODO: Improve code cleanliness.

/** Represents a node in a singly-linked list. */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

/**
 * Imperative and Iterative Solution
 *
 * Complexity: O(max(|l1|,|l2|)) time and auxiliary space.
 */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const result: ListNode | null = new ListNode();
  let currentNode: ListNode | null = result;
  let currentL1Node: ListNode | null = l1;
  let currentL2Node: ListNode | null = l2;
  let carryValue = 0;
  let digitSum = 0;
  while (currentL1Node && currentL2Node) {
    digitSum = currentL1Node.val + currentL2Node.val + carryValue;
    carryValue = Math.floor(digitSum / 10);
    currentNode.next = new ListNode(digitSum % 10);
    currentNode = currentNode.next;
    currentL1Node = currentL1Node.next;
    currentL2Node = currentL2Node.next;
  }
  while (currentL1Node) {
    digitSum = currentL1Node.val + carryValue;
    carryValue = Math.floor(digitSum / 10);
    currentNode.next = new ListNode(digitSum % 10);
    currentNode = currentNode.next;
    currentL1Node = currentL1Node.next;
  }
  while (currentL2Node) {
    digitSum = currentL2Node.val + carryValue;
    carryValue = Math.floor(digitSum / 10);
    currentNode.next = new ListNode(digitSum % 10);
    currentNode = currentNode.next;
    currentL2Node = currentL2Node.next;
  }
  if (carryValue !== 0) currentNode.next = new ListNode(carryValue);
  return result.next;
}
