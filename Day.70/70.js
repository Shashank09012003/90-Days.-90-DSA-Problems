// 70.Clone List with Next and Random
// You are given a special linked list with n nodes where each node has two pointers a next pointer that points to the next node of the singly linked list, and a random pointer that points to the random node of the linked list.
class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
    this.random = null;
  }
}

class Solution {
  cloneLinkedList(head) {
    if (!head) return null;
    let map = new Map();

    let curr = head;
    while (curr) {
      map.set(curr, new Node(curr.data));
      curr = curr.next;
    }
    curr = head;
    while (curr) {
      let clonedNode = map.get(curr);
      if (curr.next) {
        clonedNode.next = map.get(curr.next);
      }
      if (curr.random) {
        clonedNode.random = map.get(curr.random);
      }
      curr = curr.next;
    }
    return map.get(head);
  }
}
