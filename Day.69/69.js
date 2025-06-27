// 69.Add Number Linked Lists
// Given the head of two singly linked lists num1 and num2 representing two non-negative integers. The task is to return the head of the linked list representing the sum of these two numbers.

// For example, num1 represented by the linked list : 1 -> 9 -> 0, similarly num2 represented by the linked list: 2 -> 5. Sum of these two numbers is represented by 2 -> 1 -> 5.

// Note: There can be leading zeros in the input lists, but there should not be any leading zeros in the output list.

class Solution {
  addTwoLists(num1, num2) {
    while (num1 && num1.next && num1.data === 0) {
      num1 = num1.next;
    }
    while (num2 && num2.next && num2.data === 0) {
      num2 = num2.next;
    }

    let rev1 = this.reverseList(num1);
    let rev2 = this.reverseList(num2);

    let dummy = new Node(0);
    let current = dummy;
    let carry = 0;

    while (rev1 || rev2 || carry) {
      let sum = carry;

      if (rev1) {
        sum += rev1.data;
        rev1 = rev1.next;
      }

      if (rev2) {
        sum += rev2.data;
        rev2 = rev2.next;
      }

      carry = Math.floor(sum / 10);
      current.next = new Node(sum % 10);
      current = current.next;
    }

    let result = this.reverseList(dummy.next);

    while (result && result.next && result.data === 0) {
      result = result.next;
    }

    return result;
  }

  reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }
}
