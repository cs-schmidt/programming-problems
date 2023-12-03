/**
 * Problem 21: Merge Two Sorted Lists
 *
 * Constraints:
 *  1. The number of nodes in both lists is in the range [0, 50].
 *  2. -100 <= Node.val <= 100
 *  3. Both list1 and list2 are sorted in non-decreasing order.
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Initialize the next node in our merged list.
  let node: ListNode | null = null;

  // When either node `list1` or `list2` is null.
  if (!list1 || !list2) {
    // When `list1` isn't null.
    if (list1) return new ListNode(list1.val, list1.next);
    // When `list2` isn't null.
    if (list2) return new ListNode(list2.val, list2.next);
    // When both `list1` and `list2` are null.
    return node;
  }

  // When both node `list1` and `list2` are not null, both are of type
  // `ListNode`.
  if (list1.val <= list2.val)
    node = new ListNode(list1.val, mergeTwoLists(list1?.next, list2));
  else node = new ListNode(list2.val, mergeTwoLists(list1, list2?.next));
  return node;
}
