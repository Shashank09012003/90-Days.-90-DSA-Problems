// 67.Merge two sorted linked lists
// Given the head of two sorted linked lists consisting of nodes respectively. The task is to merge both lists and return the head of the sorted merged list.

class SolutionRecursive {
    sortedMerge(head1, head2) {
        // Base cases
        if (!head1) return head2;
        if (!head2) return head1;
        
        // Recursive merge
        if (head1.data <= head2.data) {
            head1.next = this.sortedMerge(head1.next, head2);
            return head1;
        } else {
            head2.next = this.sortedMerge(head1, head2.next);
            return head2;
        }
    }
}