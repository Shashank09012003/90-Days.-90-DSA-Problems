//You are given an array arr[] of non-negative integers. Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed in place, meaning you should not use extra space for another array.

// User function Template for JavaScript

/**
 * @param {Number[]} arr
 */

class Solution {
    pushZerosToEnd(arr) {
        let index = 0; // Non-zero element ka index track karega
        
        // Non-zero elements ko shift karenge
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                [arr[index], arr[i]] = [arr[i], arr[index]];
                index++;
            }
        }
    }
}

