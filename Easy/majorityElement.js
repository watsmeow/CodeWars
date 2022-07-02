var majorityElement = function(nums) {
    const hashmap = new Map();
    const n = nums.length / 2;
    for (let i = 0; i < nums.length; i++) {
        if (!hashmap.get(nums[i])) {
            hashmap.set(arr[i], 1)
        } else {
            hashmap.set(arr[i], hashmap.get(arr[i]) + 1)
        }
        if (n < hashmap.get(nums[i])) {
            return nums[i]
        }
    }

};
