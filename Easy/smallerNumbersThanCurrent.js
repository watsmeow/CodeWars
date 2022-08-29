var smallerNumbersThanCurrent = function(nums) {
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!hash.get(nums[i])) {
            hash.set(nums[i], 1)
        } else {
            hash.set(nums[i], hash.get(nums[i]) + 1)
        }
    }
    let answer = []
    for (let i = 0; i < nums.length; i++) {
        let digit = 0
        for (const [key, value] of hash) {
            if (key < nums[i]) {
                digit += value
            }
        }
        answer.push(digit)
    }
    return answer
};
