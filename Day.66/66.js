// 66.Rotate a Linked List
// Given the head of a singly linked list, your task is to left rotate the linked list k times.
class Solution {
  rotate(head, k) {
    if (!head || !head.next || k === 0) {
      return head;
    }

    let current = head;
    let length = 1;

    while (current.next) {
      current = current.next;
      length++;
    }

    current.next = head;

    k = k % length;

    if (k === 0) {
      current.next = null;
      return head;
    }

    let newTail = head;
    for (let i = 1; i < k; i++) {
      newTail = newTail.next;
    }

    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
  }
}
