// 1679. Max Number of K-Sum Pairs 

/*
Medium
Topics
Companies
Hint
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109
*/

class MaxKSumPairs {
    constructor(nums, k) {
        this.nums = nums;
        this.k = k;
    }

    getKMaxSumPairs() {
        // set the pointers
        let left = 0;
        let right = this.nums.length - 1;

        // a tracking variable for steps taken
        let stepCount = 0;

        // move through the array
        while (left < right) {
            // calculate the sum of the current pair
            const sum = this.nums[left] + this.nums[right];

            // if the current sum is equal to k increment the step count
            if (sum === this.k) {
                stepCount += 1;
                --right;
                ++left;
            }
            else {
                if (sum < this.k) {
                    ++left;
                } else {
                    --right;
                }
            }
        }

        // return the total steps taken
        return stepCount;
    }
};

// test out the functionality

const nums1 = [1, 2, 3, 4];
const k1 = 5;
const maxKSumPairs1 = new MaxKSumPairs(nums1, k1).getKMaxSumPairs();
console.log(maxKSumPairs1); // expected output: 2

const nums2 = [3, 1, 3, 4, 3];
const k2 = 6;
const maxKSumPairs2 = new MaxKSumPairs(nums2, k2).getKMaxSumPairs();
console.log(maxKSumPairs2); // expected output: 1