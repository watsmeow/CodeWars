var removeDuplicates = function(nums) {
    let pos = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[pos]) {
            nums[pos + 1] = nums[i]
            pos += 1
        }
    }
    return pos + 1
};
