var targetIndices = function(nums, target) {
    let lesser = []
    let count = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            lesser.push(nums[i])
        } else if (nums[i] == target) {
            count.push(nums[i])
        }
    }
    let arr = lesser.concat(count)
    let answer = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            answer.push(i)
        }
    }
    return answer
};
