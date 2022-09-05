var findLengthOfLCIS = function(nums) {
    let count = 1
    let arr = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i -1]) {
            count += 1
        } else {
            arr.push(count)
            count = 1
        }
    }
    arr.push(count)
    let holder = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > holder) {
            holder = arr[i]
        }
    }
    return holder
};
