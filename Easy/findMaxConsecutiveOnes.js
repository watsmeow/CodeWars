var findMaxConsecutiveOnes = function(nums) {
    nums = nums.join('').split(0)
    let holder = 0
    for (let i = 0; i < nums.length; i++) {
        holder = Math.max(holder, nums[i].length)
    }
    return holder
};
