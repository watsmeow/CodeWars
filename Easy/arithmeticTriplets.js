var arithmeticTriplets = function(nums, diff) {
    let counter = 0
    let setter = new Set(nums);
    for (let i = 0; i < nums.length; i++) {
        if (setter.has(nums[i] + diff) && setter.has(nums[i] + (diff*2))) {
            counter += 1
        }
    }
    return counter
};
