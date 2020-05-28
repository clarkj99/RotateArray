// Leetcode Rotate Array
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

var rotate = function(nums, k) {
  k = k % nums.length
  let ll = nums.length
  var reverseArray = function(start, end) {
    for (i = start; i < end - i + start; i++) {
      let temp = nums[i];
      nums[i] = nums[end - i + start];
      nums[end - i + start]= temp;
    }
  } 

  reverseArray(0,nums.length-1)

reverseArray(0, k-1);
reverseArray(k,nums.length-1);
return nums 
};

console.log(rotate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],16))
// console.log(9)