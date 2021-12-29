/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(i < nums.length - 1 && nums[i] == nums[i +1]){
            continue;
        }
        nums[count] = nums[i];
        count++;
    }
    return count;
};

/*

- set length of the updated array to 0
- loop through all of the elements in the array
- check if the current element is equal to the next element, if it is we skip it and continue to the next element for as long as we encounter a duplicate element
- if the elements are not duplicates, then we place the different element next to the current element we are on
- we update the array in place
- return the array without the duplicates

*/