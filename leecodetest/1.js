// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
// 你可以按任意顺序返回答案。
var twoSum = function(nums, target) {
    // console.log(nums[0]);
    for(var i = 0; i < nums.length-1; i++){
        // console.log(nums[0]);
        for(var j = i+1; j < nums.length; j++){
            // console.log(j);
            if(nums[i] + nums[j] == target){
                return [nums[i],nums[j]];
                // var n1 = nums[i], n2 = nums[j];
                // return [n1,n2];
            }
        }
    }
};
var nums = [2,7,11,15];
var target = 9;
// console.log(nums.length);console.log(nums[0]);
console.log(twoSum(nums,target));
// for(let i = 0;i < 5; i++){
//     console.log(i);
// }