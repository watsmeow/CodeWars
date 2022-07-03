var singleNumber = function(nums) {
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!hash.get(nums[i])) {
            hash.set(nums[i], 1)
        } else {
            hash.set(nums[i], hash.get(nums[i]) + 1)
        }
    }
    for (let [key, val] of hash) {
        if (val == 1) {
            return key
        }
    }
};
