// 69.Linked List Group Reverse
// Given the head a linked list, the task is to reverse every k node in the linked list. If the number of nodes is not a multiple of k then the left-out nodes in the end, should be considered as a group and must be reversed.
class Solution {
  reverseKGroup(head, k) {
    if (!head || k <= 1) return head;
    let dummy = new Node(0);
    dummy.next = head;
    let prevGroupEnd = dummy;

    while (prevGroupEnd.next) {
      let groupStart = prevGroupEnd.next;
      let groupEnd = groupStart;
      let count = 1;

      while (groupEnd.next && count < k) {
        groupEnd = groupEnd.next;
        count++;
      }
      let nextGroupStart = groupEnd.next;
      let prev = nextGroupStart;
      let current = groupStart;

      while (current !== nextGroupStart) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      prevGroupEnd.next = groupEnd;
      prevGroupEnd = groupStart;
    }

    return dummy.next;
  }
}
