var numIdenticalPairs = function(nums) {
    let hash = new Map();
    let pairs = 0
    for (let i = 0; i < nums.length; i++) {
        if (!hash.get(nums[i])) {
            hash.set(nums[i], 1)
        } else {
            pairs += hash.get(nums[i])
            hash.set(nums[i], hash.get(nums[i]) +1)
        }
    }
    return pairs
};
