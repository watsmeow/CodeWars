var findDisappearedNumbers = function(nums) {
    let nums2 = []
    let setter = new Set(nums)
    for (let i = 1; i <= nums.length; i++) {
        if (!setter.has(i)) {
            nums2.push(i)
        }
    }
    return nums2
};
