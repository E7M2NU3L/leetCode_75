package slidingwindow

import (
	"math"
	"strings"
)

/*
1456. Maximum Number of Vowels in a Substring of Given Length

Medium
Topics
Companies
Hint
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.



Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length
*/

func FindRepeatingVowels(s string, k int) (int, error) {
	var vowels string = "aeiou"
	var vowelCount int = int(math.Inf(-1))

	curr_count := 0

	for i := 0; i < k; i++ {
		if strings.Contains(vowels, string(s[i])) {
			curr_count += 1
		}
	}
	vowelCount = curr_count

	for j := k; j < len(s); j++ {
		if strings.Contains(vowels, string(s[j-k])) {
			curr_count -= 1
		}
		if strings.Contains(vowels, string(s[j])) {
			curr_count += 1
		}

		if curr_count > vowelCount {
			vowelCount = curr_count
		}
	}

	return vowelCount, nil
}
