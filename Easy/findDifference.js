var findDifference = function(nums1, nums2) {
    nums1 = new Set(nums1);
    nums2 = new Set(nums2);
    for (const item of nums1) {
        if (nums2.has(item)) {
            nums2.delete(item)
            nums1.delete(item)
        }
    }
    let result = []
    result.push(Array.from(nums1))
    result.push(Array.from(nums2))
    return result
};
