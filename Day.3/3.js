// Question 3 :-You are given an array of integers arr[]. Your task is to reverse the given array.
// Note: Modify the array in place.

class Solution {
    // Function to reverse the array.
    reverseArray(arr) {
        let left = 0;
        let right = arr.length - 1;
        
        while (left < right) {
            // Swap elements at left and right indices
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            
            // Move indices toward the center
            left++;
            right--;
        }
        
        return arr;
    }
}