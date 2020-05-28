// Leetcode Rotate Array
//
var rotate = function(nums, k) {
  let temp;
  let offset = 0 
  let ll = nums.length
  if (k > 0 ){
    for (let i=0;i < ll-1;i++){
      if (i >= (parseInt(ll/k)*k)) {
        k= k-(ll%k)
      }
      let temp = nums[i]
      j = nums.length - k + offset
      nums[i] = nums[j]
      nums[j]=temp 
      console.log(nums,i,j,k)
      offset = offset ===  k-1 ? 0: offset+1
    }
  }
   return nums 
};

console.log(rotate([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],10))
// console.log(9)