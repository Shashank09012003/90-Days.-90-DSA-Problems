// 73.Remove loop in Linked List
// Given the head of a linked list that may contain a loop.  A loop means that the last node of the linked list is connected back to a node in the same list. The task is to remove the loop from the linked list (if it exists).

class Solution {
  removeLoop(head) {
    if (!head || !head.next) return;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) break;
    }
    if (!fast || !fast.next) return true;

    slow = head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
    let start = slow;
    let current = start;
    while (current.next !== start) {
      current = current.next;
    }
    current.next = null;
  }
}
