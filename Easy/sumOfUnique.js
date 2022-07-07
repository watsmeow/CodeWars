var sumOfUnique = function(nums) {
    let hash = new Map();
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        if (!hash.get(nums[i])) {
            hash.set(nums[i], 1)
        } else {
            hash.set(nums[i], hash.get(nums[i]) + 1)
        }
    }
    for (const [key, value] of hash) {
        if (value == 1) {
            total += key
        }
    }
    return total
};
