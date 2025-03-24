import { MaximumSubarray } from "./codes/maximum_sub_array";

console.log("Hello world!");

let nums = [1,12,-5,-6,50,3];
let k = 4;
let maxSubarray = new MaximumSubarray(nums, k);
let windows = maxSubarray.findMaxSubarray();

console.log("Maximum subarray sum within window size", k, "is:", windows);