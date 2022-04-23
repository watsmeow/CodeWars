function solution(nums){
    if (nums == null || nums.length == 0) {
        return []
    } else if (nums.length > 0) {
        return nums.sort((a, b) => a - b)
    } 
}
