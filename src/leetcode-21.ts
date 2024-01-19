/**
 * Problem 21: Merge Two Sorted Lists
 *
 * Constraints:
 *  1. The number of nodes in both lists is in the range [0, 50].
 *  2. -100 <= Node.val <= 100
 *  3. Both list1 and list2 are sorted in non-decreasing order.
 */

// TODO: Improve solution's space complexity.

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
 * Imperative and Linear Recursive Solution
 *
 * Complexity: O(n) time and auxiliary space.
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 || !list2) {
    if (list1) return new ListNode(list1.val, list1.next);
    if (list2) return new ListNode(list2.val, list2.next);
    return null;
  }
  if (list1.val <= list2.val)
    return new ListNode(list1.val, mergeTwoLists(list1?.next, list2));
  return new ListNode(list2.val, mergeTwoLists(list1, list2?.next));
}
