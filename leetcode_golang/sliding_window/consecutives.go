package slidingwindow

import (
	"math"
)

/*
1004. Max Consecutive Ones III
Medium
Topics
Companies
Hint
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.


Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length

*/

func Contains(nums []int, target int) bool {
	for _, val := range nums {
		if val == target {
			return true
		}
	}
	return false
}

func MaximumConsecutiveOnes(s []int, k int) int {
	var maxOnes int = int(math.Inf(-1))
	var curr_flips int
	var subarray []int

	for i := 0; i < len(s); i++ {
		if Contains(subarray, s[i]) {
			curr_flips += 1
		}
	}

	return maxOnes
}
