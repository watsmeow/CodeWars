var maxSubsequence = function(nums, k) {
    function findmin(arr) {
        let holder = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < arr[holder]) {
                holder = i
            }
        }
        return holder
    }
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (result.length < k) {
            result.push(nums[i])
        } else {
            if (nums[i] > result[findmin(result)]) {
                result.splice(findmin(result), 1)
                result.push(nums[i])
            }
        }
    }
    return result
};
