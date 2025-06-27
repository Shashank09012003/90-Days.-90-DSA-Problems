// 65.Reverse a linked list
// Given the head of a linked list, the task is to reverse this list and return the reversed head.

class Solution {
    reverseList(head) {
        let prev = null;
        let current = head;
        let next = null;
        
        while (current !== null) {
            // Store next node
            next = current.next;
            
            // Reverse the link
            current.next = prev;
            
            // Move pointers forward
            prev = current;
            current = next;
        }
        
        // prev is now the new head
        return prev;
    }
}