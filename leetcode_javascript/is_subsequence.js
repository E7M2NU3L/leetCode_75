// 392. Is Subsequence

/*
Easy
Topics
Companies
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
*/

class IsSubsequence {
    constructor(s, t) {
        this.t = t;
        this.s = s;
    }

    checkSubsequence() {
        // initialize the left side or start pointer
        let left = 0;

        // initialize the for loop to get each entries
        for (let right = 0; right < this.t.length; right++) {
            // if current character of s is equal to current character of t
            if (this.t[right] == this.s[left]) {
                // increment the s pointer
                ++left;
            }
        };

        // return true if all characters of s have been found in t
        return left === this.s.length;
    }
}

// Test the function
const isSubsequence1 = new IsSubsequence("abc", "ahbgdc");
console.log(isSubsequence1.checkSubsequence()); // Output: true

const isSubsequence2 = new IsSubsequence("axc", "ahbgdc");
console.log(isSubsequence2.checkSubsequence()); // Output: false