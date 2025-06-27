//46. Union of Arrays with Duplicates
// Given two arrays a[] and b[], the task is to find the number of elements in the union between these two arrays.
// The Union of the two arrays can be defined as the set containing distinct elements from both arrays. If there are repetitions, then only one element occurrence should be there in the union.
class Solution {
    // Function to return the count of number of elements in the union of two arrays.
    findUnion(a, b) {
        // Create a Set to store unique elements from both arrays
        const unionSet = new Set([...a, ...b]);
        
        // Return the size of the Set, which is the count of unique elements
        return unionSet.size;
    }
}