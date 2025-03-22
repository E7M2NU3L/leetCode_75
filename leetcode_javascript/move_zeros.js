// Move Zeros problem

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

class MoveZero {
    constructor (nums) {
        this.nums = nums
    }

    performMoveZerosApproach1() {
        // approach is two pointer algorithm

        // create index points for start and end pointers
        let start = 0;
        let end  = this.nums.length - 1;

        // loop through the nums array
        while (start < end) {
            
            // if the current point is zero move the element to the end of the array
            if (this.nums[start] === 0) {
                // swap the element to the last
                let temp = this.nums[end];
                this.nums[end] = this.nums[start]
                this.nums[start] = temp;

                // decrement the end pointer
                --end;
            }
            else {
                // check if the element in the start pointer is greater than the end pointer and swap the elements
                if (this.nums[start] > this.nums[end]) {
                    // swap elements
                    let temp = this.nums[start];
                    this.nums[start] = this.nums[end];
                    this.nums[end] = temp;

                    // increment the start pointer
                    ++start;
                }
                else if (start === end) {
                    // set the start pointer to be zero again
                    start = 0;

                    // decrement the end pointer
                    --end;
                }
                else {
                    // if the end pointer is greater than the start pointer, increment the start pointer
                    ++start; 
                }
            }
        }

        return this.nums;
    }

    performMoveZerosApproach2() {
        let start = 0;

        // Move non-zero elements forward
        for (let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] !== 0) {
                [this.nums[start], this.nums[i]] = [this.nums[i], this.nums[start]];
                start++;
            }
        }

        // return the corrected nums
        return this.nums;
    }
};

// Test the MoveZero class
const nums1 = new MoveZero([0,1,0,3,12]);
console.log(nums1.performMoveZerosApproach2()); // Output: [1, 3, 12, 0, 0]

const nums2 = new MoveZero([0]);
console.log(nums2.performMoveZerosApproach2()); // Output: [0]