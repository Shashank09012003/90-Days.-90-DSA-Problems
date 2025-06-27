// 52.Count Pairs whose sum is less than target
// Given an array arr[] and an integer target. You have to find the number of pairs in the array whose sum is strictly less than the target.

class Solution {
    countPairs(arr, target) {
        
        arr.sort((a, b) => a - b);
        
        let count = 0;
        let left = 0;
        let right = arr.length - 1;
        

        while (left < right) {
            if (arr[left] + arr[right] < target) {
              
                count += right - left;
                left++;
            } else {
               
                right--;
            }
        }
        
        return count;
    }
}