var containsDuplicate = function(nums) {
    let nums2 = new Set(nums)
    return nums.length != nums2.size
};
