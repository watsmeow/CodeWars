var runningSum = function(nums) {
    let total = []
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            total.push(nums[i])
        } else {
            total.push(nums[i] + total[i -1]) 
        }
    }
    return total
};
