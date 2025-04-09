package main

import (
	"fmt"
	slidingwindow "leetcode_golang/sliding_window"
)

type VowelInputProps struct {
	s string
	k int
}

type ConsecutiveOnesProps struct {
	Nums       []int
	WindowSize int
}

func main() {
	// repeating vowels
	fmt.Println("Repeating Vowels Problem")
	// test inputs
	var s1 string = "abciiidef"
	var k1 int = 3

	var s2 string = "aeiou"
	var k2 int = 2

	var s3 string = "leetcode"
	var k3 int = 3

	var vowel_test_inputs = [...]VowelInputProps{
		{s: s1, k: k1},
		{s: s2, k: k2},
		{s: s3, k: k3},
	}

	// looping through the test cases
	for index, value := range vowel_test_inputs {
		fmt.Println("Test Input: ", index)
		res, err := slidingwindow.FindRepeatingVowels(value.s, value.k)

		if err != nil {
			fmt.Println(err)
		}

		fmt.Println("Repeating Vowel Count: ", res)
	}

	// maximum consecutive ones problem
	fmt.Println("Maximum Consecutive Ones Problem")
	// test case 1 Output: 6 Explanation: [1,1,1,0,0,1,1,1,1,1,1]
	var nums_1 = [...]int{1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0}
	var window_size_1 int = 2

	// test case 2 Output: 10
	var nums_2 = [...]int{0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1}
	var window_size_2 int = 3

	var consecutive_test_inputs = [...]ConsecutiveOnesProps{
		{Nums: nums_1[:], WindowSize: window_size_1},
		{Nums: nums_2[:], WindowSize: window_size_2},
	}

	for index, value := range consecutive_test_inputs {
		res := slidingwindow.MaximumConsecutiveOnes(value.Nums, value.WindowSize)
		fmt.Println("Test Case: ", index)
		fmt.Println("Maximum Consecutive Ones: ", res)
	}
}
