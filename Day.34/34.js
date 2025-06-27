//34. Allocate Minimum Pages
// You are given an array arr[] of integers, where each element arr[i] represents the number of pages in the ith book. You also have an integer k representing the number of students. The task is to allocate books to each student such that:

// Each student receives atleast one book.
// Each student is assigned a contiguous sequence of books.
// No book is assigned to more than one student.
// The objective is to minimize the maximum number of pages assigned to any student. In other words, out of all possible allocations, find the arrangement where the student who receives the most pages still has the smallest possible maximum.

// Note: Return -1 if a valid assignment is not possible, and allotment should be in contiguous order (see the explanation for better understanding).

class Solution {
  findPages(arr, k) {
    const n = arr.length;

    if (n < k) {
      return -1;
    }

    let sum = 0;
    let max = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[i];
      max = Math.max(max, arr[i]);
    }

    let left = max;
    let right = sum;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (this.isPossible(arr, n, k, mid)) {
        result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return result;
  }

  isPossible(arr, n, k, maxPages) {
    let students = 1;
    let currentPages = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] > maxPages) {
        return false;
      }

      if (currentPages + arr[i] > maxPages) {
        students++;
        currentPages = arr[i];

        if (students > k) {
          return false;
        }
      } else {
        currentPages += arr[i];
      }
    }

    return true;
  }
}
