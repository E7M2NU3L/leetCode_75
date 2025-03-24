// 643. Maximum Average Subarray I 

/*
Easy
Topics
Companies
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000

Constraints:

n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104
*/

export class MaximumSubarray {
    private nums : number[];
    private k : number;

    constructor (nums : number[], k : number) {
        this.nums = nums;
        this.k = k;
    }

    findMaxSubarray() {
        let queve: number[] = []; // Temporary queue to build each window
        let maxAvg: number = -Infinity; // Track the max average

        for (let i = 0; i < this.nums.length; i++) {
            queve.push(this.nums[i]); // Add current element to the queue

            // Once queue reaches size k, calculate average
            if (queve.length === this.k) {
                let sum = queve.reduce((acc, num) => acc + num, 0); // Sum of current window
                let avg = sum / this.k; // Compute average
                maxAvg = Math.max(maxAvg, avg); // Update max average
                queve.shift(); // Remove first element to slide the window
            }
        }

        return maxAvg; // Return the highest average found
    }

    findMaxAverageSlider(): number {
        let maxAvg = -Infinity; // Track max average
        let windowSum = 0; // Store the sum of the window

        // Compute the sum of the first window
        for (let i = 0; i < this.k; i++) {
            windowSum += this.nums[i];
        }

        // Initialize maxAvg with the first window average
        maxAvg = windowSum / this.k;

        // Slide the window across the array
        for (let i = this.k; i < this.nums.length; i++) {
            windowSum += this.nums[i];       // Add new element
            windowSum -= this.nums[i - this.k]; // Remove old element

            maxAvg = Math.max(maxAvg, windowSum / this.k); // Update max average
        }

        return maxAvg;
    }
}