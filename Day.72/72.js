// 72.Find the first node of loop in linked list
// Given a head of the singly linked list. If a loop is present in the list then return the first node of the loop else return NULL.
// Custom Input format:
// A head of a singly linked list and a pos (1-based index) which denotes the position of the node to which the last node points to. If pos = 0, it means the last node points to null, indicating there is no loop.

class Solution {
  findFirstNode(head) {
    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) break;
    }
    if (!fast || !fast.next) return null;

    slow = head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }
}
